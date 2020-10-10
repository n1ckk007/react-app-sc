import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {animateScroll as scroll} from 'react-scroll'
import {
  Burger,
  Nav,
  NavbarContainer,
  NavItem,
  NavLogo,
  NavMenu,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./NavbarStyles";

const Navbar = ({ toggle }) => {
const [scrollNav, setScrollNav] = useState(false)

const changeNav = () => {
  // if window scroll y is greater than or = 80px update state
  if(window.scrollY >=80) {
    setScrollNav(true)
  } else {
    setScrollNav(false)
  }
}

useEffect(()=> {
  window.addEventListener('scroll', changeNav)
}, [])

const toggleHome = () => {
  scroll.scrollToTop()
}

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>Logo</NavLogo>
          <Burger onClick={toggle}>
            <FaBars />
          </Burger>
          <NavMenu>
            <NavItem>
              <NavLink to="about" 
              smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="signUp" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signIn" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
