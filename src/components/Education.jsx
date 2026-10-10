import React from 'react';

export default function Education({ education }) {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>🎓</span> Academic Path
          </div>
          <h2 className="section-title">
            Education & <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Formal engineering education and secondary academic milestones.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {education.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-node">
                <div className="timeline-node-inner"></div>
              </div>

              <div className="timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-degree">{item.degree}</h3>
                  <span className="timeline-badge">{item.score}</span>
                </div>

                <div className="timeline-institution">{item.institution}</div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                  {item.details}
                </p>

                <div className="timeline-details">
                  <div className="timeline-detail-chip">
                    <span>📅</span>
                    <span>{item.period}</span>
                  </div>
                  <div className="timeline-detail-chip">
                    <span>📍</span>
                    <span>{item.currentYear}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
