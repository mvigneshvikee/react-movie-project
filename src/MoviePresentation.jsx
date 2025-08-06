import { useEffect, useState } from "react";
import { MovieCounter } from "./MovieCounter";

function MoviePresentation({ name, poster, rating, summary }) {
  const [show, setShow] = useState(false);
  // Component is a function of State. If State is changed Re-rendering the Component.
  const summaryStyle = {
    display: show ? "block" : "none",
  };
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
      <MovieCounter />
    </div>
  );
}

export { MoviePresentation };
