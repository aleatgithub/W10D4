
//exports our actions 

export const RECEIVE_TODOS = "RECEIVE_TODOS"; 
export const RECEIVE_TODO = "RECEIVE_TODO"; 
// our todo actions will live here! :) 

// first action creater receives todos and populates the store
export const receiveTodos = todos => ({ //todos is an array arg
  type: "RECEIVE_TODOS",
  todos //key = value in ES6
});

// the second action creater receives one todo and will either add or update a single todo in the store

export const receiveTodo = todo => ({
  type: "RECEIVE_TODO",
  todo //window.store.getState()
});

