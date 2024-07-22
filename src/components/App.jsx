import { useEffect, useState } from 'react';
import List from './List/List';
import { fetchNews } from '../services/api';
import SearchBar from './SearchBar/SearchBar';

const App = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState('react');

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchNews(query, 25);
        setHits(response.hits);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [query]);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <List items={hits} />
    </div>
  );
};

export default App;

//https://hn.algolia.com/api/v1/
