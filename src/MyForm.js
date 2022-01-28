// import React,{useState} from 'react'

// function MyForm(){

// //   const[fullName,setFullName]=React.useState('')
  

// //    const getValue=(event)=>{
// //        setFullName(event.target.value)
// //    }

//    const userObj={
//        fullName:'',
//        email:'',
//        city:''
//    }

//    const[user,setUser]=React.useState(userObj)

//    const getValue=(event)=>{
//         setUser({...user,[event.target.name]:event.target.value})
//    }

//     return(
//         <div>
//             <form>
//                 <label>Name : </label>
//                 <input type='text' name='fullName' onChange={getValue}/>

//                 <label>Email : </label>
//                 <input type='text' name='email' onChange={getValue}/>

//                 <label>City : </label>
//                 <input type='text' name='city' onChange={getValue}/>

    
//                 <input type='submit' value='Submit'/>

//             </form>

//             <p>Name : {fullName}</p>
//         </div>
//     )
// }

// export default MyForm