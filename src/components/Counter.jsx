import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';

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

const mapStoresToProps = ({ counter, store }) => ({
  count: counter.value,
  title: store.title,
  onButtonClick: () => counter.increment(),
  onTitleChange: title => store.setTitle(title)
});

export default inject(mapStoresToProps)(Counter);
