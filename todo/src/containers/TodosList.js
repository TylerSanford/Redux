import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTodos } from '../actions';
import { bindActionCreators } from 'redux';

class TodosList extends Component {

  renderTodos() {
    return this.props.todos.map((todos, i) => {
      return (
        <li
          onClick={() => this.props.selectTodos(todos)}
          key={i}>
          {todos.value}
        </li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderTodos()}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => { //methods on the returned object will be a prop
  // When we call selectMovie we should pass the action to all reducers
  return bindActionCreators({ selectTodos: selectTodos }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);