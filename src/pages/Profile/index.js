import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native';

// import { Container } from './styles';

export default function Profile({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      tabBarIcon: ({ color, size }) => (
        <Icon name="person" size={size} color={color} />
      ),
    });
  }, [navigation]);

  return <View />;
}
