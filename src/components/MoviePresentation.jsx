import { useState } from "react";
import { MovieCounter } from "./MovieCounter";
import { useNavigate } from "react-router";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Rating from "@mui/material/Rating";

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

        <button className="show-summary" onClick={() => setShow(!show)}>
          {show ? (
            <i
              className="fa-solid fa-angle-down"
              style={{ color: "#3e51b5" }}
            ></i>
          ) : (
            <i
              className="fa-solid fa-angle-up"
              style={{ color: "#3e51b5" }}
            ></i>
          )}
        </button>
        {/* <Link to={"/movies/" + id}>View Details</Link> */}
        <button
          className="view-details"
          style={{ backgroundColor: "white", outline: "none" }}
          onClick={() => navigate("/movies/" + id)}
        >
          <i
            className="fa-solid fa-circle-info"
            style={{ color: "#3e51b5" }}
          ></i>
        </button>
        {/* Conditional Styling  */}
      </div>
      <h2>
        <Rating
          name="movie-rating"
          defaultValue={rating / 2}
          precision={0.1}
          readOnly
        />
      </h2>

      <br />
      {/* Conditional Styling  */}
      <p style={summaryStyle}>{summary}</p>

      {/* Conditional Rendering  */}
      {/* <p>{show && summary}</p> */}
      <div className="bottom-buttons">
        <MovieCounter />
        <div className="edit-delete-container">
          <button onClick={() => navigate("/movie-update/" + id)}>
            <i className="fa-solid fa-pencil" style={{ color: "#e64cd1" }}></i>
          </button>
          {deleteBtn}
        </div>
      </div>
    </div>
  );
}

export { MoviePresentation };
