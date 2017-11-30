import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.store = configureStore();
    this.store.subscribe(() => this.forceUpdate());
  }

  render() {
    const state = this.store.getState();

    return (
      <Provider store={this.store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{state.title}</h1>
          </header>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Counter />
            <Counter />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
