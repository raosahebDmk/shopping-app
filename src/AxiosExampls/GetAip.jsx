import axios from "axios"
import { useEffect, useState } from "react"

export default function GetApi(){

    const [userData, setUserData] = useState([])

    const [user, setUser] = useState()

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resp) => {
            console.log(resp)
            setUserData(resp.data)
        })
    },[])

    
    
    function submit1(){
        console.log("hi")
        axios.get("https://jsonplaceholder.typicode.com/users/",{user})
        .then((resp) => {
            console.log(resp)
            setUserData(resp.data)
        })
        
    }

    return(
        <>
            
            <div className="container">
                
                {user}
             <input type="text"  value={user} onChange={(e)=>setUser(e.target.value)}/>            
                
            <button onClick={submit1}>submit</button>
            </div>
        </>
    )
    
}