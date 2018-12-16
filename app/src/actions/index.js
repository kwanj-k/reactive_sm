import axiosConfig from '../axiosConfig';

export function loadProducts(){
    return  (dispatch) => {
      return axiosConfig.request({
          method: "get",
          url: `/products`
      })
      .then((response) => {
          dispatch(getProducts(response.data))
      })
    }
  }

export function getProducts(products){
    return {
        type: 'GET_PRODUCTS',
        products:products
    }
}
  