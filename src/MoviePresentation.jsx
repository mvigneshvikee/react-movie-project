import { useEffect, useState } from "react";
import { MovieCounter } from "./MovieCounter";
  
  function MoviePresentation({ name, poster, rating, summary }) {
    const [clicked, setClicked] = useState(false);
    const [toggle, setToggle]= useState(false)
    useEffect(() =>{
setToggle(!toggle)
    },[clicked])
  return (
    <div className="movie">
      <img src={poster} alt={name}/>
      <div className="movie-title">
        <h1> {name} </h1>
        <h2>⭐{rating} </h2>
      </div>
      <button onClick={() => setClicked(!clicked)}>Toggle</button><br/>
      
      <p>{!toggle && summary}</p>
      <MovieCounter/>
    </div>
  );
}

export {MoviePresentation}