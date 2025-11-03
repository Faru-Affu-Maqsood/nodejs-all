import { useState } from "react";
import { useEffect } from "react";

const FetchDataEffect = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>First Post Title</h1>
      {posts.length > 0 ? <p>{posts[0].title}</p> : <p>Loading...</p>}
    </>
  );
};

export default FetchDataEffect;
