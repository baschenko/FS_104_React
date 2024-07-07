import { useEffect } from 'react';
import s from './Modal.module.css';
const Modal = ({ children, title = 'Default modal', onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      console.log(e.key);
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    console.log('Modal is painting');
    const intervalId = setInterval(() => {
      console.log(new Date().toLocaleTimeString());
    }, 1000);

    const timeoutId = setTimeout(() => {
      console.log('bababam');
    }, 3000);
    return () => {
      console.log('Modal is closed');
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className={s.wrapper} onClick={handleBackdropClick}>
      <div className={s.content}>
        <>
          <h1>{title}</h1>
          <hr />
        </>
        <button className={s.closeBtn} onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
