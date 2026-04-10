import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"

function MovieCard({movie}){
    const { addToNextWatch, removeFromNextWatch, isInNextWatch } = useMovieContext()

    function onFavClick(){
        if (isInNextWatch(movie.id)) {
            removeFromNextWatch(movie.id)
        } else {
            addToNextWatch(movie)
        }
    }

    return(
        <div className="movie-card">
          <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay"></div>
            <button 
                className={`favorite-btn ${isInNextWatch(movie.id) ? 'active' : ''}`} 
                onClick={onFavClick}
                title={isInNextWatch(movie.id) ? "Remove from Next Watch" : "Add to Next Watch"}
            >
              ♥
            </button>
          </div>
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
          </div>
        </div>
    )
}
export default MovieCard;