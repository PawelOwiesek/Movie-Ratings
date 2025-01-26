import { Results } from "./styled";

function SearchResult({ movies }) {
  return <Results>Found {movies?.length} results</Results>;
}

export default SearchResult;
