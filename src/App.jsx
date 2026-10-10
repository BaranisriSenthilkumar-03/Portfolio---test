import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-app">
      {/* Ambient background lighting effects */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-orb ambient-orb-1"></div>
        <div className="ambient-orb ambient-orb-2"></div>
        <div className="ambient-orb ambient-orb-3"></div>
      </div>
      <div className="grid-pattern" aria-hidden="true"></div>

      {/* Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setResumeOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          personal={portfolioData.personal}
          roles={portfolioData.roles}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* About Section */}
        <About
          personal={portfolioData.personal}
          highlights={portfolioData.highlights}
        />

        {/* Technical Skills & Soft Skills */}
        <Skills
          skills={portfolioData.skills}
          softSkills={portfolioData.softSkills}
        />

        {/* Projects Showcase */}
        <Projects
          projects={portfolioData.projects}
        />

        {/* Education Timeline */}
        <Education
          education={portfolioData.education}
        />

        {/* Certifications & Languages */}
        <Certifications
          certifications={portfolioData.certifications}
          languages={portfolioData.languages}
        />

        {/* Contact Section */}
        <Contact
          personal={portfolioData.personal}
        />
      </main>

      {/* Footer */}
      <Footer
        personal={portfolioData.personal}
      />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        data={portfolioData}
      />
    </div>
  );
}
