import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoSearch from './components/TodoComponents/TodoSearch';
import './App.css';

const todoDataStarter = [
  {
    task: 'Organize Garage',
    id: '1528817077286',
    completed: true,
    hide: false
  },
  {
    task: 'Bake Cookies',
    id: '1528817084358',
    completed: false,
    hide: false
  }
];

let todoStoredData = null;
// localStorage.removeItem('tododata');

if (localStorage.getItem('tododata')) {
  console.log("local storage found");
  todoStoredData = JSON.parse(localStorage.getItem('tododata'));
  // reset hidden items (in case of refresh during search)
  todoStoredData.map(item => {
    item.hide = false;
  })
} else {
  console.log("NO LOCAL STORAGE FOUND");
  setStorage('tododata', todoDataStarter);
  todoStoredData = JSON.parse(localStorage.getItem('tododata'));
}

function setStorage(itemName, obj) {
  localStorage.setItem(itemName, JSON.stringify(obj));
  // console.log("setStorage: ", obj);
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: todoStoredData,
      searchText: "",
      inputText: ""
    }
  }

  handleInput = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value // don't do this way:: inputText: e.target.value
      }, 
      () => {
        // console.log("handleInput callback working");
        if(this.state.searchText){
          this.handleSearch();
        } else {
          // reset hidden items if search input is cleared
          this.resetHiddenItems();
        }
      });
  }

  addTodoItem = (e) => {
    // handler function for add todo button
    e.preventDefault();  // prevent page refresh on press 
    console.log('addItem: ', this.state.inputText);
    this.setState({
      todoData: [
        ...this.state.todoData,
        {
          task: this.state.inputText,
          id: Date.now().toString(), // easier to deal with later if stored as string
          completed: false,
          hide: false
        }
      ],
      inputText: ""  // reset input text
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

  handleSearch = () => {
    // console.log("search for: ", this.state.searchText);
    const searchResults = this.state.todoData.map(item => {
      // set hide to true if the item contains the search string
      if(item.task.toLowerCase().includes(this.state.searchText.toLowerCase())) {
        item.hide = false;
      } else {
        item.hide = true;
      }
      return item;
    });
    this.setState({ todoData: searchResults }, () => {setStorage('tododata', this.state.todoData)});
  }

  resetHiddenItems() {
    console.log("reset hidden items");
    const todoTmp = this.state.todoData.map(item => {
      item.hide = false;
      return item;
    });
    // console.log(todoTmp);
    this.setState({todoData: todoTmp});
  }

  render() {
    // console.log(this.state.inputText);
    return (
      <div className="app-todo-list">
        <h2>Todo Today</h2>
        <TodoSearch 
          handleInput={this.handleInput}
          searchText={this.state.searchText}
        />
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
