import { useEffect, useState } from "react";

function A_useEffect(){

    const [flag, setFlag] = useState(false);

    useEffect(()=>{
        console.log("hello..")
    },[flag])



    return(
        <>
            Hello : {(flag)?<h4>RKD</h4>:""}

            <br></br>
            useEffect Example
            <br></br>
            <button onClick={()=>setFlag(true)}>click</button>
        </>
    )

}

export default A_useEffect;