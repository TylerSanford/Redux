import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';

const Todo = ({ onClick, completed, text }) => (
  <div class="container">
    <div class="incomplete" onClick={onClick}>
      {completed ? 'Done' : 'Not Done'}{' '}
    </div>
    <div class="text">{text}</div>
  </div>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
