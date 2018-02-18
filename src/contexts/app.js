import PropTypes from 'prop-types';

const app = {
  childContextTypes: {
    title: PropTypes.string,
    onTitleChange: PropTypes.func
  },

  initialState: {
    title: 'Welcome to React'
  },

  getChildContext: (state, setState) => ({
    title: state.title,
    setTitle: title => setState({ title })
  })
};

export default app;
