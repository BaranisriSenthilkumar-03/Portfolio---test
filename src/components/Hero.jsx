import React, { useState, useEffect } from 'react';

export default function Hero({ personal, roles, onOpenResume }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Hero Content */}
          <div className="hero-content">
            <div className="hero-badge-pill">
              <span className="pulse-dot"></span>
              <span>{personal.status}</span>
            </div>

            <h1 className="hero-title">
              Hello, I'm <br />
              <span className="text-gradient">{personal.fullName}</span>
            </h1>

            <div className="hero-typing-container">
              <span>{displayText}</span>
              <span className="typing-cursor"></span>
            </div>

            <p className="hero-description">
              {personal.bio}
            </p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn-primary">
                <span>🚀</span> Explore Projects
              </a>
              <a href="#contact" className="btn-secondary">
                <span>📬</span> Get In Touch
              </a>
              <button onClick={onOpenResume} className="btn-secondary">
                <span>📄</span> Resume
              </button>
            </div>

            <div className="hero-stats-row">
              {personal.stats.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <span className="stat-number text-gradient">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Avatar */}
          <div className="hero-visual">
            <div className="avatar-card-wrapper">
              <div className="avatar-glow-ring"></div>

              {/* Floating Badge Top Right */}
              <div className="floating-badge badge-top-right">
                <div className="badge-icon-box badge-purple">🎓</div>
                <div>
                  <div className="badge-text-primary">B.E. CSE</div>
                  <div className="badge-text-sub">KRCT (2025–2029)</div>
                </div>
              </div>

              {/* Floating Badge Bottom Left */}
              <div className="floating-badge badge-bottom-left">
                <div className="badge-icon-box badge-cyan">⚡</div>
                <div>
                  <div className="badge-text-primary">AI & Web Dev</div>
                  <div className="badge-text-sub">Python & Java</div>
                </div>
              </div>

              {/* Avatar Frame */}
              <div className="avatar-card">
                <img
                  src={personal.avatar}
                  alt={personal.fullName}
                  className="avatar-image"
                />
                <div className="avatar-overlay-bottom">
                  <span className="avatar-overlay-name">{personal.name}</span>
                  <span className="avatar-overlay-role">{personal.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
