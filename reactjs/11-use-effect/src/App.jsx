import { useState, useEffect } from "react";
import BasicEffect from "./solutions/BasicEffect";
import FetchDataEffect from "./solutions/FetchDataEffect";
import CounterEffect from "./solutions/CounterEffect";
function App() {
  return (
    <>
      <BasicEffect />
      <CounterEffect />
      <FetchDataEffect />
    </>
  );
}

export default App;
