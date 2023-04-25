
import { createSlice } from '@reduxjs/toolkit';

let nextTodoId = 0;

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        const { id, text, completed } = action.payload;
        state.push({ id, text, completed });
      },
      prepare(text) {
        return { payload: { id: ++nextTodoId, text, completed: false } };
      },
    },
    removeTodo(state, action) {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
    toggleComplete(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
}); 

export const { addTodo, removeTodo, toggleComplete } = todosSlice.actions;

export default todosSlice.reducer;








// import { createSlice } from '@reduxjs/toolkit';

// let nextTodoId = 0;

// const todosSlice = createSlice({
//   name: 'todos',
//   initialState: [],
//   reducers: {
//     addTodo: {
//       reducer(state, action) {
//         const { id, text } = action.payload;
//         state.push({ id, text });
//       },
//       prepare(text) {
//         return { payload: { id: ++nextTodoId, text } };
//       },
//     },
//     removeTodo(state, action) {
//       const id = action.payload;
//       return state.filter((todo) => todo.id !== id);
//     },
//   },
// });

// export const { addTodo, removeTodo } = todosSlice.actions;

// export default todosSlice.reducer;
