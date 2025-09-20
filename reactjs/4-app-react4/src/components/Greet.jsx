const Greet = () => {
    const greet = "Hello";
    const date = new Date();
    return (
        <div>
            <h1>{greet}</h1>
            <p>{date.toString()}</p>
        </div>
    );
};

export default Greet;