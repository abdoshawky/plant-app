import React, { Component } from 'react';
import { FlatList, Image, Dimensions, StyleSheet, Animated, Modal, ScrollView, View } from 'react-native';
import { Button, Block, Text } from '../components';
import { theme } from '../constants';

const { width, height } = Dimensions.get('window');

class Welcome extends Component {

    state = {
        showTerms: false
    }

    illustrations = [
        {id: 1, source: require('../assets/images/illustration_1.png')},
        {id: 2, source: require('../assets/images/illustration_2.png')},
        {id: 3, source: require('../assets/images/illustration_3.png')},
    ];

    scrollX = new Animated.Value(0);

    renderIllustrations() {
        
        return (
            <FlatList
                horizontal
                pagingEnabled
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                snapToAlignment="center"
                data={this.illustrations}
                extraData={this.state}
                keyExtractor={(item, index) => `${item.id}`}
                renderItem={({ item }) => {
                    return (
                        <Image
                            source={item.source}
                            style={{ overflow: 'visible', width, height: height / 2 }}
                        />
                    );
                }}
                onScroll={
                    Animated.event([
                        {
                            nativeEvent: { contentOffset: { x: this.scrollX } }
                        }
                    ], {
                        useNativeDriver: false
                    })
                }
            />
        );
    }

    renderSteps(){
        const stepPosition = Animated.divide(this.scrollX, width);
        return (
            <Block row center middle style={styles.stepsContainer}>
                {this.illustrations.map((item, index) => {
                    const opacity = stepPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.4, 1, 0.4],
                        extrapolate: 'clamp'
                    });
                    return (
                        <Block
                            animated
                            color="gray"
                            flex={false}
                            key={`step-${index}`}
                            style={[styles.steps, { opacity }]}
                        />
                    );
                })}
            </Block>
        );
    }

    renderTermsService(){
        return (
            <Modal animationType="slide" visible={this.state.showTerms}>
                <Block space="between" padding={[theme.sizes.padding * 2, theme.sizes.padding]}>
                    <Text h2 light>Terms of service</Text>
                    <View style={{ paddingVertical: theme.sizes.padding }}>
                        <ScrollView>
                            <Text caption gray height={18}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>
                            <Text caption gray height={18}>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </Text>
                            <Text caption gray height={18}>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            </Text>
                            <Text caption gray height={18}>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            </Text>
                            <Button gradient onPress={() => this.setState({ showTerms: false })} style={{ marginTop: theme.sizes.padding }}>
                                <Text center white>I understand</Text>
                            </Button>
                        </ScrollView>
                        
                    </View>
                    
                </Block>
            </Modal>
        );
    }

    render(){
        const { navigation } = this.props;
        return (
            <Block style={{ backgroundColor: 'white' }}>
                <Block center middle flex={0.5}>
                    <Text h1 center bold>
                        Your Home. <Text h1 primary>Greener.</Text>
                    </Text>
                    <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}>Enjoy the experience.</Text>
                </Block>
                <Block center middle>
                    {this.renderIllustrations()}
                    {this.renderSteps()}
                </Block>
                <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
                    <Button gradient onPress={() => navigation.navigate('login')}>
                        <Text center semibold white>Login</Text>
                    </Button>

                    <Button shadow onPress={() => navigation.navigate('signup')}>
                        <Text center semibold>Signup</Text>
                    </Button>

                    <Button onPress={() => this.setState({ showTerms: true })}>
                        <Text center semibold gray>Terms of service</Text>
                    </Button>
                </Block>
                {this.renderTermsService()}
            </Block>
        );
    }
}

Welcome.defaultProps = {
    illustrations: [
        {id: 1, source: require('../assets/images/illustration_1.png')},
        {id: 2, source: require('../assets/images/illustration_2.png')},
        {id: 3, source: require('../assets/images/illustration_3.png')},
    ]
};

export default Welcome;

const styles = StyleSheet.create({
    stepsContainer: {
        position: 'absolute',
        bottom: theme.sizes.base * 3,
        left: 0,
        right: 0
    },
    steps: {
        width: 5,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 2.5
    }
});