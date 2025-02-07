export const KEY = 32389744;

export const API = async ({
  setMovies,
  query,
  setIsLoading,
  setError,
  setNoData,
}) => {
  try {
    setIsLoading(true);
    setError(false);
    await new Promise((resolve) => setTimeout(resolve, 500));

    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
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
    console.error(err.message);
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
