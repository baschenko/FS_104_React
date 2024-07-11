import s from './Forms.module.css';

const UncontroledForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Forma submit');
    const form = e.target;
    const { username, email, password } = form.elements;
    console.log({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <span>Name</span>
          <input type="text" name="username" />
        </label>
        <label htmlFor="">
          <span>Email</span>
          <input type="text" name="email" />
        </label>
        <label htmlFor="">
          <span>Password</span>
          <input type="text" name="password" />
        </label>
        <button type="submit">Registred</button>
      </form>
    </div>
  );
};

export default UncontroledForm;
