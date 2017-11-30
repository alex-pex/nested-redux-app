import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTitle } from '../actions';

const Counter = props => (
  <div style={{ margin: '0 10px' }}>
    <h3>Local state</h3>
    <p>
      <strong>0</strong> click(s)
    </p>
    <button>clickMe!</button>
    <h3>Global state</h3>
    <input type="text" value={props.title} onChange={props.onTitleChange} />
  </div>
);

Counter.propTypes = {
  title: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  title: state.title
});

const mapDispatchToProps = dispatch => ({
  onTitleChange: event => dispatch(updateTitle(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
