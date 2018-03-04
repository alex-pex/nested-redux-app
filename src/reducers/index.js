import { combineReducers } from 'redux';
import { denormalize } from 'normalizr';

import app, { appSchema } from './app';
import counters from './counters';

const initialState = {
  app: {
    title: 'Hello world!',
    counter1: 1,
    counter2: 2
  },
  counters: {
    1: { id: 1, value: 123 },
    2: { id: 2, value: 456 }
  }
};

const appData = denormalize(initialState.app, appSchema, initialState);
console.log(appData);

export default combineReducers({
  app,
  counters
});
