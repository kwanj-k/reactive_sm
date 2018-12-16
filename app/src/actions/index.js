import axiosConfig from '../axiosConfig';
import {toast} from "react-toastify";
import $ from "jquery";

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

export default function addProduct (product){
    return (dispatch) =>{
        return axiosConfig.request({
            method: "post",
            url: `/products/`,
            data:product
        })
        .then((response) =>{
            dispatch(loadProducts());
            $(".styles_closeButton__20ID4").click();
            toast.success('Product ' + response.statusText)
        })
        .catch(
            () =>{
                dispatch(loadProducts());
                $(".styles_closeButton__20ID4").click();
                toast.error(`Product not Added! Make sure the name is unique.`)
            }
        );
    }
}
