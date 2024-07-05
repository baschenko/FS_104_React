import clsx from 'clsx';
import s from './Profile.module.css';
import { FaUserLarge } from 'react-icons/fa6';
import { MdLocalPhone } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';

const Profile = ({ user }) => {
  return (
    <article className={s.wrapper}>
      <section className={s.userCard}>
        <div className={s.imageWrapper}>
          <img src={user.image} />
        </div>
        <div className={s.content}>
          <h2>
            <FaUserLarge className={s.icon} /> {user.lastName} {user.firstName}
          </h2>
          <p>
            <AiOutlineMail /> Email: {user.email}
          </p>
          <p>
            <MdLocalPhone /> Phone: {user.phone}
          </p>
          <p className={clsx(user.age > 18 ? s.green : s.red)}>
            Age: {user.age}
          </p>
          <p>Gender: {user.gender}</p>
          <p>
            Address: {user.address.address} {user.address.city}
          </p>
        </div>
      </section>
    </article>
  );
};

export default Profile;
