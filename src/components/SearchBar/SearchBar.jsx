const SearchBar = ({ filterValue, handleChangeFilter }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="search"
        value={filterValue}
        onChange={e => handleChangeFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
