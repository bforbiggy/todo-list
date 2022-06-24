import logo from './logo.png';
import './App.css';
import React from 'react';
import TodoList from './TodoList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To-Do List</h1>
          <TodoList />
        </header>
      </div>
    );
  }
}

export default App;