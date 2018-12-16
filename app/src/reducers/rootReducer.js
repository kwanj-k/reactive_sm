import productReducer from './productsReducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    products :productReducer 
})

export default rootReducer;