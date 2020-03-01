import React, { useState, useMemo } from 'react';
import { Alert } from 'react-native';

import { Container, WhiteBackground, TextBox, SendButton } from './styles';
import api from '~/services/api';

export default function CreateProblem({ route, navigation }) {
  const { ID } = route.params;

  const [description, setDescription] = useState('');

  const length = useMemo(() => 255 - Number(description.length));

  const handleSubmit = async () => {
    try {
      await api.post(`delivery/${ID}/problems`, { description });

      navigation.navigate('Deliveries');
    } catch (err) {
      Alert.alert(
        'Fastfeet',
        "Error, couldn't send problem! Please check your network"
      );
    }
  };
  return (
    <Container>
      <WhiteBackground />
      <TextBox
        multiline
        maxLength={255}
        numberOfLines={5}
        textAlignVertical="top"
        onChangeText={setDescription}
        onSubmitEditing={handleSubmit}
        placeholder="Please describe what happened at the delivery"
      />
      <SendButton onPress={handleSubmit}>{`(${length}) Send `}</SendButton>
    </Container>
  );
}
