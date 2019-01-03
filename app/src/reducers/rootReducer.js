import productReducer from './productsReducer';
import authReducer from './authReducers';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    products :productReducer ,
    auth : authReducer
})

export default rootReducer;
