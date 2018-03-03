import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  state = {
    value: 0
  };

  handleButtonClick = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  };

  handleTitleChange = event => {
    const { app } = this.context;

    app.setTitle(event.target.value);
  }

  render() {
    const { value } = this.state;
    const { title } = this.context.app;

    return (
      <div style={{ margin: '0 10px' }}>
        <h3>Local state</h3>
        <p>
          <strong>{value}</strong> click(s)
        </p>
        <button onClick={this.handleButtonClick}>clickMe!</button>

        <h3>Global state</h3>
        <input type="text" value={title} onChange={this.handleTitleChange} />
      </div>
    );
  }
}

Counter.contextTypes = {
  app: PropTypes.shape({
    title: PropTypes.string,
    setTitle: PropTypes.func
  })
};

export default Counter;
