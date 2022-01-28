
const employeeList=[{
    id:1,
    empName:'Emp1',
    empCity:'Pune'
},{
    id:2,
    empName:'Emp2',
    empCity:'Mumbai'
},{
    id:3,
    empName:'Emp3',
    empCity:'Bangalore'
}]


function PropsDemo(){

    const message='Hiiiiiii'

    const user={
        firstName:'John',
        lastName:'Doe',
        city:'Pune'
    }

    return(
        <div>
            <h1>This is Parent Component!!!</h1>
            <ChildDemo message={message}/>
            <ChildDemo1 user={user}/>
            <DisplayData employeeList={employeeList}/>
        </div>
    )
}

function ChildDemo({message}){

    return(
        <div>
            <h2>This is Child Component</h2>
            <p>Message : {message}</p>
        </div>
    )
}

function ChildDemo1({user}){

    return(
        <div>
            <h2>This is Child Component-1</h2>
            <p>FirstName : {user.firstName}</p>
            <p>LastName : {user.lastName}</p>
            <p>City : {user.city}</p>
        </div>
    )
}

function DisplayData({employeeList}){

    return(
        <div>
            <ul>
                {employeeList.map((employee)=>(
                    <EmployeeInfo employee={employee}/>
                ))}
            </ul>
        </div>
    )
}

function EmployeeInfo({employee}){

    return(
        <li>{employee.empName+" : "+employee.empCity}</li>
    )
}

export default PropsDemo