import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>
    {
        fetch('./language.json')
        .then(res=> res.json())
        .then(data=> setServices(data));
    },[])
    return (
        <div>
            <h2 style={{'color':"steelblue"}}>Learn German from The Experts</h2>
            <Row xs={1} md={4} className="g-4">
            {
                services.map(service=><Service service={service}></Service>)
            }
            </Row>
            
        </div>
    );
};

export default Services;