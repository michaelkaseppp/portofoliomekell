import React from 'react';

export default function Navbar() {
  return (
    <header className="navbar-container">
      <div className="navbar-logo">PORTFOLIO MEKELL</div>
      <nav className="navbar-menu">
        <a href="#home" className="navbar-link active">Home</a>
        <a href="#about" className="navbar-link">About</a>
        <a href="#work" className="navbar-link">Projects</a>
        <a href="#services" className="navbar-link">Services</a>
        <a href="#contact" className="navbar-link">Contact</a>
      </nav>
    </header>
  );
}