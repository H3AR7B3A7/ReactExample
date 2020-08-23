import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { v4 as uuid } from "uuid";

class App extends Component {

    state = {
        todos: [
            {
                id: uuid(),
                title: 'Take out trash',
                completed: false
            },
            {
                id: uuid(),
                title: 'Pay bills',
                completed: false
            },
            {
                id: uuid(),
                title: 'Do dishes',
                completed: false
            }
        ]
    }

    // Toggle Completed
    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        });
    }

    // Delete Todo
    delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
    }

    // Add Todo
    addTodo = (title) => {
        const newTodo = {
            id: uuid(),
            title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo] });
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header />
                    <AddTodo addTodo={this.addTodo} />
                    <Todos todos={this.state.todos}
                        markComplete={this.toggleComplete}
                            delTodo={this.delTodo} />
                </div>
            </div>
        );
    }
}

export default App;