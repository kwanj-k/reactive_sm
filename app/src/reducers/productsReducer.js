import _ from 'lodash';

const productsReducer = (state={},action) =>{
    switch(action.type){
        case 'ADD_PRODUCT':
            return state;
        case 'GET_PRODUCTS':
            return {
                productlist:_.mapKeys(action.products,'id')}
        default:
            return state
    }
} 

export default productsReducer;
