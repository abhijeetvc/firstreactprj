import React from "react"
function FormData(){

    const userObj={
        firstName:'',
        lastName:'',
        city:''
    }

    const [user,setUser]=React.useState(userObj)

    const [userList,setUserList]=React.useState([])

    const onChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    const saveData=(e)=>{
        e.preventDefault()
        setUserList([...userList,user])
        setUser(userObj)
    }
    
    return(
        <div>
            <h2>UserList</h2>
            <form onSubmit={saveData}>
                <label>FirstName : </label>
                <input type='text' name='firstName' value={user.firstName} onChange={onChange}/>

                <label>LastName : </label>
                <input type='text' name='lastName' value={user.lastName} onChange={onChange}/>

                <label>City : </label>
                <input type='text' name='city' value={user.city} onChange={onChange}/>

                <input type='submit' value='Submit'/>
            </form>
            <UserList userList={userList}/>
        </div>
    )
}

function UserList({userList}){

    return(
        <ul>
            {userList.map((item)=>(
                <li>{item.firstName+ ' '+item.lastName}</li>
            ))}
        </ul>
    )
}

export default FormData