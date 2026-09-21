import React from "react";
import { Link, Outlet } from "react-router-dom";
function Layout() {
  return (
    <div  className="container ">
      <div className="row">
        <div className="col-2">
          <img
            src="https://darshan.ac.in/Content/media/DU_Logo.svg"
            className="img-fluid"
          />
        </div>
        <div className="col">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    
      <Outlet />
    
      <div className="row">
        <div className="col text-center">
          &copy; Darshan University - Rajkot
        </div>
      </div>
    </div>
  );
}

export default Layout;