import React from 'react'
import axios from 'axios'

function PostRequest(){

    const userObj={
        userId:'',
        title:'',
        body:''
    }

    const[user,setUser]=React.useState(userObj)

    const onChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    const sendData=(event)=>{
        console.log(user);
        event.preventDefault()

        // fetch('https://jsonplaceholder.typicode.com/posts',{

        // method:'POST',
        // body:JSON.stringify(user),
        // headers:{
        //     'Content-Type':'application/json'
        // }
        // }).then(response=>{
        //     if(response.status==201){
        //         console.log("Data Added!!!");
        //     }
        // })

        axios.post('https://jsonplaceholder.typicode.com/posts',user)
            .then(response=>console.log(response))
    }

    return(
        <div>
            <form onSubmit={sendData}>
                <label> UserID : </label>
                <input type='text' name='userId' onChange={onChange}/>

                <label> Title : </label>
                <input type='text' name='title' onChange={onChange}/>
                
                <label> Body : </label>
                <input type='text' name='body' onChange={onChange}/>
                
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}

export default PostRequest

// react-router-dom