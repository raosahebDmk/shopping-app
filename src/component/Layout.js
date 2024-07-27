import { Link } from "react-router-dom";

import { Outlet } from "react-router-dom";

export default function Layout(){

    return(
        <>
            <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/bag">Bag</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
        </>
    );

}