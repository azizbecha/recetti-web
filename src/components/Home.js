import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import MainCarousel from './MainCarousel'
import NavBar from "./Navbar";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import app from "./auth/Firebase"
var user = firebase.auth().currentUser;


export default class Home extends React.Component {
    componentDidMount() {
      document.title = 'Recetti';
    }
    render() {   
        if (user) {
           return <h1>hello {user}</h1>
          }
          else {
              return <h1>please log in</h1>
          }
    }
    
}

