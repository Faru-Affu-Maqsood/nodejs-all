import { createContext } from "react";
import ComponentA from "./components/ComponentA";

export const Data = createContext();
export const Data1 = createContext();

function App() {
  const name = "Afshaan";
  const age = 19;
  return (
    <>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
    </>
  );
}

export default App;
