import React from "react";
import {  Container, Row, Col } from "react-bootstrap";
 

const PortafolioCard = () =>{

    return (
      <Container > 
        <Row >
          <Col  className="col-12">
            <h1 className="nameTitle"> Pablo Marchant Armijo </h1>
          </Col>
        </Row>
        <Row>
          <Col md={{span:4 ,offset: 8 }} xs={12}>
            <h3 className="subTitle">Desarrollador</h3>
          </Col>
        </Row>
        <Row>
          <Col md={{span:4 ,offset: 8 }} xs={12}>
            <h3 className="subTitle">Analista BI</h3>
          </Col>
        </Row>
      </Container>
    );
}

export default PortafolioCard