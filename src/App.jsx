import React from 'react';
import style from './App.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { updateClickCount } from './Features/Button/ButtonSlice';


const App = () => {
  const dispatch = useDispatch();
  const buttons = useSelector((state) => state.buttons);

  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleClick = (buttonName) => {
    dispatch(updateClickCount({ buttonName }));
  };

  return (
    <div className={style.container}>
      <h2>Frequency of Characters</h2>
      <div className={style.charContainer}>
      {alphabet.split('').map((letter) => (
        <div className={style.btnContainer}>
        <button key={letter} onClick={() => handleClick(letter)}>
          {letter}
        </button>
        </div>
      ))}
      </div>
      <div className={style.tableContainer}>
      <table>
        <thead>
          <tr>
            <th>Button</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(buttons).map((buttonName) => (
            <tr key={buttonName}>
              <td>{buttonName}</td>
              <td>{buttons[buttonName]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default App;