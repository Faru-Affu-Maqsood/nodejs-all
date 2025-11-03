import { useContext } from "react";
import { Data, Data1 } from "../App";

const ComponentC = () => {
  const userName = useContext(Data);
  const userAge = useContext(Data1);

  return (
    <>
      <h1>
        Hello, {userName}! You're {userAge >= 18 ? "" : "not"} eligible to vote.
      </h1>
    </>
  );
};

export default ComponentC;
