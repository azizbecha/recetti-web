import React from 'react';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NotFound = () => {

  document.title = 'Page non trouvée - Recetti';
  return (
    <Container>
      <PageCenter>
        <Heading>4 0 4</Heading>
        <h2 className="font-weight-bold mb-5">Désolé ! Cette page n'est pas trouvée</h2>
        <Link to={"../../../../../../"}><button className="btn btn-primary btn-lg btn-block font-weight-bold"><i className="fa fa-arrow-left"></i>&nbsp; Retour</button></Link>
      </PageCenter>
    </Container>
  );
};

export default NotFound;

//styles

const PageCenter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center
`

const Heading = styled.span`
  font-weight:bolder;
  color: #f64152;
  font-size: 7em;
  text-align: center
`