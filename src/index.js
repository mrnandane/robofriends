import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'tachyons';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';
import { searchRobo,  requestRobots } from './reducers';
import thunkMiddleware from 'redux-thunk';

/*NOTE: to apply middleware we need to import it from redux and call it as second parameter of createStore
* with some callback function..we are using logger here..to create logs of action
* */
const logger = createLogger();
const rootReducer = combineReducers({searchRobo, requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
