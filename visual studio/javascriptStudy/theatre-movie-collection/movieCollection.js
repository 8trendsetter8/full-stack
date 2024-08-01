import createMovie from "./movies.js";

function addMovie(movie) {
    try {
        if (movie !== movie || director !== director || genre !== genre) {
            throw new Error("not a movie");
        } 
    } catch (error) {
        console.log(error.message);
    }
};
    
function displayMovies() {
    try {
        console.log(`Title: ${movie.title} Director: ${movie.director} Genre: ${movie.genre}`);
    } catch (error) {
        console.log(error.message);
    }
};
    
function searchMovies(genre, director) {
    try {
        if (genre !== genre || director !== director) {
            console.log("This is not a movie");
        } else {
            console.log(`this is the result for genre: ${movie.genre} director: ${movie.director}.`);
        }
    } catch (error) {
        console.log(error.message);
    }
};

export { addMovie, displayMovies, searchMovies };

/* const movieCollection = [];

function addMovies(movie) {
    try {
        if (!movie) {
            throw new Error("Invalid movie")
        }
    }
} */