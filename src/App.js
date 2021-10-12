/*
 * ------------------------------------------|
 * Recetti Project Copyright 2021 AzizVirus. |
 * Github: AzizVirus/recetti-web             |
 * Licenced under the MIT License.           |
 * ------------------------------------------|
 */

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// antd
import 'antd/dist/antd.css';

// Import CSS
import './styles/Login.css';
import './styles/Register.css';

// Import Bootstrap 4
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// Auth Components
import AuthProvider from './auth/AuthContext';

// Import all our Components to add them to the Route.
import MainHeading from './components/MainHeading';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Register from './pages/Register';
import Chefs from './pages/Chefs';
import Recettes from './pages/Recettes';
import Forum from './pages/Forum';
import Login from './pages/Login';
import Search from './pages/Search';
import Categories from './pages/Categories';
import AddRecipe from './pages/AddRecipe';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import ForgotPassword from './pages/ForgotPassword';
import PrivateRoute from './auth/PrivateRoute';
import ProtectedRoute from './auth/ProtectedRoute';
import Contact from './pages/Contact';
import EditProfile from './pages/EditProfile';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Switch>

          <ProtectedRoute path="/register" component={Register} />
          <ProtectedRoute path="/login" component={Login} />
          <ProtectedRoute path="/forgot-password" component={ForgotPassword} />

          <PrivateRoute path="/add-recipe" component={AddRecipe} />
          <PrivateRoute path="/contact" component={Contact} />
          <PrivateRoute path="/edit-profile" component={EditProfile} />

          <Route path="/faq">
            <FAQ />
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

          <Route exact path="/">
            <MainHeading />
            <Home />
            <Footer />
          </Route>

          {/* The 404 page route */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  ); // end return
}; // end function

export default App;