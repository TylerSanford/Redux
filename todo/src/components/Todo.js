import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';

const Todo = ({ onClick, completed, text }) => (
  <div class="container">
    <div id="toggle" class="incomplete" onClick={btnChangeClass}>
      {completed ? 'Done' : 'Not Done'}
    </div>
    <div class="text">{text}</div>
  </div>
);

function btnChangeClass() {
  let element = document.getElementById("toggle");
  element.classList.toggle("completed");
  
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
