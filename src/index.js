import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {todolist_reducer}  from './redux/reducers/todolist_reducer'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

const store = createStore(todolist_reducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

if (module.hot)
  module.hot.accept();

