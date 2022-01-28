import React from 'react'

class StateDemo2 extends React.Component{

   // const[number,setNumber]=React.useState(0)

   constructor(){
       super()
       this.state={
           number:0
       }
   }

    incrementValue=()=>{
        this.setState({number:this.state.number+1})
    }

    render(){
        return(
            <div>
                <h1>State Demo1</h1>
                <p>Number is: {this.state.number}</p>
                <button onClick={this.incrementValue}>Increment</button>
            </div>
        )
    }
   
}

export default StateDemo2