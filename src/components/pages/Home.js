import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import '../../index.css';
import firebase from 'firebase/app';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ExportRecipes from '../ExportRecipes';
class Home extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 500,
    });
    document.title =
      'Recetti - Votre meilleur espace de découvrir et partager des recettes';
  }

  render() {
    const meta = {
      title:
        'Recetti - Votre meulleur espace de découvrir et partager des recettes.',
      description:
        'Trouvez et découvrez les meilleurs plats et recettes chez Recetti',
      meta: {
        charset: 'utf-8',
        name: {
          keywords:
            'recetti,Recetti,RECETTI,recette,recettes,plats,diner,déjeuner,dessert,salé,.',
        },
      },
    };
    return (
      <Container>
        <center>
          <h2 data-aos="fade-up" className="font-weight-bold">
            <i style={{color: '#f64152'}} className="fa fa-eye"></i> Trouvez des
            recettes a partir de ce que vous avez dans votre Frigo !
          </h2>
          <br />
          <form method="GET" action="search">
            <div className="form-row">
              <div data-aos="zoom-in" className="col">
                <input
                  type="text"
                  className="form-control search_form"
                  style={{width: '100%'}}
                  name="ing1"
                  placeholder="Ingrédient 1"
                />
              </div>
              <div data-aos="zoom-in" className="col">
                <input
                  type="text"
                  className="form-control search_form"
                  style={{width: '100%'}}
                  name="ing2"
                  placeholder="Ingrédient 2"
                />
              </div>
              <div data-aos="zoom-in" className="col">
                <input
                  type="text"
                  className="form-control search_form"
                  style={{width: '100%'}}
                  name="ing3"
                  placeholder="Ingrédient 3"
                />
              </div>
              <br />
              <br />
              <br />
              <button
                data-aos="zoom-in"
                type="submit"
                className="btn btn-primary btn-block btn-lg font-weight-bold"
              >
                <i className="fa fa-search"></i> Recherche
              </button>
            </div>
          </form>
          <br />
          <hr style={{borderWidth: '4px'}} />
          <br />
          <h2 class="font-weight-bold mb-4">
            <i class="fa fa-random rose"></i> Recettes a la une
          </h2>
          <ExportRecipes limit="3" category={'petit-dejeuner'} />
          <ExportRecipes limit="3" category={'dejeuner'} />
          <ExportRecipes limit="3" category={'diner'} />
          <ExportRecipes limit="3" category={'dessert'} />
        </center>
        <br />
      </Container>
    );
  }
}

export default Home;
