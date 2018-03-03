/* eslint-disable no-param-reassign */
import { types } from 'mobx-state-tree';
import Counter from './Counter';

const Store = types
  .model('Store', {
    title: 'Welcome to React',
    counters: types.array(Counter)
  })
  .actions(self => ({
    setTitle(newTitle) {
      self.title = newTitle;
    }
  }));

export default Store;
