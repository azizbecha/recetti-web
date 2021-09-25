import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useFireStore} from './auth/Firebase';
import {Row, Button, Card, Col} from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';

const ExportRecipesByUser = ({category, limit, byUser}) => {

  const [sockets, setSockets] = useState([]);

  useEffect(() => {
    const pullData = async () => {
      return await useFireStore
        .collection('bucket')
        .doc('recipes')
        .collection(`${category}`)
        .limit(limit)
        .where("byUser", "==", byUser )
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
    <>
      <Row>
        {sockets.map((socket, index) => {
          return (
            <Col sm={4} className="mb-4 text-center">
              <Card>
                <Card.Img
                  variant="top"
                  alt={'Image de ' + socket.name}
                  src={socket.image}
                />
                <Card.Body>
                  <Card.Title>{socket.name}</Card.Title>
                  <Card.Text>
                  {/*<TextTruncate
                    line={0}
                    element="span"
                    truncateText="…"
                    text={ReactHtmlParser(socket.description)}
                    //textTruncateChild={<a href="#">Read on</a>}
                  />*/}  
                  {ReactHtmlParser(socket.description)}
                  </Card.Text>
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
    </>
  );
};

export default ExportRecipesByUser;
