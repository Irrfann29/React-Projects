import { useState } from "react"



function App() {
  const [length, setLength] = useState(8)


  return (
    <>
      <div className="bg-black text-white h-screen p-4 ">
        <div>
          <h1 className="text-4xl text-center">Password Generator</h1>
        </div>
        <div className="flex justify-center my-2">
          <div className="bg-slate-900 py-4 px-6 rounded-lg">
            <div className="rounded-lg bg-red-500 flex">
              <input type="text" placeholder="hello" className="bg-white h-10 w-96 rounded-l-lg text-lg px-2 outline-none" />
              <button className="px-2 outline-none text-lg bg-emerald-700 h-10 rounded-r-lg">copy</button>
            </div>
            <div className="m-3 flex  gap-x-2 text-lg bg-transparent">
              <div className='flex items-center gap-x-1'>
                <input type="range" min={6} max={100} className="cursor-pointer" />
                <label>Length: {length}</label>
              </div>
              <div className="flex items-center gap-x-1 bg-transparent">
                <input type="checkbox" id="numberInput" />
                <label htmlFor="numberInput">Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input type="checkbox" id="characterInput" />
                <label htmlFor="numberInput">Characters</label>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
