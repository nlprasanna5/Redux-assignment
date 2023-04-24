import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo,toggleComplete } from './Features/Todo/TodoSlice';
import style from './App.module.css';


function App() {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(text));
    setText('');
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };
  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <div className={style.container}>
      <div className={style.name}>
        <h2>Todo Application</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button className={style.btn}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <>
          <li className={style.content}>
            <p key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </p>
           <div>
            <button onClick={()=>handleToggleComplete(todo.id)} className={style.addBtn}>
              completed
            </button>
            </div>
            <div>
            <button onClick={() => handleRemove(todo.id)} className={style.addBtn}>Remove</button>
            </div>
            </li>

          </>
        ))}
      </ul>
    </div>
  );
}

export default App;
