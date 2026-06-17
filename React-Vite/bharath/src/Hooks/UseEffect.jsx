import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const UseEffect = () => {
const[count , setCount]=useState(0)
const[type,setType]=useState("Even")
const[data,setData]=useState([])

useEffect(()=>{
if(count%2 === 0){
setType("Even")
}else{
    setType("ODD")
}
},[count])


const getData =async()=>{
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await res.json()
        setData(result)

        // const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        // setData(res)
        
    
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
getData()
},[])

console.log(data)

  return (
    <div>
    
      <h1 className='text-red-600 bg-green-400'>This is Example of UseEffect</h1>
      <button onClick={()=>setCount((count)=>count+1)}>Inc</button>
      <p>Count is : {count}</p>
      <p>Type : {type}</p>

      <button onClick={getData}>Fetch Data</button>

      <div>
        {
           data.map((user)=>{
    return (
        <>
        <ul key={user.id}>
            <li>{user.name}</li>
           </ul>
        </>
    )
           }) 
        }
      </div>
    </div>
  )
}

export default UseEffect
