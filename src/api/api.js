const base_url = "https://yts.mx/api/v2/list_movies.json?";

export async function fetchMovies(limit = 10, page = 1) {
    try {
        const response = await fetch(base_url+`?limit=${limit}&page=${page}`);
        const data = await response.json();
        return data.data.movies;  // Returns an array of movies
    } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
    }
}
