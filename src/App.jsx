import { Link, Navigate, Route, Routes } from "react-router";
import { UserList } from "./pages/UserList";
import { ColorGame } from "./pages/ColorGame";
import { Home } from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetails";
import { MovieList } from "./pages/MovieList";
import "./styles.css";

// Component = Logic + UI
export default function App() {
  // Logic Starts
  // Logic End
  return (
    <div className="App">
      <nav>
        <Link to="/"> Home </Link> |<Link to="/movieList">MovieList</Link> |
        <Link to="/colorgame"> ColorGame </Link> |
        <Link to="/userlist"> UserList </Link> |
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="films" element={<Navigate to="/movieList" replace />} />
        <Route path="movieList" element={<MovieList />} />
        <Route path="colorgame" element={<ColorGame />} />
        <Route path="userlist" element={<UserList />} />
        {/* <Route path="addmovie" element={<AddMovies />} /> */}
        <Route path="movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}
