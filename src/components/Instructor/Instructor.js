import React from 'react';
import './Instructor.css';

const Instructor = (props) => {
    console.log(props.instructor)
    const {name, time, details, img} = props.instructor;
    return (
        
         
        <div className="instructor">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h5>{time}</h5>
            <p>{details}</p>
            
        </div>
         
        

       
      
            
       
    );
};

export default Instructor;