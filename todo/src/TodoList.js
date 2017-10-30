import React from 'react';

const TodoList = props => {
  return (
    <div>
      Todo Item:{' '}
      <input type="text" value={props.item} onChange={props.changeHandler} />
      <button type="submit" onClick={props.addTodo}>
        Add to list
      </button>
      <ul>
        {props.todos.map((todo, i) => {
          return <li key={i + 1}>{todo}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
