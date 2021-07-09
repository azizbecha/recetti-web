import React from 'react';
import { 
    Link, Route, Switch,
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import "../Register.css"
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import app from "./auth/Firebase"
var user = firebase.auth().currentUser;


export default class Register extends React.Component {
    render() {
       return  (         
        <div class="signup-form body">
        <form method="post">
            <h2>Créer un compte</h2>
            <p>Créez un compte et rejoignez Recetti !</p>
            <hr />
            <div class="form-group">
      
                <div class="row">
                    <div class="col-sm-6"><input type="text" class="form-control" name="firstname" placeholder="Nom" required="required" /></div>
                    <div class="col-sm-6"><input type="text" class="form-control" name="lastname" placeholder="Prénom" required="required" /></div>
                </div>        	
            </div>
            <div class="form-group">
                <input type="email" class="form-control" name="email" placeholder="Email" required="required" />
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="username" placeholder="Nom D'utilisateur" required="required" />
            </div>
            <div class="form-group">
                <input type="password" class="form-control" name="password" placeholder="Mot De Passe" required="required" />
            </div>
            <div class="form-group">
                <input type="password" class="form-control" name="confirm_password" placeholder="Re-taper le mot de passe" required="required" />
            </div>        
            <div class="form-group">
                <button type="submit" name="register" class="btn btn-primary btn-lg"><i class="fa fa-plus"></i> Rejoindre</button>
            </div>
        </form>
        <div class="hint-text">Vous avez déja un compte ? <a href="login">Se Connecter</a></div>
    </div>
             
       );
       
    }
}