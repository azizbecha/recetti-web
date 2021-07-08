import React from "react";
import {
  
  Link,
} from "react-router-dom";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import "../App.css"
export default function NavBar() {
    return (
        <Navbar style={{backgroundColor:"#f64152",color:'#fff'}} collapseOnSelect expand="lg" >
  <Navbar.Brand><Link to="/">Recetti</Link></Navbar.Brand>
  <Navbar.Toggle style={{backgroundColor: '#fff',borderColor: '#fff'}} aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
       <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link><Link to="/about">About</Link></Nav.Link>
          <Nav.Link><Link to="/topics">Topics</Link></Nav.Link>
      <NavDropdown style={{color: '#fff'}} className="white" title={
        <span style={{color: '#fff'}} className="white">Dropdown</span>
    } id="collasible-nav-dropdown">
        <NavDropdown.Item>Action</NavDropdown.Item>
        <NavDropdown.Item>Another action</NavDropdown.Item>
        <NavDropdown.Item>Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link><Link to="/about">Se Connecter</Link></Nav.Link>
      <Nav.Link>
      <Link to="/about">S'inscrire</Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}