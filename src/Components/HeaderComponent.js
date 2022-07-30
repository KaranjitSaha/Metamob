import React, { Component, useState } from "react";
import { Navbar, Nav, NavbarBrand, NavItem, NavbarToggler, Collapse, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      walletAddress:"",
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  setWalletAddress=(newWalletAddress)=>{
    this.setState({
      walletAddress: newWalletAddress
    });
  }

  requestAccount = async () => {
    console.log("Requesting account...");
  //Check if Meta Mask Extension exists
    if (window.ethereum) {
      console.log('detected');
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        this.setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch(error){
        console.log("Error connecting...");
        console.log(error);
      }
    } else {
      alert("Meta Mask not detected");
    }
  }

render() {
  return (
    <Navbar dark expand="md">
      <NavbarToggler onClick={this.toggleNav} />
      <NavbarBrand href="/">
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
            <Button outline color="warning" onClick={this.requestAccount}>
              <span className="fa fa-user"></span> Login
            </Button>
            <h3 style={{color:"white"}}>{this.state.walletAddress}</h3>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
}

export default Header;
