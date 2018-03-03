import React from 'react';
import PropTypes from 'prop-types';
import { Provider, PropTypes as MobxPropTypes, inject } from 'mobx-react';

import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

const App = ({ title, counters }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">{title}</h1>
    </header>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      {counters.map((counter, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Provider key={index} counter={counter}>
          <Counter />
        </Provider>
      ))}
    </div>
  </div>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
  counters: MobxPropTypes.arrayOrObservableArray.isRequired
};

const mapStoresToProps = ({ store }) => ({
  title: store.title,
  counters: store.counters
});

export default inject(mapStoresToProps)(App);
