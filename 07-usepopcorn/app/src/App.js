import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Search from "./components/Search";
import NumResult from "./components/NumResult";
import Box from "./components/Box";
import WatchedList from "./components/WatchedList";
import WatchedSummary from "./components/WatchedSummary";
import MovieList from "./components/MovieList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MovieDetails from "./components/MovieDetails";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddWatch = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handleDeleteWatched = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.id !== id));
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await axios.get(
          `https://www.omdbapi.com/?i=tt3896198&apikey=6eae0191&s=${query}`,
          { cancelToken: source.token },
        );

        res.data.Search && setMovies(res.data.Search);
        setError("");
      } catch (err) {
        if (err.name !== "CanceledError") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    handleCloseMovie();
    fetchMovies();

    return () => {
      source.cancel("Component unmounted");
    };
  }, [query]);

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectedMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          <>
            {selectedId ? (
              <MovieDetails
                selectedId={selectedId}
                onCloseMovie={handleCloseMovie}
                onAddWatched={handleAddWatch}
                watched={watched}
                movies={movies}
              />
            ) : (
              <>
                <WatchedSummary watched={watched} />
                <WatchedList
                  watched={watched}
                  onDeleteMovie={handleDeleteWatched}
                />
              </>
            )}
          </>
        </Box>
      </Main>
    </>
  );
}
