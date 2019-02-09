import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import axiosConfig from '../axiosConfig';

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  RECEIVE_CALL,
  FETCH_CALL,
  FETCH_FAILED
} from './types';


// Register User
export const registerUser = (userData, history) => dispatch => {

  axiosConfig.request({
    method:'post',
    url:`/signup/`,
    data:userData
  })
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


// Login - Get User Token
export const loginUser = userData => dispatch => {
  axiosConfig.request({
    method:'post',
    url:`/login/`,
    data:userData
  })
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
  };
  
  // Set logged in user
  export const setCurrentUser = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
  };
  
  // Log user out
  export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
  };


  // All auth functions for the social login work
  export function FacebookAuth(data) {
    return data;
  }
  
  export function GoogleAuth(data) {
    return data;
  }
  
  export function TwitterAuth(data) {
    return data;
  }
  
  // Informational functions
  export function receivedUsers(action) {
    return {
      type: RECEIVE_CALL,
      payload: {
        fetching: false,
        users: action,
        message: "success"
      }
    };
  }
  
  export function fetchingCall() {
    return {
      type: FETCH_CALL,
      payload: {
        fetching: true,
        message: "fetching"
      }
    };
  }
  
  export function failedCall(error) {
    return {
      type: FETCH_FAILED,
      payload: {
        fetching: false,
        message: error
      }
    };
  }
