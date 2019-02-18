import isEmpty from '../utils/isEmpty';
import { SAVE_ARTICLE } from '../actions/actionTypes';
import editorState from '../utils/editorState';


const initialState = {
    editorState,
  article: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SAVE_ARTICLE:
      return {
        ...state,
        article: !isEmpty(action.payload),
        editorState:action.payload
      };
    default:
      return state;
  }
}
