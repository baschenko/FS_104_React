import clsx from 'clsx';
import s from './Message.module.css';

const Message = ({ author = 'default', message }) => {
  const isOnline = true;
  return (
    <div>
      {/* <p className={`${s.green} ${s.title}`)></p> */}
      <p className={clsx(s.green, s.title, isOnline && s.online)}>
        Autor: {author}
      </p>
      <p>{message}</p>
    </div>
  );
};

export default Message;
