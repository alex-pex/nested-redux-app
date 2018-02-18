import PropTypes from 'prop-types';
import provideContext from './provideContext';

const counter = {
  childContextTypes: {
    value: PropTypes.number
  },

  initialState: {
    value: 0
  },

  getChildContext: (state, setState) => ({
    value: state.value,
    increment: () => setState(prevState => ({ value: prevState.value + 1 }))
  })
};

export default provideContext({ counter });
