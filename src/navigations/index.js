import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';

const RootNavigator = () => (
    <NavigationContainer>
        <AppNavigator/>
    </NavigationContainer>
)

export default RootNavigator