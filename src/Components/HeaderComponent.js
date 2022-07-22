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
            <NavLink className="nav-link" to="#">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="#">
              Places
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="#">
              Campaigns
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
              <Button outline color="warning">
                  Login
              </Button>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
