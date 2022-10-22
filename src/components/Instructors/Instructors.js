import React, { useEffect, useState } from 'react';
import Instructor from '../Instructor/Instructor';
import './Instructors.css';

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
            <div className="instructors">
            {
               instructors.map(instructor=> <Instructor instructor={instructor}></Instructor>)
            }
            </div>
           
           
           
            
            
        </div>
    );
};

export default Instructors;