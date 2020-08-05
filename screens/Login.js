import React, { Component } from 'react';
import { Keyboard, StyleSheet, ActivityIndicator } from 'react-native';
import { Block, Text, Input, Button } from '../components';
import { theme } from '../constants';

class Login extends Component{
    state = {
        email: 'abdoshawky21@gmail.com',
        password: 'password',
        errors: [],
        loading: false
    }

    handleLogin(){
        const { navigation } = this.props;
        const { email, password } = this.state;
        const errors = [];

        this.setState({ loading: true });
        

        if(email != 'abdoshawky21@gmail.com' || password != 'password'){
            errors.push('credentials');
        }

        if(errors.length){
            this.setState({ errors, loading: false });
        }else{
            Keyboard.dismiss();
            this.setState({ loading: false });
            navigation.navigate('browse');
        }
    }

    render(){
        const { navigation } = this.props;
        const { loading, errors } = this.state;
        const hasErrors = key => errors.includes(key) ? styles.hasErrors : null; 
        return(
            <Block 
                padding={theme.sizes.base * 2}
                style={{ backgroundColor: 'white' }}
            >
                <Text h1 bold>Login</Text>
                <Block middle>
                    <Input 
                        label="Email"
                        error={hasErrors('credentials')}
                        style={[styles.input, hasErrors('credentials')]}
                        defaultValue={this.state.email}
                        onChangeText={text => this.setState({email: text})}
                    />
                    
                    <Input 
                        secure
                        label="Password"
                        error={hasErrors('credentials')}
                        style={[styles.input, hasErrors('credentials')]}
                        defaultValue={this.state.password}
                        onChangeText={text => this.setState({password: text})}
                    />

                    <Button gradient onPress={() => this.handleLogin()}>
                        {loading ? <ActivityIndicator size="small" color="white" /> : <Text center bold white>Login</Text>}
                    </Button>

                    <Button onPress={() => navigation.navigate('forgot_password')}>
                        <Text center gray caption style={{ textDecorationLine: 'underline' }}>Forgot your password ?</Text>
                    </Button>
                </Block>
            </Block>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    input: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    hasErrors: {
        borderBottomColor: theme.colors.accent
    }
});