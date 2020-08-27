import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import App from './App';
import manageInvoices from './reducers/manageInvoice'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(manageInvoices, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)