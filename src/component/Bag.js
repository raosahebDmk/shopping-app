import { useContext } from "react";
import { data1 } from "../App";
import { data } from "./Cards";

export default function Bag(){

  const user = useContext(data1);
  
    return(

        <>
            <h2>
              bag..... {user}
            </h2>

        </>
    );

}