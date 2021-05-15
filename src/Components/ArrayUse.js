import React,{useState } from 'react'

function ArrayUse() {
    const bio=[
        {
            id:0,name:"red",age:21},
            {
            id:1,name:"eye",age:22
        }
    ]
    const [array,setArray]=useState(bio)
    const retArray=array.map(b=><h3 key={b.id}>name:{b.name} age:{b.age}</h3>)
    return (
        <div style={{margin:'4px',padding:'5px',border:'2px solid brown'}}>
            {retArray}
            <button onClick={()=>setArray([])}>clear</button>
        </div>
    )
}

export default ArrayUse
