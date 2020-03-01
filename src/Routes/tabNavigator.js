import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StackNavigator from './stackNavigator';

import Profile from '~/pages/Profile/index';

const Tabs = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#7D40E7',
        inactiveTintColor: '#999999',
      }}
    >
      <Tabs.Screen
        name="Deliveries"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="reorder" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
