import React, { useCallback, useState } from 'react'
import CallbackChild from './CallbackChild'

const Callback = () => {
const[count,setCount]=useState(0)

    const handleclick = useCallback(()=>{
console.log("this is from Parent")
    },[])
    
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=> setCount((count)=>count+1)}>Parent class</button>
      <CallbackChild handle={handleclick} count={count}/>
    </div>
  )
}

export default Callback
