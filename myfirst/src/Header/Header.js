import React, { Component } from "react";
import {Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
  logout=()=>{
    localStorage.removeItem('token')
    window.location.href='/'
  }

render() {
  if(localStorage.getItem('token')){
    return (
      <Router>
       <Navbar collapseOnSelect expand="lg" className="nav" variant="dark">
       <img src="../Image/np.png" className="logo"/>
    <Navbar.Brand href="#home">Nepal Government</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/passport">Passport</Nav.Link>
        <Nav.Link href="/licence">Licence</Nav.Link>
        <Nav.Link href="/voting">Voting</Nav.Link>
        <NavDropdown title="Requested Form" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Passport</NavDropdown.Item>
          <NavDropdown.Item href="/Licenceshow">Licence</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Voting</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="/" onClick={this.logout}>logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
      </Router>
      );
  }
  return (
    <Router>
     <Navbar collapseOnSelect expand="lg" className="nav" variant="dark">
     <img src="../Image/np.png" className="logo"/>
  <Navbar.Brand href="#home">Nepal Government</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Passport</Nav.Link>
      <Nav.Link href="/">Licence</Nav.Link>
      <Nav.Link href="/">Voting</Nav.Link>
      <NavDropdown title="Requested Form" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/">Passport</NavDropdown.Item>
        <NavDropdown.Item href="/">Licence</NavDropdown.Item>
        <NavDropdown.Item href="/">Voting</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="/">Login</Nav.Link>
      <Nav.Link eventKey={2} href="/signup">
        Singup
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </Router>
    );
  }
}

export default NavbarPage;