import React, { Component } from 'react';

import Todo from './Todo';

function TodoList(props) {
  const listItems = props.todoData.map(listItem => {
    return (
      <Todo 
      listItem={listItem} 
      key={listItem.id}
      handleTodoClick={props.handleTodoClick}
      />
    );
  });

  return(
    <div className="todo-list">
      {listItems}
    </div>
  );
}

export default TodoList;