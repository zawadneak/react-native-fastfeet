import React, { useMemo } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import {
  Container,
  WhiteBackground,
  InformationBox,
  Info,
  Header,
  Title,
  BoxTitle,
  InfoTitle,
  InfoString,
  DateHolder,
  Holder,
  ButtonHolder,
  Button,
  ButtonLabel,
} from './styles';

export default function Information({ route, navigation }) {
  const { item } = route.params;

  const address = useMemo(
    () =>
      `${item.destination.street} - ${item.destination.number} ${item
        .destination.complement || ''} , ${item.destination.city} - ${
        item.destination.state
      } , ${item.destination.postalCode}`
  );

  const handleInformProblem = () => {
    navigation.navigate('Inform', { ID: item.id });
  };

  return (
    <Container>
      <StatusBar backgroundColor="#7d40e7" barStyle="light-content" />
      <WhiteBackground />
      <Info>
        <InformationBox>
          <Header>
            <Icon name="truck" color="#7d40e7" size={18} />
            <Title>Package details</Title>
          </Header>
          <BoxTitle>
            <InfoTitle>DESTINATION</InfoTitle>
            <InfoString>{item.destination.name}</InfoString>
            <InfoTitle>ADDRESS</InfoTitle>
            <InfoString>{address}</InfoString>
            <InfoTitle>PRODUCT</InfoTitle>
            <InfoString>{item.product}</InfoString>
          </BoxTitle>
        </InformationBox>
        <InformationBox>
          <Header>
            <Icon name="calendar-day" color="#7d40e7" size={18} />
            <Title>Delivery situation</Title>
          </Header>
          <InfoTitle>STATUS</InfoTitle>
          <InfoString>Pending</InfoString>
          <DateHolder>
            <Holder>
              <InfoTitle>PICK UP DATE</InfoTitle>
              <InfoString>13/05/2000</InfoString>
            </Holder>
            <Holder>
              <InfoTitle>DELIVERY DATE</InfoTitle>
              <InfoString>--/--/--</InfoString>
            </Holder>
          </DateHolder>
        </InformationBox>
        <ButtonHolder>
          <Button onPress={handleInformProblem}>
            <Icon name="times" size={30} color="#E74040" />
            <ButtonLabel numberOfLines={2}>Inform Problem</ButtonLabel>
          </Button>
          <Button>
            <Icon name="info" size={30} color="#E7BA40" />
            <ButtonLabel numberOfLines={2}>List Problems</ButtonLabel>
          </Button>
          <Button>
            <Icon name="check" size={30} color="#7D40E7" />
            <ButtonLabel numberOfLines={2}>Confirm Delivery</ButtonLabel>
          </Button>
        </ButtonHolder>
      </Info>
    </Container>
  );
}

Information.propTypes = {
  route: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
