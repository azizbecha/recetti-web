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
import {Container} from 'react-bootstrap'
import '../index.css';
import '../App.css';
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
        return (
            
           <Container>        
              <center>
                <br /> <br />
                  <h1 class="font-weight-bold">
                    <i class="fa fa-search" style={{color: '#f64152'}} aria-hidden="true"></i> Trouvez Votre Recette Facilement</h1>
         <br />
         <form class="form-group" action="search" method="get" style={{width:'70%'}}>


  <div class="input-group mb-3">
  <input class="form-control search_form" style={{borderRadius:'30px'}} name="query" type="text" placeholder="Pizza, Sandwich, Panini, Cake ..." />
  <div class="input-group-append ml-4">
    <button class="btn btn-primary" style={{borderRadius:'10px'}} type="submit"><i class="fa fa-search"></i></button>
  </div>
</div>
        </form>
        <div class="btn-group font-weight-bold">
    <a href="categorie?c=Petit Déjeuner" class="btn btn-primary mr-1 font-weight-bold"><i class="fa fa-tag"></i>&nbsp; Petit Déjeuner</a>
    <a href="categorie?c=Déjeuner" class="btn btn-primary mr-1 font-weight-bold"><i class="fa fa-tag"></i>&nbsp; Déjeuner</a>
    <a href="categorie?c=Diner" class="btn btn-primary mr-1 font-weight-bold"><i class="fa fa-tag"></i>&nbsp; Diner</a>
    <a href="categorie?c=Dessert" class="btn btn-primary mr-1 font-weight-bold"><i class="fa fa-tag"></i>&nbsp; Dessert</a>
  </div>
  
              <br /> <br /> <br />
                <h1 class="font-weight-bold"><i style={{color: '#f64152'}} class="fa fa-eye"></i> Trouvez des recettes a partir de ce que vous avez dans votre Frigo !</h1>
 <br /> <form method="GET" action="search">
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control search_form" style={{width:'100%'}} name="ing1" placeholder="Ingrédient 1" />
    </div>
    <div class="col">
      <input type="text" class="form-control search_form" style={{width:'100%'}} name="ing2" placeholder="Ingrédient 2" />
    </div>
    <div class="col">
      <input type="text" class="form-control search_form" style={{width:'100%'}} name="ing3" placeholder="Ingrédient 3" />
    </div>
    <div class="col">
      <input type="text" class="form-control search_form" style={{width:'100%'}} name="ing4" placeholder="Ingrédient 4" />
    </div>
    <br /><br /><br />
    <button type="submit" class="btn btn-primary btn-block btn-lg font-weight-bold"><i class="fa fa-search"></i> Recherche</button>
  </div>
</form>
                </center>
                <br />
           </Container>
        )
    }
    
}

