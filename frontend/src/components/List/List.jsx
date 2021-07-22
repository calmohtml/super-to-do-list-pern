import React, { useEffect, useState } from "react";
import { EditButton } from "../EditTodo/EditButton";

export const List = () => {
  const [getTodos, setGetTodos] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const data = await response.json();
      setGetTodos(data);
    } catch (error) {
      console.error(error);
    }
  };

  // delete
  const deleteToDo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      setGetTodos(getTodos.filter((todo) => todo.todo_id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  // delete

  useEffect(() => {
    getData();
  }, []);

  return (
    <ul className="list">
      {getTodos.map((todo) => (
        <li key={todo.todo_id} className="list__item">
          <p className="list__item--description">{todo.description}</p>
          <div>
            <button
              onClick={() => {
                deleteToDo(todo.todo_id);
              }}
            >
              Delete
            </button>
            <EditButton todo={todo} />
          </div>
        </li>
      ))}
    </ul>
  );
};
