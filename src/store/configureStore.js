import { createStore } from 'redux-box';
import modules from '../modules';

export default function configureStore(initialState) {
  return createStore(modules, { initialState });
}
