import React from 'react';
import moment from 'moment';

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
        ---Created: {moment(parseInt(props.listItem['id'])).format('MMMM Do YYYY, h:mm:ss a')}
      </div>
    );
}

export default Todo;