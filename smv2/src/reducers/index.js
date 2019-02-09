import { combineReducers } from 'redux';
import authReducer, { socialAuthFunc } from './authReducer';
import errorReducer from './errorReducer';

export default  combineReducers({
  auth : authReducer,
  errors: errorReducer,
  socialAuthFunc
  
})
