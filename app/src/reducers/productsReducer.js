import _ from 'lodash';


const productsReducer = (state={},action) =>{
    switch(action.type){
        case 'ADD_PRODUCT':
            //console.log('product added',action.product)
            return state;
        case 'GET_PRODUCTS':   
            //console.log(action)
            return {
                productlist:_.mapKeys(action.products,'id')}
        default:
            return state
    }
} 

export default productsReducer;