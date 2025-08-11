import { Link, Navigate, Route, Routes } from "react-router";
import { UserList } from "./pages/UserList";
import { ColorGame } from "./pages/ColorGame";
import { Home } from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetails";
import { MovieList } from "./pages/MovieList";
import { AddMovie } from "./pages/AddMovie";
import { MovieUpdate } from "./pages/MovieUpdate";
import "./styles.css";
import { Navbar } from "./Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Component = Logic + UI
export default function App() {
  // Logic Starts
  // Logic End
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="films" element={<Navigate to="/movieList" replace />} />
        <Route path="movieList" element={<MovieList />} />
        <Route path="movies/new" element={<AddMovie />} />
        <Route path="colorgame" element={<ColorGame />} />
        <Route path="userlist" element={<UserList />} />
        {/* <Route path="addmovie" element={<AddMovies />} /> */}
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="/movie-update/:id" element={<MovieUpdate />} />
      </Routes>
    </div>
  );
}
