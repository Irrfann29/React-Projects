// import React from 'react'

const App = () => {
  const name = "Irfan"
  const click = ()=>{
    console.log("Button Clicked")
  }
  return (
    <div>
      <h1 className="text-4xl m-3 ">Hello {name}</h1>
      <button onClick={click} className="bg-orange-400 rounded-xl mx-5 cursor-pointer">Click Me</button>
    </div>
  )
}

export default App
