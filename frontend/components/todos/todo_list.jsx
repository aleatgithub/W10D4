import React from 'react'; 


class TodoList extends React.Component {

 render () {
   console.log(this.props); 
   return (
   <h3> Todo List goes here</h3>
   );
 }
}; 

export default TodoList;