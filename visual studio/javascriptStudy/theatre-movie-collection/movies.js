function createMovie(title, director, genre) {
    try {
        const movie = createMovie();
        
        return movie;
    } catch (error) {
        console.error(error.message);
    };
};

exports = {createMovie};
/* function createMovie(title, director, genre) {
    try {
        if (title !== title || director !== director || genre !== genre) {
            throw new Error("Here is the movie detail ....");
        }

        const movie = {
            title: "Iron man",
            director: "",
            genre
        };

        return movie;
    } catch (error) {
        console.error("Error creating movie:", error);
    }
}

createMovie();
*/