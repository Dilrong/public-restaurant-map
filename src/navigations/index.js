import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';
import { AdMobBanner } from 'expo-ads-admob';

const RootNavigator = () => (
    <NavigationContainer>
        <AppNavigator/>
        <AdMobBanner bannerSize="fullBanner" adUnitID="ca-app-pub-3940256099942544/6300978111" servePersonalizedAds onDidFailToReceiveAdWithError={this.bannerError} />
    </NavigationContainer>
)

export default RootNavigator