import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ShapeExample(props) {
    // const [ing,setImg]= useState(props.link)
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={props.link} rounded />
        </Col>
        <Col xs={6} md={4}>
         {/* <button onClick={} ></button> */}
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;