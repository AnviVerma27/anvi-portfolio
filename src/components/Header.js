// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
        <div className="container">
            <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/workExperience">Work Experience</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/publications">Publications</a></li>
            </ul>
            </nav>
        </div>
        </header>
    );
};

export default Header;
