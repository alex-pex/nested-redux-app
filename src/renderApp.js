import { createElement } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './components/App';

const renderApp = store => {
  ReactDOM.render(createElement(Provider, { store }, createElement(App)), document.getElementById('root'));
};

export default store => {
  renderApp(store);

  if (module.hot) {
    module.hot.accept('./components/App', () => renderApp(store));
  }
};
