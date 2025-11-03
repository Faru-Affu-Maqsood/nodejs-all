import { useRef } from "react";

function App() {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Affu";
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus & Write Affu</button>
    </>
  );
}

export default App;
