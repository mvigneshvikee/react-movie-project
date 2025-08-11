import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";

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
      <TextField
        variant="outlined"
        label="Name"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <TextField
        variant="outlined"
        label="Poster"
        onChange={(event) => setPoster(event.target.value)}
        value={poster}
      />

      <TextField
        variant="outlined"
        label="Rating"
        onChange={(event) => setRating(event.target.value)}
        value={rating}
      />

      <TextField
        variant="outlined"
        label="Summary"
        onChange={(event) => setSummary(event.target.value)}
        value={summary}
      />

      <TextField
        variant="outlined"
        label="Trailer"
        onChange={(event) => setTrailer(event.target.value)}
        value={trailer}
      />

      {/* Task 3.2 - Add the color to the list */}
      {/* Existing Colors + New Color */}
      {/* submit -> onSubmit event triggered */}
      {/* <button type="submit">➕ Add</button> */}
      <Button type="submit" variant="contained" startIcon={<AddIcon />}>
        Add Movie
      </Button>
      {/* <Button color="error" type="submit" variant="contained">
        ➕ Add
      </Button> */}
    </form>
  );
}
