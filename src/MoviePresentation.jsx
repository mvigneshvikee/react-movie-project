 function MoviePresentation({ name, poster, rating, summary }) {
  return (
    <div className="movie">
      <img src={poster} alt={name}/>
      <div className="movie-title">
        <h1> {name} </h1>
        <h2>⭐{rating} </h2>
      </div>
      <p>{summary}</p>
    </div>
  );
}

export {MoviePresentation}