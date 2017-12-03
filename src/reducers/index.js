import { combineReducers } from 'redux';
import app from './app';
import counter from './counter';

const contextualize = (reducer, key) => (state, action) => {
  if (action.target !== undefined && action.target !== key) {
    return state;
  }

  return reducer(state, action);
};

export default combineReducers({
  app,
  counter1: contextualize(counter, 'counter1'),
  counter2: contextualize(counter, 'counter2')
});
