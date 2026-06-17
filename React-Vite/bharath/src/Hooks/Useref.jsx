import React, { useEffect, useRef } from 'react'

const Useref = () => {
const inputRef = useRef(null)
const scrollTo = useRef(null)
useEffect(()=>{
    inputRef.current.focus()
},[])

const Scroll =()=>{
    scrollTo.current.scrollIntoView({behaviour:"smooth"})
}

  return (
    <div>
      <p>This Example from Use Ref</p>
      <input ref={inputRef} className=' ml-15' type="text" name="" id="" placeholder='Enter Name' /> <br/>
    <button onClick={Scroll} className='border-2 ml-50'>Contact US</button>
    <p className='mt-500' ref={scrollTo}>These are my contact Details</p>
    </div>
  )
}

export default Useref
