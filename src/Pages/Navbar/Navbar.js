import React, { useState } from "react";
import CustomLink from "../CustomLink/CustomLink";
import globetech from '../../assets/globetech logo.png'
import './Nabar.css'
import { Link,useLocation } from 'react-router-dom';


const Navbar = () => {
    const location = useLocation();
    let path = location?.pathname ;
    let services = path.toString()
  return (
    <div>
      {
       services == '/login' ? '' : <nav className="navbar navbar-expand-lg navbar-light py-5">
        <div className="container">
          {
            services == '/services'  ? '' : <img src={globetech} alt="" className="logo-img" />
          }
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <CustomLink to="/" className="nav-link navbar">Home</CustomLink>
              
              </li>
              <li className="nav-item">
              <CustomLink to="/services" className="nav-link navbar">services</CustomLink>
              </li>
              <li className="nav-item">
              <CustomLink to="/login" className="nav-link navbar">Login</CustomLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      }
    </div>
  );
};

export default Navbar;
