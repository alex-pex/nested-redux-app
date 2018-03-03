import React from 'react';
import PropTypes from 'prop-types';
import { connectStore } from 'redux-box';
import app from '../modules/app';
import counters from '../modules/counters';

const Counter = ({ app, counters, index }) => (
  <div style={{ margin: '0 10px' }}>
    <h3>Local state</h3>
    <p>
      <strong>{counters[index].value}</strong> click(s)
    </p>
    <button onClick={() => counters.incrementCounter(index)}>clickMe!</button>
    <h3>Global state</h3>
    <input type="text" value={app.title} onChange={event => app.updateTitle(event.target.value)} />
  </div>
);

Counter.propTypes = {
  app: PropTypes.object.isRequired,
  counters: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired
};

export default connectStore({ app, counters })(Counter);
