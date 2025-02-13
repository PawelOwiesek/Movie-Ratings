import { useEffect, useRef } from "react";
import { Search } from "./styled";
import { useKey } from "../useKey";

function SearchComponent({ setQuery, query }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useKey("Enter", function () {
    if (document.activeElement === inputRef.current) return;
    inputRef.current.focus();
    setQuery("");
  });

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
