import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updateClickCount} from './Features/Button/ButtonSlice';


const App = () => {
  const dispatch = useDispatch();
  const buttons = useSelector((state) => state.buttons);

  let alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleClick = (buttonName) => {
    dispatch(updateClickCount({ buttonName }));
  };

  return (
    <div>
      {alphabet.split('').map((letter) => (
        <button key={letter} onClick={() => handleClick(letter)}>
          {letter}
        </button>
      ))}
      <table>
        <thead>
          <tr>
            <th>Button</th>
            <th>Click Count</th>
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
  );
};

export default App;