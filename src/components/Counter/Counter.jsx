import { useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);  xxxx
    // setCounter(counter + 1);

    setCounter(prev => prev + 1);
  };
  const handleMinusClick = () => {
    setCounter(prev => prev - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <div className={s.flex}>
          <button onClick={handleMinusClick} className="btn">
            minus
          </button>
          <button onClick={handleReset} className="btn">
            reset
          </button>
          <button onClick={handleClick} className="btn">
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
