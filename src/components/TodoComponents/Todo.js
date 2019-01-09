import React, { Component } from 'react';

import './Todo.css';

class Todo extends Component {
  
  render() {
    let completedStyle = "";
    if (this.props.listItem['completed']) {
      completedStyle = " todo-item-complete";
    }
    return (
      <div 
        className={`todo-item${completedStyle}`}
        onClick={this.props.handleTodoClick}
        data-id={this.props.listItem['id']}
        data-task={this.props.listItem['task']}
      >
        {this.props.listItem['task']}
      </div>
    );
  }
}

export default Todo;