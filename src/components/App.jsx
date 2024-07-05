import Footer from './Footer/Footer';
import Header from './Header/Header';
import Message from './Message/Message';
import '../index.css';

export const App = () => {
  const message = 'Find work';
  const age = 21;
  const fruits = ['banana', 'apple', 'lemon'];
  return (
    <main>
      <Header />
      <h2 className="title">Hello styles</h2>
      <Message author="Petro" message="Prodam Holod" />
      <Message author="Stepan" message={message} />

      <Message message=" Holod" />

      {age > 18 ? <h2>Ого, який дорослий!!</h2> : <h2>Треба ще підрости</h2>}
      <ul>
        {fruits.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Footer />
    </main>
  );
};
