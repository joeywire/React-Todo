import React from 'react';

class ToDoForm extends React.Component {
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

  addTask = () => {

  }

  render() {
    return ( 
      <form>
        <input type="text" name="task" value={this.state.task} onChange={this.handleChange} />
        <button>Add Todo</button>
        <button>Clean Todo</button>
      </form>

    )
  }
};

export default ToDoForm;