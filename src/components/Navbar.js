import React from "react";
import { 
  Link,
  useRouteMatch
} from "react-router-dom";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import "../App.css"
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import app from "./auth/Firebase"
import logo from "./assets/img/recetti-logo.png";
var user = firebase.auth().currentUser;

export default function NavBar () {
  let match = useRouteMatch();
    if (user) {
      return (
        <Navbar style={{backgroundColor:"#f64152",color:'#fff'}} collapseOnSelect expand="lg" >
            <Navbar.Brand><img style={{width: '50px',height: '50px',marginTop: '-6px'}} src={logo} /><Link to="/">Recetti</Link></Navbar.Brand>
            <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link><Link to="/">Acceuil</Link></Nav.Link>
                  <Nav.Link><Link to="/chefs">Chefs</Link></Nav.Link>
                  <Nav.Link><Link to="/recettes">Recettes</Link></Nav.Link>
                  <Nav.Link><Link to="/forum">Forum</Link></Nav.Link>
                    <NavDropdown 
                        id="dropdown-basic nav-dropdown" 
                        style={{backgroundColor:'#73a47',color: '#fff'}} 
                        className="white" 
                        title={
                          <span style={{color: '#fff'}}>Catégories</span>
                        }>
                      <NavDropdown.Item><Link style={{color: 'black'}} to={`${match.url}/categories/petit-dejeuner`}>Petit Déjeuner</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link style={{color: 'black'}} to={`${match.url}/categories/dejeuner`}>Déjeuner</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link style={{color: 'black'}} to={`${match.url}/categories/diner`}>Diner</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link style={{color: 'black'}} to={`${match.url}/categories/dessert`}>Dessert</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link style={{color: 'black'}} to='categories/'>Toutes les Catégories</Link></NavDropdown.Item>
                     </NavDropdown>
               </Nav>
             <Nav>
               <Nav.Link><Link to="/profile"><i class="fa fa-user"></i> {user}</Link></Nav.Link>
             </Nav>
        </Navbar.Collapse>
      </Navbar>
      )
    }
    else {
      return (
        <Navbar style={{backgroundColor:"#f64152",color:'#fff'}} collapseOnSelect expand="lg" >
          <Navbar.Brand><img style={{width: '50px',height: '50px',marginTop: '-6px'}} src={logo} /><Link to="/"><strong> Recetti</strong></Link></Navbar.Brand>
            <Navbar.Toggle style={{ backgroundColor: '#fff'}} aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav className="mr-auto">
                  <Nav.Link><Link to="/">Acceuil</Link></Nav.Link>
                  <Nav.Link><Link to="/chefs">Chefs</Link></Nav.Link>
                  <Nav.Link><Link to="/recettes">Recettes</Link></Nav.Link>
                  <Nav.Link><Link to="/forum">Forum</Link></Nav.Link>
                  <NavDropdown 
                        id="dropdown-basic nav-dropdown" 
                        style={{backgroundColor:'#73a47',color: '#fff'}} 
                        className="white" 
                        title={
                          <span style={{color: '#fff'}}>Catégories</span>
                        }>
                      <NavDropdown.Item><Link style={{color: 'black'}} to={`${match.url}/categories/petit-dejeuner`}>Petit Déjeuner</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link style={{color: 'black'}} to={`${match.url}/categories/dejeuner`}>Déjeuner</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link style={{color: 'black'}} to={`${match.url}/categories/diner`}>Diner</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link style={{color: 'black'}} to={`${match.url}/categories/dessert`}>Dessert</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link style={{color: 'black'}} to='categories/'>Toutes les Catégories</Link></NavDropdown.Item>
                     </NavDropdown>
              </Nav>
          <Nav>
            <Nav.Link><Link to="/login"><strong><i class="fa fa-sign-in"></i> Se Connecter</strong></Link></Nav.Link>
            <Nav.Link><Link to="/register"><strong><i class="fa fa-user-plus"></i> S'inscrire</strong></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      )
    }
}
