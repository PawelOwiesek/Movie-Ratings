const KEY = 32389744;

export const API = ({ setMovies, query, setIsLoading, setError }) => {
  try {
    setIsLoading(true);
    setTimeout(async () => {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
      );
      if (!res.ok) {
        setError(true);
      }

      const data = await res.json();
      setMovies(data.Search);
      setIsLoading(false);
    }, 3000);
  } catch (err) {
    console.error(err.message);
  }
};
