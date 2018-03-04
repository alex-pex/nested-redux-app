import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTitle } from '../reducers/app';
import { incrementCounter } from '../reducers/counters';

const Counter = ({ app, counter }) => (
  <div style={{ margin: '0 10px' }}>
    <h3>Local state</h3>
    <p>
      <strong>{counter.value}</strong> click(s)
    </p>
    <button onClick={counter.increment}>clickMe!</button>
    <h3>Global state</h3>
    <input type="text" value={app.title} onChange={event => app.setTitle(event.target.value)} />
  </div>
);

const AppShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired
});

const CounterShape = PropTypes.shape({
  value: PropTypes.number,
  increment: PropTypes.func.isRequired
});

Counter.propTypes = {
  app: AppShape.isRequired, // eslint-disable-line react/no-typos
  counter: CounterShape.isRequired // eslint-disable-line react/no-typos
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  app: {
    ...ownProps.app,
    setTitle: value => dispatch(updateTitle(value))
  },
  counter: {
    ...ownProps.counter,
    increment: () => dispatch(incrementCounter(ownProps.counter.id))
  }
});

export default connect(null, mapDispatchToProps)(Counter);
