import "@fortawesome/fontawesome-free/css/all.min.css";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import { AddMovie } from "./pages/AddMovie";
import { ColorGame } from "./pages/ColorGame";
import { Home } from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetails";
import { MovieList } from "./pages/MovieList";
import { MovieUpdate } from "./pages/MovieUpdate";
import { UserList } from "./pages/UserList";
import "./styles.css";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

// Component = Logic + UI
export default function App() {
  const navigate = useNavigate();
  // Logic Starts
  // Logic End
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/movieList")}>
            Movies
          </Button>
          <Button color="inherit" onClick={() => navigate("/movies/new")}>
            Add Movie
          </Button>
          <Button color="inherit" onClick={() => navigate("/colorgame")}>
            Color Game
          </Button>
          <Button color="inherit" onClick={() => navigate("/userlist")}>
            Users
          </Button>
        </Toolbar>
      </AppBar>

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
