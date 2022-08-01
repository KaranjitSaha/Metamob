import React, { Component, useState } from "react";
import { Navbar, Nav, NavbarBrand, NavItem, NavbarToggler, Collapse, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      walletAddress:"",
      loginStatus: false,
      currentStatus: "LogIn"
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.statusChange = this.statusChange.bind(this);
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

  statusChange() {
    if(this.state.loginStatus) {
      alert("Logged out successfully");
      this.setState({
        loginStatus: false,
        currentStatus: "LogIn"
      });
    }
    else {
      alert("Logged in successfully");
      this.setState({
        loginStatus: true,
        currentStatus: "Logout"
      });
    }
  }

  requestAccount = async () => {
    if(!this.state.loginStatus) {
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
          this.statusChange();
          console.log(this.state.loginStatus);
        } catch(error){
          console.log("Error connecting...");
          console.log(error);
        }
      } else {
        alert("Meta Mask not detected");
      }
    } else {
      console.log("Removing account...");
      this.setWalletAddress("");
      this.statusChange();
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
              <span className="fa fa-user"></span> {this.state.currentStatus}
            </Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
}

export default Header;
