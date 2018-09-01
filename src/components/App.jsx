import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

const App = ({ computing, value, increment, incrementAsync }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <p>Status: {computing ? 'computing' : 'ready'}</p>
    <button type="button" onClick={increment}>
      Increment {value}
    </button>
    <button type="button" onClick={incrementAsync}>
      Increment Async {value}
    </button>
  </div>
);

App.propTypes = {
  computing: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired
};

export default App;
