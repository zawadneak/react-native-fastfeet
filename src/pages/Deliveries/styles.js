import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0px 30px;
  background-color: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Information = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Logo = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  background-color: #f4effc;
`;

export const NullImage = styled.View`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  background-color: #f4effc;
  align-items: center;
  justify-content: center;
`;

export const NameString = styled.Text`
  font-size: 31px;
  color: #a28fd0;
`;

export const NameHolder = styled.View`
  margin-left: 10px;
`;

export const Label = styled.Text`
  color: #666666;
  font-size: 12px;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const LogOutButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const ButtonHolder = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Buttons = styled.TouchableOpacity`
  align-items: center;
  margin: 4px;
`;

export const ButtonTitle = styled.Text`
  color: ${props => (props.active ? '#7D40E7' : '#999999')};
  text-decoration-line: ${props => (props.active ? 'underline' : 'none')};
  font-weight: bold;
`;
