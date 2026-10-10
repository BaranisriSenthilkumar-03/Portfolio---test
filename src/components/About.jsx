import React from 'react';

export default function About({ personal, highlights }) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>👤</span> About Me
          </div>
          <h2 className="section-title">
            Passionate About <span className="text-gradient">Technology</span> & Problem Solving
          </h2>
          <p className="section-subtitle">
            A snapshot of my academic journey, core values, and aspirations in software engineering.
          </p>
        </div>

        <div className="about-grid">
          {/* Narrative Card */}
          <div className="about-content-card">
            <h3 style={{ fontSize: '1.45rem', marginBottom: '1.2rem' }}>
              Building Foundations for Modern Software Solutions
            </h3>
            
            <p className="about-bio-text">
              I am a 2nd-year <strong>Computer Science and Engineering</strong> student at 
              <strong> K. Ramakrishnan College of Technology</strong>, maintaining a <strong>7.9 CGPA</strong>. 
              My journey is fueled by curiosity for how resilient software systems are designed and built.
            </p>

            <p className="about-bio-text">
              From foundational concepts in <strong>C, Java, and Python</strong> to modern <strong>Web Development</strong> and 
              <strong> Generative AI</strong>, I actively build hands-on projects, participate in technical courses, 
              and explore new computing paradigms.
            </p>

            <div className="objective-box">
              <div className="objective-title">
                <span>🎯</span> Career Objective
              </div>
              <p className="objective-text">
                "{personal.bio}"
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="about-highlights-grid">
            {highlights.map((item, idx) => (
              <div key={idx} className="highlight-card">
                <div className="highlight-icon-wrap" style={{ background: 'rgba(99, 102, 241, 0.12)' }}>
                  {item.icon}
                </div>
                <h4 className="highlight-title">{item.title}</h4>
                <p className="highlight-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
