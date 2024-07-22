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
  const [page, setPage] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetchNews(query, page, 5);

        setHits(prev => [...prev, ...response.hits]);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [page, query]);

  const handleSetQuery = query => {
    setQuery(query);
    setHits([]);
    setPage(0);
  };

  return (
    <div>
      <SearchBar setQuery={handleSetQuery} />
      <List items={hits} />
      {isLoading && <Loader />}
      {isError && <h2>Something went wrong! Try again...</h2>}
      <button type="button" onClick={() => setPage(prev => prev + 1)}>
        Load more
      </button>
    </div>
  );
};

export default App;

//https://hn.algolia.com/api/v1/
