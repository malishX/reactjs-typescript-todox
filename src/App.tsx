import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Agent } from 'https';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';


 
const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");

  const [toddos, setToddos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    
    e.preventDefault();
    if (todo) {
      setToddos([...toddos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
    
  };
  console.log(toddos)

  console.log(todo)
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList toddos={toddos} setToddos={setToddos}/>
      
    </div>
  );
}

export default App;
