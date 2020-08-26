import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import manageInvoice from './reducers/manageInvoice';

import { Provider } from 'react-redux';
import { createStore } from 'redux';



const store = createStore(manageInvoice)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)