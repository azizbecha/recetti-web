import React from 'react';
import logo from './assets/images/recetti-logo.png';
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <footer
      style={{fontWeight: 'bold'}}
      className="text-white font-weight-normal"
    >
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="font-weight-bold text-white">
              <img
                style={{width: '45px', marginLeft: '-10px', marginTop: '-5px'}}
                src={logo}
              />{' '}
              Recetti
            </h5>
            <p>
              Recetti est une platforme Tunisienne qui permet de partager des
              recettes et des idées de plats et Fast Food ...
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="font-weight-bold text-white">Méta</h5>
            <ul className="list-unstyled mb-0 ">
              <li>
                <a href="#!" className="text-white">
                  <i className="fa fa-sign-in"></i> Se Connecter
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  <i className="fa fa-user-plus"></i> S'inscrire
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  <i className="fa fa-plus-circle"></i> Ajouter Une Recette
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  <i className="fa fa-user-circle"></i> Mon Profil
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="mb-0 font-weight-bold text-white">
              Réseaux Sociaux
            </h5>
            <ul className="list-unstyled mt-1 ">
              <li>
                <a href="#!" className="text-white">
                  <i className="fa fa-facebook-square"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  <i className="fa fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  <i className="fa fa-linkedin"></i> Linkedin
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  <i className="fa fa-twitter"></i> Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="text-center p-3"
        style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
      >
        <a
          style={{color: '#fff'}}
          className="text-white font-weight-bold"
          href="https://recetti.tn"
        >
          {' '}
          Recetti - Votre meilleur espace de découvrir et partager des recettes.
        </a>
      </div>
    </footer>
  );
}
