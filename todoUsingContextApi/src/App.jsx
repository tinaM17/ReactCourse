import { useEffect, useState } from 'react'
import { TodoContextProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
      setTodos((prev)=> [...prev,{id:Date.now(),...todo}])
  }

  const updateTodo = (id,todo) => {
    setTodos((prev)=> prev.map((oldTodo) => oldTodo.id===id ? todo : oldTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prev)=> prev.filter((oldTodo) => oldTodo.id!==id))
  }

  const toggleComplete = (id) => {
    setTodos((prev)=>
    prev.map((oldTodo)=> (oldTodo.id===id ? {...oldTodo, completed:!oldTodo.completed} : oldTodo))
    )
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoContextProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
     <div className='bg-[#172842] min-h-screen'>
        <div className='w-full max-w-2xl mx-auto py-8 px-4 text-white'>
          <div className='w-full mx-auto'>
            <h1 className='text-2xl text-center py-4 mt-2 font-bold'>Manage Your Todo</h1>
          </div>
          <div className='w-full mx-auto'>
            <TodoForm />
          </div>
          <div className='mt-4 flex flex-wrap gap-y-3'>
            {todos.length>0 ? todos.map((todo)=>(
              <div className='w-full' key={todo.id}>
                <TodoList todo={todo} />
              </div>
            )) : ''}
          </div>
        </div>
     </div>
    </TodoContextProvider>
  )
}

export default App
