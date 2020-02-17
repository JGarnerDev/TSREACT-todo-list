import React, { useState, ChangeEvent, FormEvent } from "react";
import './css/AddTodo.css'

interface AddTodoProps {
  addTodo: AddTodo;
}

export const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
  };
  return (
    <form id="AddTodo">
      <input id="AddTodo-input" type="text" value={newTodo} onChange={handleChange} />
      <button id="AddTodo-button" type="submit" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};
