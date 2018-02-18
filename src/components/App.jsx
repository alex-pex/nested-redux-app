import React from 'react';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import provideContext from '../containers/provideContext';
import app from '../contexts/app';

const App = (props, context) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">{context.app.title}</h1>
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

export default provideContext({ app })(App);
