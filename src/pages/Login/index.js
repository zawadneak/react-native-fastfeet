import React, { useState } from 'react';

import { StatusBar } from 'react-native';

import { Container, Logo, Input } from './styles';
import Button from '~/components/Button/index';
import logo from '~/assets/img/logo.png';
import api from '~/services/api';

export default function LogIn() {
  const [registrationID, setID] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const response = await api.get(`provider/${registrationID}`);

    alert(response.data.name);

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
