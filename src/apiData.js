const KEY = 32389744;

export const API = ({ setMovies }) => {
  fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=Rocky`)
    .then((res) => res.json())
    .then((data) => setMovies(data.Search));
};
