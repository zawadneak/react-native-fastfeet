import styled from 'styled-components/native';
import Button from '~/components/Button/index';

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
`;

export const ProfilePicture = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 80px;
  margin-bottom: 20px;
  background-color: #f4effc;
`;

export const NullProfilePicture = styled.View`
  height: 150px;
  width: 150px;
  border-radius: 80px;
  background-color: #f4effc;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

export const NullString = styled.Text`
  font-size: 50px;
  color: #a28fd0;
`;
export const TextHolder = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #666666;
`;

export const Info = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const LogOutButton = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: #e74040;
  align-self: stretch;
  padding: 15px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const LogOutSting = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
