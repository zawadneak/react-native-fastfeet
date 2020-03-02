import React, { useMemo } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { parseISO, format } from 'date-fns';
import { Alert, StatusBar } from 'react-native';

import PropTypes from 'prop-types';

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

  const start_date = item.start_date ? parseISO(item.start_date) : null;
  const pickUpDate = useMemo(() =>
    start_date ? format(start_date, 'dd/MM/yyy') : '--/--/--'
  );

  const end_date = item.end_date ? parseISO(item.end_date) : null;
  const delieryDate = useMemo(() =>
    end_date ? format(end_date, 'dd/MM/yyy') : '--/--/--'
  );

  let status = 'Pending';

  if (end_date) {
    status = 'Delivered';
  } else if (start_date) {
    status = 'Picked up';
  }

  const handleInformProblem = () => {
    if (end_date) {
      Alert.alert(
        'Fastfeet',
        'You can not inform a problem when you already delivered the package!'
      );
    } else {
      navigation.navigate('Inform', { ID: item.id });
    }
  };

  const handleListProblems = () => {
    navigation.navigate('List', { ID: item.id });
  };

  const handleConfirmDelivery = () => {
    if (end_date) {
      Alert.alert(
        'Fastfeet',
        'You can not confirm this delivery when you already delivered the package!'
      );
    } else if (!start_date) {
      Alert.alert(
        'Fastfeet',
        'You can not confirm this delivery when you have not picked up the package!'
      );
    } else {
      navigation.navigate('Confirm', { ID: item.id });
    }
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
          <InfoString>{status}</InfoString>
          <DateHolder>
            <Holder>
              <InfoTitle>PICK UP DATE</InfoTitle>
              <InfoString>{pickUpDate}</InfoString>
            </Holder>
            <Holder>
              <InfoTitle>DELIVERY DATE</InfoTitle>
              <InfoString>{delieryDate}</InfoString>
            </Holder>
          </DateHolder>
        </InformationBox>
        <ButtonHolder>
          <Button onPress={handleInformProblem}>
            <Icon name="times" size={30} color="#E74040" />
            <ButtonLabel numberOfLines={2}>Inform Problem</ButtonLabel>
          </Button>
          <Button onPress={handleListProblems}>
            <Icon name="info" size={30} color="#E7BA40" />
            <ButtonLabel numberOfLines={2}>List Problems</ButtonLabel>
          </Button>
          <Button onPress={handleConfirmDelivery}>
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
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    .isRequired,
};
