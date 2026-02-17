import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useLocalStorage("todolist", []);

  const handleAddNewTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: crypto.randomUUID(), text: newTodo, done: false }]);
    setNewTodo("");
  };

  const handleToggleTodo = (todoToToggle) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoToToggle.id) {
          return {
            ...todo,
            done: !todoToToggle.done,
          };
        }
        return todo;
      })
    );
  };
  return (
    <div>
      <h1>Todo List App</h1>
      <form onSubmit={handleAddNewTodo}>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}   style={todo.done === true? {"textDecoration":"line-through"}:{}}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleToggleTodo(todo)}
            />
            {todo.text}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
