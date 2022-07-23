import React, { Component } from "react";
import { Navbar, Nav, NavbarBrand, NavItem, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
      return (
      <Navbar dark expand="md">
        <NavbarBrand  href="/">
          <strong>MetaMob</strong>
        </NavbarBrand>
        <Nav navbar>
          <NavItem>
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/places">
              Places
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/campaigns">
              Campaigns
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
              <Button outline color="warning">
                <span className="fa fa-user"></span> Login
              </Button>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
