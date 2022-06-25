import React from 'react';
import ItemAdder from './ItemAdder.js';
import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 0.5em;
  padding: 0.4em 1em;
`;

const Li = styled.li`
    list-style-type: '- ';
    text-align: left;
`;

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
            <Li key={index}>

                {todoItem}
                <Button onClick={() => { this.removeItem(index) }}>X</Button>
            </Li>
        );

        return (
            <div className="todoList">
                {htmlList}
                <ItemAdder parentState={this.state} stateSetter={this.setState.bind(this)} />
            </div>
        );
    }
}

export default TodoList;