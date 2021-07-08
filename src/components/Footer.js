import React from 'react';
import logo from "../assets/img/recetti-logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Footer() {
    return (
        <footer style={{fontWeight: 'bold'}} class="text-white ">
  <div class="container p-4">
    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
        <h5 class="font-weight-bold"><img style={{width:'45px',marginLeft:'-10px',marginTop: '-5px'}} src={logo} /> Recetti</h5>

        <p>
          Recetti est une platforme Tunisienne qui permet de partager des recettes et des idées de plats et Fast Food ...
        </p>
      </div>
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Méta</h5>

        <ul class="list-unstyled mb-0 ml-3">
          <li>
            <a href="#!" class="text-white"><i class="fa fa-sign-in"></i> Se Connecter</a>
          </li>
          <li>
            <a href="#!" class="text-white"><i class="fa fa-user-plus"></i> S'inscrire</a>
          </li>
          <li>
            <a href="#!" class="text-white"><i class="fa fa-plus-circle"></i> Ajouter Une Recette</a>
          </li>
          <li>
            <a href="#!" class="text-white"><i class="fa fa-user-circle"></i> Mon Profil</a>
          </li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-0">Réseaux Sociaux</h5>

        <ul class="list-unstyled mt-1 ml-3">
          <li>
            <a href="#!" class="text-white"><i class="fa fa-facebook-square"></i> Facebook</a>
          </li>
          <li>
            <a href="#!" class="text-white"><i class="fa fa-instagram"></i> Instagram</a>
          </li>
          <li>
            <a href="#!" class="text-white"><i class="fa fa-linkedin"></i> Linkedin</a>
          </li>
          <li>
            <a href="#!" class="text-white"><i class="fa fa-twitter"></i> Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="text-center p-3" > 
    <a style={{color: '#fff'}} class="text-white" href="https://recetti.tn"> Recetti.tn - Tous Droits Réservés.</a>
  </div>
</footer>
    )
}