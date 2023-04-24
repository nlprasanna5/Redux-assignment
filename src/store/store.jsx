import { configureStore } from '@reduxjs/toolkit';
// import todosReducer from './todosSlice';
import todosReducer from '../Features/Todo/TodoSlice'

const store = configureStore({
  reducer: {
    todos: todosReducer
  },
});

export default store;
