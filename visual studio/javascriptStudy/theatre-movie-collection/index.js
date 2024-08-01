import createMovie from './movies.js';
import { addMovie, displayMovies, searchMovies } from './movieCollection.js';

function main() {
    const movie = [
        {
            title: "Inception",
            director: "Christopher Nolan",
            genre: "Sci-Fi, Thriller"
        },

        {
            title: "The Dark Knight",
            director: "Christopher Nolan",
            genre: "Action, Crime, Drama"
        },

        {
            title: "Pulp Fiction",
            director: "Quentin Tarantino",
            genre: "Creme, Drama"
        },

        {
            title: "The Godfather",
            director: "Francis Ford Coppola",
            genre: "Crime, Drama"
        },

        {
            title: "The Shawshank Redemption",
            director: "Frank Darabont",
            genre: "Drama"
        },
    ];

    addMovie(movie);
    console.log(`All Movies: ${movie}`);
    displayMovies();
    searchMovies();
};