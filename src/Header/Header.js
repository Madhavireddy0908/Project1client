import React from 'react';
import {NavLink} from "react-router-dom";
import headerStyles from "./header.module.css";
import logo from "./logos.png";

const Header = () => {
  return (
    <div>
    <header className={headerStyles.headernav}>
        <nav className="navbar navbar-expand-lg p-0">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="logo" className='p-0'/>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/aboutus">About us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/treatments">Treatments</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/bookappointment">Book Appointment</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    </div>
  )
}

export default Header;