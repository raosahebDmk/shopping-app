import { useState } from "react";

export default function UpdateObj(){

    const [allValues, setValues] = useState({fName:"Rao",lName:"Deshmukh"});
    
    function update()
    {
        setValues({...allValues, fName : "Raosaheb"})
    }

    return(
        <>
            <h1>todo List...</h1>
            <button onClick={update}>Click</button>
            <h2>{allValues.fName}</h2>
            <h2>{allValues.lName}</h2>
        </>
    )
}