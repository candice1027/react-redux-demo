import React from 'react';
import {useState} from 'react'
import styled from 'styled-components'

const Title = styled.div`
  color: red;
  font-size: 20px;
`;
function Hooks() {
    const [count, setCount] = useState(12)
    const add = ()=>{
        setCount(count+1)
    }
    return (
        <div>
            {count}
            <button onClick={add}>+1</button>
            <Title>title1</Title>
        </div>
    )
}
export default Hooks