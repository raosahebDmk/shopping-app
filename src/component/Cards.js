import {  createContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";


export default function Cards(props){

    let [count, setCount] = useState(0);
    let [totalAmt, setTotalAmt] = useState(0);
    

    let newList = [];

    
    useEffect(() => 
      console.log("useEffect...")
    ,[newList])


    
    function addItem(param){
        
        setCount(count+1);
        setTotalAmt(totalAmt+param.price)
        newList.push(param)

        console.log(newList);
        
        
    }
    
   
    function deleteItem(param){
        if(count!==0)
        {
            setCount(count-1);
            setTotalAmt(totalAmt-param.price)
        }
    }    

    return (
        <>

 
        
        <h4 style={{textAlign: 'right', paddingRight: '10px'}}> Total Amt: {totalAmt}</h4>
        <div className="row row-cols-1 row-cols-lg-2 g-4" >
        
        {props.brand.map((mobile)=>
        <Card style={{ width: '15rem', marginLeft: '50px', marginRight:'20px'}}>
        
          <Card.Body>
            <Card.Title>{mobile.name}</Card.Title>        
            <Card.Img variant="top" src={mobile.image} style={{width: 150}}/>
            <Card.Subtitle className="mb-2 text-muted" style={{textAlign: "center"}}>{mobile.model}</Card.Subtitle>
            <Card.Text>
              price : {mobile.price}
            </Card.Text>
            <Card.Link href="#"><Button onClick={() => addItem(mobile)}>Add</Button></Card.Link>
            <Card.Link href="#"><Button onClick={() => deleteItem(mobile)} className="btn btn-danger" >Delete</Button></Card.Link>
          </Card.Body>
        
        </Card>
        )}
       
        </div>
        </>
      );
}

