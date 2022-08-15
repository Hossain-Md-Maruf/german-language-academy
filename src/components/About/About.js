import React from 'react';
import Instructors from '../Instructors/Instructors';
import './About.css';

const About = () => {
    return (
        <div>
            <h1 style={{'backgroundColor':"steelblue", 'padding':'15px', 'margin':'5px'}}>About Us</h1>
            <hr />
            <div className="about">
                <h3>German Language Academy</h3>
            <img src="https://images.unsplash.com/photo-1635696603992-459ce1984e61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsYXNzJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <h5 style={{"padding":"20px","margin":"15px"}}>Founded By Maruf in 2022 where the cofounders are Rahim Ahmed & Karim islam. Main goal of our academy is to provide quality classes and contents which can be benificial to the people that wants to learn the German language.</h5>
            </div>
            <Instructors></Instructors>
        </div>
    );
};

export default About;