import { Component, createElement } from 'react';
import PropTypes from 'prop-types';

const provideCounter = WrappedComponent =>
  class CounterContainer extends Component {
    static childContextTypes = {
      counter: PropTypes.shape({
        value: PropTypes.number
      })
    };

    state = {
      value: 0
    };

    getChildContext() {
      return {
        counter: {
          value: this.state.value,
          increment: () => this.setState(prevState => ({ value: prevState.value + 1 }))
        }
      };
    }

    render() {
      return createElement(WrappedComponent, this.props);
    }
  };

export default provideCounter;
