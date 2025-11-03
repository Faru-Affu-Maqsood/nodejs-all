import React, { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    /**
     * @param {React.MouseEvent} e 
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim())
        {
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    };

    /**
     * @param {React.MouseEvent} e
     */
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={inputValue}
                    placeholder="Add a new todo"
                    onChange={handleChange}
                />

                <button type="submit">Add Todo</button>
            </form>

            <ul>
                {todos.map(item => (
                    <li key={crypto.randomUUID()}>{item}</li>
                ))}
            </ul>
        </>
    );
};

export default TodoList;