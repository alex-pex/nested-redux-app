const initialState = [{ value: 0 }, { value: 0 }];

const actions = {
  incrementCounter: index => ({ type: 'INCREMENT_COUNTER', index })
};

const mutations = {
  INCREMENT_COUNTER: (state, action) => {
    state[action.index].value += 1;
  }
};

export default {
  name: 'counter',
  state: initialState,
  actions,
  mutations
};
