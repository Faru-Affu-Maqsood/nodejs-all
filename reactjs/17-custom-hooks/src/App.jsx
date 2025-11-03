import useFetch from "./custom_hooks/useFetch";

function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return <>{data && data.map((item) => <p key={item.id}>{item.title}</p>)}</>;
}

export default App;
