import React, { Component } from 'react';

function TodoForm(props) {
    return (
      <form className="todo-form" onSubmit={props.addTodoItem}>
        <input 
          type="text" 
          placeholder="New Todo Item"
          value={props.inputText}
          onChange={props.handleInput}
        />
        <button>Add Todo</button>
        <button type="button" onClick={props.clearCompleted}>Clear Completed</button>
      </form>
    );
}

export default TodoForm;