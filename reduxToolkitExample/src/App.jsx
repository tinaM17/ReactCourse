import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { useSelector } from 'react-redux';


function App() {
  const todos = useSelector((state)=>state.todos)
  return (
    <>
     <div className='bg-[#172842] min-h-screen'>
        <div className='w-full max-w-2xl mx-auto py-8 px-4 text-white'>
          <div className='w-full mx-auto'>
            <h1 className='text-2xl text-center py-4 mt-2 font-bold'>Manage Your Todo</h1>
          </div>
          <div className='w-full mx-auto'>
            <TodoForm />
          </div>
          <div className='mt-4 flex flex-wrap gap-y-3'>
            {todos.map((todo)=>(
               <div key={todo.id} className='w-full'>
                <TodoList todo={todo} />
                </div>
            ))}
          </div>
        </div>
     </div>
    </>
  )
}

export default App
