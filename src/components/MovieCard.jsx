import "../css/MovieCard.css"
function MovieCard({movie}){

    function onFavClick(){
        alert(`You have added ${movie.title} to your favourites!`)
    }
    return(
        <div className="movie-card">
        <div className="movie-poster"></div>
        <img src={movie.url} alt={movie.title}/>
        <div className="movie-overlay" ></div>
        <button className="favourite-btn" onClick={onFavClick} >
        ♥ 
        </button>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>

        </div>
    )
}
export default MovieCard;