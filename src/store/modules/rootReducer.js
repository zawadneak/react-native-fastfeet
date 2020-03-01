import { combineReducers } from 'redux';

import user from './user/reducer';
import deliveries from './deliveries/reducer';

export default combineReducers({ user, deliveries });
