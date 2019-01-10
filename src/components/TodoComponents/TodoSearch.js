import React from 'react';

function TodoSearch(props) {
  return (
    <form className="todo-search" onSubmit={() => {}}>
      <input 
        type="text"
        placeholder="Search Todo List"
        value={props.searchText}
        name="searchText"
        onChange={props.handleInput}
        autoComplete="off"
      />
      Search Todo
    </form>
  );
}

export default TodoSearch;