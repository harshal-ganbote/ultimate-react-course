import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import StarRating from "../../components/StarRating";
import Loader from "../../components/Loader";
import { useKey } from "../../hooks/useKey";

const KEY = "5951abdc";

const MovieDetails = ({
  selectedId,
  onCloseMovie,
  onAddWatchedMovie,
  watched,
}) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);

  const countRef = useRef(0);

  useEffect(() => {
    if (userRating) {
      countRef.current += 1;
    }
  }, [userRating]);

  const isMovieWatched = watched.some((movie) => movie.imdbID === selectedId);
  const watchedMovieRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  const handleAdd = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      countRatingDecisions: countRef.current,
    };

    onAddWatchedMovie(newWatchedMovie);
    onCloseMovie();
  };

  useKey("Escape", onCloseMovie);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );

      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    };

    fetchMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (title) {
      document.title = `Movie: ${title}`;
    }

    return () => {
      document.title = "usePopcorn";
    };
  }, [title]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="details">
      <header>
        <button className="btn-back" onClick={onCloseMovie}>
          &larr;
        </button>
        <img src={poster} alt={`Poster of ${movie.title}`} />
        <div className="details-overview">
          <h2>{title}</h2>
          <p>
            {released} &bull;{runtime}
          </p>
          <p>{genre}</p>
          <p>
            <span>⭐️</span>
            {imdbRating} IMDb Rating
          </p>
        </div>
      </header>
      <section>
        <div className="rating">
          {!isMovieWatched ? (
            <>
              <StarRating
                maxRating={10}
                size={24}
                onSetRating={setUserRating}
              />

              {userRating > 0 && (
                <button className="btn-add" onClick={handleAdd}>
                  + Add to list
                </button>
              )}
            </>
          ) : (
            <p>
              You rated this movie with {watchedMovieRating} <span>⭐️</span>
            </p>
          )}
        </div>
        <p>
          <em>{plot}</em>
        </p>
        <p>Starring {actors}</p>
        <p>Directed by {director}</p>
      </section>
    </div>
  );
};

MovieDetails.propTypes = {
  selectedId: PropTypes.string,
  watched: PropTypes.array,
  onCloseMovie: PropTypes.func,
  onAddWatchedMovie: PropTypes.func,
};

export default MovieDetails;
