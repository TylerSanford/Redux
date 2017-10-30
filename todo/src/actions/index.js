export const selectTodos = (todos) => {
    return {
      type: 'TODOS_SELECTED',
      payload: todos,
    };
  };