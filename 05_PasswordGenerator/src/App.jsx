import { useCallback, useState,useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("");
  const [isClicked,setIsClicked]=useState(false);
   
  const passwordRef=useRef(null);

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbersAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%"
    for(let i=1;i<length;i++){
       let char=Math.floor(Math.random()*str.length+1);
       pass +=str.charAt(char)
    }
    setPassword(pass)
    setIsClicked(false);
  },[length,numbersAllowed,charAllowed,setPassword])

  const copyToClipboard=()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setIsClicked((prev)=>!prev)
  }

  useEffect(()=>{
    passwordGenerator();
  },[length,numbersAllowed,charAllowed])

  return (
    <div className="w-full max-w-md mx-auto my-52 bg-gray-600 flex flex-col px-8 py-8 rounded-md shadow-md text-orange-400">
      <h1 className="text-lg text-white text-center">Password Generator</h1>
      <div className="flex mb-4 mt-4 justify-center">
        <input
          type="text"
          className="px-6 py-2 w-full rounded-md"
          placeholder="Password"
          value={password}
          ref={passwordRef}
          readOnly="true"
        />
        <button
          className="py-2 px-2 bg-blue-700 text-white rounded-md"
          onClick={copyToClipboard}
          disabled={isClicked}
        >
          {isClicked? 'Copied':'Copy'}
        </button>
      </div>
      <div className="flex gap-x-1">
        <div className="flex mb-4 justify-center gap-x-1">
          <input
            type="range"
            name="length"
            min={8}
            max={20}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="length">Length({length})</label>
        </div>
        <div className="flex mb-4 justify-center gap-x-1">
          <input
            type="checkbox"
            name="numbers"
            defaultChecked={numbersAllowed}
            onClick={() => {
              setNumbersAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numbers">Numbers</label>
        </div>

        <div className="flex mb-4 justify-center gap-x-1">
          <input
            type="checkbox"
            name="chars"
            defaultChecked={charAllowed}
            onClick={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="chars">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App
