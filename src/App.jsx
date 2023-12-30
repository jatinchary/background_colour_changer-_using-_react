import { useState } from 'react'

import './App.css'

function App() {
 const [color,Setcolor] = useState("olive")

  return (
  <>
<div className=" w-full h-screen  duration-200" style={{ backgroundColor: color }}>
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3"> 
  <div className=" fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
    <button onClick={()=>Setcolor("red")}  className=' outline-none px-4 rounded-lg'style={{backgroundColor:"red"} }>red</button>
    <button onClick={()=>Setcolor("green")} className=' outline-none px-4 rounded-lg'style={{backgroundColor:"green"}}>green</button>
    <button onClick={()=>Setcolor("yellow")} className=' outline-none px-4 rounded-lg'style={{backgroundColor:"yellow"}}>yellow</button>
    <button onClick={()=>Setcolor("orange")} className=' outline-none px-4 rounded-lg'style={{backgroundColor:"orange"}}>orange</button>
    <button onClick={()=>Setcolor("pink")} className=' outline-none px-4 rounded-lg'style={{backgroundColor:"pink"}}>pink</button>
    </div> </div>
 </div>
  </>
  )
}

export default App
