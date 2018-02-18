import { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import objectMap from './objectMap';

const connectContext = (contexts = {}, mapContextToProps) => WrappedComponent =>
  class ContextConnector extends Component {
    static contextTypes = objectMap(contexts, context => PropTypes.shape(context.childContextTypes).isRequired);

    render() {
      const contextualProps = mapContextToProps ? mapContextToProps(this.context, this.props) : this.context;
      return createElement(WrappedComponent, { ...this.props, ...contextualProps });
    }
  };

export default connectContext;
