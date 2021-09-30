import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

export default function MainHeading() {
  const history = useHistory();
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const GoSearch = () => {
    history.push(`search/${category}/${keyword}`);
  };
  
  return (
    <div className="jumbotron text-center">
      <center>
        <div className="container">
          <h1 className="display-4 font-weight-bold">Bienvenue a Recetti</h1>
          <p className="lead font-weight-normal">
            Votre meilleur espace de découvrir et partager des recettes
          </p>
          <hr />
          <p className="lead">
            <h1 className="font-weight-bold" data-aos="fade-up">
              <i
                className="fa fa-search"
                style={{color: '#f64152'}}
                aria-hidden="true"
              ></i>{' '}
              Trouvez votre recette facilement
            </h1>
            <br />
            <form
              data-aos="slide-up"
              className="form-group"
              onSubmit={GoSearch}
              style={{width: '80%'}}
            >
              <div className="form-row">
                <div className="form-group col-md-8">
                  <label for="inputCity">Recette</label>
                  <input
                    value={keyword}
                    onChange={event => setKeyword(event.target.value)}
                    type="text"
                    className="form-control search_form"
                    id="inputCity"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>Catégorie</label>
                  <select
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                    id="inputState"
                    className="form-control search_form"
                  >
                    <option value="petit-dejeuner">Petit déjeuner</option>
                    <option value="dejeuner">Déjeuner</option>
                    <option value="diner">Diner</option>
                    <option value="dessert">Dessert</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  <i className="fa fa-search"></i> Rechercher
                </button>
              </div>
            </form>
            <div className="btn-group font-weight-bold">
              <Link to="categories/petit-dejeuner">
                <span
                  data-aos="zoom-in"
                  className="btn btn-primary mr-1 font-weight-bold"
                >
                  <i className="fa fa-tag"></i>&nbsp; Petit Déjeuner
                </span>
              </Link>
              <Link to="categories/dejeuner">
                <span
                  data-aos="zoom-in"
                  className="btn btn-primary mr-1 font-weight-bold"
                >
                  <i className="fa fa-tag"></i>&nbsp; Déjeuner
                </span>
              </Link>
              <Link to="categories/diner">
                <span
                  data-aos="zoom-in"
                  className="btn btn-primary mr-1 font-weight-bold"
                >
                  <i className="fa fa-tag"></i>&nbsp; Diner
                </span>
              </Link>
              <Link to="categories/dessert">
                <span
                  data-aos="zoom-in"
                  className="btn btn-primary font-weight-bold"
                >
                  <i className="fa fa-tag"></i>&nbsp; Dessert
                </span>
              </Link>
            </div>
          </p>
        </div>
      </center>
    </div>
  );
}
