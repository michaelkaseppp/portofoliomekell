import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero-container">
      {/* Asymmetric 3D Media Stack */}
      <div className="hero-media-stack">
        <img src="/assets/hero/mekel1.jpg" alt="Mekell 1" className="hero-card-item" />
        <img src="/assets/hero/mekel2.jpg" alt="Mekell 2" className="hero-card-item" />
        <img src="/assets/hero/mekel3.jpg" alt="Mekell 3" className="hero-card-item" />
        <img src="/assets/hero/mekel4.jpg" alt="Mekell 4" className="hero-card-item" />
        <img src="/assets/hero/mekel5.jpg" alt="Mekell Main" className="hero-card-item" />
      </div>

      <h1 className="hero-title">Muhamad Michael Zaim Al Izzy</h1>
      
      <p className="hero-description">
        Web Design • Canva • Video Editing • Social Media Management • Creative Direction • Frontend & Backend
      </p>

      <a href="#work" className="btn-see-work">See Work ↓</a>
    </section>
  );
}