import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <>
      <input
        type="text"
        ref={inputRef}
        placeholder="Click the button to focus"
      />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
};

export default FocusInput;
