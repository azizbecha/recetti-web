import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

import {useFireStore} from '../auth/Firebase';
import {Container, Row, Card, Col} from 'react-bootstrap';
import ExportRecipesByUser from '../ExportRecipesByUser';

const Chefs = () => {
  let match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${match.path}/:UserID/`}>
          <UserDetails />
        </Route>

        <Route path={match.path}>
          <AllChefs />
        </Route>
      </Switch>
    </>
  );
};

const AllChefs = () => {
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

  document.title = "Chefs - Recetti";
  return (
    <Container className="text-center">
      <Row>
        {sockets.map((socket) => {
          return (
            <Col sm={4}>
              <Card className="mt-3 font-weight-bold">
                <Card.Img className="mt-3 mb-2 img-round" style={{width:'50%',margin: 'auto',borderRadius: '50%', border: '3px solid #f64152'}} variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                <Card.Body>
                  <Card.Title>{socket.firstname} {socket.lastname} <br/> (@{socket.username})</Card.Title>
                  <Card.Text>
                    <i className="fa fa-clock-o rose"></i> A rejoint le {socket.joinDate}
                  </Card.Text>
                  <Link to={`../chefs/${socket.uid}`}><span className="btn btn-primary font-weight-bold"><i className="fa fa-eye"></i> Voir le profil</span></Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

const UserDetails = () => {
  let {UserID} = useParams();

  const [userFirstname, setUserFirstname] = useState('');
  const [userLastname, setUserLastname] = useState('');
  const [userName, setUsername] = useState('');
  const [userJoindate, setUserjoindate] = useState('');

  document.title = `Recetti`;

  useFireStore
    .collection('users')
    .doc(`${UserID}`)
    .get()
    .then(async snapshot => {
      var data = snapshot.data();
      if (data) {
        setUserFirstname(data.firstname);
        setUserLastname(data.lastname);
        setUsername(data.username);
        setUserjoindate(data.joinDate);
        document.title = `${userFirstname} ${userLastname} - Recetti`;
      }
    });

  if (userName!=="") {
    var fullUserName = userFirstname + " " + userLastname;
    return (
      <>
        <Container className="mt-5">
          <div className="text-center">
            <h1 className="font-weight-bold">{userFirstname} {userLastname}</h1>
            <h2 className="font-weight-normal">@{userName}</h2>
            <br />
          </div>
          <br />
          <h3 className="font-weight-bold mb-4"><i className="fa fa-clock-o rose"></i> A rejoint Recetti le {userJoindate}</h3>
          <h3 className="font-weight-bold mb-2"><i className="fa fa-plus rose"></i> Recettes ajoutés par {fullUserName}</h3>
          <ExportRecipesByUser byUser={fullUserName} category={"petit-dejeuner"} />
          <ExportRecipesByUser byUser={fullUserName} category={"dejeuner"} />
          <ExportRecipesByUser byUser={fullUserName} category={"diner"} />
          <ExportRecipesByUser byUser={fullUserName} category={"dessert"} />
        </Container>
      </>
    );
  } else {
      document.title = `Chef non trouvé - Recetti`;
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
}

export default Chefs;
