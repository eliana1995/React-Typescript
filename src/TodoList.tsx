import React from 'react';
import TodoItem from './TodoItem';

interface Todo {
    id: number;
    text: string;
  }
  
  interface TodoListProps {
    todos: Todo[];
    removeTodo: (id: number) => void;
  }
  
  const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => {
    return (
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))}
      </ul>
    );
  };
  

  export default TodoList;