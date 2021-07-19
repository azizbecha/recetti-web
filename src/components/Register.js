import React from 'react';
import { 
    Link, 
    Route, 
    Switch,
    Redirect
  } from "react-router-dom";

// Components
import Footer from "./Footer";

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import "../Register.css"

// Firebase
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import app from "./auth/Firebase"

var user = firebase.auth().currentUser;


export default class Register extends React.Component {
    componentDidMount() {
        document.title = 'Rejoindre Recetti';
      }
    render() {
      if (!user) {
        return  (         
           <div>
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
                    <input type="text" class="form-control" name="username" placeholder="Nom d'utilisateur" required="required" />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" name="password" placeholder="Mot de passe" required="required" />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" name="confirm_password" placeholder="Re-taper le mot de passe" required="required" />
                </div>        
                <div class="form-group">
                    <button type="submit" name="register" class="btn btn-primary btn-lg"><i class="fa fa-plus"></i> Rejoindre</button>
                </div>
            </form>
            <div class="hint-text">Vous avez déja un compte ? <Link to="login">Se Connecter</Link></div>
        </div>
        <Footer />
           </div>
                 
           );
      } else {
        <Redirect to="/" />
    }
       
    }
}