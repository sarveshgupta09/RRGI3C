import React, { useRef, useState } from 'react'

const Usereftimer = () => {
  const[seconds , setSeconds]= useState(0)
  const timerRef = useRef(null)

  const start =()=>{
   timerRef.current = setInterval(()=>{
    setSeconds((seconds)=>seconds+1)
    console.log("Runnig ...")
   },1000)
  }
  const stop =()=>{
clearInterval(timerRef.current)
  }
  const reset =()=>{
clearInterval(timerRef.current)
setSeconds(0)
  }
  return (
    <div>
      <h1 className='ml-14'>Timer :{seconds}</h1>
      <button onClick={start} className='border m-2 p-1'>Start</button>
      <button onClick={stop} className='border m-2 p-1'>Stop</button>
      <button onClick={reset} className='border m-2 p-1'>Reset</button>
    </div>
  )
}

export default Usereftimer
