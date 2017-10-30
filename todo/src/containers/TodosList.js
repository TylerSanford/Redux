import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTodos } from '../actions';
import { bindActionCreators } from 'redux';

class TodosList extends Component {
  renderTodos() {
    return (
      <div>
        Todo Item:
        <input
          type="text"
          value={this.props.item}
          onChange={this.props.changeHandler}
        />
        <button type="submit" onClick={this.props.addTodo}>
          Add to list
        </button>
        <ul>
          {this.props.todos.map((todo, i) => {
            return (
              <li key={i + 1}>
                {todo.value} - {todo.completed}
              </li>
            );
            //     <li
            //   onClick={() => this.props.selectTodos(todo)}
            //   key={i}>
            //   {todo.value}
            // </li>
          })}
        </ul>
      </div>
    );
  }

  render() {
    return <ul>{this.renderTodos()}</ul>;
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  //methods on the returned object will be a prop
  // When we call selectMovie we should pass the action to all reducers
  return bindActionCreators({ selectTodos: selectTodos }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
