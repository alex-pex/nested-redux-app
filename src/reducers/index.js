const initialState = {
  title: 'Welcome to React'
};

const handlers = {};

handlers['app/UPDATE_TITLE'] = (state, { payload }) => ({
  ...state,
  title: payload || initialState.title
});

const rootReducer = (state = initialState, action) => {
  const handler = handlers[action.type];

  return handler ? handler(state, action) : state;
};

export default rootReducer;
