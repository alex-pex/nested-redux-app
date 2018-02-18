import { Component, createElement } from 'react';
import PropTypes from 'prop-types';

const objectMap = (source, mapper) => {
  const result = {};
  Object.entries(source).forEach(([key, value]) => {
    result[key] = mapper(value, key);
  });
  return result;
};

const provideContext = (contexts = {}) => WrappedComponent =>
  class ContextContainer extends Component {
    static childContextTypes = objectMap(contexts, context => PropTypes.shape(context.childContextTypes).isRequired);

    state = objectMap(contexts, context => context.initialState);

    getChildContext() {
      return objectMap(contexts, (context, name) => {
        const setContextState = (update, callback) => {
          const contextCallback = callback && (nextState => callback(nextState[name]));

          if (typeof update === 'function') {
            this.setState(
              prevState => ({
                ...prevState,
                [name]: update(prevState[name])
              }),
              contextCallback
            );
          } else {
            this.setState({ [name]: update }, contextCallback);
          }
        };

        return context.getChildContext(this.state[name], setContextState);
      });
    }

    render() {
      return createElement(WrappedComponent, this.props);
    }
  };

export default provideContext;
