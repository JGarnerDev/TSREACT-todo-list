import React, { useState } from "react";
import { List } from "./List";
import { AddTodo } from "./AddTodo";

const initialTodos: Array<Todo> = [
  { isDone: true, text: "Slam, welcome to the Jam" },
  { isDone: false, text: "Slamo" }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          isDone: !todo.isDone
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo = (newTodo: string) => {
      setTodos([...todos, {text: newTodo, isDone: false}])
  }

  return (
    <React.Fragment>
      <List todos={todos} toggleTodo={toggleTodo} />
      <AddTodo addTodo={addTodo} />
    </React.Fragment>
  );
};

export default App;
