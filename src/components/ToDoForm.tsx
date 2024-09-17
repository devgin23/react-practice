import React, { useState } from 'react';
import './ToDoForm.css';

interface ToDoFormProps {
  addTodo: (task: string) => void;
}

const ToDoForm: React.FC<ToDoFormProps> = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task" 
        className='todo-input'
      />
      <button type="submit" className="todo-button">Add</button>
    </form>
  );
};

export default ToDoForm;