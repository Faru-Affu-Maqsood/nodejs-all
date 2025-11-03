import { createContext } from "react";
import ComponentA from "./components/ComponentA";

export const Data = createContext();
export const Data1 = createContext();

function App() {
  const name = "Farheen";
  const age = 17;

  return (
    <>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA name={name} />;
        </Data1.Provider>
      </Data.Provider>
    </>
  );
}

export default App;
