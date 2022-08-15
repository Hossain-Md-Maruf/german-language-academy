import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Expert = (props) => {
    const {course_type, course_name, total_class, price, img} = props.expert;
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

export default Expert;