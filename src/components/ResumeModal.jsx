import React, { useEffect } from 'react';

export default function ResumeModal({ isOpen, onClose, data }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title">
            <span>📄</span> Curriculum Vitae
          </div>
          <div className="modal-actions">
            <button
              onClick={handlePrint}
              className="btn-secondary"
              style={{ padding: '0.45rem 1rem', fontSize: '0.88rem' }}
            >
              <span>🖨️</span> Print / PDF
            </button>
            <button
              onClick={onClose}
              className="modal-close-btn"
              aria-label="Close Modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Body / Resume Document */}
        <div className="modal-body">
          <div className="resume-paper">
            {/* Header info */}
            <div style={{ textAlign: 'center', marginBottom: '2rem', borderBottom: '2px solid var(--border-subtle)', paddingBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.3rem' }}>
                {data.personal.fullName}
              </h2>
              <div style={{ fontSize: '1rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.75rem' }}>
                {data.personal.title}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <span>📞 {data.personal.phone}</span>
                <span>✉️ {data.personal.email}</span>
                <span>📍 {data.personal.location}</span>
                <span>🔗 <a href={data.personal.linkedIn} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-secondary)' }}>LinkedIn</a></span>
                <span>🐙 <a href={data.personal.github} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-secondary)' }}>GitHub</a></span>
              </div>
            </div>

            {/* Career Objective */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', textTransform: 'uppercase', color: 'var(--accent-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
                Career Objective
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                {data.personal.bio}
              </p>
            </div>

            {/* Education */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', textTransform: 'uppercase', color: 'var(--accent-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.3rem', marginBottom: '0.8rem' }}>
                Educational Qualifications
              </h3>
              {data.education.map((edu, i) => (
                <div key={i} style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.98rem' }}>
                    <span>{edu.degree}</span>
                    <span style={{ color: 'var(--accent-secondary)' }}>{edu.score}</span>
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between' }}>
                    <span>{edu.institution} ({edu.currentYear})</span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Skills */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', textTransform: 'uppercase', color: 'var(--accent-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.3rem', marginBottom: '0.8rem' }}>
                Technical Skills
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.6rem', fontSize: '0.92rem' }}>
                <div><strong>Programming:</strong> C, Python, Java, JavaScript</div>
                <div><strong>Web Technologies:</strong> HTML5, CSS3, React.js</div>
                <div><strong>Database:</strong> SQL, MySQL</div>
                <div><strong>Tools:</strong> Git, GitHub, Visual Studio Code</div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <strong>Areas of Interest:</strong> Software Development, Artificial Intelligence, Cloud Computing, Cybersecurity
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', textTransform: 'uppercase', color: 'var(--accent-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
                Certifications
              </h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                <li style={{ marginBottom: '0.4rem' }}>
                  <strong>Generative AI</strong> – Simplilearn (Foundations, LLM architectures & prompt engineering)
                </li>
                <li>
                  <strong>Soft Skills</strong> – NPTEL Course (Team collaboration, executive communication & ethics)
                </li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', textTransform: 'uppercase', color: 'var(--accent-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
                Soft Skills
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {data.softSkills.map((s, idx) => (
                  <span key={idx} className="tech-tag" style={{ fontSize: '0.82rem' }}>
                    {s.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages Known */}
            <div>
              <h3 style={{ fontSize: '1.15rem', textTransform: 'uppercase', color: 'var(--accent-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
                Languages Known
              </h3>
              <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                <span>• Tamil (Native)</span>
                <span>• English (Fluent)</span>
                <span>• German (Elementary)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
