import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';
import './style/base.scss';
import App from './App';

// const store = createStore()

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
