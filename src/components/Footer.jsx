import React, { useState, useEffect } from 'react';

export default function Footer({ personal }) {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="text-gradient">Baranisri S.</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              • B.E. Computer Science & Engineering
            </span>
          </div>

          <ul className="footer-nav">
            <li><a href="#home" className="footer-link">Home</a></li>
            <li><a href="#about" className="footer-link">About</a></li>
            <li><a href="#skills" className="footer-link">Skills</a></li>
            <li><a href="#projects" className="footer-link">Projects</a></li>
            <li><a href="#education" className="footer-link">Education</a></li>
            <li><a href="#contact" className="footer-link">Contact</a></li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Baranisri Senthilkumar. Crafted with React & Modern UI. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating Back to Top */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showTopBtn ? 'visible' : ''}`}
        aria-label="Back to top"
        title="Back to top"
      >
        ↑
      </button>
    </footer>
  );
}
