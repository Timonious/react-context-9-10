import React from 'react'
import {NavLink} from "react-router-dom";
import './topnav.css'
function TopNav() {
    return (
        <nav id='nav-bar-wrap'>
            <ul id='nav-bar'>
                <li><NavLink exact to="/" activeClassName="active-link">Home</NavLink></li>
                <li><NavLink exact to="/login" activeClassName="active-link">Login</NavLink></li>
                <li><NavLink exact to="/register" activeClassName="active-link">Register</NavLink></li>
                <li><NavLink exact to="/profile" activeClassName="active-link">Profile</NavLink></li>
            </ul>
        </nav>
    );
}

export default TopNav;