import React, { useMemo, useState } from 'react'

const Memo = () => {
    const[inputValue , setInputvalue]=useState("")
    const[count,setCount]=useState(0)

console.log("Running")
    
  return (
    <div>
      <input className='border-2' type="text" name="" id="" value={inputValue} onChange={(e)=>setInputvalue(e.target.value)} />
      <p>Count:{count}</p>
      <button onClick={()=>setCount(count+1)}>Inc</button>
      <br/>
    </div>
  )
}

export default Memo
