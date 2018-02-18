import React from 'react';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import provideContext from '../containers/provideContext';
import app from '../contexts/app';

const App = ({ title }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">{title}</h1>
    </header>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <Counter />
      <Counter />
    </div>
  </div>
);

App.propTypes = {
  title: PropTypes.string.isRequired
};

const mapContextToProps = context => ({
  title: context.app.title
});

export default provideContext({ app }, mapContextToProps)(App);
