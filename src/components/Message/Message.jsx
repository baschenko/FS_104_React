import s from './Message.module.css';

const Message = ({ author = 'default', message }) => {
  return (
    <div>
      <p className={s.title}>Autor: {author}</p>
      <p>{message}</p>
    </div>
  );
};

export default Message;
