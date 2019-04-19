import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return(
    <div className="navbar">
      <ul>
        <li><NavLink to="/"> Home </NavLink></li>
        <li><NavLink to="/posts"> Posts </NavLink></li>
        <li><NavLink to="/new_post"> New Post </NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar
