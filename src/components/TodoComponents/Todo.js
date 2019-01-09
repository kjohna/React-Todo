import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <div 
        className="todo-item" 
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