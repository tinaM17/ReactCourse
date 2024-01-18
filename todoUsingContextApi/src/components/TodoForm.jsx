import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';

function TodoForm() {
  const [todo, setTodo]=useState("");

  const {addTodo}=useTodo();

  function add(e) {
    e.preventDefault();

     if(!todo) return

     addTodo({todo,completed:false});
     setTodo("")
  }

  return (
    <form
    onSubmit={add}
     className='w-full flex'>
      <input type="text"
      name='todo'
       placeholder='Write Your Todo'
        className='bg-gray-500 rounded p-2 w-full'
        value={todo}
        onChange={(e)=> setTodo(e.target.value)} />
      <button
      type="submit"
      className='bg-blue-600 p-2 rounded'>Add</button>
    </form>
  )
}

export default TodoForm
