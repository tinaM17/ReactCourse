import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/TodoSlice'

function TodoForm() {
  const [todo, setTodo]=useState('')
  const dispatch=useDispatch();

  const add = (e)=>{
    e.preventDefault();
    dispatch(addTodo(todo))
    setTodo('')
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
