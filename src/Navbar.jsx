import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router";

export function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>V Cinemas</h3>
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/movieList">Movie List</Link>
        <Link to="/movies/new">Add Movie</Link>
        <Link to="/colorgame">Color Game</Link>
        <Link to="/userlist">User List</Link>
        {/* <a href="/">Home</a> */}

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
