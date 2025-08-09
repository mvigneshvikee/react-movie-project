import { useState } from "react";
import { MovieCounter } from "./MovieCounter";
import { Link, useNavigate } from "react-router";

function MoviePresentation({
  movie: { id, name, poster, rating, summary },
  deleteBtn,
}) {
  const [show, setShow] = useState(false);
  // Component is a function of State. If State is changed Re-rendering the Component. C =F(S)
  const summaryStyle = {
    display: show ? "block" : "none",
  };
  const navigate = useNavigate();
  return (
    <div className="movie">
      <img src={poster} alt={name} />
      <div className="movie-title">
        <h1> {name} </h1>
        {/* Conditional Styling  */}
        <h2
          style={{
            color: rating > 8.5 ? "green" : "red",
            fontSize: rating > 8.5 ? "25px" : "20px",
          }}
        >
          ⭐{rating}
        </h2>
      </div>
      <button className="show-summary" onClick={() => setShow(!show)}>
        Toggle
      </button>
      {/* <Link to={"/movies/" + id}>View Details</Link> */}
      <button
        className="view-details"
        onClick={() => navigate("/movies/" + id)}
      >
        View Details
      </button>
      <br />
      {/* Conditional Styling  */}
      <p style={summaryStyle}>{summary}</p>

      {/* Conditional Rendering  */}
      {/* <p>{show && summary}</p> */}
      <MovieCounter />
      {deleteBtn}
    </div>
  );
}

export { MoviePresentation };
