import { useEffect, useState } from "react"
import { ThemeContextProvider } from "./context/ThemeContext"
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";


function App() {
  const [themeMode,setThemeMode]=useState("light")
  
  const darkTheme=()=>{
    setThemeMode("dark");
  }

  const lightTheme=()=>{
    setThemeMode("light");
  }

  //change the background

  useEffect(()=>{
     const html=document.querySelector('html')
     html.classList.remove("light","dark")
     html.classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeContextProvider value={{themeMode,darkTheme,lightTheme}}>
    <div className='flex flex-wrap min-h-screen items-center dark:bg-gray-800'>
      <div className='w-full'>
        <div className='w-full max-w-sm mx-auto mb-4 flex justify-end'>
          <ThemeBtn />
        </div>
         <div className='w-full max-w-sm mx-auto'>
          <Card />
         </div>
      </div>
    </div>
    </ThemeContextProvider>
  )
}

export default App
