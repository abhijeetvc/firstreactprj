import React from 'react'

function StateDemo1(){

    const[number,setNumber]=React.useState(0)

    const incrementValue=()=>{
        setNumber(number+1)
    }

    return(
        <div>
            <h1>State Demo1</h1>
            <p>Number is: {number}</p>
            <button onClick={incrementValue}>Increment</button>
        </div>
    )
}

export default StateDemo1