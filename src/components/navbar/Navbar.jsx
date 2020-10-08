import React from "react";
import { FaBars } from "react-icons/fa";
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
  return (
    <>
      <Nav>
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
    </>
  );
};

export default Navbar;
