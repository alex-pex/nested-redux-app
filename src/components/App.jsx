import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

const initialState = {
  app: {
    title: 'Hello world!',
    counter1: 1,
    counter2: 2
  },
  counters: {
    1: { id: 1, value: 123 },
    2: { id: 2, value: 456 }
  }
};

class App extends Component {
  constructor(...args) {
    super(...args);
    this.store = configureStore(initialState);
    this.store.subscribe(() => this.forceUpdate());
  }

  render() {
    const { app, counters } = this.store.getState();
    const counter1 = counters[app.counter1];
    const counter2 = counters[app.counter2];

    return (
      <Provider store={this.store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{app.title}</h1>
          </header>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Counter app={app} counter={counter1} />
            <Counter app={app} counter={counter2} />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
