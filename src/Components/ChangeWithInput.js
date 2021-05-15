import React, { useState } from 'react'

function ChangeWithInput() {

    const [name,changeName]=useState("Hi there")
    return (
        <div>
            <h1 id="h1">Hi there</h1>
      <input value={name} onChange={(e)=>changeName(e.target.value)}/>
      <button  onClick={()=>document.getElementById("h1").innerText=name}>Click me</button>
        </div>
    )
}

export default ChangeWithInput
