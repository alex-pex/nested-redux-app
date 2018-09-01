import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

let appState = {
  value: 42,
  pendingComputations: 0,
  loop: 'stopped'
};

const subscribers = [];
const subscribe = subscriber => subscribers.push(subscriber);

let handler;

const dispatch = async ({ type, ...payload }) => {
  console.log(`${type} action`, ...payload);

  const setState = update => {
    const prevAppState = appState;
    appState = update(prevAppState);

    if (appState !== prevAppState) {
      console.log(`--> ${type} render`, appState);
      subscribers.forEach(subscriber => subscriber());
    }
  };

  handler(setState, { type, ...payload });
};

const incrementAction = () => ({
  type: 'INCREMENT'
});

const incrementAsyncAction = () => ({
  type: 'INCREMENT_ASYNC'
});

const DELAY = 1500;

handler = async (setState, action) => {
  if (action.type === 'INCREMENT') {
    // handle INCREMENT action
    setState(state => ({ ...state, value: state.value + 1 }));
  } else if (action.type === 'INCREMENT_ASYNC') {
    // handle INCREMENT_ASYNC action
    setState(state => ({ ...state, pendingComputations: state.pendingComputations + 1 }));
    await new Promise(resolve => setTimeout(resolve, DELAY));
    setState(state => ({ ...state, pendingComputations: state.pendingComputations - 1, value: state.value + 1 }));
  } else if (action.type === 'INCREMENT_LOOP_START') {
    // handle INCREMENT_LOOP_START action
    setState(state => ({ ...state, loop: 'started' }));
    const interval = setInterval(
      () =>
        setState(state => {
          if (state.loop !== 'started') {
            clearInterval(interval);
            return state;
          }

          return { ...state, value: state.value + 1 };
        }),
      DELAY
    );
  } else if (action.type === 'INCREMENT_LOOP_STOP') {
    // handle INCREMENT_LOOP_STOP action
    setState(state => (state.loop !== 'stopped' ? { ...state, loop: 'stopped' } : state));
  }
};

function renderApp() {
  ReactDOM.render(
    <App
      increment={() => dispatch(incrementAction())}
      incrementAsync={() => dispatch(incrementAsyncAction())}
      incrementLoopStart={() => dispatch({ type: 'INCREMENT_LOOP_START' })}
      incrementLoopStop={() => dispatch({ type: 'INCREMENT_LOOP_STOP' })}
      value={appState.value}
      computing={appState.pendingComputations > 0}
    />,
    document.getElementById('root')
  );
}

export default function() {
  renderApp();

  subscribe(renderApp);

  if (module.hot) {
    module.hot.accept('./components/App', () => {
      renderApp();
    });
  }
}
