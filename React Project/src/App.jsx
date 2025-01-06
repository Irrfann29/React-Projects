// import React from 'react'

const App = () => {
  const name = "Irfan"
  const click = ()=>{
    console.log("Button Clicked")
  }
  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={click}>Click Me</button>
    </div>
  )
}

export default App
