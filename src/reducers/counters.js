import { schema } from 'normalizr';

export const counterSchema = new schema.Entity('counters');
export const countersSchema = [counterSchema];

const initialState = {};

export const incrementCounter = id => ({
  type: 'counters/INCREMENT',
  id
});

const actionHandlers = {};

actionHandlers['counters/INCREMENT'] = (state, action) => ({
  ...state,
  [action.id]: {
    ...state[action.id],
    value: state[action.id].value + 1
  }
});

const reducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return handler ? handler(state, action) : state;
};

export default reducer;
