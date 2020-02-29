import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import reducers from './modules/rootReducer';

import persistReducers from './persistReducer';

const store = createStore(
  persistReducers(reducers),
  console.tron.createEnhancer()
);

const persistor = persistStore(store);

export { store, persistor };
