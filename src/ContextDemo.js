import React,{ createContext } from "react"
import ChildOne from "./ChildOne"
import ChildTwo from "./ChildTwo"

// context creation   // Provider and Consumer
export const GlobalValue=createContext()

const ContextDemo=()=>{

    const[number,setNumber]=React.useState(100)

    const changeValue=()=>{
        setNumber(number+10)
    }

    return(
        <GlobalValue.Provider value={{number,changeValue}}>
            <h1>Parent Component</h1>
            <p>Number is: {number}</p>
            <ChildOne/>
            <ChildTwo/>
            
        </GlobalValue.Provider>
    )
}

export default ContextDemo