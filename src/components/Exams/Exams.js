import React from 'react';
import { Link } from 'react-router-dom';
import './Exams.css';

const Exams = () => {
    return (
        <div className="exam">
            <h2>Exams</h2>
            <hr />
            <img src="https://www.asapgerman.com/wp-content/uploads/2017/07/goethes-a1-exam-pattern-1.jpg" alt="" />
            <h3>Mark Distribution</h3>
            <h5>A candidate will face an exam which will consist of 4 rounds. Listening, Reading, Writing and Speaking. Each will contain 25% marks</h5>
            <Link to="/home">
            <button>Proceed to Mock Exam</button>
            </Link>
        </div>
    );
};

export default Exams;