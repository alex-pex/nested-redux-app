import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import asyncMiddleware from './asyncMiddleware';

export default function configureStore(initialState) {
  // Middleware you want to use in development:
  const enhancers = [applyMiddleware(asyncMiddleware)];

  // Required! Enable Redux DevTools with the monitors you chose
  // eslint-disable-next-line no-underscore-dangle
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  if (typeof devToolsExtension === 'function' && process.env.NODE_ENV !== 'production') {
    enhancers.push(devToolsExtension());
  }

  const store = createStore(rootReducer, initialState, compose(...enhancers));

  return store;
}
