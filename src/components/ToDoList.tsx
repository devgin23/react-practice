import React from 'react';
import { ToDo } from '../App';
import ToDoItem from './ToDoItem';

interface ToDoListProps {
  todos: ToDo[];
  toggleTodo: (id: number) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default ToDoList;
