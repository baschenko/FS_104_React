import { useEffect, useState } from 'react';
import List from './List/List';
import { fetchNews } from '../services/api';
import SearchBar from './SearchBar/SearchBar';
import Loader from './Loader/Loader';

const App = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState('react');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetchNews(query, 25);

        setHits(response.hits);
      } catch (error) {
        console.log(error);
        setIsError(true);
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
      {isError && <h2>Something went wrong! Try again...</h2>}
    </div>
  );
};

export default App;

//https://hn.algolia.com/api/v1/
