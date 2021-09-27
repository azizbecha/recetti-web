import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router,Switch,Route,Link,useRouteMatch,useParams} from 'react-router-dom';

import {Container, Row, Card, Col, Button} from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';
import {useFireStore} from '../auth/Firebase';

const Search = () => {

  let match = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route path={`${match.path}/:Category/:Keyword`}>
          <SearchResult />
        </Route>
      </Switch>
    </Router>
  );
};

function SearchResult() {

  function capitalize(word) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }

  const [sockets, setSockets] = useState([]);
  let {Category, Keyword} = useParams();
  
  Keyword.replace('%20', ' ');
  
  useEffect(() => {
    const pullData = async () => {
      return await useFireStore
        .collection('bucket')
        .doc('recipes')
        .collection(`${Category}`)
        .where('name', '>=', capitalize(Keyword))
        .where('name', '<=', capitalize(Keyword)+ '\uf8ff')
        .onSnapshot(snapshot => {
          const data = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setSockets(data);
        });
    };

    pullData();
  }, []);

  return (
    <Container>
      <h2 className="mt-5 mb-5 font-weight-bold text-center"><i className="fa fa-search rose"></i> Résultats de la recherche: {Keyword}</h2>
      <Row>
        {sockets.map((socket, index) => {
          return (
            <Col sm={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  alt={'Image de ' + socket.name}
                  src={socket.image}
                />
                <Card.Body>
                  <Card.Title className="text-center">{socket.name}</Card.Title>
                  <Card.Text className="font-weight-bold">
                  {ReactHtmlParser(socket.description)}
                  <i className="fa fa-tag rose mb-3"></i> Catégorie: <Link to={`../categories/${socket.category}/`}><CategoryBadge className="badge-primary badge">{capitalize(socket.category)}</CategoryBadge></Link>
                  <br/> <i className="fa fa-user-circle rose"></i> Publiée par: <Link to={`../chefs/${socket.authorId}`}><span style={{color: '#000'}}>{socket.byUser}</span></Link>  
                  </Card.Text>
                  <Link to={`../../../recettes/${socket.category}/${socket.id}`}>
                    <Button
                      className="px-5 btn-block py-2 font-weight-bold"
                      style={{borderRadius: '2em'}}
                      variant="primary"
                    >
                      <i className="fa fa-eye"></i> Voir la recette
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Search;

// Styles

const CategoryBadge = styled.span`
  padding-right: 0.6em;
  padding-left: 0.6em;
  padding-top: 0.2em;
  border-radius: 10rem;
  font-size: 0.9em;
`;