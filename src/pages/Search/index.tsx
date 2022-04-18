import { useState } from "react";
import Gif from "../../components/Gif";
import SearchBar from "../../components/SearchBar";

const Search = () => {
  const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = (any:any) => {
    any.preventDefault();
    getData();
  };

  const handleChange = (any:any) => {
    setQuery(any.target.value);
  };

  const getData = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${query
      .replace(/\s+/g, "+")
      .toLowerCase()}&api_key=${GIPHY_KEY}&limit=12`;

    const response = await fetch(url)
      .then((res) => res.json())
      .catch((e) => console.log(e));
    setResults(response.data);
  };

  return (
    <>
      <SearchBar
        query={query}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <br />
      {results.map((it:any) => (
        <Gif key={it.id} source={it.images.downsized.url} title={it.title} />
      ))}
    </>
  );
};

export default Search;
