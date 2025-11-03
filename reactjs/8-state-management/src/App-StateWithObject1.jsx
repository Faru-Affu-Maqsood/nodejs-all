import { useState } from "react";

function App () {

  const [movie, setMovie] = useState({
    title: "Equalizer 3",
    rating: 7
  });

  const handleClick = () => setMovie({ ...movie, rating: 5 });


  return (
    <>
      <h2>Movie Title: {movie.title}</h2>
      <p>Rating: {movie.rating}</p>
      <button onClick={handleClick}>Change Rating</button>
    </>
  );
}

export default App;
