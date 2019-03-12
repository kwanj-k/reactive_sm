import axiosConfig from '../axiosConfig';
import {toast} from "react-toastify";
import $ from "jquery";

export function loadProducts(){
    return  (dispatch) => {
      return axiosConfig.request({
          method: "get",
          url: `/products`,
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("TOKEN")
        }
      })
      .then((response) => {
          dispatch(getProducts(response.data))
      })
    //   }).catch(
    //     error => {
    //         switch (error.response.status) {
    //             case 401:
    //                 localStorage.removeItem("TOKEN");
    //                 window.location.href = "/";
    //                 return 
    //             default:
    //                 toast.error(error.response.data.message);
    //             }
    //         }
    //     );
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
            data:product,
            headers: {
                'Access-Control-Request-Headers': '*',
                'Authorization': 'Bearer ' + localStorage.getItem("TOKEN")
            }
        })
        .then((response) =>{
            dispatch(loadProducts());
            $(".styles_closeButton__20ID4").click();
            toast.success('Product ' + response.statusText)
        })
        .catch(
            error =>{
                dispatch(loadProducts());
                $(".styles_closeButton__20ID4").click();
                //toast.error(`Product not Added! Make sure the name is unique.`)
                switch (error.response.status) {
                    case 401:
                        localStorage.removeItem("TOKEN");
                        window.location.href = "/";
                        return 
                    default:
                    toast.error(`Product not Added! Make sure the name is unique.`);
                    }
            }
        );
    }
}
// export  function editProduct (product){
//     return (dispatch) =>{
//         return axiosConfig.request({
//             method: "put",
//             url: `/products/{product.slug}`,
//             data:product,
//             headers: {
//                 'Authorization': 'Bearer ' + localStorage.getItem("TOKEN")
//             }
//         })
//         .then((response) =>{
//             dispatch(loadProducts());
//             $(".styles_closeButton__20ID4").click();
//             toast.success('Product ' + response.statusText)
//         })
//         .catch(
//             error =>{
//                 dispatch(loadProducts());
//                 $(".styles_closeButton__20ID4").click();
//                 //toast.error(`Product not Added! Make sure the name is unique.`)
//                 switch (error.response.status) {
//                     case 401:
//                         localStorage.removeItem("TOKEN");
//                         window.location.href = "/";
//                         return 
//                     default:
//                     toast.error(`Product not Updated! Make sure the name is unique.`);
//                     }
//             }
//         );
//     }
// }

