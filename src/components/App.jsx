import React from 'react';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import provideApp from '../containers/provideApp';

const App = (props, { app }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">{app.title}</h1>
    </header>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <Counter />
      <Counter />
    </div>
  </div>
);

App.contextTypes = {
  app: PropTypes.shape({
    title: PropTypes.string
  })
};

export default provideApp(App);
