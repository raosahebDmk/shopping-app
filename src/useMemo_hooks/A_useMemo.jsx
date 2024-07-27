import { useEffect, useMemo, useState } from "react";


function A_useMemo(){


    

    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(100);


    const multiplication = useMemo(function multiply()
    {
        
        return add*10;
    },[add])


    return (
        <>
        
        <div className="container">        
            {multiplication}
            <br></br>
            <button onClick={()=>setAdd(add+1)}>Add</button> <span></span> {add}
            <br></br>
            <br></br>
            <button onClick={()=>setSub(sub-1)}>sub</button> <span></span> {sub}            
        </div>
        </>

    );
}

export default A_useMemo;