import React, { useContext } from "react";
import { LanguageContext } from "../App";

function TodoList({ todos, handleDelete, handleComplete }) {
  const { language } = useContext(LanguageContext);

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </span>
          <div className="btn-group">
            <button
              onClick={() => handleComplete(todo.id)}
              className="btn btn-success btn-sm"
            >
              {language === "en" ? "Done" : "Selesai"}
            </button>
            <button
              onClick={() => handleDelete(todo.id)}
              className="btn btn-danger btn-sm"
            >
              {language === "en" ? "Delete" : "Hapus"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
