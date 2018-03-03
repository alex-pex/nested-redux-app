import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import Store from '../models/Store';

it('renders without crashing', () => {
  const store = Store.create({
    title: "Let's do it!",
    counters: []
  });

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.createElement('div')
  );
});
