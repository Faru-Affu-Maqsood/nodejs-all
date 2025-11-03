const ComponentTwo = ({ count, onClickHandler }) => {
    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={onClickHandler}>Increase</button>
        </>
    );
};

export default ComponentTwo;