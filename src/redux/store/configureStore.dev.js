import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'redux/reducers';

const configureStore = () => {

  const middlewares = [
    thunk,
  ];

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middlewares),
      // eslint-disable-next-line max-len
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );

  return store;
}

export default configureStore;