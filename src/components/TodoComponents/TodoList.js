import React, { Component } from 'react';

import Todo from './Todo';

class TodoList extends Component {
  
  render() {
    const listItems = this.props.todoData.map(listItem => {
      return (
        <Todo 
        listItem={listItem} 
        key={listItem.id}
        handleTodoClick={this.props.handleTodoClick}
       />
      );
    });

    return(
      <div className="todo-list">
        {listItems}
      </div>
    );
  }
}

export default TodoList;