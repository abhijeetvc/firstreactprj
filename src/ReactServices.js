import React,{useEffect} from 'react'
import axios from 'axios'

function ReactServices(){


    const [userList,setUserList]=React.useState([])

    useEffect(() => { 
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response=>response.json())
        //     .then(res=>{
        //         setUserList(res)
        //     })

        axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response=>response.data)
                .then(res=>{
                    setUserList(res)
                })
    }, [])

    return(
        <div>
            <h2>User List</h2>
            <ul>
                {
                    userList.map((user)=>(
                        <li>{user.id+' , '+user.name+' , '+user.username}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ReactServices