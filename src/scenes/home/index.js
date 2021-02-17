import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from './list';
import DetailScreen from './detail';

const FeedStack = createStackNavigator();

const FeedStackScreen = ({navigation}) => (
    <FeedStack.Navigator>
        <FeedStack.Screen name="list" component={ListScreen} options={{headerShown:false}}/>
        <FeedStack.Screen name="detail" component={DetailScreen} options={{
            headerTitle: '상세'
        }}/>
    </FeedStack.Navigator>
)

export default FeedStackScreen;