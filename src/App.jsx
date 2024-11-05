import React, { useState, createContext } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";

export const LanguageContext = createContext();

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1730787481212,
      text: "kerjakan praktek react",
      completed: false,
    },
  ]);

  const [language, setLanguage] = useState("en");

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodo,
        completed: false,
      },
    ]);

    setNewTodo("");
  };

  const handleDelete = (id) => {
    const deleteTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodos);
  };

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleChangeLanguage = (language) => {
    setLanguage(language);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleChangeLanguage }}
    >
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center mb-4">{language === "en" ? "TODO LISTS" : "HAL YANG HARUS DILAKUKAN"}</h1>
        <TodoForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          newTodo={newTodo}
        />
        <TodoList
          todos={todos}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
