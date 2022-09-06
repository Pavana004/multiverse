import React from 'react'
import "../components/navbar.css";
import Mlogo from "../components/M-logo.jpg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-light">
    <div className="container">
      <Link className="navbar-brand"  to="/login">
        <img src={Mlogo} alt="" />
      </Link>
      <div className="dropdown">
        <button className="btn">Sign-In</button>
      </div>
    </div>
  </nav>

  )
}

export default Navbar