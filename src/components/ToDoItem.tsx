import React from 'react';
import { ToDo } from '../App';
import './ToDoItem.css';

interface ToDoItemProps {
  todo: ToDo;
  toggleTodo: (id: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.task}</span>
    </li>
  );
};

export default ToDoItem;
