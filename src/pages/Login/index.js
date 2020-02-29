import React, { useState } from 'react';

import { StatusBar, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import { userSignIn } from '~/store/modules/user/actions';
import { Container, Logo, Input } from './styles';
import Button from '~/components/Button/index';
import logo from '~/assets/img/logo.png';
import api from '~/services/api';

export default function LogIn() {
  const [registrationID, setID] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    setLoading(true);

    if (!registrationID) {
      setLoading(false);
      return Alert.alert('Fastfeet', 'Please input your registration ID!');
    }

    try {
      const response = await api.get(`provider/${registrationID}`);

      dispatch(userSignIn(response.data));
    } catch (err) {
      Alert.alert('Fastfeet', 'Error loggin in the system!');
    }

    setLoading(false);
  };

  return (
    <Container>
      <StatusBar backgroundColor="#7d40e7" />
      <Logo source={logo} />
      <Input
        value={registrationID}
        placeholder="Please inform your registration ID"
        onChangeText={setID}
        onSubmitEditing={handleLogin}
      />
      <Button onPress={handleLogin} loading={loading}>
        Access the system
      </Button>
    </Container>
  );
}
