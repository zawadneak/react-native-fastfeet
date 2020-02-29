import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

export default reducers => {
  const presistedReducer = persistReducer(
    {
      key: 'fastfeet',
      storage: AsyncStorage,
      whitelist: ['user'],
    },
    reducers
  );
  return presistedReducer;
};
