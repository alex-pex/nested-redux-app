import React from 'react';
import PropTypes from 'prop-types';
import provideContext from '../containers/provideContext';
import counter from '../contexts/counter';

const Counter = (props, context) => (
  <div style={{ margin: '0 10px' }}>
    <h3>Local state</h3>
    <p>
      <strong>{context.counter.value}</strong> click(s)
    </p>
    <button onClick={() => context.counter.increment()}>clickMe!</button>

    <h3>Global state</h3>
    <input type="text" value={context.app.title} onChange={event => context.app.setTitle(event.target.value)} />
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

export default provideContext({ counter })(Counter);
