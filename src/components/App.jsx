import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {
  static childContextTypes = {
    app: PropTypes.shape({
      title: PropTypes.string,
      onTitleChange: PropTypes.func
    })
  };

  state = {
    title: 'Welcome to React'
  };

  getChildContext() {
    return {
      app: {
        title: this.state.title,
        setTitle: title => this.setState({ title })
      }
    };
  }

  render() {
    const { title } = this.state;

    return (
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
  }
}

export default App;
