import React, { useState } from 'react'

function ToggleBetween() {
    const [name,changeName]=useState("Hi there")
  const [state,changeState]=useState(1);
    return (
        <div>
            <h1 id="h1">{name}</h1>
      {/* <input value={name} onChange={(e)=>changeName(e.target.value)}/> */}
      <button  onClick={()=>{
        if (state===1){
      changeName("Hi here")
      changeState(2)
      }
      else{
        changeState(1)
        changeName("Hi there");
      }
      }}>Click me</button>
        </div>
    )
}

export default ToggleBetween
