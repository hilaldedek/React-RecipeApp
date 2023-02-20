import React from 'react';

import {Brand,Menu,MenuLink,Nav,Hamburger,StyledDiv } from './Navbar.style';
import sitelogo from '../../assets/navpng.png';
import {AiOutlineMenu} from "react-icons/ai";
import { useState } from 'react';

const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false);
  return (
    <Nav justify="space-between" wrap="wrap">
      
        <Brand to="/">
          <StyledDiv>
            <img src={sitelogo} alt="logo" width={"75rem"}/>
            <h2>Chef Crescent</h2>
          </StyledDiv>
        </Brand>
      
      
      <Hamburger onClick={()=>setIsOpen(!isOpen)}>
        <AiOutlineMenu/>
      </Hamburger>
      <Menu isOpen={isOpen} onClick={()=>setIsOpen(false)}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Sign Up</MenuLink>
        <MenuLink to="/" onClick={()=>sessionStorage.clear()}>Logout</MenuLink>
      </Menu>
      
    </Nav>
  );
};

export default Navbar;