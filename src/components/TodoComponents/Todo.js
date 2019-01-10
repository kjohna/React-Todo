import React, { Component } from 'react';

import './Todo.css';

function Todo(props) {
    let completedStyle = "";
    if (props.listItem['completed']) {
      completedStyle = " todo-item-complete";
    }
    return (
      <div 
        className={`todo-item${completedStyle}`}
        onClick={props.handleTodoClick}
        data-id={props.listItem['id']}
        data-task={props.listItem['task']}
      >
        {props.listItem['task']}
      </div>
    );
}

export default Todo;