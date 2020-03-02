import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { parseISO, format } from 'date-fns';
import { userSignOut } from '~/store/modules/user/actions';

import {
  Container,
  ProfilePicture,
  NullProfilePicture,
  NullString,
  TextHolder,
  Label,
  Info,
  LogOutButton,
  LogOutSting,
} from './styles';

export default function Profile() {
  const user = useSelector(state => state.user.data);
  const dispatch = useDispatch();

  const registrationDate = parseISO(user.created_at);
  const registration = format(registrationDate, 'dd/MM/yyyy');

  const [first, last] = user.name.split(' ');
  const nullImageString = `${first.charAt(0)}${last.charAt(0)}`;

  function handleLogOut() {
    dispatch(userSignOut());
  }
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {user.avatar ? (
        <ProfilePicture source={{ uri: user.avatar.url }} />
      ) : (
        <NullProfilePicture>
          <NullString>{nullImageString}</NullString>
        </NullProfilePicture>
      )}
      <TextHolder>
        <Label>Full name</Label>
        <Info>{user.name}</Info>
        <Label>Email</Label>
        <Info>{user.email}</Info>
        <Label>Registration Date</Label>
        <Info>{registration}</Info>
      </TextHolder>
      <LogOutButton onPress={handleLogOut}>
        <LogOutSting>Logout</LogOutSting>
      </LogOutButton>
    </Container>
  );
}
