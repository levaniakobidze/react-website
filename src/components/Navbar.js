import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Navbar.css'
import {Button} from './Button'
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const hadleClick = () => setClick(!click);

  const showButton = () => {
      if(window.innerWidth <= 960){
          setButton(false)
      }else{
          setButton(true)
      }
  }

  window.addEventListener('resize',showButton)

  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            LEV <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={hadleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="menu-item">
                  <Link to='/' className="nav-links" onClick={()=> setClick(false)}>Home</Link>
              </li>

              <li className="menu-item">
                  <Link to='/services' className="nav-links" onClick={()=> setClick(false)}>Services</Link>
              </li>

              <li className="menu-item">
                  <Link to='/contacts' className="nav-links" onClick={()=> setClick(false)}>Contacts</Link>
              </li>

              <li className="menu-item">
                  <Link to='/services' className="nav-links" onClick={()=> setClick(false)}>Products</Link>
              </li>
              <li className="menu-item">
                  <Link to='/sign-up' className="nav-links-mobile" onClick={()=> setClick(false)}>Sign Up</Link>
              </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
        </div>
      </nav>
    </Router>
  );
}

export default Navbar;
