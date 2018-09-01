const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncReducer = async (state = {}, action) => {
  await delay(600);

  return { ...state, step: (state.step || 0) + 1 };
};

const asyncMiddleware = store => next => action => {
  const nextState = next(action);

  console.log('start async...', nextState, action);
  const promise = asyncReducer(nextState, action);

  promise.then(asyncNextState => {
    console.log('stop async!', asyncNextState);
    next({ type: `@@ASYNC/${action.type}`, asyncNextState });
  });

  return promise;
};

export default asyncMiddleware;
