import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>Logo</div>
      <div className={s.title}>Hola</div>
    </header>
  );
};

export default Header;
