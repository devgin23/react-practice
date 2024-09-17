import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="할 일을 입력하세요" 
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default ToDoForm;