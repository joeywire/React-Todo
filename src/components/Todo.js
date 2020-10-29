import React from 'react';
import './Todo.css'

const Todo = (props) => {
  const {item, toggle} = props;

  const markComplete = () => {
    toggle(item.id)
  }

  return(
    <p onClick={markComplete} className={`is${item.completed}`}>{item.task}</p>
  )
}

export default Todo;