// import React from 'react'
import { useState } from "react"

const App = () => {
  let [color,setColor] = useState("olive")
  return (
    <div className="h-screen w-full" style={{backgroundColor:color}}>
      <div className="fixed bottom-5 flex flex-wrap items-center justify-center gap-20 inset-x-1  bg-emerald-800 p-1 rounded-xl ">
        <div onClick={()=>setColor("red")} className="flex flex-wrap px-5 py-2 text-white rounded-2xl text-xl cursor-pointer" style={{backgroundColor:"red"}}>
          <button>Red</button>
        </div>
        <div onClick={()=>setColor("olive")} className="flex flex-wrap px-5 py-2 text-white rounded-2xl text-xl cursor-pointer" style={{backgroundColor:"olive"}}>
          <button>Olive</button>
        </div>
        <div onClick={()=>setColor("black")} className="flex flex-wrap px-5 py-2 text-white rounded-2xl text-xl cursor-pointer" style={{backgroundColor:"black"}}>
          <button>Black</button>
        </div>
        <div onClick={()=>setColor("purple")} className="flex flex-wrap px-5 py-2 text-white rounded-2xl text-xl cursor-pointer" style={{backgroundColor:"purple"}}>
          <button>Purple</button>
        </div>
        <div onClick={()=>setColor("blue")} className="flex flex-wrap px-5 py-2 text-white rounded-2xl text-xl cursor-pointer" style={{backgroundColor:"blue"}}>
          <button>blue</button>
        </div>
        <div onClick={()=>setColor("green")} className="flex flex-wrap px-5 py-2 text-white rounded-2xl text-xl cursor-pointer" style={{backgroundColor:"green"}}>
          <button>Green</button>
        </div>
        


      </div>
    </div>
  )
}

export default App
