import React from "react";
import { ListTodo } from "./ListTodo";
import './css/List.css'

interface ListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}

export const List: React.FC<ListProps> = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul id="List">
      {todos.map(todo => {
        return (
          <ListTodo
            key={todo.text}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        );
      })}
    </ul>
  );
};
