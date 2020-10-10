import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
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

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/">Logo</NavLogo>
          <Burger onClick={toggle}>
            <FaBars />
          </Burger>
          <NavMenu>
            <NavItem>
              <NavLink to="about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="discover">Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="signUp">Sign Up</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signIn">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
