import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from './Features/Todo/counter';
import style from './App.module.css';

export  default function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  
  return (
    <div>
    <h2>Counter</h2>
    <div className={style.container}>
    <button aria-label="Decrement value" onClick={() => dispatch(decrement())} className={style.btn}>
        Decrement
      </button>
      <span>{count}</span>
      <button aria-label="Increment value" onClick={() => dispatch(increment())} className={style.btn}>
        Increment
      </button>
      <button aria-label="Increment value" onClick={() => dispatch(reset())} className={style.btn}>
        Reset
      </button>
      
      

    </div>
    </div>
  )
}