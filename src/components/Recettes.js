import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
  
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import app from "./auth/Firebase"
import logo from './assets/img/recetti-logo.png';
var user = firebase.auth().currentUser;


export default function Categories() {
  let match = useRouteMatch();

  return (
    
    <div>
      <Switch>
        <Route path={`${match.path}/:Recette`}>
          <Recette />
        </Route>

        <Route path={match.path}>
          <Link to={`${match.url}/components`}>Components</Link>
        </Route>
      </Switch>
    </div>
  );
}

function Recette() {
  let { Recette } = useParams();
  return <h3>Nom de la recette: {Recette}</h3>;
}