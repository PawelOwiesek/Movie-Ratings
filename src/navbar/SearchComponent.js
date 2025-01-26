import { Search } from "./styled";

function SearchComponent({ setQuery, query }) {
  return (
    <Search
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
      }}
      type="text"
      placeholder="Search movie..."
    />
  );
}

export default SearchComponent;
