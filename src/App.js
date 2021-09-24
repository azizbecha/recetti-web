/*
 * ------------------------------------------|
 * Recetti Project Copyright 2021 AzizVirus. |
 * Github: AzizVirus/recetti-web             |
 * Licenced under the MIT License.           |
 * ------------------------------------------|
 */

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import 'antd/dist/antd.css';

// Import CSS
import './components/styles/Login.css';
import './components/styles/Register.css';

// Import Bootstrap 4
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// Auth Components
import AuthProvider from './components/auth/AuthContext';

// Import all our Components to add them to the Route.
import MainHeading from './components/MainHeading';
import NavBar from './components/Navbar';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Register from './components/pages/Register';
import Chefs from './components/pages/Chefs';
import Recettes from './components/pages/Recettes';
import Forum from './components/pages/Forum';
import Login from './components/pages/Login';
import Search from './components/pages/Search';
import Categories from './components/pages/Categories';
import AddRecipe from './components/pages/AddRecipe';
import FAQ from './components/pages/FAQ';
import NotFound from './components/pages/NotFound';
import ForgotPassword from './components/pages/ForgotPassword';
import PrivateRoute from './components/auth/PrivateRoute';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Contact from './components/pages/Contact';
import User from './components/pages/User';

const App = () => {
  //var user = firebase.auth().currentUser;
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Switch>
          <ProtectedRoute path="/register" component={Register} />
          <ProtectedRoute path="/login" component={Login} />
          <ProtectedRoute path="/forgot-password" component={ForgotPassword} />
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

          <Route path="/u">
            <User />
          </Route>

          <Route path="/categories">
            <Categories />
          </Route>

          <Route exact path="/">
            <MainHeading />
            <Home />
            <Footer />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  ); // end return
}; // end function

export default App;
