const KEY = 32389744;

export const API = async ({ setMovies, query }) => {
  const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
  const data = await res.json();
  setMovies(data.Search);
};
