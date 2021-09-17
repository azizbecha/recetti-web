import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css";
import styled from "styled-components";
import { Row, Card, Alert } from "antd";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import app, {db} from "./auth/Firebase"
import logo from './assets/images/recetti-logo.png';
import {Container} from 'react-bootstrap'
export default function Recettes() {
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
      return await db
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

    // we use pull effect to ovoid memory leak

    pullBucketData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

  db.collection('bucket/')
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

  return (
    <>

        <Container>
          <h2 className="mt-5 font-weight-bold"> <i className="fa fa-tag rose"></i> {recipeName}</h2>
          <br/>
          <div className="mt-5 mb-4">
            <Row>
              <img src={recipeImage} />
            </Row> 
          </div> 
        </Container>
    </>
  );
 
}