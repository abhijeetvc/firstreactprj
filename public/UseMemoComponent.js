import React from 'react'

const UseMemoComponent=()=>{
    const userData=[{
        id:1,
        name:'John'
    },{
        id:2,
        name:'Peter'
    },{
        id:3,
        name:'Richard'
    }]

    const[text,setText]=React.useState('')
    const[search,setSearch]=React.useState('')

    const fetchData=(event)=>{
        setText(event.target.value)
    }

    const getData=()=>{
        setSearch(text)
    }

    // useMemo
    const filteredData=React.useMemo(()=>
        userData.filter((user)=>{
            console.log('hiiiiii');
            return user.name.toLowerCase().includes(search.toLowerCase())
        })
    ,[search])

    return(
        <div>
            <input type='text' value={text} onChange={fetchData}/>
            <button type='button' onClick={getData}>Search</button>
            <List list={filteredData}/>
        </div>
    )
}

const List=({list})=>{

    return(
        <div>
            <ul>
                {
                    list.map((user)=>(
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UseMemoComponent