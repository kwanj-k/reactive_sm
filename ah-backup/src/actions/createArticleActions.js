// import { toast } from 'react-toastify';
import axiosConfig from '../axiosConfig';
import { GET_ERRORS, SAVE_ARTICLE } from './actionTypes';

export const saveArticle = articleData => dispatch => {
    const formatData = {
      article: articleData
    };
    axiosConfig
      .request({
        method: 'post',
        url: 'articles',
        data: formatData
      })
      .then(res => {
        //console.log(res)
        dispatch({
          type: SAVE_ARTICLE,
          payload: res.data
        });
      })
      .catch(err => {
        //toast.error(err.response.data);
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      });
  };
