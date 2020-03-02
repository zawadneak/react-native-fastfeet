import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';
import Button from '~/components/Button/index';

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
  margin: 70px 20px;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const Camera = styled(RNCamera)`
  border-radius: 4px;
  height: 70%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const SendButton = styled(Button)`
  margin-top: 10px;
  background-color: #7d40e7;
`;

export const SnapView = styled.View`
  flex: 0;
  flex-direction: row;
  justify-content: center;
`;

export const SnapHolder = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0.5);
  height: 60px;
  width: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  align-self: center;
  margin-bottom: 80px;
`;
