import { useEffect, useState } from 'react';
import List from './List/List';
import { fetchNews } from '../services/api';

const App = () => {
  const [hits, setHits] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchNews('react', 25);
        setHits(response.hits);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <List items={hits} />
    </div>
  );
};

export default App;

//https://hn.algolia.com/api/v1/
