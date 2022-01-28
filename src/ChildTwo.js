import { useContext } from "react"
import { GlobalValue } from "./ContextDemo"

const ChildTwo=()=>{

    //read the global value
    const {number}=useContext(GlobalValue)


    return(
        <div>
            <h1>Child Two Component</h1>
            <p>Value is: {number}</p>
          
        </div>
    )
}

export default ChildTwo