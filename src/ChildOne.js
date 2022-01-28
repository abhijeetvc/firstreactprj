import { useContext } from "react"
import { GlobalValue } from "./ContextDemo"

const ChildOne=()=>{

    //read the global value
    const {number,changeValue}=useContext(GlobalValue)
  //  const {changeValue}=useContext(GlobalValue)

    const abc={
        firstName:'abc',
        lastName:'xyz'
    }

    const test={
        email:'abc@gmail.com'
    }
    
// for - in loop
    const newObj={
        firstName:abc.firstName,
        ...test
    }
    return(
        <div>
            <h1>Child One Component</h1>
            <p>Value is: {number}</p>
            <button type='button' onClick={changeValue}>Change Value</button>
        </div>
    )
}

export default ChildOne