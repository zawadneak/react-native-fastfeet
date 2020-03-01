import styled from 'styled-components/native';
import Button from '~/components/Button/index';

export const Container = styled.View`
  flex: 1;
  background-color: #7d40e7;
  padding: 0 30px;
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

export const TextBox = styled.TextInput`
  height: 50%;
  margin-top: 70px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  font-size: 16px;
  padding: 20px;
`;

export const SendButton = styled(Button)`
  background-color: #7d40e7;
`;
