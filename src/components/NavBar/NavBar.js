import React from "react";
import {NavLink} from 'react-router-dom';
import  './NavBar.css';

function NavBar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink exact to="/">Portfolio</NavLink></li>
                    {/* <li><NavLink exact to="/about">About</NavLink></li>
                    <li><NavLink exact to="/projects">Projects</NavLink></li>
                    <li><NavLink exact to="/contacts">Contacts</NavLink></li> */}
                </ul>
            </nav>
        </div>
    );
}
export default NavBar;