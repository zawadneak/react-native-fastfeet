import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #7d40e7;
  padding: 0px 30px;
`;

export const WhiteBackground = styled.View`
  background-color: #fff;
  position: absolute;
  top: 25%;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
`;

export const Holder = styled.View`
  margin-top: 70px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const ProblemList = styled.FlatList``;
