import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { nextWatch, clearNextWatch } = useMovieContext();

  if (nextWatch.length === 0) {
    return (
      <div className="favorites">
        <div className="favorites-empty">
          <h2>No Movies to watch Next yet</h2>
          <p>Start Adding Movies to the Next Watch by clicking the heart button on them and they will appear here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites">
      <h2>My Next Watch List</h2>
      <div className="next-watch-controls">
        <p className="watch-count">{nextWatch.length} movie{nextWatch.length !== 1 ? 's' : ''} in your list</p>
        <button className="clear-btn" onClick={clearNextWatch}>
          Clear All
        </button>
      </div>
      <div className="movies-grid">
        {nextWatch.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;