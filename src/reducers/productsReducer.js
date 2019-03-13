import _ from 'lodash';

const productsReducer = (state={},action) =>{
    switch(action.type){
        case 'GET_PRODUCTS':
            return {
                productlist:_.mapKeys(action.products,'id')}
        default:
            return state
    }
} 

export default productsReducer;
