import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';
import Routes from './Routes/routes';

import { store, persistor } from './store/index';

console.disableYellowBox = true;

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
