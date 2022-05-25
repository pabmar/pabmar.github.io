import React from "react";
import { Container, Row, Col} from "react-bootstrap";


const Section = (props) => {
  return (
    <div className="sectionDivContainer" style={{ minWidth: '80vw' ,minHeight:'100vh', backgroundImage: `url(${props.src})`,display:'flex',alignItems:`${props.align}`}}>
      <Container fluid >
        <Row className='rowMargin' fluid>
          <Col className="col-11"> {props.children[1]}</Col>
          <Col  className="col-1 d-none d-md-block" >{props.children[0]}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section;
