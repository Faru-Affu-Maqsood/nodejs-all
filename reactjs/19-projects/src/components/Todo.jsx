import '../style-todo.css';
import { useState } from 'react';
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    setTodos((todos) => [...todos, { id: crypto.randomUUID(), text: input }]);

    setInput('');
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="New Todo Task"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
      />
      <button onClick={handleSubmit}>Submit</button>

      <ul className="todos-list">
        {todos.map(({ id, text }) => (
          <li
            className="todo"
            key={id}>
            <span>{text}</span>
            <button
              className="close"
              onClick={() => removeTodo(id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
