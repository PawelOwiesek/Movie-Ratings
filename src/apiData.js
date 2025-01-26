const KEY = 32389744;

export const API = async ({ setMovies, query, setIsLoading, setError }) => {
  try {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
    );

    if (!res.ok) {
      throw new Error("");
    }

    const data = await res.json();

    setMovies(data.Search);
  } catch (err) {
    console.error(err.message);
    setError(true);
  } finally {
    setIsLoading(false);
  }
};
