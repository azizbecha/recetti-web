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

export default class Home extends React.Component {
    componentDidMount() {
      document.title = 'Recetti';
    }
    render() {   
      return (

        <h2>home</h2>

        );
    }
    
}

