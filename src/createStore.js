import { connectReduxDevtools } from 'mst-middlewares';
import remotedev from 'remotedev';
import Store from './models/Store';

const initialState = {
  counters: [{ value: 123 }, { value: 456 }]
};

export default () => {
  const store = Store.create(initialState);
  connectReduxDevtools(remotedev, store);

  return store;
};
