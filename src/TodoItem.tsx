import React from 'react';

interface Todo {
  id: number;
  text: string;
}

interface TodoItemProps {
  todo: Todo;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, removeTodo }) => {
  return (
    <li>
      {todo.text}
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
};


export default TodoItem;