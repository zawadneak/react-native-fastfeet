import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Deliveries from '~/pages/Deliveries/index';
import Information from '~/pages/DeliveryStack/Information/index';
import CreateProblem from '~/pages/DeliveryStack/CreateProblem/index';
import ListProblems from '~/pages/DeliveryStack/ListProblems/index';
import ConfirmDelivery from '~/pages/DeliveryStack/ConfirmDelivery/index';

const Stacks = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stacks.Navigator
      screenOptions={{
        headerBackTitleStyle: null,
        headerBackImage: () => {
          return <Icon name="chevron-left" color="#fff" size={25} />;
        },
        headerTransparent: true,
        headerTitleStyle: {
          color: '#fff',
          fontSize: 18,
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        resetOnBlur: true,
      }}
    >
      <Stacks.Screen
        name="Deliveries"
        component={Deliveries}
        options={{
          headerShown: false,
        }}
      />
      <Stacks.Screen
        name="Information"
        component={Information}
        options={{
          headerTitle: 'Delivery Information',
          headerLayoutPreset: 'center',
        }}
      />
      <Stacks.Screen
        name="Inform"
        component={CreateProblem}
        options={{
          headerTitle: 'Inform problem',
          headerLayoutPreset: 'center',
        }}
      />
      <Stacks.Screen
        name="List"
        component={ListProblems}
        options={{
          headerTitle: 'Problems list',
          headerLayoutPreset: 'center',
        }}
      />
      <Stacks.Screen
        name="Confirm"
        component={ConfirmDelivery}
        options={{
          headerTitle: 'Confirm delivery',
          headerLayoutPreset: 'center',
        }}
      />
    </Stacks.Navigator>
  );
}
