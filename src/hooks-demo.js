import React from 'react';
import {useState} from 'react'
function Hooks() {
    const [count, setCount] = useState(12)
    function n() {
        alert('2')
    }
    const add = ()=>{
        setCount(n)
    }
    return (
        <div>
            {count}
            <button onClick={add}>+1</button>
        </div>
    )
}
export default Hooks