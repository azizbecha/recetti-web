import React from 'react';
import { 
    Link,
    Route, 
    Switch,
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import "../Login.css"
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import app from "./auth/Firebase"
import logo from '../assets/img/recetti-logo.png';
var user = firebase.auth().currentUser;

export default class Login extends React.Component {
    render() {
       return  (      
              
        <div class="login-form"><br />
        <form method="post">
            <div className="mb-3"><center><img style={{width:'100px'}} src={logo} /></center></div>
            <h4 class="modal-title">Se connecter a Recetti</h4>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Nom d'utilisateur ou E-mail" name="username" required="required" />
            </div>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="Mot De Passe" name="password" required="required" />
            </div>
            <input type="submit" name="login" class="btn btn-primary btn-block btn-lg" value="Se Connecter" />              
        </form>			
        <div class="text-center small">Vous n'avez pas un compte ?<a href="register"> Créez un compte</a></div>
    </div>
             
       );
       
    }
}