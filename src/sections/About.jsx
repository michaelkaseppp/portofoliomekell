import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-container">
      <h2 className="about-header-tag">(About Me)</h2>

      <div className="about-grid">
        {/* Card Quote */}
        <div className="about-card">
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#fff' }}>
            Photography is 20% light, 80% vibe
          </h3>
          <span style={{ color: 'var(--accent-orange)', fontSize: '1.2rem', fontWeight: 'bold' }}>#True</span>
        </div>

        {/* Card Info */}
        <div className="about-card">
          <div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Shoot Dates / Time</span>
            <p style={{ color: '#fff', fontSize: '1rem', marginTop: '4px' }}>12.04 – 22.04 | 14:00 – 21:00</p>
          </div>
          <div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Location</span>
            <p style={{ color: '#fff', fontSize: '1rem', marginTop: '4px' }}>Malang, East Java, Indonesia</p>
          </div>
        </div>

        {/* Card Video Showcase (Fix Video Tidak Berputar) */}
        <div className="about-card about-video-card">
          <video autoPlay loop muted playsInline>
            <source src="/assets/video-editing/showcase.mp4" type="video/mp4" />
            Browser Anda tidak mendukung pemutaran video.
          </video>
          <div className="about-video-overlay">
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#fff' }}>
              What's the point of the frame?
            </h4>
          </div>
        </div>
      </div>

      <h2 className="about-header-tag" style={{ marginTop: '80px' }}>And Also</h2>
      <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '800px' }}>
        Kreator digital yang berdedikasi menciptakan karya visual menarik, editing video promosi sinematik, serta pengembangan aplikasi web interaktif yang terintegrasi penuh.
      </p>
    </section>
  );
}