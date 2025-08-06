import { useEffect, useState } from "react";
import { MovieCounter } from "./MovieCounter";

function MoviePresentation({ name, poster, rating, summary }) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // setToggle(!toggle);
  }, [clicked]);
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
      <button className="show-summary" onClick={() => setClicked(!clicked)}>
        Toggle
      </button>
      <br />
      {/* Conditional Styling  */}
      {/* <p
        style={{
          display: clicked ? "block" : "none",
        }}
      >
        {summary}
      </p> */}

      {/* Conditional Rendering  */}
      <p>{clicked && summary}</p>
      <MovieCounter />
    </div>
  );
}

export { MoviePresentation };
