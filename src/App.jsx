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
        <Link to="/userlist"> UserList </Link> |<Link to="/"> Home </Link> |
        <Link to="/addmovie"> Add Movies </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movielist" element={<MovieList />} />
        <Route path="colorgame" element={<ColorGame />} />
        <Route path="userlist" element={<UserList />} />
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
  const defaultMovieList = [
    {
      name: "Jai Bhim",
      url: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
    },
    {
      name: "RRR",
      url: "https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    },
    {
      name: "Vikram",
      url: "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      rating: 8.4,
      summary:
        "Members of a black ops team must track and eliminate a gang of masked murderers.",
    },
    {
      name: "Baahubali",
      url: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    },
  ];
  const [movieList, setMovieList] = useState(defaultMovieList);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const handleAddMovie = () => {
    if (name == "" && url == "" && rating == "" && summary == "") {
      alert("Enter a all Fields");
    }
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
    // console.log("Movie List:", [...movieList]);
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
      >
        Enter
      </textarea>
      <button onClick={handleAddMovie}>Submit</button>
      {movieList.map((movie) => {
        return <MoviePresentation {...movie} />;
      })}
    </div>
  );
}

function MoviePresentation({ name, url, rating, summary }) {
  const [show, setShow] = useState(false);
  // Component is a function of State. If State is changed Re-rendering the Component. C =F(S)
  const summaryStyle = {
    display: show ? "block" : "none",
  };
  return (
    <div className="movie">
      <img src={url} alt={name} />
      <div className="movie-title">
        <h1> {name} </h1>
        {/* Conditional Styling  */}
        <h2
          style={{
            color: rating > 8.5 ? "green" : "red",
            fontSize: rating > 8.5 ? "25px" : "20px",
          }}
        >
          ⭐{rating}{" "}
        </h2>
      </div>
      <button className="show-summary" onClick={() => setShow(!show)}>
        Toggle
      </button>
      <br />
      {/* Conditional Styling  */}
      <p style={summaryStyle}>{summary}</p>

      {/* Conditional Rendering  */}
      {/* <p>{show && summary}</p> */}
      {/* <MovieCounter /> */}
    </div>
  );
}
