import { useState } from "react";
import { useNavigate } from "react-router";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const resetMovieForm = () => {
    setName("");
    setPoster("");
    setRating("");
    setSummary("");
    setTrailer("");
  };

  const navigate = useNavigate();

  const addMovie = async (event) => {
    event.preventDefault(); // no refresh

    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };

    // Existing movies + new Movie
    const response = await fetch(
      "https://68959014039a1a2b288f7c3b.mockapi.io/movies",
      {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
    navigate("/movieList");
    resetMovieForm();
  };

  return (
    <form onSubmit={addMovie} className="add-movie-form">
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder="Name"
      />
      <input
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        type="text"
        placeholder="Poster"
      />
      <input
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        type="number"
        placeholder="Rating"
      />
      <input
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        type="text"
        placeholder="Summary"
      />
      <input
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        type="text"
        placeholder="Trailer"
      />

      {/* Task 3.2 - Add the color to the list */}
      {/* Existing Colors + New Color */}
      {/* submit -> onSubmit event triggered */}
      {/* <button type="submit">➕ Add</button> */}
      <Button type="submit" variant="contained">
        Add Movie
      </Button>
      {/* <Button color="error" type="submit" variant="contained">
        ➕ Add
      </Button> */}
    </form>
  );
}
