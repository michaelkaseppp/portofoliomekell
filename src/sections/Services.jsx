import React from 'react';
import { services } from '../data/services.js';

export default function Services() {
  return (
    <section id="services" className="services-section">
      <span className="services-tag">See Work ↗</span>
      <h2 className="services-main-title">THAT'S MY SERVICES</h2>

      <div className="services-cards-wrapper">
        {services.map((srv) => (
          <div key={srv.id} className="slanted-card">
            <div>
              <span style={{ fontSize: '1.6rem' }}>{srv.icon}</span>
              <h4 style={{ color: '#fff', fontSize: '1rem', marginTop: '12px' }}>{srv.title}</h4>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#aaa', lineHeight: '1.4' }}>{srv.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}