import React from 'react';
import { ToDo } from '../App';

interface ToDoItemProps {
  todo: ToDo;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ todo }) => {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} readOnly />
      {todo.task}
    </li>
  );
};

export default ToDoItem;
