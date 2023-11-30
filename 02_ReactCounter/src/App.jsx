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
    // setCount(count+1)
    // setCount(count+1)
    //This will not increase the counter by 2 because useState take this operation as a batch operation and when it sees that two operations are similar then it modifies only one
    // So when we needs to change two modification how we can achieve this?
    // using setCounter(callback fn)
    setCount(prevCounter=>prevCounter+1)
    setCount((prevCounter) => prevCounter + 1);
    // Now this will update counter by 2. 
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
