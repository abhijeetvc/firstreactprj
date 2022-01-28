import React from 'react'

function UseEffectHook(){

    const[number,setNumber]=React.useState(0)

    useEffect(() => {
        console.log('In useEffect Hook');  
    },[number])

    const incrementValue=()=>{
        setNumber(number+1)
    }

    // const toggleComponent=()=>{
    //     setNumber(number===0 ? 1:0)
    // }
        // let component= number ? <Component1/> : <Component2/> 

        return(     
            <div>
                {/* {component} */}
                <p>Number is: {number}</p>
                <button type='button' onClick={incrementValue}>Add</button>
                {/* <button type="button" onClick={toggleComponent}>Toggle</button> */}
            </div>
        )
    }
    
export default UseEffectHook 