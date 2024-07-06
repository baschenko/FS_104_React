import s from './ColorPicker.module.css';
import colors from '../../assets/colors.json';
import { useState } from 'react';

export const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState('white');

  const handleClick = color => {
    console.log(color);
    setCurrentColor(color);
  };

  return (
    <section className={s.bgWrapper} style={{ backgroundColor: currentColor }}>
      <div className={s.pallette}>
        <h1>Current color: {currentColor}</h1>
        <ul className={s.list}>
          {colors.map(item => (
            <li
              className={s.item}
              key={item.id}
              onClick={() => handleClick(item.color)}
            >
              {item.color}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
