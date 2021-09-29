import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from 'react-router-dom';

import styled from 'styled-components';

// Firestore database
import {useFireStore} from '../auth/Firebase';

// ExportRecipes component
import ExportRecipes from '../ExportRecipes';

// Footer component
import Footer from '../Footer';

// Library to render html codes inside strings
import ReactHtmlParser from 'react-html-parser';

// Bootstrap 4
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../../index.css';

export default function Recettes() {

  // Page title
  document.title = 'Recettes - Recetti';

  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/:Category/:RecetteID`}>
        <DetailsRecette />
      </Route>

      <Route path={match.path}>
        <TousLesRecettes />
      </Route>
    </Switch>
  );
}

const TousLesRecettes = () => {

  return (
    <Container className="text-center">
      <h2 className="mt-5 mb-4 font-weight-bold">
        {' '}
        <i className="fa fa-tag rose"></i> Tous les recettes
      </h2>

      <h3 className="font-weight-bold text-left ml-3 mb-3">
        {' '}
        <i className="fa fa-tag rose"></i> Petit déjeuner
      </h3>
      <ExportRecipes category={'petit-dejeuner'} />

      <h3 className="font-weight-bold text-left ml-3 mb-3">
        {' '}
        <i className="fa fa-tag rose"></i> Déjeuner
      </h3>
      <ExportRecipes category={'dejeuner'} />

      <h3 className="font-weight-bold text-left ml-3 mb-3">
        {' '}
        <i className="fa fa-tag rose"></i> Diner
      </h3>
      <ExportRecipes category={'diner'} />

      <h3 className="font-weight-bold text-left ml-3 mb-3">
        {' '}
        <i className="fa fa-tag rose"></i> Dessert
      </h3>
      <ExportRecipes category={'dessert'} />
    </Container>
  );
};

const DetailsRecette = () => {

  let {RecetteID, Category} = useParams();

  const [recipeName, setRecipeName] = useState('');
  const [recipeIngredients, setRecipeIngredients] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [recipeCategory, setRecipeCategory] = useState('');
  const [recipeAuthor, setRecipeAuthor] = useState('');
  const [recipeAddDate, setRecipeAddDate] = useState('');
  const [recipeID, setRecipeID] = useState('');
  const [recipeAuthorID, setRecipeAuthorID] = useState('');
  const [recipeImage, setRecipeImage] = useState('');

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Page title
  document.title = `Recetti`;

  // Get data from firestore database
  useFireStore
    .collection('bucket/')
    .doc('recipes')
    .collection(`${Category}`)
    .doc(`${RecetteID}`)
    .get()
    .then(async snapshot => {
      var data = snapshot.data();
      if (data) {
        setRecipeName(data.name);
        setRecipeImage(data.image);
        setRecipeIngredients(data.ingredients);
        setRecipeDescription(data.description);
        setRecipeCategory(data.category);
        setRecipeID(data.id);
        setRecipeAuthor(data.byUser);
        setRecipeAuthorID(data.authorId);
        setRecipeAddDate(data.date);
        document.title = `${recipeName} - Recetti`;
      }
      
    });

  if (recipeName!=="") {
    return (
      <>
        <Container>
          <Heading>{recipeName}</Heading>
          <Image src={recipeImage} alt={'Image de la recette: ' + recipeName} />
  
          <Text>
            <i className="fa fa-tag rose"></i> Catégorie:{' '}
            <Link to={`../../categories/${recipeCategory}`}>
              <CategoryBadge className="badge-primary badge">
                {capitalize(recipeCategory)}
              </CategoryBadge>
            </Link>
          </Text>
  
          <Text>
            <i className="fa fa-info-circle rose"></i> Description
          </Text>
          <Description className="ml-4">{ReactHtmlParser(recipeDescription)}</Description>
  
          <Text>
            <i className="fa fa-pencil rose"></i> Ingredients
          </Text>
          <Ingredients className="ml-4">{ReactHtmlParser(recipeIngredients)}</Ingredients>
  
          <Text>
            <i className="fa fa-user-circle rose"></i> Publiée par
          </Text>
          <Link to={`../../u/${recipeAuthorID}`}>
            <Author  className="ml-4">{recipeAuthor}</Author>
          </Link>
        </Container>
        <Footer />
      </>
    );
  } else {

    // Page title
    document.title = `Recette non trouvée - Recetti`;
    
    return (
      <Container className="mt-3">
        <div className="text-center font-weight-bold mt-5">
          <h1>Recette non trouvée</h1>
          <br />
          <h3>La recette que vous cherchez n'est pas trouvée dans Recetti !</h3>
          <h3>Si vous pensez que c&apos;est un erreur causé par notre platforme, Veuillez nous contacter pour fixer cet erreur</h3>
          <br />
          <Link to="../../"><span className="btn btn-primary btn-lg"><i className="fa fa-arrow-right"></i> Retour a la page d&apos;acceuil</span></Link>
        </div>
      </Container>
    )
  }
};

// Custom styles

const Text = styled.h5`
  color: #f64152;
  font-weight: 900;
  margin-top: 0.8em;
`;

const Heading = styled.h1`
  color: black;
  font-size: 2.5em;
  font-weight: bold;
  margin-top: 0.5em;
  margin-bottom: 0.7em;
`;

const Image = styled.img`
  width: 50%;
`;

const Description = styled.p`
  font-weight: bold;
  /*margin-left: 20px*/
`;

const Ingredients = styled.p`
  font-weight: bold;
`;

const Author = styled.p`
  font-weight: bold;
  color: black;
`;

const CategoryBadge = styled.span`
  padding-right: 0.6em;
  padding-left: 0.6em;
  padding-top: 0.2em;
  border-radius: 10rem;
`;