import React from "react";
import "./css/ListItem.css";

interface ListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo
}

export const ListItem: React.FC<ListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.isDone} onChange={() => toggleTodo(todo)} />
        {todo.text}
      </label>
    </li>
  );
};
