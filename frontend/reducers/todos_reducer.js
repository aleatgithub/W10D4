
import { 
  RECEIVE_TODOS, 
  RECEIVE_TODO  //just some object destructuring going on here.
} from '../actions/todo_actions';


const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};


const todosReducer = (state = initialState, action) => { //ignore the complaint on action.

  Object.freeze(state);
  let nextState = Object.assign({}, state);  // creating a deep dup of the previous state

  switch (action.type) {
    case "RECEIVE_TODOS": 
      action.todos.forEach( todo => {
        nextState[todo.id] = todo; 
      });
      return nextState;
    case "RECEIVE_TODO": 
      const newTodo = { [action.todo.id]: action.todo };
       return Object.assign({}, state, newTodo); 
    default: {}
    return state;
  }
};

export default todosReducer;

// const newTodos = [{ id: 1, ...etc }, { id: 2, ...etc }, ...etc];
// store.getState(); // should return default state object
// store.dispatch(receiveTodo({ id: 3, title: "New Todo" }));
// store.getState(); // should include the newly added todo
// store.dispatch(receiveTodos(newTodos));
// store.getState(); // should return only the new todos