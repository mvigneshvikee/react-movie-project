import { MovieList } from "./MovieList";
import { UserList } from "./UserList";
import "./styles.css";
import { ColorGame } from "./ColorGame";
import { Route, Routes, Link } from "react-router";
import { useState } from "react";

// Component = Logic + UI
export default function App() {
  // Logic Starts

  // Logic End
  return (
    <div className="App">
      <nav>
        <Link to="/movieList">MovieList</Link> |
        <Link to="/colorgame"> ColorGame </Link> |
        <Link to="/userlist"> UserList </Link> |<Link to="/home"> Home </Link> |
        <Link to="/addmovie"> Add Movies </Link>
      </nav>
      <Routes>
        <Route path="movielist" element={<MovieList />} />
        <Route path="colorgame" element={<ColorGame />} />
        <Route path="userlist" element={<UserList />} />
        <Route path="home" element={<Home />} />
        <Route path="addmovie" element={<AddMovies />} />
      </Routes>
      {/* <MsgList /> */}
      {/* <UserList /> */}
      {/* <MovieList /> */}
      {/* <Counter /> */}
      {/* <ColorGame /> */}
      {/* <ColorGame /> */}
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to Movie App</h1>
    </div>
  );
}
function AddMovies() {
  const [movieList, setMovieList] = useState([]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const handleAddMovie = () => {
    const newMovie = {
      name: name,
      url: url,
      rating: rating,
      summary: summary,
    };

    // Add new movie to list
    setMovieList([...movieList, newMovie]);

    // Optional: clear input fields
    setName("");
    setUrl("");
    setRating("");
    setSummary("");

    console.log("Movie List:", [...movieList, newMovie]);
  };

  return (
    <div className="add-movie-container">
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder="Enter a Movie Name"
      />
      <input
        value={url}
        onChange={(event) => setUrl(event.target.value)}
        type="text"
        placeholder="Enter a Post Link"
      />
      <input
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        type="number"
        placeholder="Enter a Movie Rating"
      />
      <textarea
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        name=""
        id=""
      >
        Enter
      </textarea>
      <button onClick={handleAddMovie}>Submit</button>
    </div>
  );
}
