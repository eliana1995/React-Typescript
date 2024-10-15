import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import bild from './bild.jpg'; 

interface Todo {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <img src={bild} alt="bild" style={{ width: '150px', marginBottom: '20px' }} />
      <h1>Eliana Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

export default App;

