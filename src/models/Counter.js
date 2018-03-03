/* eslint-disable no-param-reassign */
import { types } from 'mobx-state-tree';

const Counter = types
  .model('Counter', {
    value: 0
  })
  .actions(self => ({
    increment() {
      self.value += 1;
    }
  }));

export default Counter;
