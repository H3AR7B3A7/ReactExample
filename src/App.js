import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header'
import Todos from './components/Todos';

class App extends Component {

    state = {
        todos: [
            {
                id: 1,
                title: 'Take out trash',
                completed: false
            },
            {
                id: 2,
                title: 'Pay bills',
                completed: false
            },
            {
                id: 3,
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

    render() {
        return (
            <div className="App">
                <Header/>
                <Todos todos={this.state.todos}
                    markComplete={this.toggleComplete}
                    delTodo={this.delTodo} />
            </div>
        );
    }
}

export default App;