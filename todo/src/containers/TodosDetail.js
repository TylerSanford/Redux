import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodosDetail extends Component {
  render() {
    if (!this.props.todos) {
      return (
        <div>Select a todos</div>
      );
    }
    return (
      <div>
        <h2>{this.props.todos.value}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.activeTodos,
  };
};

export default connect(mapStateToProps)(TodosDetail);