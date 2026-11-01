import React from 'react';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <section id="work" className="work-container">
      <h2 className="work-title">#MyWork</h2>

      <div className="folder-grid">
        {projects.map((item) => (
          <div key={item.id} className="folder-wrapper">
            <div className="folder-tab-head"></div>
            <img src={item.image} alt={item.title} className="folder-media" />
            <div style={{ marginTop: '16px' }}>
              <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>{item.title}</h4>
              <span style={{ color: 'var(--accent-orange)', fontSize: '0.85rem' }}>{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}