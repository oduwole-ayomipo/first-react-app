import React from 'react';
import logo from '../images/react-icon-small.png'


export default function Header() {
    return (
        <nav>
            <div className="nav-logo">
                <img src={logo} />
                <h3>ReactFacts</h3>
            </div>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}