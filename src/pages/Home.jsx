import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "Abhinav's Film", release_date: 2009 },
    { id: 2, title: "Dura's Film", release_date: 2000 },
    { id: 3, title: "Abipsha's Film", release_date: 2099 },
    { id: 4, title: "Evan's Film", release_date: 2069 },
    { id: 5, title: "Prayush's Film", release_date: 1998 },
  ];
  const handleSearch = () => {
    alert(searchQuery);
  };
  return (
    <div className="home">
      <form action="" onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for Movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (
              <MovieCard key={movie.id} movie={movie} />
            )
        )}
      </div>
    </div>
  );
}
export default Home;
