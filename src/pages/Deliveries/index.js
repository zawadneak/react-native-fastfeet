import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar, Alert } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useIsFocused } from '@react-navigation/native';
import { userSignOut } from '~/store/modules/user/actions';
import getDeliveries from '~/store/modules/deliveries/actions';
import ListView from '~/components/ListView/index';

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
  List,
} from './styles';
import api from '~/services/api';

export default function Deliveries({ navigation }) {
  const isFocused = useIsFocused();

  const user = useSelector(state => state.user.data);
  const pending = useSelector(state => state.deliveries.pending);
  const delivered = useSelector(state => state.deliveries.delivered);
  const dispatch = useDispatch();

  const [active, setActive] = useState(true);
  const [listData, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadAPI() {
      try {
        const pendingRequest = await api.get(`provider/${user.id}/deliveries`);
        const delveredRequest = await api.get(`provider/${user.id}/delivered`);

        dispatch(getDeliveries(pendingRequest.data, delveredRequest.data));
      } catch (err) {
        Alert.alert(
          'Fastfeet',
          'Error loading deliveries, please check your connection!'
        );
      }
    }
    if (isFocused) {
      loadAPI();
    }
    setList(pending);
  }, [isFocused]);

  useEffect(() => {
    if (active) {
      setList(pending);
    } else {
      setList(delivered);
    }
  }, [pending, delivered, active]);

  const [first, last] = user.name.split(' ');
  const nullImageString = useMemo(() => `${first.charAt(0)}${last.charAt(0)}`);

  const handleLogOut = () => {
    dispatch(userSignOut());
  };

  const handleDeliveries = () => {
    setActive(!active);
  };

  async function loadAPI() {
    try {
      const pendingRequest = await api.get(`provider/${user.id}/deliveries`);
      const delveredRequest = await api.get(`provider/${user.id}/delivered`);

      dispatch(getDeliveries(pendingRequest.data, delveredRequest.data));
    } catch (err) {
      Alert.alert(
        'Fastfeet',
        'Error loading deliveries, please check your connection!'
      );
    }
  }
  const handleRefresh = () => {
    setLoading(true);
    loadAPI();

    setLoading(false);
  };

  const handleOpen = item => {
    navigation.navigate('Information', { item });
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header>
        <Information>
          {user.avatar ? (
            <Logo
              source={{
                uri: user.avatar.url,
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
      <List
        data={listData}
        keyExtractor={ìtem => ìtem.id}
        showsVerticalScrollIndicator={false}
        onRefresh={handleRefresh}
        refreshing={loading}
        renderItem={({ item }) => (
          <ListView item={item} onPress={() => handleOpen(item)} />
        )}
      />
    </Container>
  );
}

Deliveries.propTypes = {
  navigation: PropTypes.func.isRequired,
};
