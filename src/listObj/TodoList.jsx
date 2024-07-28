import { useEffect, useRef, useState } from "react"

export default function TodoList(){

    // Add user and delete user

    const [userList, setUserList] = useState([]);
    const [user, setUser] = useState("");

    const refElement = useRef("");


    useEffect(()=>
        refElement.current.focus()
    )

    function addUser()
    {
        if(user===''){
            alert("user field is empty...");
            
        }else{
            setUserList([...userList, user])
        }
     
        setUser("")
        refElement.current.focus();
    }

    function deletUser(index)
    {
        const updateUserData = userList.filter((Element, id)=>{
            return index!==id;
        })
        setUserList(updateUserData)
        
    }
  


    return(
        <>
            <h1>User List...</h1>
            <input type="text" value={user} ref={refElement} onChange={(e)=>setUser(e.target.value)}/>
            <button onClick={addUser}>Add</button>

            <h2>user List:</h2>
            {userList.map((e, index)=>
                    <>
                        <p key={index}>
                            {e} 
                            <button onClick={()=>deletUser(index)}>Delete</button>
                            
                        </p>
                    
                    </>)}
        </>
    )

}