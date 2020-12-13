import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import env from 'core/env';

import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

const bindMiddleware = (...middlewares) => {
  if (!env.isProd) {
    return composeWithDevTools(applyMiddleware(...middlewares));
  }
  return applyMiddleware(...middlewares);
};

const configureStore = initialState => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware(
      sagaMiddleware
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
