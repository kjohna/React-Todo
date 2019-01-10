import React from 'react';

import './Todo.css';

function Todo(props) {
    let itemStyle = "todo-item";
    if (props.listItem['completed']) {
      itemStyle += " todo-item-complete";
    }
    if (props.listItem['hide']) {
      itemStyle += " todo-item-hide";
    }
    return (
      <div 
        className={itemStyle}
        onClick={props.handleTodoClick}
        data-id={props.listItem['id']}
        data-task={props.listItem['task']}
      >
        {props.listItem['task']}
      </div>
    );
}

export default Todo;