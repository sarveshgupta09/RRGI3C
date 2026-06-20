import React from 'react'

const CallbackChild = React.memo(({handle , count})=>{
    console.log("this is from child")
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={handle}>Clild class</button>
    </div>
  )
})

export default CallbackChild
