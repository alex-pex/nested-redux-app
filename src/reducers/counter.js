const initialState = {
  value: 0
};

const handlers = {};

handlers.INCREMENT_COUNTER = state => ({
  ...state,
  value: state.value + 1
});

const reducer = (state = initialState, action) => {
  const handler = handlers[action.type];

  return handler ? handler(state, action) : state;
};

export default reducer;
