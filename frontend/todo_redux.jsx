import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {createTodo} from './actions/todo_actions'

document.addEventListener('DOMContentLoaded', event => {
  
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);

  window.store = store; //debug
  window.createTodo = createTodo;

  const rootElement = document.getElementById('content')
  ReactDOM.render(<Root store={store} />, rootElement);

});
