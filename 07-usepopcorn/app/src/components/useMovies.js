import { useState, useEffect } from "react";
import axios from "axios";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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
    // handleCloseMovie();
    fetchMovies();

    return () => {
      source.cancel("Component unmounted");
    };
  }, [query]);

  return { movies, isLoading, error };
}
