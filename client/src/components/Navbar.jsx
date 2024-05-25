import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#004080',
    padding: '10px',
    color: 'white',
    fontFamily: 'Arial, sans-serif'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s'
  };

  const linkHoverStyle = {
    backgroundColor: '#003366'
  };

  const applyHover = (e) => {
    Object.assign(e.target.style, linkHoverStyle);
  };

  const removeHover = (e) => {
    Object.assign(e.target.style, { backgroundColor: 'transparent' });
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle} onMouseEnter={applyHover} onMouseLeave={removeHover}>Home</Link>
      <Link to="/register" style={linkStyle} onMouseEnter={applyHover} onMouseLeave={removeHover}>Register</Link>
      <Link to="/login" style={linkStyle} onMouseEnter={applyHover} onMouseLeave={removeHover}>Login</Link>
    </nav>
  );
}