import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbarss from "./Navbarss";
import Home from "../component/Home";
import Bag from "../component/Bag";
import About from "./About";



export default function MainNav(){
    return(
        <>
            <BrowserRouter>
                <Navbarss /> <span />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/bag' element={<Bag />}></Route>
                </Routes>
                </BrowserRouter>
        </>
    )
}