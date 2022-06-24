import logo from './logo.png';
import './App.css';
import React from 'react';
import ItemAdder from './ItemAdder.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoList: JSON.parse(localStorage.getItem("todoList")) || ["Ram into matthew's house"] };
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(index) {
    var todoList = this.state.todoList;
    todoList.splice(index, 1);
    this.setState({ todoList: todoList });
  }

  render() {
    // Create renderable html version of todo list
    var htmlList = this.state.todoList.map((todo, index) =>
      <li key={index}>
        {todo}
        <button onClick={() => { this.removeItem(index) }}>X</button>
      </li>
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To-Do List</h1>

          <ul>{htmlList}</ul>
          <ItemAdder parentState={this.state} stateSetter={this.setState.bind(this)} />
        </header>
      </div>
    );
  }
}

export default App;