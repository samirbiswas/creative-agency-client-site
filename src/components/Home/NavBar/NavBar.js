import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './NavBar.css'
const NavBar = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light ">
            <img className='logo-settings' src={logo} alt=""/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto ">
      <li className="nav-item active">
        <a className="nav-link mr-4" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link mr-4" href="#servicss">Our Portfolio</a>
      </li>

      <li className="nav-item">
        <a className="nav-link mr-4" href="/">Our Team</a>
      </li>
      <li className="nav-item">
        <a className="nav-link mr-4" href="#footers">Contact Us</a>
      </li>
      <li className="nav-item text-decoration-none">
       <Link to='/login' ><a className="nav-link mr-4 bg-dark text-light px-3 rounded text-decoration-none" href="/">Login</a></Link>
      </li>
    
      
    </ul>
    
  </div>
</nav>
        </div>
    );
};

export default NavBar;