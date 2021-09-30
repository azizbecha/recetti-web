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

export default function Forum() {

  let match = useRouteMatch();
  document.title = 'Forum - Recetti';

  return (
    <>
      <Container fluid>
        <Switch>
          <Route path={`${match.path}/:forumId`}>
            <Forum />
          </Route>
          <Route path={match.path}>
            <h1 className="text-center mt-2">Forum</h1>
            <Link to={`${match.url}/Fast-Food`}>Fast Food</Link>
            <br />
            <Link to={`${match.url}/props-v-state`}>Diners</Link>
          </Route>
        </Switch>
      </Container>
    </>
  );
}

/*function Forum() {
    let { forumId } = useParams();
    return <h3>Requested topic ID: {forumId}</h3>;
}*/