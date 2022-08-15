import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Consult from '../Consulting/Consult';
import Expert from '../Expert/Expert';

const Home = () => {
    const [experts, setExperts] = useState([]);
    useEffect(()=>
    {
        fetch('./Experts.json')
        .then(res=>res.json())
        .then(data=> setExperts(data));
    },[])
    return (
        <div className="Home">
            <Consult></Consult>
            <h1 style={{'color':'steelblue'}}>Learn French From The Experts</h1>
            <Row xs={1} md={3} className="g-4">
             {
                experts.map(expert=> <Expert expert={expert}></Expert>)
             }
             </Row>
           
        </div>
    );
};

export default Home;