import { useState } from "react";
import { MovieList } from "./MovieList";
import { UserList } from "./UserList";
import "./styles.css";

// Component = Logic + UI
export default function App() {
  // Logic Starts

  // Logic End
  return (
    <div className="App">
      {/* <MsgList /> */}
      {/* <UserList /> */}
      {/* <MovieList /> */}
      {/* <Counter /> */}
      <ColorGame />
    </div>
  );
}
function ColorGame() {
  const [value, setValue] = useState("orange");
  const boxColor = {
    backgroundColor: value,
  };
  return (
    <div>
      <input
        style={boxColor}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        type="text"
      />
      <h2>{value}</h2>
    </div>
  );
}
