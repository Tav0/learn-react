import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import admin from './admin';

const rootReducer = combineReducers({
  auth,
  admin,
  form: formReducer,
});

export default rootReducer;

