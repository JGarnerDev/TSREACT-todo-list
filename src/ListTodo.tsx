import React from "react";

import "./css/ListTodo.css";

interface ListTodoProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo
}

export const ListTodo: React.FC<ListTodoProps> = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li className="todoItem">
      <label className="todoItem-label">
        <input className="todoItem-check"
          type="checkbox"
          checked={todo.isDone}
          onChange={() => toggleTodo(todo)}
        />
        <div className="todoItem-text">{todo.text}</div>
      </label>
      <button className="remove-button" onClick={() => removeTodo(todo)}>Done!</button>
    </li>
  );
};
