import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './Service.css';

const Service = (props) => {
    // console.log(props.service);
    const {course_type, course_name, total_class, price, img} = props.service;
    return (
        <div>
            <Col>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{course_type}</Card.Title>
              <h4>{course_name}</h4>
              <h5>{total_class}</h5>
              <p>${price}</p>
              <button className="btn-regular">Purchase Now</button>
            </Card.Body>
          </Card>
        </Col>
        </div>
    );
};

export default Service;