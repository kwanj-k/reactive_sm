import {createStore, compose, applyMiddleware} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import rootReducer from '../reducers/index';

export const history = createBrowserHistory();
const initialState = {}

function configureStoreProd() {
  const middlewares = [
    thunk,
    routerMiddleware(history),
  ];

  return createStore(
    initialState,
    rootReducer,
    compose(applyMiddleware(...middlewares))
  );
}

function configureStoreDev() {
  const middlewares = [
    thunk,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // add support for Redux dev tools
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares),composeEnhancers)
  );

  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
