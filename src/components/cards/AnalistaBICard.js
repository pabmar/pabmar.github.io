import React from "react";
import {  Container, Row, Col } from "react-bootstrap";
import {XYPlot,VerticalGridLines,HorizontalGridLines,XAxis,YAxis, LineSeries} from 'react-vis';

 

const AnalistaBiCard = () =>{

  const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];

    return (
      <Container > 
        <Row >
             
      <div>
      <XYPlot height={500} width= {500}>
  <LineSeries data={data} />
  <VerticalGridLines >aaa</VerticalGridLines>
  <HorizontalGridLines />
  <XAxis >aaa</XAxis>
  <YAxis />
</XYPlot>   
      </div>
        </Row>
       
      </Container>
    );
}

export default AnalistaBiCard