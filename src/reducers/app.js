import { counterSchema } from './counters';

export const appSchema = {
  counter1: counterSchema,
  counter2: counterSchema
};

const initialState = {
  title: 'Welcome to React'
};

export const updateTitle = title => ({
  type: 'app/UPDATE_TITLE',
  title
});

const actionHandlers = {};

actionHandlers['app/UPDATE_TITLE'] = (state, { title }) => ({
  ...state,
  title: title || initialState.title
});

const reducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return handler ? handler(state, action) : state;
};

export default reducer;
