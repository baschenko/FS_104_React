import { useEffect, useState } from 'react';
import List from './List/List';
import { fetchNews } from '../services/api';
import SearchBar from './SearchBar/SearchBar';
import Loader from './Loader/Loader';

const App = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState('react');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchNews(query, 25);

        setHits(response.hits);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query]);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <List items={hits} />
      {isLoading && <Loader />}
    </div>
  );
};

export default App;

//https://hn.algolia.com/api/v1/
