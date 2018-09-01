import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

let appState = {
  value: 42,
  pendingComputations: 0
};

const subscribers = [];
const subscribe = subscriber => subscribers.push(subscriber);

let handler;

const dispatch = async ({ type, ...payload }) => {
  console.log(type, ...payload);

  const setState = update => {
    appState = update(appState);
    console.log('> render', appState);
    subscribers.forEach(subscriber => subscriber());
  };

  handler(setState, { type, ...payload });
};

const incrementAction = () => ({
  type: 'INCREMENT'
});

const incrementAsyncAction = () => ({
  type: 'INCREMENT_ASYNC'
});

handler = async (setState, action) => {
  if (action.type === 'INCREMENT') {
    setState(state => ({ ...state, value: state.value + 1 }));
  } else if (action.type === 'INCREMENT_ASYNC') {
    setState(state => ({ ...state, pendingComputations: state.pendingComputations + 1 }));
    await new Promise(resolve => setTimeout(resolve, 1500));
    setState(state => ({ ...state, pendingComputations: state.pendingComputations - 1, value: state.value + 1 }));
  }
};

function renderApp() {
  ReactDOM.render(
    <App
      increment={() => dispatch(incrementAction())}
      incrementAsync={() => dispatch(incrementAsyncAction())}
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
