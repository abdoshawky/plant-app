import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

// import Browse from '../screens/Browse';
// import Explore from '../screens/Explore';
// import settings from '../screens/settings';
// import Product from '../screens/Product';

import { theme } from '../constants';

const Stack = createStackNavigator();
const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="welcome" component={Welcome} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="signup" component={Signup} />

                {/* <Stack.Screen name="Browse" component={Browse} />
                <Stack.Screen name="Explore" component={Explore} />
                <Stack.Screen name="settings" component={settings} />
                <Stack.Screen name="Product" component={Product} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;