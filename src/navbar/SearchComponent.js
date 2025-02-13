import { useRef } from "react";
import { useKey } from "../useKey";
import { Search } from "./styled";

function SearchComponent({ setQuery, query }) {
  const inputRef = useRef(null);
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
