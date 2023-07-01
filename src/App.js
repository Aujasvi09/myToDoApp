import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";
import ToDoForm from "./components/toDoListForm.js";
import ToDoList from "./components/toDoList.js";

export default function App() {
  const [toDos, setToDo] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null || localValue === "[]") return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(toDos));
  }, [toDos]);

  const addToDo = (item) => {
    setToDo((currentToDos) => {
      return [
        ...currentToDos,
        { id: crypto.randomUUID(), title: item, completed: false }
      ];
    });
  };

  const toggleToDo = (id, completed) => {
    setToDo((currentToDos) => {
      return currentToDos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const deleteToDo = (id) => {
    setToDo((currentToDos) => {
      return currentToDos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <ToDoForm onSubmit={addToDo} />
      <ToDoList toDos={toDos} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
    </>
  );
}
