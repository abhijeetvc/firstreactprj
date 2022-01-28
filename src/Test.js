import React from 'react'

const data=[{
    id:1,
    name:'abc'
}]

function Test(){

    const [list,setList]=React.useState(data)

    const data1={
        id:2,
        name:'xyz'
    }

    const showData=(e)=>{
        e.preventDefault()
        setList(list.concat(data1))
        console.log(list);
    }
    return(
        <div>
            <button onClick={showData}>Show</button>
        </div>
    )
}

export default Test