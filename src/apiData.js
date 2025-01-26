const KEY = 32389744;

export const API = ({ setMovies, query, setIsLoading }) => {
  setIsLoading(true);
  setTimeout(async () => {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
    const data = await res.json();
    setMovies(data.Search);
    setIsLoading(false);
  }, 3000);
};
