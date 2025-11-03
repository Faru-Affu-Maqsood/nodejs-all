import { useState } from "react";

function App () {

  const [movies, setMovies] = useState([
    { id: 1, title: "Spider Man", rating: 7 },
    { id: 2, title: "Superman", rating: 6 }
  ]);

  const handleClick = () => {
    setMovies(movies.map(m => m.id === 1 ? { ...movies, title: 'John Wick 5' } : m));
  };

  return (
    <>
      <ul>
        {
          movies.map(m => (
            <li key={crypto.randomUUID()}>
              {m.title}
            </li>
          ))
        }
      </ul>
      <button onClick={handleClick}>Change Name</button>
    </>
  );
}

export default App;
