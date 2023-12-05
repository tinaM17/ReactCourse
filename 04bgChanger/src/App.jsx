import { useState } from 'react'


function App() {
  const [color, setColor] = useState("pink")

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div
        className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-2 ml-12 mr-12 w-fit"
        style={{ backgroundColor: "white" }}
      >
        <div className="flex">
          <button
            className="flex justify-center gap-5 border-none px-4 py-1 rounded-xl"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
        </div>
        <div className="flex">
          <button
            className="flex justify-center gap-5 border-none px-4 py-1 rounded-xl"
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
