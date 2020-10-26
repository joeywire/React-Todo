import React from 'react';
import ToDoForm from './TodoForm';

class ToDo extends React.Component {
  constructor() {
    super();
    
  }

  render() {
    return (
      <div>
        <h2>Here is ToDo Component</h2>
        <ToDoForm handleAddTask={this.props.handleAddTask}/>
      </div>
    )
  }
}

export default ToDo;