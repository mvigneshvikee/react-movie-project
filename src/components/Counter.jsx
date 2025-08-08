import { useState } from "react";



export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0); // Convention
  return (
    <div className="counter-container">
      <div className="buttons">
      <button onClick={() => setLike(like + 1)}>👍{like}</button>
      <button onClick={() => setDisLike(disLike + 1)}>👎{disLike}</button>

      </div>
      <progress max={like + disLike} value={like}></progress>
      {like - disLike >= 10 && <h1>You are Awesome</h1>}
    </div>
  );
}


