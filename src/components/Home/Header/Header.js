import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../NavBar/NavBar';
import './Header.css'
const Header = () => {
    return (
    <div  className="header-area">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
    <polygon fill="white" points="0,100 100,0 100,100"/>
  </svg>
      <NavBar></NavBar>
      <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;