import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './index.css';

import {Container} from 'react-bootstrap'

import MainCarousel from './components/MainCarousel'
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Footer from './components/Footer';
import Register from "./components/Register";
import Chefs from "./components/Chefs";
import Recettes from "./components/Recettes";
import Forum from "./components/Forum";
import Login from "./components/Login";
import Search from "./components/Search";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
          <Switch>

           <Route path="/register">
              <Register />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/forum">
              <Forum />
            </Route>

            <Route path="/chefs">
              <Chefs />
            </Route>

            <Route path="/recettes">
              <Recettes />
            </Route>

            <Route path="/search">
              <Search />
            </Route>

            <Route path="/">
              <MainCarousel />
              <Home />
              <Footer />
            </Route>

          </Switch>
        
      </Router>
    );
  }
}
