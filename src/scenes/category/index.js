import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from './list';
import DetailScreen from './detail';

const CategoryStack = createStackNavigator();

const CategoryStackScreen = ({navigation}) => (
    <CategoryStack.Navigator>
        <CategoryStack.Screen name="list" component={ListScreen} options={{headerShown:false}}/>
        <CategoryStack.Screen name="detail" component={DetailScreen} options={{
            headerTitle: '상세'
        }}/>
    </CategoryStack.Navigator>
)

export default CategoryStackScreen;