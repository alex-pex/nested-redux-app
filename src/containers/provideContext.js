import { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import objectMap from './objectMap';

const provideContext = (contexts = {}, mapContextToProps) => WrappedComponent =>
  class ContextProvider extends Component {
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
      const contextualProps = mapContextToProps ? mapContextToProps(this.state, this.props) : {};
      return createElement(WrappedComponent, { ...this.props, ...contextualProps });
    }
  };

export default provideContext;
