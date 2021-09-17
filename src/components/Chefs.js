import React from 'react';
import { 
    Link, Route, Switch,
  } from "react-router-dom";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
  
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import app from "./auth/Firebase"
import logo from './assets/images/recetti-logo.png';
var user = firebase.auth().currentUser;


export default class Chefs extends React.Component {
  componentDidMount() {
    document.title = 'Chefs - Recetti';
  }
  render() {
      return  (
            <div>
              <center>
                <br />
                  <h1>Chefs</h1>
              </center>
            </div>
      );
  }
}