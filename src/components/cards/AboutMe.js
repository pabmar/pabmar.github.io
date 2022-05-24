import React from "react";
import {  Container, Row, Col } from "react-bootstrap";
import cardData from "./cardData.json";

 

const AboutMe = () =>{

 
    return (
      <Container>
       
      <Row>
        <Col>
            <p className="aboutMeTitle"> {cardData.tituloAboutMe} </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="aboutMeCard">
              <p className="aboutMeText">
                {cardData.presentacion1}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
}

export default AboutMe