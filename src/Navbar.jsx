import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>V Cinemas</h3>
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/movieList">Movie List</a>
        <a href="/movies/new">Add Movie</a>
        <a href="/colorgame">Color Game</a>
        <a href="/userlist">User List</a>
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
