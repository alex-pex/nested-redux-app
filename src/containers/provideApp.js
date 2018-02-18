import { Component, createElement } from 'react';
import PropTypes from 'prop-types';

const provideApp = WrappedComponent =>
  class AppContainer extends Component {
    static childContextTypes = {
      app: PropTypes.shape({
        title: PropTypes.string,
        onTitleChange: PropTypes.func
      })
    };

    state = {
      title: 'Welcome to React'
    };

    getChildContext() {
      return {
        app: {
          title: this.state.title,
          setTitle: title => this.setState({ title })
        }
      };
    }

    render() {
      return createElement(WrappedComponent, this.props);
    }
  };

export default provideApp;
