import { useState } from "react";

export function MovieCounter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0); // Convention
  return (
    <div className="movieCounter-container">
      <div className="buttons">
        <button onClick={() => setLike(like + 1)}>
          <i className="fa-solid fa-thumbs-up" style={{ color: "#3e51b5" }}></i>
          {like}
        </button>
        <button onClick={() => setDisLike(disLike + 1)}>
          <i
            className="fa-solid fa-thumbs-down fa-flip-horizontal"
            style={{ color: "#e92064" }}
          ></i>
          {disLike}
        </button>
      </div>
    </div>
  );
}
