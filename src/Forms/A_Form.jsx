import { useState } from "react";

function A_Form(){
    

    const [name, setName] = useState();
    const [email, setEmail] = useState();


    function handleSubmit(e){
        e.preventDefault()
        setName(e.target.name.value)        
        setEmail(e.target.email.value)        
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className="container">
                <h2>Form</h2>
                <br></br>
                <input type="text" name="name" placeholder="Enter name"/>
                <br></br>
                <br></br>
                <input type="text" name="email" placeholder="Enter emailId"/>
                <br></br>
                <br></br>
                <button type='submit'>Submit</button>
            </div>
            <pre>{(name)}</pre>
            
            <pre>{(email)}</pre>
        </form>
        </>
    )
}

export default A_Form;