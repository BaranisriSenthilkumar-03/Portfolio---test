import React, { useState } from 'react';

export default function Skills({ skills, softSkills }) {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Languages', 'Web Tech', 'Databases & Tools', 'Core Areas'];

  const filteredSkills = activeTab === 'All'
    ? skills
    : skills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>⚡</span> Technical Toolkit
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Competencies</span>
          </h2>
          <p className="section-subtitle">
            Technologies, tools, and technical areas I have practiced through coursework, projects, and self-learning.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="skill-card">
              <div className="skill-top">
                <div className="skill-info">
                  <div className="skill-icon-bubble">{skill.icon}</div>
                  <div>
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-category-tag">{skill.category}</span>
                  </div>
                </div>
                <span className="skill-level-badge">{skill.level}</span>
              </div>

              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Showcase */}
        <div style={{ marginTop: '4.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Core Soft Skills & Professional Attributes
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Attributes verified through academic team projects and NPTEL certification.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              maxWidth: '850px',
              margin: '0 auto',
            }}
          >
            {softSkills.map((soft, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.75rem 1.4rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <span>{soft.icon}</span>
                <span>{soft.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
