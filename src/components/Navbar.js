import React from "react";
import { 
  Link,
  useRouteMatch,
  useHistory
} from "react-router-dom";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import AuthContext, {useAuth} from './auth/AuthContext'
import app from "./auth/Firebase"
import logo from "./assets/images/recetti-logo.png";
import {message} from 'antd';
import "antd/dist/antd.css";
var user = firebase.auth().currentUser;

export default function NavBar () {
  let match = useRouteMatch();
  const history = useHistory();
  const {currentUser}  = useAuth();
  const logOutUser = () => {
    firebase.auth().signOut().then(() => {
      message.success("Déconnecté avec succés !", 3)
      history.push("/");
    });
  }
    if (currentUser) {
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
                <NavDropdown.Item><Link style={{color: 'black'}} to={`categories/petit-dejeuner`}>Petit Déjeuner</Link></NavDropdown.Item>
                <NavDropdown.Item><Link style={{color: 'black'}} to={`categories/dejeuner`}>Déjeuner</Link></NavDropdown.Item>
                <NavDropdown.Item><Link style={{color: 'black'}} to={`categories/diner`}>Diner</Link></NavDropdown.Item>
                <NavDropdown.Item><Link style={{color: 'black'}} to={`categories/dessert`}>Dessert</Link></NavDropdown.Item>
                <NavDropdown.Item><Link style={{color: 'black'}} to='categories/'>Toutes les Catégories</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown
                alignRight
                id="dropdown-basic nav-dropdown" 
                style={{backgroundColor:'transparent',color: '#fff'}} 
                className="white" 
                title={
                  <span style={{color: '#fff'}}><i className="fa fa-user-circle"></i> Profil</span>
                }>
                <NavDropdown.Item><Link style={{color: 'black'}} to={`profile`}>Mon profil</Link></NavDropdown.Item>
                <NavDropdown.Item><Link style={{color: 'black'}} to={`add-recipe`}>Ajouter Une recette</Link></NavDropdown.Item>
                <NavDropdown.Item onClick={logOutUser}><span>Se Déconnecter</span></NavDropdown.Item>
              </NavDropdown>
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
                      <NavDropdown.Item><Link style={{color: 'black'}} to={`categories/petit-dejeuner`}>Petit Déjeuner</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link style={{color: 'black'}} to={`categories/dejeuner`}>Déjeuner</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link style={{color: 'black'}} to={`categories/diner`}>Diner</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link style={{color: 'black'}} to={`categories/dessert`}>Dessert</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link style={{color: 'black'}} to='categories/'>Toutes les Catégories</Link></NavDropdown.Item>
                  </NavDropdown>
              </Nav>
          <Nav>
            <Nav.Link><Link to="/login"><strong><i className="fa fa-sign-in"></i> Se Connecter</strong></Link></Nav.Link>
            <Nav.Link><Link to="/register"><strong><i className="fa fa-user-plus"></i> S'inscrire</strong></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      )
    }
}
