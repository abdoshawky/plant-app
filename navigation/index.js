import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Browse from '../screens/Browse';
import ForgotPassword from '../screens/ForgotPassword';

// import Explore from '../screens/Explore';
// import settings from '../screens/settings';
// import Product from '../screens/Product';

import { theme } from '../constants';

const Stack = createStackNavigator();
const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="float">
                <Stack.Screen 
                    name="welcome" 
                    component={Welcome}
                    options={{
                        headerShown: false
                    }} 
                />
                <Stack.Screen 
                    name="login" 
                    component={Login}
                    options={{
                        headerStyle: {
                            elevation: 0,
                            height: theme.sizes.base * 4,
                            borderBottomColor: 'transparent'
                        },
                        headerBackImage: () => {return <Image source={require('../assets/icons/back.png')} />},
                        headerBackTitle: null,
                        title: null,
                        headerLeftContainerStyle: {
                            alignItems: 'center',
                            marginLeft: theme.sizes.base * 2,
                            marginTop: theme.sizes.base,
                            paddingRight: theme.sizes.base * 2
                        },
                        headerRightContainerStyle: {
                            alignItems: 'center',
                            paddingRight: theme.sizes.base
                        }
                    }} 
                />
                <Stack.Screen 
                    name="signup" 
                    component={Signup} 
                    options={{
                        headerShown: false
                    }} 
                />
                <Stack.Screen 
                    name="forgot_password" 
                    component={ForgotPassword} 
                    options={{
                        headerShown: false
                    }} 
                />

                <Stack.Screen 
                    name="browse" 
                    component={Browse} 
                    options={{
                        headerShown: false
                    }} 
                />
                
                {/* 
                <Stack.Screen name="Explore" component={Explore} />
                <Stack.Screen name="settings" component={settings} />
                <Stack.Screen name="Product" component={Product} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;