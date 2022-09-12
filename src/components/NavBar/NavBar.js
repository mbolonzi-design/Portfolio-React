import React from "react";
import {NavLink} from 'react-router-dom';
import  './NavBar.css';

function NavBar() {
    return (
        <div>
            <nav>
                <div>
                    <h3>Mbolonzi</h3>
                </div>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="/about">About</NavLink></li>
                    <li><NavLink exact to="/projects">Projects</NavLink></li>
                    <li><NavLink exact to="/contacts">Contacts</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}
export default NavBar;