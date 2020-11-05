import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import HomeStack from './homeStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: {
          backgroundColor: '#eeeeee',
          elevation: 0,
          borderTopColor: 'transparent',
        },
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Settings"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign name="setting" color={focused ? '#333333' : '#999999'} size={26} />
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign name="plus" color={focused ? '#333333' : '#999999'} size={26} />
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign name="barschart" color={focused ? '#333333' : '#999999'} size={26} />
          ),
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
}
