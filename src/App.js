import React from 'react';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  handleAddTask = (task) => {
    this.setState({
      tasks: [...this.state.tasks, {
        task: task,
        id: this.state.tasks.length, 
        completed: false
      }]
    })
  }

  render() {
    return (
      <div>
        <h2>Much To Do...</h2>
        {this.state.tasks.map(item => (
          <Todo task={item.task} />
        ))}
        <TodoForm handleAddTask={this.handleAddTask}/>
      </div>
    );
  }
}

export default App;
