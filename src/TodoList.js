import React from 'react';
import ItemAdder from './ItemAdder.js';

class TodoList extends React.Component {
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
        var htmlList = this.state.todoList.map((todoItem, index) =>
            <li key={index}>
                {todoItem}
                <button onClick={() => { this.removeItem(index) }}>X</button>
            </li>
        );

        return (
            <div className="todoList">
                <ul>{htmlList}</ul>
                <ItemAdder parentState={this.state} stateSetter={this.setState.bind(this)} />
            </div>
        );
    }
}

export default TodoList;