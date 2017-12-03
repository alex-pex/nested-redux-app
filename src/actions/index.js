/* eslint-disable import/prefer-default-export */

export const updateTitle = nextTitle => ({
  type: 'UPDATE_TITLE',
  payload: nextTitle
});

export const incrementCounter = reduxKey => ({
  type: 'INCREMENT_COUNTER',
  target: reduxKey
});
