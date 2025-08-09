import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);
  // console.log(movies);
  async function getMovies() {
    const response = await fetch(
      // `https://68959014039a1a2b288f7c3b.mockapi.io/movies/${id}`
      "https://68959014039a1a2b288f7c3b.mockapi.io/movies/" + id
    );
    const data = await response.json();
    setMovie(data);
  }
  useEffect(() => {
    getMovies();
  }, []);
  const navigate = useNavigate();
  console.log(movie.trailer);

  return (
    <div
      style={{
        marginTop: "20px",
      }}
      className="movie-detail-container"
    >
      <iframe
        width="100%"
        height="650"
        src={movie.trailer}
        title="AVENGERS: DOOMSDAY (2026) – FIRST TRAILER | Robert Downey Jr as Doctor Doom | Marvel Comics"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      {/* <img src={movie.poster} alt={movie.name} className="movie-poster" /> */}
      <div className="movie-detail-content-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p className="movie-rating">⭐ {movie.rating}</p>
        </div>

        <p className="movie-summary">{movie.summary}</p>
        <button onClick={() => navigate("/movieList")}>Back</button>
      </div>
    </div>
  );
}
