import Store from './models/Store';

const initialState = {
  counters: [{ value: 123 }, { value: 456 }]
};

export default () => Store.create(initialState);
