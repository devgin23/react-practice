import React from 'react';
import { ToDo } from '../App';

interface ToDoItemProps {
  todo: ToDo;
  toggleTodo: (id: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.task}
      </span>
    </li>
  );
};

export default ToDoItem;
