import React from 'react';
import "./styles.css"
import { Todo } from "../components/model";
import SingleTodo from './SingleTodo';

interface Props {
  toddos: Todo[];
  setToddos: React.Dispatch<React.SetStateAction<Todo[]>>;

} 
const TodoList:React.FC <Props> = ({toddos, setToddos}:Props) => {
    return <div className='todos'>
      {
        toddos.map((todo) => (
        <SingleTodo todo={todo}
            key={todo.id}
            toddos={toddos}
            setToddos={ setToddos}/>
          
            )
          )
        }  
  </div>; 
};

export default TodoList;
