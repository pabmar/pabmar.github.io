import React, { useState } from "react"; 
import {Button,Container,Row,Col} from 'react-bootstrap'

 

const NavBarSections = ({section}) =>{
   

    return <div>
        <Container>
         
            <Row>
                <Col className='d-grid gap-2'>
                <Button variant={section==='HomeSection'?('light'):('secondary')} size="lg" href="#HomeSection"data-scroll>Home</Button>
                </Col>
            </Row>
            <Row>
                <Col className='d-grid gap-2'> 
                <Button variant={section==='AboutMeSection'?('light'):('secondary')} href="#AboutMeSection"data-scroll>About Me</Button>
                </Col>
            </Row>
            <Row>
                <Col className='d-grid gap-2'> 
                <Button variant={section==='Abi'?('light'):('secondary')} href="#Abi"data-scroll>Analista Bi</Button>
                </Col>
            </Row>
            <Row>
                <Col className='d-grid gap-2'> 
                <Button variant={section==='Developer'?('light'):('secondary')} href="#Developer"data-scroll>Desarrollador</Button>
                </Col>
            </Row>
            <Row>
                <Col className='d-grid gap-2'> 
                <Button variant={section==='Portafolio'?('light'):('secondary')} href="#Portafolio"data-scroll>Portafolio</Button>
                </Col>
            </Row>
        </Container>
       
       
       
    </div>
}

export default NavBarSections