export const KEY = process.env.REACT_APP_OMDB_API_KEY;

export const API = async ({
  setMovies,
  query,
  setIsLoading,
  setError,
  setNoData,
  signal,
}) => {
  try {
    setIsLoading(true);
    setError(false);
    await new Promise((resolve) => setTimeout(resolve, 500));

    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
      { signal }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data from API. Status: ${res.status}`);
    }

    const data = await res.json();
    const noMovie = data.Response === "False" && (
      <h1 style={{ color: " #ffffff" }}>No movies found</h1>
    );
    setNoData(noMovie);
    setMovies(data.Search);
  } catch (err) {
    if (err.name === "AbortError") {
      return;
    }

    setError(true);
    setNoData(
      <h1 style={{ color: "#ffffff" }}>An error occurred. Please try again.</h1>
    );
  } finally {
    setIsLoading(false);
  }

  if (!query.length) {
    setMovies([]);
    setNoData(false);
    return;
  }
};
