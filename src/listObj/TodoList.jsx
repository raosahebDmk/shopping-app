import { useRef, useState } from "react"

export default function TodoList(){

    
    const [userList, setUserList] = useState([]);
    const [activity, setActivity] = useState("");

    const refElement = useRef("");

    function addUser()
    {
        setUserList([...userList, activity])
        console.log(userList)
        setActivity("")
        refElement.current.focus();
    }

    function deletUser(index)
    {
        const updateUserData = userList.filter((Element, id)=>{
            return index!=id;
        })
        setUserList(updateUserData)
        
    }

   


    return(
        <>
            <h1>User List...</h1>
            <input type="text" value={activity} ref={refElement} onChange={(e)=>setActivity(e.target.value)}/>
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