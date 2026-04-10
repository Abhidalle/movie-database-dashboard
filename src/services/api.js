const API_KEY = "f85eb738c4c0d9794e6a58b2efb906fc"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    try {
        let allMovies = [];
        // Fetch 50 pages in parallel to get ~1000 movies
        const pagePromises = [];
        for (let page = 1; page <= 50; page++) {
            pagePromises.push(
                fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`)
                    .then(response => response.json())
                    .then(data => data.results)
            );
        }
        const pages = await Promise.all(pagePromises);
        allMovies = pages.flat();
        return allMovies;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        return [];
    }
};

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
        )}` 
    );
    const data = await response.json();
    return data.results;
};