import React, { useEffect, useState } from 'react';
import Instructor from '../Instructor/Instructor';
import './Instructors.css';
import { Row } from 'react-bootstrap';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(()=>
    {
        fetch('./instructors.json')
        .then(res=>res.json())
        .then(data=> setInstructors(data));
    },[]);
    return (
        <div>
            <hr />
            <h1 style={{'color':'steelblue'}}>Instructors</h1>
            <br />
           <Row xs={1} md={2} className="g-4 instructors">
            <div className="instructors">
            {
               instructors.map(instructor=> <Instructor instructor={instructor}></Instructor>)
            }
            </div>
            </Row>
           
           
            
            
        </div>
    );
};

export default Instructors;