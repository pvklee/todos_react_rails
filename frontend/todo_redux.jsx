import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', event => {
  
  // const preloadedState = localStorage.state ?
  //   JSON.parse(localStorage.state) : {};

  const preloadedState = {}; //debugging

  let store = configureStore(preloadedState);

  window.store = store; //debug
  
  const rootElement = document.getElementById('content')
  ReactDOM.render(<Root store={store} />, rootElement);

});
