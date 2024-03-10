import { useEffect, useState } from "react"
import User from "./User";

export default function Users(){

    const userStyle = {
        border: "2px solid greenYellowgit init",
        padding:'20px',
        margin:'20px',
        borderRadius:'20px'
    }

    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return(
        <>
        <div style={userStyle}>
            <h3>Users :{users.length}</h3>;
            {
                users.map(user => <User user= {user}></User>)
            };
        </div>
        </>
    )
}


/**
 * 1.declare a state to hold the data 
 * 2. useEffect with callback and dependency array
 * 3. use fetch to load data
 */