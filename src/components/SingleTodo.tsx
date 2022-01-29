import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useState } from 'react';

import { Todo } from "../components/model"
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import "../components/styles.css"
import TodoList from './TodoList';

type Props = {
  todo: Todo,
  toddos: Todo[],
  setToddos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, toddos, setToddos }: Props) => {


  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>("");
  
  const handleDone = (id: number) => {

    setToddos(
      toddos.map(
        (todo) => todo.id == id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );

  }

  const handleDelete = (id: number) => {
    
    setToddos(
      toddos.filter((todo) => todo.id !== id)
    );

  }; 

  const handleEdit = (e: React.FormEvent, id:number) => {
    e.preventDefault();

    setToddos(
       toddos.map(
        (todo) => todo.id === id ? { ...todo, todo: editTodo} : todo
      )
    );
    setEdit(false);
  }
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  
  }, [edit]);
  

  return <form className='todos__single' onSubmit={(e)=>{handleEdit(e, todo.id)}}>

    {
      edit ? (
        <input
          ref={inputRef}
          className="todos__single--text"
          value={editTodo}
          onChange={(e) => {
          setEditTodo(e.target.value)
          }
            
          }
        />
      ) : (
          
        todo.isDone ? (
          <s className='todos__single--text'>{todo.todo} </s>
        ): (
              <span className='todos__single--text'>{todo.todo} </span>
            )
       )
    }
  
   
    <div>
      <span className='icon'>
        <AiFillEdit onClick={(e) => {
          if(!edit && !todo.isDone){
            setEdit(!edit)
          }
         }
        }/>
      </span>
      <span className='icon'>
        <AiFillDelete onClick={()=>handleDelete(todo.id)}/>
      </span>
      <span className='icon'>
        <MdDone onClick={()=>handleDone(todo.id)}/>
      </span>
  </div>
  </form>;
};

export default SingleTodo;
