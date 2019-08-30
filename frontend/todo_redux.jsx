
import React from 'react';
import ReactDOM from 'react-dom'; 
import configureStore from './store/store';
import App from './components/app';
import allTodos from './reducers/selectors';
import Root from './components/root'; //get paths straight! 

import * as todoActions from './actions/todo_actions';


document.addEventListener('DOMContentLoaded', () => {
  // debugger
  const store = configureStore(); // remember to call your function!!
  window.store = store;
 
  window.receiveTodo = todoActions.receiveTodo;
  window.receiveTodos = todoActions.receiveTodos;
  // window.allTodos = allTodos; //not working

  const content = document.getElementById("content");

  ReactDOM.render(<Root store={store}/>, content); 
  
});