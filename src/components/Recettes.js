import React from 'react';
import { 
    Link, Route, Switch,
  } from "react-router-dom";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
  
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import app from "./auth/Firebase"
import logo from '../assets/img/recetti-logo.png';
var user = firebase.auth().currentUser;


export default class Chefs extends React.Component {
    render() {
      
       return  (
           
               <h1>recettes</h1>
             
       );
       
    }
}