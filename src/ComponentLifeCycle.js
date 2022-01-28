import React, { Component } from 'react'
import Component1 from './Component1';
import Component2 from './Component2';

class ComponentLifeCycle extends React.Component{

    constructor(){
        super()
        this.state={
            number:0
        }
    }

    componentDidMount(){
        console.log("In component did mount: "+this.state.number);
    }

    componentDidUpdate(){
        console.log("in Component Did Update: "+this.state.number);
    }

    incrementValue=()=>{
        this.setState({number:this.state.number+1})
    }

    display=()=>{
        console.log("In display");
    }

    toggleComponent=()=>{
        this.setState({number:this.state.number ===0 ? 1:0})
    }

    render(){
        let component= this.state.number ? <Component1/> : <Component2/> 
        return(     
            <div>
                {component}
                <p>Number is: {this.state.number}</p>
                <button type='button' onClick={this.incrementValue}>Add</button>
                <button type="button" onClick={this.toggleComponent}>Toggle</button>
            </div>
        )
    }
    
}

export default ComponentLifeCycle