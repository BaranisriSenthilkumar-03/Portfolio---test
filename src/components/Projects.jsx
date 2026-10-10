import React, { useState } from 'react';

export default function Projects({ projects }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = ['All', 'AI & Python', 'Web Development', 'Software & SQL', 'Security & Tools'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>💻</span> Work & Innovations
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Academic systems, AI integrations, and software applications built using modern frameworks and best practices.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-tabs" style={{ marginBottom: '2.5rem' }}>
          {filterOptions.map((f) => (
            <button
              key={f}
              className={`tab-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div
                className="project-banner"
                style={{ background: project.gradient }}
              >
                <span className="project-banner-icon">{project.icon}</span>
                <span className="project-type-tag">{project.category}</span>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tech-tags">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    <span>🐙</span> View on GitHub &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
