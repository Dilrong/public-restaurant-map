import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from './list';
import DetailScreen from './detail';

const MapStack = createStackNavigator();

const MapStackScreen = ({navigation}) => (
    <MapStack.Navigator>
        <MapStack.Screen name="list" component={ListScreen} options={{headerShown:false}}/>
        <MapStack.Screen name="detail" component={DetailScreen} options={{
            headerTitle: '상세보기'
        }}/>
    </MapStack.Navigator>
)

export default MapStackScreen;