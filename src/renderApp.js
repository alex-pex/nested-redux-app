import { createElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

export default function renderApp() {
  ReactDOM.render(createElement(App), document.getElementById('root'));

  if (module.hot) {
    module.hot.accept('./components/App', () => {
      ReactDOM.render(createElement(App), document.getElementById('root'));
    });
  }
}
