import { useReducer } from "react"

const initialstate = 0 ;
const reducer = ((state, action) =>{

        switch(action)
        {
            case "Increement" :
                return state+1;
            case "Decreement" :
                return state-1;
            default :
                return state;
        }

    }

)

export default function Count(){
    
    const [count, dispatch] = useReducer(reducer, initialstate)

    return(
        <>
            count : {count}
            
            <br></br>
            <button onClick={()=>dispatch("Increement")}>Increement</button>
            <button onClick={()=>dispatch("Decreement")}>Decreement</button>
        </>
    )
}