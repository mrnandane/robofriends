import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'tachyons';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';
import {searchRobo} from './reducers';

/*NOTE: to apply middleware we need to import it from redux and call it as second parameter of createStore
* with some callback function..we are using logger here..to create logs of action
* */
const logger = createLogger();
const store = createStore(searchRobo, applyMiddleware(logger));


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
