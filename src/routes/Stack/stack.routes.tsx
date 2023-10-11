import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../../screens/Home'
import { About } from '../../screens/About'

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes(){
    return(
        <Navigator initialRouteName='Home'>
            <Screen
            name='home'
            component={Home}
            options={{headerShown: false}}
            />
        </Navigator>
    )
}