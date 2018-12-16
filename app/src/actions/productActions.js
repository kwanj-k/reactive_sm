import axiosConfig from '../axiosConfig';

export const getProducts = () => {
  return async (dispatch) => {
    return axiosConfig.request({
        method: "get",
        url: `/products`
    })
    .then((response) => {
        dispatch({
            type: 'GET_PRODUCTS',
            productlist :response.data
        })
    })
  }
}
export const addProduct = (product) => {
  return (dispatch,getState) =>{
      //call django
      dispatch({type:'ADD_PRODUCT',product})
  }
}

export default addProduct;