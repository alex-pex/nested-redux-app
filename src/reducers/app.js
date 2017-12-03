const initialState = {
  title: 'Welcome to React'
};

const handlers = {};

handlers.UPDATE_TITLE = (state, { payload }) => ({
  ...state,
  title: payload || initialState.title
});

const reducer = (state = initialState, action) => {
  const handler = handlers[action.type];

  return handler ? handler(state, action) : state;
};

export default reducer;
