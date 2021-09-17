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

import {message} from 'antd';
import "antd/dist/antd.css";

// Import CSS
import './components/styles/Login.css'
import './components/styles/Register.css'
// Import Bootstrap 4
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import firebase from 'firebase/app';
import AuthProvider, {useAuth} from './components/auth/AuthContext'
// Import all our Components to add them to the Route.
import MainCarousel from './components/MainCarousel';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import Chefs from './components/Chefs';
import Recettes from './components/Recettes';
import Forum from './components/Forum';
import Login from './components/Login';
import Search from './components/Search';
import Categories from './components/Categories';
import AddRecipe from './components/AddRecipe';
import FAQ from './components/FAQ';
import NotFound from './components/NotFound'
import ForgotPassword from "./components/ForgotPassword"
import PrivateRoute from "./components/auth/PrivateRoute";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Contact from './components/Contact'
const App = () =>  {
  var user = firebase.auth().currentUser;
  return (
    <AuthProvider>
      <Router>
        <NavBar />
          <Switch>  
            <ProtectedRoute path="/register" component={Register} />
            <ProtectedRoute path="/login" component={Login} />
            <ProtectedRoute
              path="/forgot-password"
              component={ForgotPassword}
            />
            <PrivateRoute path="/add-recipe" component={AddRecipe} />
            <Route path="/faq">
              <FAQ />
            </Route>

            <PrivateRoute path="/contact" component={Contact} />

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

            <Route exact path="/">
              <MainCarousel />
              <Home />
              <Footer />
            </Route>
            <Route component={NotFound} />
          </Switch>
      </Router>
    </AuthProvider>
  ); // end return
} // end function

export default App;