import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const SearchBar = ({ query, onChange, onSubmit }) => {
    return (
      <form data-testid="SearchBarForm" onSubmit={onSubmit}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" name="query" value={query} onChange={onChange} />
        <Button type="submit" variant="contained" color="success">
          Search
        </Button>
      </form>
    );
  };
  
  export default SearchBar;