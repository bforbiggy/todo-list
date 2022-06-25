import './App.css';
import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

class ItemAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Code something decent.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        // Add new list element and save
        var todoList = this.props.parentState.todoList;
        todoList.push(this.state.value);
        localStorage.setItem("todoList", JSON.stringify(todoList));

        // Set parent todoList to refresh it
        this.props.stateSetter({ todoList: todoList });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* <textarea value={this.state.value} onChange={this.handleChange} /> */}
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <Button type="submit" value="Submit">Add to list</Button>
            </form>
        );
    }
}

export default ItemAdder;