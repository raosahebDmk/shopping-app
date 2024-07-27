import { useContext } from "react";
import { data1 } from "../App";


export default function About(){

    const user = useContext(data1);

    return(

        <>
            About page ... {user}
        </>
    )
}