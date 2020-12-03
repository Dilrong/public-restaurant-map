import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';
import { AdMobBanner } from 'expo-ads-admob';

const RootNavigator = () => (
    <NavigationContainer>
        <AppNavigator/>
        <AdMobBanner bannerSize="fullBanner" adUnitID="ca-app-pub-5210543205621832/3516624320" onDidFailToReceiveAdWithError={this.bannerError} />
    </NavigationContainer>
)

export default RootNavigator