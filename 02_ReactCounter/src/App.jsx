import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increaseCounter=()=>{
    if(count>=20){
      return 
    }
    setCount(count+1)
  }
  const decreaseCounter = () => {
    if (count <= 0) {
      return
    }
    setCount(count - 1);
  };

  return (
    <>
     <h1>React Counter Update Using Hooks</h1>
     <h2>Counter: {count}</h2>
     <button 
      onClick={increaseCounter}
     >Increase</button>
     <button
     onClick={decreaseCounter}
     >Decrease</button>
    </>
  )
}

export default App
