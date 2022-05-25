import React, { useState } from "react";
import { Container,Row, Col } from "react-bootstrap";
import { Chrono } from "react-chrono";
import cardData from '../cardData.json'
 

 
const CurriculumBi =() =>{
    const infomostrar = cardData.BICV
    let items = []
  
 
 for (let i = 0; i < infomostrar.length; i++) {
     let data = {
        title: infomostrar[i].type,
        cardTitle: infomostrar[i].title,
        cardDetailedText: infomostrar[i].detail

       }

 
       items.push(data)
 
     
 }


   

      return (
          <Container>
              <Row>

              <Col>
              <div style={{ width: "70vw", height: "80vh" ,margin:"0"}}>
                     <Chrono items={items} slideShow  
                     theme={{
                        primary: 'black',
                        cardBgColor: 'white',
                        cardForeColor: 'black',
                        titleColor: 'blue',
                        
                      }}
                      fontSizes={{
               
                        cardTitle: '2rem',
                        cardSubtitle:'2rem'

                      }} 
                      />
      </div>

              </Col>

              </Row>
          </Container>
      );
}

export default CurriculumBi