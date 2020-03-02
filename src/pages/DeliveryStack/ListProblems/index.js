import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import api from '~/services/api';
import ProblemBox from '~/components/ProblemView/index';

import {
  Container,
  WhiteBackground,
  Holder,
  Title,
  ProblemList,
} from './styles';

export default function ListProblems({ route }) {
  const { ID } = route.params;
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadAPI() {
      try {
        const response = await api.get(`delivery/${ID}/problems`);

        setProblems(response.data);
      } catch (err) {
        Alert.alert(
          'Fastfeet',
          "Couldn't load the problems! Please check your connection"
        );
      }
    }

    loadAPI();
  }, []);

  return (
    <Container>
      <WhiteBackground />
      <Holder>
        <Title>{`Delivery 0${ID}`}</Title>
        <ProblemList
          data={problems}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ProblemBox item={item} />}
        />
      </Holder>
    </Container>
  );
}

ListProblems.propTypes = {
  route: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
