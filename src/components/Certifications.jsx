import React from 'react';

export default function Certifications({ certifications, languages }) {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>🏆</span> Growth & Credentials
          </div>
          <h2 className="section-title">
            Certifications & <span className="text-gradient">Languages</span>
          </h2>
          <p className="section-subtitle">
            Industry credentials and multilingual capabilities strengthening collaboration and professional readiness.
          </p>
        </div>

        <div className="cert-lang-grid">
          {/* Certifications List */}
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>📜</span> Professional Certifications
            </h3>
            <div className="cert-card-list">
              {certifications.map((cert, idx) => (
                <div key={idx} className="cert-card">
                  <div className="cert-icon-wrapper">
                    {cert.icon}
                  </div>
                  <div className="cert-info">
                    <h4>{cert.title}</h4>
                    <div className="cert-issuer">{cert.issuer}</div>
                    <div className="cert-tagline">{cert.tagline}</div>
                    <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.6rem', flexWrap: 'wrap' }}>
                      {cert.skills.map((s, i) => (
                        <span key={i} className="tech-tag" style={{ fontSize: '0.72rem' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages List */}
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🌐</span> Languages Known
            </h3>
            <div className="lang-card-list">
              {languages.map((lang, idx) => (
                <div key={idx} className="lang-card">
                  <div className="lang-header">
                    <div className="lang-name">
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </div>
                    <span className="lang-level">{lang.level}</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
