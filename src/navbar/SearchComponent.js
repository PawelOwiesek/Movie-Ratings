import { useEffect, useRef } from "react";
import { Search } from "./styled";

function SearchComponent({ setQuery, query }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Search
      value={query}
      ref={inputRef}
      onChange={(e) => {
        setQuery(e.target.value);
      }}
      type="text"
      placeholder="Search movie..."
    />
  );
}

export default SearchComponent;
