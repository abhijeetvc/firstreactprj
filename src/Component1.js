import React,{ Component } from "react"

class Component1 extends React.Component{


    componentWillUnmount(){
        console.log('Component One Un mounted!!!');
    }

    render(){
        return(
            <div>
            <h1>Component One</h1>
            <p>This is Component One!!!</p>
        </div>
        )
      
    }
}

export default Component1 