import React, { Component } from "react";
import { Navbar, Nav, NavbarBrand, NavItem, NavbarToggler, Collapse, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
        isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
      return (
      <Navbar dark expand="md">
        <NavbarToggler onClick={this.toggleNav} />
        <NavbarBrand  href="/">
          <strong>MetaMob</strong>
        </NavbarBrand>
        <Collapse isOpen={this.state.isNavOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
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
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
