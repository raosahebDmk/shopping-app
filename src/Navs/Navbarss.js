import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navbarss(){

    return(
        <>

            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand to="/">RKD</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink style={{marginRight: '10px'}} to="/">Home</NavLink><span></span>
                        <NavLink style={{marginRight: '10px'}} to="/about">About</NavLink><span></span>
                        <NavLink style={{marginLeft: '900px'}} to="/bag">
                        <img src="./bag.png" style={{width: '50px', height: '50px'}} alt="img"/>
                        </NavLink>                    
                    </Nav>
                </Container>
            </Navbar>

           
        </>
    )
}