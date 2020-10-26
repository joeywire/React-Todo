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
    // console.log(this.state.task);
  }

  render() {
    return ( 
      <form>
        <input type="text" name="task" value={this.state.task} onChange={this.handleChange} />
        <button onClick={this.addTask}>Add Todo</button>
        <button>Clean Todo</button>
      </form>

    )
  }
};

export default TodoForm;