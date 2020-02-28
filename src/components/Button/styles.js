import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background-color: #96c93c;
  align-self: stretch;
  padding: 15px 0px;
  border-radius: 4px;
`;

export const Text = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
`;
