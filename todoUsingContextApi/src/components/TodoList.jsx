import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoList({todo}) {
  const {updateTodo,toggleComplete,deleteTodo} = useTodo();
  const [todoIsEditable, setTodoIsEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  
  const editTodo = ()=>{
    updateTodo(todo.id, {...todo, todo:todoMsg})
    setTodoIsEditable(false);
  }

  const isCompleted = ()=>{
     toggleComplete(todo.id);
  }

  return (
    <div className={`flex rounded-lg px-3 py-1.5 mb-2 text-black ${todo.completed ? 'bg-green-300' : 'bg-slate-300'}`}>
      <input type="checkbox"
      className='cursor-pointer'
      checked={todo.completed}
      onChange={isCompleted} />
      <input type="text"
      className={`bg-transparent border outline-none mx-1 w-full flex flex-wrap rounded-lg ${todo.completed ? 'line-through' : ''} 
      ${todoIsEditable? 'border-black/10 px-2':"border-transparent"}`}
      value={todoMsg}
      onChange={(e)=> setTodoMsg(e.target.value)}
      readOnly={!todoIsEditable} />
      <button
      className={`w-8 h-8 inline-flex justify-center items-center`}
      disabled={todo.completed}
      onClick={()=>{
        if(todoIsEditable){
          editTodo();
        }
        else {
          setTodoIsEditable((prev)=> !prev)
        }
      }}
      >
      {todoIsEditable ? "📁" : "✏️"}
      </button>
      <button
      className={`inline-flex w-8 h-8 justify-center items-center`}
      onClick={()=> deleteTodo(todo.id)}>
      ❌
      </button>
    </div>
  )
}

export default TodoList
