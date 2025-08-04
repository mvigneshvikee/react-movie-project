import { useState } from "react";
import { MovieList } from "./MovieList";
import "./styles.css";

// Component = Logic + UI
export default function App() {
  // Logic Starts

  // Logic End
  return (
    <div className="App">
      {/* <MsgList /> */}
      {/* <UserList /> */}
      <MovieList />
      {/* <Counter /> */}
    </div>
  );
}


function Counter(){
  const [like, setLike] = useState(5);
  const [disLike, setDisLike] = useState(0); // Convention
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>👍{like}</button>
      <button onClick={() => setDisLike(disLike + 1)}>👎{disLike}</button>
      <progress max={like + disLike} value={like}></progress>
    </div>
  )
}