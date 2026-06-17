import React, { useState } from 'react'

const Forms = () => {
const[name,setName]=useState("")
const[password , setPassword]=useState("")
const[email,setEmail]=useState("")
const[data , setData] = useState({})

const handleClick =(e)=>{
e.preventDefault()
setEmail("")
setName("")
setPassword("")

const data ={
    name , email, password
}
localStorage.setItem("data" , JSON.stringify(data))
}
const getData=()=>{
    const user = localStorage.getItem("data")
    setData(JSON.parse(user))
}

  return (
    <div>
      <h1>Sign Up Form</h1>
     <form action="" onSubmit={handleClick}>
    <label htmlFor="">Name :</label>
        <input type="text" name="" id=""  value={name} onChange={(e)=>setName(e.target.value)} /> <br/><br/>
        <label htmlFor="">Email :</label>
      <input type="email" name="" id="" value={email} onChange={(evt)=>setEmail(evt.target.value)}/><br/><br/>
      <label htmlFor="">Password :</label>
      <input type="password" name='' id='' value={password} onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
      <button type="submit">Submit</button>
     </form>
     <button onClick={getData}>Click me for details</button>
     <p>{data.name}</p>
     <p>{data.email}</p>
    </div>
  )
}

export default Forms
