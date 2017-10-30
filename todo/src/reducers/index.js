import { combineReducers } from 'redux';
import TodosReducer from './todos';
import ActiveTodos from './active-todos';

const rootReducer = combineReducers({
  todos: TodosReducer,
  activeTodos: ActiveTodos,
});

export default rootReducer;