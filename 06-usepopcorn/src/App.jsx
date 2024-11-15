import { useState } from "react";

import NavBar from "./sections/NavBar/NavBar";
import MainSection from "./sections/main/MainSection";
import SearchBar from "./sections/NavBar/SearchBar";
import NumResult from "./sections/NavBar/NumResult";
import Box from "./sections/main/box/Box";
import WatchedMovieList from "./sections/main/box/watchedMovieList/WatchedList";
import MovieSummary from "./sections/main/box/movieSummary/MovieSummary";
import MovieList from "./sections/main/box/movieList/MovieList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MovieDetails from "./sections/SelectedMovie/MovieDetails";
import { useMovies } from "./hooks/useMovies";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  const { movies, isLoading, error } = useMovies(query);

  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  };

  function handleCloseMovie() {
    setSelectedId(null);
  }

  const handleAddWatchedMovie = (movie) => {
    setWatched((currWatched) => [...currWatched, movie]);
  };

  const handleDeleteWatched = (id) => {
    setWatched((currWatched) =>
      currWatched.filter((movie) => movie.imdbID !== id)
    );
  };

  return (
    <>
      <NavBar>
        <SearchBar query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </NavBar>
      <MainSection>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatchedMovie={handleAddWatchedMovie}
              watched={watched}
            />
          ) : (
            <>
              <MovieSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </MainSection>
    </>
  );
}
