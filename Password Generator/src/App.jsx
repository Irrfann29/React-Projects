import { useState,useCallback,useEffect } from "react"



function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharaAllowed] = useState(false);
  const [password, setPassword] = useState('');


  const passGenerator=useCallback(()=>{
    let pass = "";
    let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numberAllowed) str+='1234567890';
    if (charAllowed) str+='!@#$%^&*()_+';
    
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length +1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword]);


  useEffect(()=>{
    passGenerator();
  },[length,numberAllowed,charAllowed,passGenerator]);


  return (
    <>
      <div className="bg-black text-white h-screen p-4 ">
        <div>
          <h1 className="text-4xl text-center">Password Generator</h1>
        </div>

        <div className="flex justify-center my-2">
          <div className="bg-slate-900 py-4 px-6 rounded-lg">
            <div className="rounded-lg  flex">
              <input type="text" placeholder="hello" value={password} readOnly className="bg-white text-black h-10 w-96 rounded-l-lg text-lg px-2 outline-none" />
              <button className="px-2 outline-none text-lg bg-emerald-700 h-10 rounded-r-lg">copy</button>
            </div>
            <div className="m-3 flex  gap-x-2 text-lg bg-transparent">
              <div className='flex items-center gap-x-1'>
                <input type="range" min={6} max={100} className="cursor-pointer" onChange={(e)=>{setLength(e.target.value)}}/>
                <label>Length: {length}</label>
              </div>
              <div className="flex items-center gap-x-1 bg-transparent">
                <input type="checkbox" id="numberInput" defaultChecked={numberAllowed} onChange={()=>{
                  setNumberAllowed(!numberAllowed);
                }} />
                <label htmlFor="numberInput">Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input type="checkbox" id="characterInput" defaultChecked={charAllowed} onChange={()=>{
                  setCharaAllowed(!charAllowed);
                }}/>
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
