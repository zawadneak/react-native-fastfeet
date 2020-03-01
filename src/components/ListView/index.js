import React, { useMemo } from 'react';
import { parseISO, format } from 'date-fns';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import {
  Container,
  Top,
  Header,
  Title,
  ProgressBar,
  Bottom,
  Holder,
  Label,
  Content,
  DetailButton,
  DetailTitle,
  DotHolder,
  Dot,
  DotLabel,
  Line,
  TextBar,
} from './styles';

export default function ListView({ item, onPress }) {
  const dateFormated = useMemo(() =>
    format(parseISO(item.created_at), 'dd/MM/yyyy')
  );

  return (
    <Container>
      <Top>
        <Header>
          <Icon name="truck" color="#7D40E7" size={20} />
          <Title>{`Delivery 0${item.id}`}</Title>
        </Header>
        <ProgressBar>
          <DotHolder>
            <Dot done />
            <Line />
          </DotHolder>
          <DotHolder>
            <Line />
            <Dot done={!!item.start_date} />
            <Line />
          </DotHolder>
          <DotHolder>
            <Line />
            <Dot done={!!item.end_date} />
          </DotHolder>
        </ProgressBar>
        <TextBar>
          <DotLabel>Pending</DotLabel>
          <DotLabel>Picked up</DotLabel>
          <DotLabel>Delivered</DotLabel>
        </TextBar>
      </Top>
      <Bottom>
        <Holder>
          <Label>Date</Label>
          <Content>{dateFormated}</Content>
        </Holder>
        <Holder>
          <Label>City</Label>
          <Content>{item.destination ? item.destination.city : ''}</Content>
        </Holder>
        <DetailButton onPress={onPress}>
          <DetailTitle>See details</DetailTitle>
        </DetailButton>
      </Bottom>
    </Container>
  );
}

ListView.propTypes = {
  onPress: PropTypes.func.isRequired,
  item: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};
