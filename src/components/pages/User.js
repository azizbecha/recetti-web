import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useFireStore} from '../auth/Firebase';
import {Container, Row, Button, Card, Col} from 'react-bootstrap';
const User = () => {
  const [sockets, setSockets] = useState([]);

  useEffect(() => {
    const pullData = async () => {
      return await useFireStore
        .collection('users')
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
            <>
              {socket.firstname}
            </>
          );
        })}
      </Row>
    </Container>
  );
};

export default User;
