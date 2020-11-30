import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { PRIMARY } from '../styles/colors'

import HomeScreen from '../scenes/home';
import MapScreen from '../scenes/map';
import CategoryScreen from '../scenes/category';
import MoreScreen from '../scenes/more';


const Tab = createBottomTabNavigator()

const AppNavigator = () => (
    <Tab.Navigator 
        tabBarOptions={{
            activeTintColor: PRIMARY,
        }}
    >
        <Tab.Screen
            name="home"
            component={HomeScreen}
            options={{
                tabBarLabel: '홈',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="home" color={color} size={26}/>
                )
            }}
        />
        <Tab.Screen
            name="category"
            component={CategoryScreen}
            options={{
                tabBarLabel: '카테고리',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="list" color={color} size={26}/>
                )
            }}
        />
        <Tab.Screen
            name="map"
            component={MapScreen}
            options={{
                tabBarLabel: '지도',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="map-marker" color={color} size={26}/>
                )
            }}
        />
        <Tab.Screen
            name="more"
            component={MoreScreen}
            options={{
                tabBarLabel: '더보기',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="more-horiz" color={color} size={26}/>
                )
            }}
        />
    </Tab.Navigator>
)

export default AppNavigator;