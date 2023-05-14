import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';

function Menu() {
  return (
    <nav className="menu">
      <div className="menu-links">
        <Link to="/" className="menu-link">Home</Link>
        <Link to="/create-post" className="menu-link">Create Post</Link>
      </div>
    </nav>
  );
}

export default Menu;
