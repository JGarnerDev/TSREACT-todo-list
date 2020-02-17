 type Todo = {
  isDone: boolean;
  text: string;
};

type ToggleTodo = (selectedTodo: Todo) => void
type AddTodo = (newTodo: string) => void