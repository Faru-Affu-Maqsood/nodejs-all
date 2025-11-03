import { Data, Data1 } from "../App";

const ComponentC = () => {
  return (
    <>
      <Data.Consumer>
        {/* <h1>Hello, {(name) => name}</h1> Error */}
        {/* {(name) => <h1>Hello, {name}</h1>} */}
        {(name) => (
          <Data1.Consumer>
            {(age) => (
              <h1>
                Hello, {name}! You're {age >= 18 ? "" : "not"} eligible to vote.
              </h1>
            )}
          </Data1.Consumer>
        )}
      </Data.Consumer>
    </>
  );
};

export default ComponentC;
