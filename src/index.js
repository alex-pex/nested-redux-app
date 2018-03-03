import './index.css';
import createStore from './createStore';
import renderApp from './renderApp';
import registerServiceWorker from './registerServiceWorker';

const store = createStore();

renderApp(store);
registerServiceWorker();
