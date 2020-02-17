import React from "react";
import { ListItem } from "./ListItem";

interface ListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

export const List: React.FC<ListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <ListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        );
      })}
    </ul>
  );
};
