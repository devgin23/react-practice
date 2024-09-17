import React from 'react';
import { ToDo } from '../App';
import ToDoItem from './ToDoItem';

interface ToDoListProps {
  todos: ToDo[];
}

const ToDoList: React.FC<ToDoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
