import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import errorReducer from './errorReducer';
import createArticleReducer from './createArticleReducer';

export default  combineReducers({
  auth : loginReducer,
  createdArticle: createArticleReducer,
  errors: errorReducer
  
});
