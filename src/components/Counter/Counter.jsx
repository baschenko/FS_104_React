import { useEffect, useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  //Рендериться лише на етапі монтування
  useEffect(() => {
    console.log('Вітаю я відрендерився');
  }, []);

  //Виконується ПЕРШИЙ раз і всі наступні, коли міняється лічильник!

  useEffect(() => {
    console.log('Counter is:', counter);
    if (counter === 10) {
      setCounter(0);
    }
  }, [counter]);

  useEffect(() => {
    console.log('Step is:', step);
  }, [step]);

  const handleClick = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);  xxxx
    // setCounter(counter + 1);

    setCounter(prev => prev + step);
  };
  const handleMinusClick = () => {
    setCounter(prev => prev - step);
  };

  const handleReset = () => {
    setCounter(0);
    setStep(1);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input
          type="text"
          value={step}
          onChange={e => setStep(+e.target.value)}
        />
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
