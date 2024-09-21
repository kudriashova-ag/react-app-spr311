import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <header className="header">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/todos">Todo</NavLink>
          <NavLink to="/my">My</NavLink>
        </nav>
      </header>
    );
}

export default Header;
