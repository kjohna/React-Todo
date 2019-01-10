import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';

const todoDataStarter = [
  {
    task: 'Organize Garage',
    id: '1528817077286',
    completed: true
  },
  {
    task: 'Bake Cookies',
    id: '1528817084358',
    completed: false
  }
];

let todoStoredData = null;
localStorage.removeItem('tododata');

if (localStorage.getItem('tododata')) {
  console.log("local storage found");
  todoStoredData = JSON.parse(localStorage.getItem('tododata'));
} else {
  console.log("NO LOCAL STORAGE FOUND");
  setStorage('tododata', todoDataStarter);
  todoStoredData = JSON.parse(localStorage.getItem('tododata'));
}

function setStorage(itemName, obj) {
  localStorage.setItem(itemName, JSON.stringify(obj));
  console.log("setStorage: ", obj);
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: todoStoredData, 
      inputText: ""
    }
  }

  handleInput = (e) => {
    this.setState({
      inputText: e.target.value
    });
  }

  addTodoItem = (e) => {
    e.preventDefault();
    console.log('addItem: ', this.state.inputText);
    this.setState({
      todoData: [
        ...this.state.todoData,
        {
          task: this.state.inputText,
          id: Date.now().toString(), // easier to deal with later if stored as string
          completed: false
        }
      ],
      inputText: ""
    }, () => {setStorage('tododata', this.state.todoData)});
  }

  handleTodoClick = (e) => {
    // console.log(e.target.dataset.task, " clicked, id=", e.target.dataset.id);
    // const changedItem = this.state.todoData.filter(item => item.id == e.target.dataset.id);
    const updatedTodoData = this.state.todoData.map(item => {
      if(item.id === e.target.dataset.id) {
        item.completed = !item.completed;
      }
      return item;
    });
    this.setState({ todoData: updatedTodoData }, () => {setStorage('tododata', this.state.todoData)});
  }

  handleClearCompleted = (e) => {
    console.log("clear completed clicked");
    const updatedTodoData = this.state.todoData.filter(item => 
      item.completed === false);
    this.setState({ todoData: updatedTodoData }, () => {setStorage('tododata', this.state.todoData)});
  }

  render() {
    // console.log(this.state.inputText);
    return (
      <div className="app-todo-list">
        <h2>Todo Today</h2>
        <TodoList 
          todoData={this.state.todoData} 
          handleTodoClick={this.handleTodoClick}
        />
        <TodoForm 
          handleInput={this.handleInput}
          addTodoItem={this.addTodoItem} 
          clearCompleted={this.handleClearCompleted}
          inputText={this.state.inputText}
        />
      </div>
    );
  }
}

export default App;
