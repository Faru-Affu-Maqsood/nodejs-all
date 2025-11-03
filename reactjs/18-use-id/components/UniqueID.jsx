import { useId } from "react";

const UniqueID = () => {
  const id = useId();
  return (
    <>
      <label htmlFor={id + "-email"}>Email</label>
      <input type="email" id={id + "-email"} />

      <label htmlFor={id + "-password"}>Password</label>
      <input type="password" id={id + "-password"} />
    </>
  );
};

export default UniqueID;
