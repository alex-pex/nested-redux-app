const initialState = {
  title: 'Welcome to React'
};

const actions = {
  updateTitle: nextTitle => ({ type: 'UPDATE_TITLE', payload: nextTitle })
};

const mutations = {
  UPDATE_TITLE: (state, action) => {
    state.title = action.payload;
  }
};

export default {
  name: 'app',
  state: initialState,
  actions,
  mutations
};
