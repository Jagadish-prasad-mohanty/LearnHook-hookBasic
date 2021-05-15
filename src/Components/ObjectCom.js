import React, { useState } from 'react'

function ObjectCom() {
    const obj={name:"Red",age:21};
    const [ob,setob]=useState(obj);
    return (
        <div>
            <h1>Name : {ob.name} & age: {ob.age}</h1>
            <button onClick={()=>setob({...ob,name:"eye",age:23})}>update</button>
        </div>
    )
}

export default ObjectCom
