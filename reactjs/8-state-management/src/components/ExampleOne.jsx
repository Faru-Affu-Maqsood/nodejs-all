import { useState } from "react";

const ExampleOne = () => {
    const [count, setCount] = useState(() => {
        const initialCount = 10;
        return initialCount;
    });

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </>
    );
};

export default ExampleOne;