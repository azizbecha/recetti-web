import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link,useRouteMatch,useParams,} from 'react-router-dom';

// CSS file
import '../../index.css';

import Footer from '../Footer';

// Bootstrap
import {Container, Row} from 'react-bootstrap';

// Images
import PetitDej from '../assets/images/petit-dej.jpg';
import Dej from '../assets/images/dej.jpg';
import Diner from '../assets/images/diner.jpg';
import Dessert from '../assets/images/dessert.jpg';
import ExportRecipes from '../ExportRecipes';

export default function Categories () {

  let match = useRouteMatch();

  // Page title
  document.title = 'Catégories - Recetti';

  return (
    <>
      <Switch>
        <Route path={`${match.path}/:categoName`}>
          <CategoryDetails />
        </Route>
        <Route path={match.path}>
          <center>
            <h2 className="mt-5 font-weight-bold">
              {' '}
              <i className="fa fa-tag rose"></i> Categories
            </h2>
            <Container>
              <div className="mt-5 mb-4">
                <Row>
                  <div className="col-sm-6 mb-4">
                    <div className="card shadow">
                      <img
                        className="card-img-top img-fluid"
                        style={{width: '100%'}}
                        src={PetitDej}
                        alt="Petit déjeuner"
                      />
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold">
                          Petit Déjeuner
                        </h5>
                        <p className="card-text">
                          En tant que le petit déjeuner est le plus important
                          repas au jour. Trouvez ici les plus belles recettes
                          pour un petit déjeuner équilibré
                        </p>
                        <Link className="btn btn-primary" to={`petit-dejeuner`}>
                          <i className="fa fa-arrow-right"></i> Voir la categorie
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-4">
                    <div className="card shadow">
                      <img
                        className="card-img-top img-fluid"
                        style={{width: '100%'}}
                        src={Dej}
                        alt="Déjeuner"
                      />
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold">Déjeuner</h5>
                        <p className="card-text">
                          Le déjeuner est le repas du jour celui qui se prend au
                          lever ou qui rompt le jeûne. Trouvez ici les meilleurs
                          plats pour le déjeuner
                        </p>
                        <Link className="btn btn-primary" to={`dejeuner`}>
                          <i className="fa fa-arrow-right"></i> Voir la categorie
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-4">
                    <div className="card shadow">
                      <img
                        className="card-img-top img-fluid"
                        style={{width: '100%'}}
                        src={Diner}
                        alt="Diner"
                      />
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold">Dîner</h5>
                        <p className="card-text">
                          Le dîner est le repas du soir celui qui se prend au
                          midi ou qui rompt le jeûne. Trouvez ici les meilleurs
                          plats pour le dîner
                        </p>
                        <Link className="btn btn-primary" to={`diner`}>
                          <i className="fa fa-arrow-right"></i> Voir la categorie
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-4">
                    <div className="card shadow">
                      <img
                        className="card-img-top img-fluid"
                        style={{width: '100%'}}
                        src={Dessert}
                        alt="Dessert"
                      />
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold">Dessert</h5>
                        <p className="card-text">
                          Le dessert c'est qui ce mange aprés le repas tels que
                          les fruits. Trouvez ici les meilleurs desserts.
                        </p>
                        <Link className="btn btn-primary" to={`dessert`}>
                          <i className="fa fa-arrow-right"></i> Voir la categorie
                        </Link>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            </Container>
          </center>
          <Footer />
        </Route>
      </Switch>
    </>
  );
}

function CategoryDetails() {

  // Get the category name from the link
  let {categoName} = useParams();

  // Capitalize string
  function capitalize(word) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1).replace('-', ' ');
  }

  document.title = capitalize(categoName) + ' - Recetti';

  return (
    <div className="text-center">
      <h2 className="mt-5 font-weight-bold">
        {' '}
        <i className="fa fa-tag rose"></i> Catégorie: {capitalize(categoName)}
      </h2>
      <Container>
        <div className="mt-5 mb-4">
          <Row>
            <ExportRecipes category={categoName} />
          </Row>
        </div>
      </Container>
    </div>
  );
}