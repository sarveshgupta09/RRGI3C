import React, { useEffect, useRef, useState } from 'react'

const Prev = () => {
    const[count,setCount]=useState(0)
    const prevCount = useRef()
    console.log(prevCount)

    useEffect(()=>{
        prevCount.current = count
    },[count])
  return (
    <div>
      <h1>To Store Previous Values</h1>
      <p>Count :{count}</p>
      <p>PrevCount :{prevCount.current}</p>
      <button onClick={()=>setCount((count)=>count+1)}>Inc</button>
    </div>
  )
}

export default Prev
