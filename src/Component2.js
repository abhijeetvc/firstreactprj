import React,{ Component } from "react"

class Component2 extends React.Component{


    componentWillUnmount(){
        console.log('Component Two Un mounted!!!');
    }

    render(){
        return(
            <div>
            <h1>Component Two</h1>
            <p>This is Component Two!!!</p>
        </div>
        )
        
    }
}

export default Component2