import React from 'react';  
export default function Data(props){

    

  
    return(
        <>
        <h1>car name : {props.brand.map((n)=>
        
            <li>{n.name}</li>
        
        )}</h1>
        
        
        </>
    );
}