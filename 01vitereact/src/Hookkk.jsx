import React from 'react'
import {useState} from 'react'
const Hookkk = () => {
       const [count,setcount]=useState(30)
        const increment=()=>{
            setcount(count+1)
        }
        const decrement=()=>{
            setcount(count-1)
        }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    </>
    
  )
}

export default Hookkk