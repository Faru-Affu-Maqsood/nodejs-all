import { Fragment, useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      if (posts && posts.length) setData(posts);
    }

    getData();
  }, []);

  return (
    <>
      <dl>
        {data.map(post => (
          <Fragment key={post.id}>
            <dt><h2>{post.title}</h2></dt>
            <dd>{post.body}</dd>
          </Fragment>
        ))}
      </dl>
    </>
  );
}

export default App;
