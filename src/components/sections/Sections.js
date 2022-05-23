import React from "react";
import { Container, Row, Col,Card } from "react-bootstrap";


const Section = (props) => {
  return (
    <div style={{ minWidth: '100vw' ,minHeight:'100vh', backgroundImage: `url(${props.src})`,display:'flex',alignItems:`${props.align}`}}>
      <Container fluid >
        <Row className='rowMargin' fluid>
          <Col className="col-2" >{props.children[0]}</Col>
          <Col className="col-10"> {props.children[1]}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section;
