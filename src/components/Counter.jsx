import React from 'react';
import PropTypes from 'prop-types';
import provideContext from '../containers/provideContext';
import connectContext from '../containers/connectContext';
import compose from '../containers/compose';
import appContext from '../contexts/app';
import counterContext from '../contexts/counter';

const Counter = ({ title, count, onTitleChange, onButtonClick }) => (
  <div style={{ margin: '0 10px' }}>
    <h3>Local state</h3>
    <p>
      <strong>{count}</strong> click(s)
    </p>
    <button onClick={onButtonClick}>clickMe!</button>

    <h3>Global state</h3>
    <input type="text" value={title} onChange={event => onTitleChange(event.target.value)} />
  </div>
);

Counter.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

const mapContextToProps = ({ counter, app }) => ({
  count: counter.value,
  title: app.title,
  onButtonClick: () => counter.increment(),
  onTitleChange: title => app.setTitle(title)
});

export default compose(
  // keep-multiline
  provideContext({ counter: counterContext }),
  connectContext({ counter: counterContext, app: appContext }, mapContextToProps)
)(Counter);
