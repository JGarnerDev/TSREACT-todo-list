import React, { useState } from "react";
import { List } from "./List";
import { AddTodo } from "./AddTodo";
import './css/App.css'


const initialTodos: Array<Todo> = [
  { isDone: true, text: "Come on" },
  { isDone: false, text: "Slam" },
  { isDone: false, text: "Welcome to the Jam" },
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

  const removeTodo: RemoveTodo = selectedTodo => {
    const newTodos = todos.filter(todo => todo !== selectedTodo)
    setTodos(newTodos) 
    
  };

  const addTodo = (newTodo: string) => {
    setTodos([...todos, { text: newTodo, isDone: false }]);
  };

 

  return (
    <React.Fragment>
      <List todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      <AddTodo addTodo={addTodo} />
      <div id="doStuff">do stuff</div>
    </React.Fragment>
  );
};

export default App;
