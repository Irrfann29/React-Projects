import { useState } from "react"



function App() {
  const [length,setLength] = useState(8)


  return (
    <> 
      <div className="bg-black text-white h-screen p-4">
        <div>
          <h1 className="text-4xl text-center">Password Generator</h1>
        </div>
      </div>
    </>
  )
}

export default App
