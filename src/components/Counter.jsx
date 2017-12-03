import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTitle, incrementCounter } from '../actions';

const Counter = ({ title, value, onTitleChange, onButtonClick }) => (
  <div style={{ margin: '0 10px' }}>
    <h3>Local state</h3>
    <p>
      <strong>{value}</strong> click(s)
    </p>
    <button onClick={onButtonClick}>clickMe!</button>
    <h3>Global state</h3>
    <input type="text" value={title} onChange={onTitleChange} />
  </div>
);

Counter.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, { reduxKey }) => ({
  title: state.app.title,
  value: state[reduxKey].value
});

const mapDispatchToProps = (dispatch, { reduxKey }) => ({
  onTitleChange: event => dispatch(updateTitle(event.target.value)),
  onButtonClick: () => dispatch(incrementCounter(reduxKey))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
