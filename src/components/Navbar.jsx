import React from 'react';
import {Link, useHistory} from 'react-router-dom';

// Bootstrap
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

// Auth
import {auth} from '../auth/Firebase';
import {useAuth} from '../auth/AuthContext';

// Logo
import logo from '../assets/images/recetti-logo.png';

// antd message component
import {message} from 'antd';
import 'antd/dist/antd.css';

const NavBar = () => {
  const history = useHistory();
  const {currentUser} = useAuth();

  // Logout function
  const logOutUser = () => {
    auth
      .signOut()
      .then(() => {
        message.success('Déconnecté avec succés !', 3);
        history.push('/');
      });
  };

  // If user is signed in
  if (currentUser) {
    return (
      <Navbar
        style={{backgroundColor: '#f64152', color: '#fff'}}
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand>
          <img
            style={{width: '50px', height: '50px', marginTop: '-6px'}}
            src={logo}
            alt="Recetti logo"
          />
          <Link to="/">Recetti</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Acceuil</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/chefs">Chefs</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/recettes">Recettes</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/forum">Forum</Link>
            </Nav.Link>
            <NavDropdown
              id="dropdown-basic nav-dropdown"
              style={{backgroundColor: '#73a47', color: '#fff'}}
              className="white"
              title={<span style={{color: '#fff'}}>Catégories</span>}
            >
              <NavDropdown.Item>
                <Link style={{color: 'black'}} to={`categories/petit-dejeuner`}>
                  Petit Déjeuner
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{color: 'black'}} to={`categories/dejeuner`}>
                  Déjeuner
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{color: 'black'}} to={`categories/diner`}>
                  Diner
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{color: 'black'}} to={`categories/dessert`}>
                  Dessert
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{color: 'black'}} to="categories/">
                  Toutes les Catégories
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link  to={`../../../../add-recipe`}>
                  <i className="fa fa-plus"></i> Ajouter Une recette
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link  to={`../../../../contact`}>
                  <i className="fa fa-phone"></i> Contact
              </Link>
            </Nav.Link>
            <NavDropdown
              alignRight
              id="dropdown-basic nav-dropdown"
              style={{backgroundColor: 'transparent', color: '#fff'}}
              className="white"
              title={
                <span style={{color: '#fff'}}>
                  <i className="fa fa-user-circle"></i> Profil
                </span>
              }
            >
              <NavDropdown.Item>
                <Link style={{color: 'black'}} to={`../../../../chefs/${currentUser.uid}`}>
                  Mon profil
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={logOutUser}>
                <span>Se Déconnecter</span>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {

    // If user not signed in
    return (
      <Navbar
        style={{backgroundColor: '#f64152', color: '#fff'}}
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand>
          <img
            alt="Recetti logo"
            style={{width: '50px', height: '50px', marginTop: '-6px'}}
            src={logo}
          />
          <Link to="/">
            <strong> Recetti</strong>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          style={{backgroundColor: '#fff'}}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Acceuil</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/chefs">Chefs</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/recettes">Recettes</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/forum">Forum</Link>
            </Nav.Link>
            <NavDropdown
              id="dropdown-basic nav-dropdown"
              style={{backgroundColor: '#73a47', color: '#fff'}}
              className="white"
              title={<span style={{color: '#fff'}}>Catégories</span>}
            >
              <NavDropdown.Item>
                <Link style={{color: 'black'}} to={`categories/petit-dejeuner`}>
                  Petit Déjeuner
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{color: 'black'}} to={`categories/dejeuner`}>
                  Déjeuner
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{color: 'black'}} to={`categories/diner`}>
                  Diner
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{color: 'black'}} to={`categories/dessert`}>
                  Dessert
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{color: 'black'}} to="categories/">
                  Toutes les Catégories
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/login">
                <strong>
                  <i className="fa fa-sign-in"></i> Se Connecter
                </strong>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/register">
                <strong>
                  <i className="fa fa-user-plus"></i> S'inscrire
                </strong>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar