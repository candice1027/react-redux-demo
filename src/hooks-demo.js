import React from 'react';
import {useState} from 'react'
function Hooks() {
    const [count, setCount] = useState(12)
    const add = ()=>{
        setCount(count+1)
    }
    return (
        <div>
            {count}
            <button onClick={add}>+1</button>
        </div>
    )
}
export default Hooks