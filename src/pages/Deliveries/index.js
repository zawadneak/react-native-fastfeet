import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { userSignOut } from '~/store/modules/user/actions';

import {
  Container,
  Header,
  Information,
  Logo,
  NullImage,
  NameString,
  NameHolder,
  Label,
  Name,
  LogOutButton,
  Menu,
  Title,
  ButtonHolder,
  Buttons,
  ButtonTitle,
} from './styles';

export default function Deliveries({ navigation }) {
  const [active, setActive] = useState(true);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      tabBarIcon: ({ color, size }) => (
        <Icon name="reorder" size={size} color={color} />
      ),
    });
  }, [navigation]);

  const user = useSelector(state => state.user.data);
  const [first, last] = user.name.split(' ');

  const nullImageString = useMemo(() => `${first.charAt(0)}${last.charAt(0)}`);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(userSignOut());
  };

  const handleDeliveries = () => {
    setActive(!active);
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header>
        <Information>
          {user.avata ? (
            <Logo
              source={{
                uri:
                  'http://localhost:3333/files/82461012180574ec9996e28d3c2dc2af',
              }}
            />
          ) : (
            <NullImage>
              <NameString>{nullImageString}</NameString>
            </NullImage>
          )}
          <NameHolder>
            <Label>Welcome back,</Label>
            <Name>{user.name}</Name>
          </NameHolder>
        </Information>
        <LogOutButton onPress={handleLogOut}>
          <Icon name="input" size={25} color="#E74040" />
        </LogOutButton>
      </Header>
      <Menu>
        <Title>Deliveries</Title>
        <ButtonHolder>
          <Buttons>
            <ButtonTitle active={active} onPress={handleDeliveries}>
              Pending
            </ButtonTitle>
          </Buttons>
          <Buttons>
            <ButtonTitle active={!active} onPress={handleDeliveries}>
              Delivered
            </ButtonTitle>
          </Buttons>
        </ButtonHolder>
      </Menu>
    </Container>
  );
}
