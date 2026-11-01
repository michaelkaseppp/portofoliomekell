import React from 'react';

export default function Contact() {
  return (
    <footer id="contact">
      {/* Orange CTA Box */}
      <div className="footer-cta-box">
        <span style={{ fontSize: '2rem' }}>😊</span>
        <h2 className="footer-cta-title">Ready to shoot something real?</h2>
        <p style={{ fontSize: '1rem', opacity: 0.9 }}>
          Mari buat proyek visual atau pengembangan web berkualitas tinggi bersama.
        </p>

        <div className="footer-input-group">
          <input type="email" placeholder="michaelzaim56@gmail.com" readOnly />
          <span style={{ fontWeight: 'bold' }}>→</span>
        </div>
      </div>

      {/* Footer Main Links */}
      <div className="footer-main">
        <div>
          <h1 className="footer-brand-title">Mekell</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '10px' }}>
            Built in pixels, shaped in Malang.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
          <div>
            <span style={{ color: 'var(--accent-orange)', fontSize: '0.8rem' }}>[My Email]</span>
            <p style={{ color: '#fff', marginTop: '6px' }}>michaelzaim56@gmail.com</p>
          </div>
          <div>
            <span style={{ color: 'var(--accent-orange)', fontSize: '0.8rem' }}>[Location]</span>
            <p style={{ color: '#fff', marginTop: '6px' }}>Malang, East Java</p>
          </div>
          <div>
            <span style={{ color: 'var(--accent-orange)', fontSize: '0.8rem' }}>[Pages]</span>
            <p style={{ color: '#fff', marginTop: '6px' }}>Home / Projects / Contact</p>
          </div>
        </div>
      </div>
    </footer>
  );
}