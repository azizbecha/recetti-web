import React from "react";
import { 
  Link,
} from "react-router-dom";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import "../App.css"
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import app from "./auth/Firebase"
var user = firebase.auth().currentUser;

export default class NavBar extends React.Component {
  render() {
    if (user) {
      return (
        <Navbar style={{backgroundColor:"#f64152",color:'#fff'}} collapseOnSelect expand="lg" >
            <Navbar.Brand><Link to="/">Recetti</Link></Navbar.Brand>
            <Navbar.Toggle style={{backgroundColor: '#fff',borderColor: '#fff'}} aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link><Link to="/">Home</Link></Nav.Link>
                  <Nav.Link><Link to="/about">About</Link></Nav.Link>
                  <Nav.Link><Link to="/topics">Topics</Link></Nav.Link>
                     <NavDropdown 
                        id="dropdown-basic nav-dropdown" 
                        style={{color: '#fff'}} 
                        className="white" 
                        title="Catégories"
                       >
        <NavDropdown.Item><Link style={{color: 'black'}} to="categories/petit-dejeuner">Petit Déjeuner</Link></NavDropdown.Item>
              <NavDropdown.Item><Link style={{color: 'black'}} to="categories/dejeuner">Déjeuner</Link></NavDropdown.Item>
              <NavDropdown.Item><Link style={{color: 'black'}} to="categories/diner">Diner</Link></NavDropdown.Item>
              <NavDropdown.Item><Link style={{color: 'black'}} to="categories/dessert">Dessert</Link></NavDropdown.Item>
            </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link>
      <Link to="/profile">{user}</Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      )
    }
    else {
      return (
        <Navbar style={{backgroundColor:"#f64152",color:'#fff'}} collapseOnSelect expand="lg" >
        <Navbar.Brand><Link to="/">Recetti</Link></Navbar.Brand>
        <Navbar.Toggle style={{backgroundColor: '#fff',borderColor: '#fff'}} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
             <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/about">About</Link></Nav.Link>
                <Nav.Link><Link to="/topics">Topics</Link></Nav.Link>
                <NavDropdown 
                        id="dropdown-basic nav-dropdown" 
                        style={{backgroundColor:'#73a47',color: '#fff'}} 
                        className="white" 
                        title="Catégories"
                       >
              <NavDropdown.Item><Link style={{color: 'black'}} to="categories/petit-dejeuner">Petit Déjeuner</Link></NavDropdown.Item>
              <NavDropdown.Item><Link style={{color: 'black'}} to="categories/dejeuner">Déjeuner</Link></NavDropdown.Item>
              <NavDropdown.Item><Link style={{color: 'black'}} to="categories/diner">Diner</Link></NavDropdown.Item>
              <NavDropdown.Item><Link style={{color: 'black'}} to="categories/dessert">Dessert</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
            <Link to="/login">Se Connecter</Link>
            </Nav.Link>

            <Nav.Link>
            <Link to="/register"><strong>S'inscrire</strong></Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      )
    }
  }
}
