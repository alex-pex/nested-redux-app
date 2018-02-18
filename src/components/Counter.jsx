import React from 'react';
import PropTypes from 'prop-types';
import provideCounter from '../containers/provideCounter';

const Counter = (props, { app, counter }) => (
  <div style={{ margin: '0 10px' }}>
    <h3>Local state</h3>
    <p>
      <strong>{counter.value}</strong> click(s)
    </p>
    <button onClick={() => counter.increment()}>clickMe!</button>

    <h3>Global state</h3>
    <input type="text" value={app.title} onChange={event => app.setTitle(event.target.value)} />
  </div>
);

Counter.contextTypes = {
  app: PropTypes.shape({
    title: PropTypes.string,
    setTitle: PropTypes.func
  }),
  counter: PropTypes.shape({
    value: PropTypes.number,
    setTitle: PropTypes.func
  })
};

export default provideCounter(Counter);
