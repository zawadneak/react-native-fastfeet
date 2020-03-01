import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #7d40e7;
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

export const Info = styled.ScrollView`
  flex: 1;
  height: 100px;
  padding: 0px 30px;
  margin-top: 70px;
`;

export const InformationBox = styled.View`
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: #7d40e7;
  font-weight: bold;
  font-size: 16px;
  margin-left: 5px;
`;

export const BoxTitle = styled.View``;

export const InfoTitle = styled.Text`
  margin: 5px 0px;
  color: #999999;
  font-weight: bold;
  font-size: 16px;
`;
export const InfoString = styled.Text`
  color: #999999;
  font-size: 16px;
`;

export const DateHolder = styled.View`
  flex-direction: row;
`;

export const Holder = styled.View`
  margin-right: 20px;
  width: 50%;
`;

export const ButtonHolder = styled.View`
  align-self: stretch;
  flex-direction: row;
  justify-content: space-around;
  background-color: #f8f9fd;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding-right: 10px;
  width: 80px;
`;

export const ButtonLabel = styled.Text`
  text-align: center;
`;
