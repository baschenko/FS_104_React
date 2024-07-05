import Footer from './Footer/Footer';
import Header from './Header/Header';
import Message from './Message/Message';

export const App = () => {
  const message = 'Find work';
    const isOnline = false;
    const age = 21;
    const fruits = ['banana', 'apple', 'lemon'];
  return (
    <main>
      <Header />
      <Message author="Petro" message="Prodam Holod" />
      <Message author="Stepan" message={message} />

          <Message message=" Holod" />
          {isOnline && <h1>Welcome back</h1>}
          {!isOnline && <h1>Please Login</h1>}
          {age > 18 ? <h2>Ого, який дорослий!!</h2> : <h2>Треба ще підрости</h2>}
          <ul>
              {fruits.map(item => (<li key={item}>{item}</li>))}
      </ul>
          <Footer />
    </main>
  );
};
