import axiosConfig from '../axiosConfig';
import {toast} from "react-toastify";

export default function loginUser(userdata){
    return (dispatch) =>{
        return axiosConfig.request({
            method:'post',
            url:`/login/`,
            data:userdata
        })
        .then((response) => {
            toast.success(response.data.message);
            dispatch({
                type: 'SET_JWT_TOKEN',
                payload: response
            });
            window.location.href = "/products";
        })
        .catch(() => {
            toast.error("Wrong credentials...");
        });
    }
}


