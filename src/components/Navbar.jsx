import React, { useState, useEffect } from 'react';

export default function Navbar({ theme, toggleTheme, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="nav-brand">
          <img src="/profile.jpg" alt="Baranisri S" className="brand-avatar" />
          <span>Baranisri<span className="text-gradient">.S</span></span>
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button onClick={onOpenResume} className="nav-cta-btn">
            <span>📄</span> Resume
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
        <button
          onClick={() => { onOpenResume(); setMobileMenuOpen(false); }}
          className="btn-primary"
          style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
        >
          📄 View Resume
        </button>
      </div>
    </header>
  );
}
