

// export const allTodos = (state) => Object.keys(state.todos).map(id => state.todos[id]); 
//using object destructuring our function can look like this: 

export const allTodos = ({ todos }) => (
  Object.keys(todos).map(id => todos[id])
);