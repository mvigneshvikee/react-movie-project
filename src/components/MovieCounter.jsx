import { useState } from "react";
import Badge from "@mui/material/Badge";

export function MovieCounter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0); // Convention
  return (
    <div className="movieCounter-container">
      <div className="buttons">
        <Badge badgeContent={like} color="primary">
          <button onClick={() => setLike(like + 1)}>
            <i
              className="fa-solid fa-thumbs-up"
              style={{ color: "#3e51b5" }}
            ></i>
          </button>
        </Badge>

        <Badge badgeContent={disLike} color="error">
          <button onClick={() => setDisLike(disLike + 1)}>
            <i
              className="fa-solid fa-thumbs-down fa-flip-horizontal"
              style={{ color: "#e92064" }}
            ></i>
          </button>
        </Badge>
      </div>
    </div>
  );
}
