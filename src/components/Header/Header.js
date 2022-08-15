import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const activeStyle =
    {
        'font-weight': 'bold',
        'color': 'gold'
    }
    return (
        <div className="just-box">
            <h1>German Language Academy</h1>
            <nav className="nav">
            <NavLink to="/home" style={{'text-decoration':'none', 'margin-left':'15px', 'color':'#fff'}} activeStyle={activeStyle}>Home</NavLink>
            <NavLink to="/services" style={{'text-decoration':'none', 'margin-left':'15px', 'color':'#fff'}} activeStyle={activeStyle}>Services</NavLink>
            <NavLink to="/exams" style={{'text-decoration':'none', 'margin-left':'15px', 'color':'#fff'}} activeStyle={activeStyle}>Exams</NavLink>
            <NavLink to="/about" style={{'text-decoration':'none', 'margin-left':'15px', 'color':'#fff'}} activeStyle={activeStyle}>About</NavLink>
            <NavLink to="/instructors" style={{'text-decoration':'none', 'margin-left':'15px', 'color':'#fff'}} activeStyle={activeStyle}>Instructor</NavLink>
            </nav>
        </div>
    );
};

export default Header;