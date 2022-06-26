import React from 'react';
import ItemAdder from './ItemAdder.js';
import styled from 'styled-components'

const DeleteButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 0.5em;
  padding: 0.4em 1em;
`;

const ListedItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: justify;
    margin: 30px;
    box-shadow: rgba(17, 28, 41, 0.4) 0px 0px 0px 2px, rgba(17, 28, 41, 0.65) 0px 4px 6px -1px, rgba(32, 34, 35, 0.08) 0px 1px 0px inset;
`;

const CheckBox = styled.input`
  background-color: #fff;
  margin: 0.1;
  font: inherit;
  color: currentColor;
  width: 0.8em;
  height: 0.8em;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
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
            <ListedItem key={index}>
                <CheckBox type="checkbox" value="false" />
                {todoItem}
                <DeleteButton onClick={() => { this.removeItem(index) }}>X</DeleteButton>
            </ListedItem>
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