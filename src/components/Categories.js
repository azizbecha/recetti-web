import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import "../App.css";
import "../index.css";

import {Container, Row, Col} from "react-bootstrap";

import Logo from "./assets/img/recetti-logo.png";

export default function Categories() {
    let match = useRouteMatch();
    document.title = "Catégories - Recetti";

    return (
      <div>
        <Switch>
          <Route path={`${match.path}/:categoName`}>
            <Topic />
          </Route>

          <Route path={match.path}>
          
            <center>
            <h2 class="mt-4"> <i class="fa fa-tag rose"></i> Categories</h2>
            <Link to={`${match.url}/components`}>Components</Link>
                <Container>
                    <Row>
                       <div class="col-sm-4">
                         <div class="card">
                           <img style={{width: '100%'}} class="img img-responsive" src={Logo} />
                         </div>
                       </div>
                       <div class="col-sm-4">
                         2
                       </div>
                       <div class="col-sm-4">
                         3
                       </div>
                       <div class="col-sm-4">
                         4
                       </div>
                       <div class="col-sm-4">
                         5
                       </div>
                    </Row>  
                </Container>
                </center>
          </Route>
        </Switch>
      </div>
    );
  }
  
function Topic() {
    let { categoName } = useParams();
    return (
      <center>
        <h1>Category: {categoName} </h1>
      </center>
    )
  }

