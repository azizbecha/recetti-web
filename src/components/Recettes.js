import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import styled from "styled-components";
import {useFireStore} from "./auth/Firebase"
import {Container, Row, Alert} from 'react-bootstrap';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'
export default function Recettes() {
  document.title = "Recettes - Recetti";
  let match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:Category/:RecetteID`}>
          <DetailsRecette />
        </Route>

        <Route path={match.path}>
          <TousLesRecettes />
        </Route>
      </Switch>
    </div>
  );
}

const TousLesRecettes = () => {
  const [error, setError] = useState("");
  const [sockets, setSockets] = useState([]);

  useEffect(() => {
    const pullBucketData = async () => {
      return await useFireStore
        .collection("recipes")
        .onSnapshot((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          data.length === 0 ? setError("Your Locker is empty") : setError("");
          setSockets(data);
        });
    };
    pullBucketData();
  }, []);

  return (
    <>
      <Container>
        {sockets.map((socket, index) => {
          return (
              <>
              <img
                alt={socket.title}
                className="preview"
                src={socket.avatar}
              />
              <p>{socket.name}</p>
              <p>{socket.description}</p>
              <p>{socket.ingredients}</p>
              </>
          );
        })}
      </Container>
      <Row>{error && <Alert message={error} type="info" />}</Row>
    </>
  );
}

const DetailsRecette = () => {
  let {RecetteID, Category} = useParams();

  const [recipeName, setRecipeName] = useState('');
  const [recipeIngredients, setRecipeIngredients] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [recipeCategory, setRecipeCategory] = useState('');
  const [recipeAuthor, setRecipeAuthor] = useState('');
  const [recipeAddDate, setRecipeAddDate] = useState('');
  const [recipeID, setRecipeID] = useState('');
  const [recipeImage, setRecipeImage] = useState()
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  useFireStore.collection('bucket/')
    .doc('recipes')
    .collection(`${Category}`)
    .doc(`${RecetteID}`)
    .get()
    .then(snapshot => {
      var data = snapshot.data();
      setRecipeName(data.name);
      setRecipeIngredients(data.ingredients);
      setRecipeDescription(data.description);
      setRecipeCategory(data.category);
      setRecipeID(data.id);
      setRecipeAuthor(data.author);
      setRecipeAddDate(data.date);
      setRecipeImage(data.image)
    })

  document.title = `${recipeName} - Recetti`
  return (
    <>
      <Container>
        <Heading>{recipeName}</Heading>
        <Image src={recipeImage} alt={"Image de la recette: "+recipeName} />

        <Text><i class="fa fa-tag rose"></i> Catégorie: <CategoryBadge className="badge-primary badge">{capitalize(recipeCategory)}</CategoryBadge></Text>
        <Text><i class="fa fa-info-circle rose"></i> Description</Text>
        <Description>{recipeDescription}</Description>

        <Text><i class="fa fa-pencil rose"></i> Ingredients</Text>
        <Ingredients>{recipeIngredients}</Ingredients>

      </Container>
      <Footer />
    </>
  );
}

// Custom styles

const Text = styled.h5`
  color: #f64152;
  font-weight: 900;
  margin-top: 0.8em
`

const Heading = styled.h1`
  color: black;
  font-size: 2.5em;
  font-weight: bold;
  margin-top: 0.5em;
  margin-bottom: 0.7em;
`

const Image = styled.img`
  width: 50%
`

const Description = styled.p`
  font-weight: bold;
`

const Ingredients = styled.p`
  font-weight: bold;
`

const CategoryBadge = styled.span`
  padding-right: .6em;
  padding-left: .6em;
  padding-top: 0.2em;
  border-radius: 10rem;
`