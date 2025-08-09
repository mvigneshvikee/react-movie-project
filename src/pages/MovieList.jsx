import { useEffect, useState } from "react";
import { MoviePresentation } from "../components/MoviePresentation";
// import { AddMovie } from "./AddMovie";
// import { Movie } from "./Movie";

export function MovieList() {
  const [movies, setMovies] = useState([]);
  // console.log(movies);
  async function getMovies() {
    const response = await fetch(
      "https://68959014039a1a2b288f7c3b.mockapi.io/movies",
      { method: "GET" }
    );
    const data = await response.json();
    setMovies(data);
  }

  // Component Mounted - once
  useEffect(() => {
    getMovies();
  }, []);

  // Delete -> Refresh
  const deleteMovie = async (id) => {
    console.log("Deleting...", id);
    const response = await fetch(
      `https://6402db84f61d96ac487212a6.mockapi.io/movies/${id}`,
      { method: "DELETE" }
    );

    const data = await response.json();
    console.log(data);
    getMovies();
  };

  // C=F(S)

  return (
    <div>
      <section className="movie-list-container">
        {movies.map((movie) => (
          <MoviePresentation
            key={movie.id}
            movie={movie}
            deleteBtn={
              <button onClick={() => deleteMovie(movie.id)}>
                🗑️ Delete Me
              </button>
            }
          />
        ))}
      </section>
    </div>
  );
}
