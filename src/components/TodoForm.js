import React from 'react';


class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value
    });
  };

  addTask = (e) => {
    e.preventDefault();
    this.props.handleAddTask(this.state.task);
    this.setState({
      task: ""
    })
  }

  clearTasks = (e) => {
    e.preventDefault();
    this.props.clean();
  }

  render() {
    return ( 
      <form>
        <input type="text" name="task" value={this.state.task} onChange={this.handleChange} />
        <button onClick={this.addTask}>Add Todo</button>
        <button onClick={this.clearTasks}>Clean Todo</button>
      </form>

    )
  }
};

export default TodoForm;