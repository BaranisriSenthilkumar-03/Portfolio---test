import React, { useState } from 'react';

export default function Contact({ personal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedField, setCopiedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Create mailto link as fallback to send real email
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>📬</span> Let's Connect
          </div>
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an internship opportunity, a project to collaborate on, or just want to say hi, my inbox is open!
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Details & Social Links */}
          <div className="contact-info-card">
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                Contact Information
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                Feel free to reach out directly through email, phone, or LinkedIn.
              </p>
            </div>

            <div className="contact-direct-items">
              {/* Email */}
              <div className="contact-item-box">
                <div className="contact-icon-bubble">✉️</div>
                <div className="contact-item-content">
                  <div className="contact-label">Email</div>
                  <a href={`mailto:${personal.email}`} className="contact-value">
                    {personal.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="contact-copy-btn"
                  onClick={() => handleCopy(personal.email, 'email')}
                >
                  {copiedField === 'email' ? '✓ Copied' : 'Copy'}
                </button>
              </div>

              {/* Phone */}
              <div className="contact-item-box">
                <div className="contact-icon-bubble">📞</div>
                <div className="contact-item-content">
                  <div className="contact-label">Phone</div>
                  <a href={`tel:${personal.rawPhone}`} className="contact-value">
                    {personal.phone}
                  </a>
                </div>
                <button
                  type="button"
                  className="contact-copy-btn"
                  onClick={() => handleCopy(personal.phone, 'phone')}
                >
                  {copiedField === 'phone' ? '✓ Copied' : 'Copy'}
                </button>
              </div>

              {/* Location */}
              <div className="contact-item-box">
                <div className="contact-icon-bubble">📍</div>
                <div className="contact-item-content">
                  <div className="contact-label">Location</div>
                  <span className="contact-value">{personal.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="contact-label" style={{ marginBottom: '0.8rem' }}>
                Profiles & Repositories
              </div>
              <div className="social-links-row">
                <a
                  href={personal.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <span>🔗</span> LinkedIn
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <span>🐙</span> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
              Send a Message
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
              Fill out this quick form to initiate an email directly.
            </p>

            {submitted ? (
              <div
                style={{
                  padding: '2rem',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                  color: 'var(--accent-emerald)',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎉</div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.4rem', color: 'inherit' }}>
                  Opening Your Email Client!
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Thank you for reaching out, {formData.name || 'there'}! I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Smith"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Internship opportunity / Project query"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="form-submit-btn">
                  <span>✉️</span> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
