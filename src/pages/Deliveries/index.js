import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function Deliveries({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      tabBarIcon: ({ color, size }) => (
        <Icon name="dehaze" size={size} color={color} />
      ),
    });
  }, [navigation]);

  const user = useSelector(state => state.user.data);

  return (
    <View>
      <Text>{user.name}</Text>
    </View>
  );
}
