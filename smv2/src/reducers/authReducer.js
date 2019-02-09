import isEmpty from '../validation/isEmpty';


import {
  SET_CURRENT_USER,
  FACEBOOK,
  GOOGLE,
  TWITTER,
  RECEIVE_CALL,
  FETCH_CALL,
  FETCH_FAILED,

} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}

export  function socialAuthFunc(state = {}, action) {

  switch (action.type) {

    // sample state update function
    case FACEBOOK:
        return Object.assign({}, state, action.payload);

    case GOOGLE:
        return Object.assign({}, state, action.payload);

    case TWITTER:
        return Object.assign({}, state, action.payload);

    case RECEIVE_CALL:
        return Object.assign({}, state, action.payload);

      case FETCH_CALL:
        return Object.assign({}, state, action.payload);

    case FETCH_FAILED:
        return Object.assign({}, state, action.payload);

    default:
        return state;
  }
}
