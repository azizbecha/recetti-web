/*
 * ------------------------------------------|
 * Recetti Project Copyright 2021 AzizVirus. |
 * Github: AzizVirus/recetti-web             |
 * Licenced under the MIT License.           |
 * ------------------------------------------|
 */

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Import Bootstrap 4
import 'bootstrap/dist/css/bootstrap.min.css';

// Import CSS
import './App.css';
import './index.css';

// Import all our Components to add them to the Route.
import MainCarousel from './components/MainCarousel';
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Footer from './components/Footer';
import Register from "./components/Register";
import Chefs from "./components/Chefs";
import Recettes from "./components/Recettes";
import Forum from "./components/Forum";
import Login from "./components/Login";
import Search from "./components/Search";
import Categories from "./components/Categories";

const App =  () =>  {
  
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

            <Route path="/categories">
              <Categories />
            </Route>

            <Route path="/">
              <MainCarousel />
              <Home />
              <Footer />
            </Route>
          </Switch>
      </Router>

    ); // end return
} // end function


export default App;