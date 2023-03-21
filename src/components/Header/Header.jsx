import React from 'react'
import "./index.scss"
import dncLogo from"../../assets/image_logo.png";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
  <header className='header'>
    

    <img src={dncLogo} alt="logo da DNC"/>
    
    
   
  </header>
  )
  };

export default Header;