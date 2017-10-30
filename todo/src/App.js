import React, { Component } from 'react';
import TodoList from './TodoList';
import TodosList from './containers/TodosList';
import TodosDetail from './containers/TodosDetail';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItem: '',
      todos: []
    };
    this.handleTodoItem = this.handleTodoItem.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleTodoItem(event) {
    this.setState({ todoItem: event.target.value });
  }

  handleAddTodo() {
    let item = this.state.todoItem;
    const todos = this.state.todos;
    todos.push({ item: item, completed: false });
    this.setState({ todos, todoItem: '' });
  }

  render() {
    return (
      <div className="App">
        <TodosList
          changeHandler={this.handleTodoItem}
          addTodo={this.handleAddTodo}
          item={this.todoItem}
          todos={this.state.todos}
        />
        <TodosDetail />
      </div>
    );
  }
}

export default App;
