import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';


function ContainerEx() {
  return (
    // <div style={{backgroundColor: 'lightGreen'}} className='pt-5'>
    //     hello
    // </div>
    <Container  className='mt-5 p-5'>
      
      <Row>
        <Col className='bg-primary text-danger'>1 of 2</Col>
        <Col className='bg-info'>2 of 2</Col>
      </Row>
      <Row>
        <Col className='display-1 text-info bg-secondary'>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
      <div className='d-grid'>
        <button className='btn btn-outline-primary btn-lg  btn-block mt-5'>Buy this</button>
      </div>
      <Button variant="primary" className='mt-4'>hello</Button>
      <Card>
        <Card.Img variant='top' src='..\assets\picture\pic1.jpg'/>
      </Card>
     
    </Container>
  );
}

export default ContainerEx;