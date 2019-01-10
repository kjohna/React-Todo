import React, { Component } from 'react';

class TodoForm extends Component {
  render() {
    return (
      <form className="todo-form" onSubmit={this.props.addTodoItem}>
        <input 
          type="text" 
          placeholder="New Todo Item"
          value={this.props.inputText}
          onChange={this.props.handleInput}
        />
        <button>Add Todo</button>
        <button type="button" onClick={this.props.clearCompleted}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;