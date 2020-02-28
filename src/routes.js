import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '~/pages/Login/index';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false, headerMode: 'screen' }}
      />
    </Stack.Navigator>
  );
}
