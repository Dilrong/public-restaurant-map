import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from './list';

const CategoryStack = createStackNavigator();

const CategoryStackScreen = ({navigation}) => (
    <CategoryStack.Navigator>
        <CategoryStack.Screen name="list" component={ListScreen} options={{headerShown:false}}/>
    </CategoryStack.Navigator>
)

export default CategoryStackScreen;