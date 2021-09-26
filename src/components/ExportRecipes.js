import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useFireStore} from './auth/Firebase';
import {Container, Row, Button, Card, Col} from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

const ExportRecipes = ({category, limit}) => {

  const [sockets, setSockets] = useState([]);
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  useEffect(() => {
    const pullData = async () => {
      return await useFireStore
        .collection('bucket')
        .doc('recipes')
        .collection(`${category}`)
        .limit(limit)
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
    <Container className="text-center">
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
                  <Card.Title>{socket.name}</Card.Title>
                  <Card.Text className="font-weight-bold">
                  {ReactHtmlParser(socket.description)}
                  <i className="fa fa-tag rose mb-3"></i> Catégorie: <Link to={`../categories/${socket.category}/`}><CategoryBadge className="badge-primary badge">{capitalize(socket.category)}</CategoryBadge></Link>
                  <br/> <i className="fa fa-user-circle rose"></i> Publiée par: <Link to={`../chefs/${socket.authorId}`}><span style={{color: '#000'}}>{socket.byUser}</span></Link>  
                  </Card.Text>
                  <Link to={`../recettes/${socket.category}/${socket.id}`}>
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
};

export default ExportRecipes;

// Styles

const CategoryBadge = styled.span`
  padding-right: 0.6em;
  padding-left: 0.6em;
  padding-top: 0.2em;
  border-radius: 10rem;
  font-size: 0.9em;
`;