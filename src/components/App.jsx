import Footer from './Footer/Footer';
import Header from './Header/Header';
import '../index.css';
import Profile from './Profile/Profile';
import profileData from '../assets/user.json';
import s from './App.module.css';
import clsx from 'clsx';
import Modal from './Modal/Modal';

export const App = () => {
  const age = 21;
  const fruits = ['banana', 'apple', 'lemon'];
  return (
    <>
      <Header />
      <h2 className="title">Hello styles</h2>
      <Profile user={profileData} />

      {age > 18 ? <h2>Ого, який дорослий!!</h2> : <h2>Треба ще підрости</h2>}
      <ul>
        {fruits.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Footer />
      <div className={s.wrapper}>
        <div className={clsx(s.box)}></div>
        <div className={clsx(s.red)}></div>
        <div className={clsx(s.box)}></div>
        <div className={clsx(s.black)}></div>
      </div>
      <Modal>
        <p>Hello</p>
      </Modal>
    </>
  );
};
