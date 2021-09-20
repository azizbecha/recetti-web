import React, {useEffect, useState} from 'react';
import {useFireStore} from './auth/Firebase';
import {Link} from 'react-router-dom';
import {Container, Row, Button, Card, Col} from 'react-bootstrap';
const ExportRecipes = ({category, limit}) => {
  const [sockets, setSockets] = useState([]);

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
                  <Card.Text>{socket.description}</Card.Text>
                  <Link to={`../recettes/${socket.category}/${socket.id}`}>
                    <Button
                      className="px-3 py-2"
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
