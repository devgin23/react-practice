import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

export interface ToDo {
  id: number;
  task: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const addTodo = (task: string) => {
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} />
    </div>
  );
};

export default App;
