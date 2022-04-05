const SearchBar = ({ query, onChange, onSubmit }) => {
    return (
      <form onSubmit={onSubmit}>
        <input type="text" name="query" value={query} onChange={onChange} />
        <input type="submit" value="Search" />
      </form>
    );
  };
  
  export default SearchBar;