const Message = ({author = 'default', message}) => {
     return (
    <div>
          <p>Autor: {author}</p>
          <p>{message }</p>
    </div>
  )
}

export default Message
