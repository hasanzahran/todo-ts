import React, {useEffect, useState} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import './App.css';

const App:React.FC = () => {
  const [todos, setTodos] = useState<{id: string, completed: boolean, text:string}[]>([]);
  const [todosFilterd, setTodosFilterd] = useState<{id: string, completed: boolean, text:string}[]>([]);
  const [filterValue, setFilterValue] = useState("All");

  useEffect(()=> {
    switch(filterValue) {
      case "all": 
        setTodosFilterd([...todos])
        break;
      case "completed":
        setTodosFilterd(todos.filter(todo => todo.completed));
        break;
      case "notcompleted":
        setTodosFilterd(todos.filter(todo => !todo.completed))
        break;
      default: 
        setTodosFilterd([...todos])
    }
  }, [filterValue, todos]);

  const addNewTodo = (text: string) => {
    setTodos([...todos, {
      id: Math.floor(Math.random()*10000000).toString(),
      completed: false,
      text,
    }]);
  }

  const checkUncheckTodo = (id: string) => {
    setTodos(todos.map(item => {
      if(item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item
    }))
  }

  const removeTodo = (id: string) => {
    setTodos(todos.filter(el => el.id !== id))
  }

  const filterTodos = (filter: string) => {
    setFilterValue(filter);
  }

  
  return (
    <div className="container">
      <Filter filterTodos={filterTodos} />
      <Form addNewTodo={addNewTodo} />
      <TodoList checkUncheckTodo={checkUncheckTodo} removeTodo={removeTodo} items={todosFilterd} />
    </div>
  );
}

export default App;
