import React from 'react';
import {Link} from 'react-router-dom';

//Style Sheet
import './error.css';

const Error = () => {
    return (
        <div className="error-container">
            <h1>404</h1>
            <h2>This page does not exist</h2>
            <button><Link to="/">&#8592; Go back</Link></button>
        </div>
    )
}

export default Error;