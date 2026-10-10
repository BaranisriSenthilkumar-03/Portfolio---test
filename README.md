# Baranisri S. - Portfolio Website (React + Vite)

A modern, responsive, high-performance portfolio website built with **React** and **Vite** for **Baranisri S.** (B.E. Computer Science & Engineering student and aspiring Software Developer).

---

## 🚀 Features

- **Modern Glassmorphism UI**: Curated gradients, backdrop blur, ambient glowing orbs, and micro-interactions.
- **Dual Theme Support**: Interactive Dark Mode and Light Mode switcher with automatic persistence in `localStorage`.
- **Dynamic Hero Section**: Real-time typing animation cycling through roles, availability badge, and quick stats (CGPA 7.9, 2nd Year B.E.).
- **User Profile Showcase**: Features your uploaded portrait (`My pic.jpeg`) with glowing gradient rings and interactive badges.
- **Resume-Driven Content**: Extracted directly from `BARANISRI S.docx`:
  - **About Me & Objective**: Clear personal narrative and career goals.
  - **Categorized Skills**: Interactive tabs for Programming (Python, Java, C, JS), Web Tech (React, HTML5, CSS3), Databases & Tools (SQL, Git, VS Code), and Core Focus Areas (GenAI, Cloud, Security).
  - **Featured Projects**: AI Knowledge Assistant, Academic Management Portal, React Portfolio, and Security Analyzer.
  - **Education Timeline**: K. Ramakrishnan College of Technology (B.E. CSE), Laurel Higher Secondary (HSC - 80%), and St. Isabel Girls (SSLC - 70%).
  - **Certifications**: Simplilearn (Generative AI) and NPTEL (Soft Skills).
  - **Languages & Soft Skills**: Tamil (Native), English (Fluent), and German (Elementary).
  - **Curriculum Vitae Modal**: Interactive printable/PDF resume view.
  - **Direct Contact & Form**: Click-to-copy email/phone, direct LinkedIn & GitHub links, and contact form with mailto trigger.

---

## 🛠️ Project Structure

```
Portfolio---test/
├── index.html              # Vite entry HTML
├── package.json            # React & Vite dependencies and scripts
├── vite.config.js          # Vite configuration
├── README.md               # Documentation & setup guide
├── My pic.jpeg             # Original profile picture
├── BARANISRI S.docx        # Original resume document
├── public/
│   └── profile.jpg         # Profile image asset for public serving
└── src/
    ├── main.jsx            # React root mount
    ├── App.jsx             # Main Application layout and state
    ├── index.css           # Modern design system & CSS stylesheet
    ├── assets/
    │   └── profile.jpg     # Component image asset
    ├── data/
    │   └── portfolioData.js# Structured resume and portfolio dataset
    └── components/
        ├── Navbar.jsx      # Navigation, theme toggle, resume trigger
        ├── Hero.jsx        # Typing hero and profile card
        ├── About.jsx       # Narrative & career highlights
        ├── Skills.jsx      # Technical toolkit & soft skills
        ├── Projects.jsx    # Projects showcase with category filter
        ├── Education.jsx   # Timeline of degrees & schooling
        ├── Certifications.jsx # Certifications & language proficiencies
        ├── Contact.jsx     # Direct contacts, copy actions & form
        ├── ResumeModal.jsx # Full-screen printable CV modal
        └── Footer.jsx      # Footer & smooth back-to-top button
```

---

## 💻 How to Run (Once You Install Node.js)

When you download and install **Node.js** (recommended: Node.js 18 or 20 LTS from [nodejs.org](https://nodejs.org/)):

1. Open a terminal or Command Prompt inside this folder:
   ```bash
   cd "C:\Users\baran\OneDrive\barani\Portfolio---test"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open the displayed local URL in your browser (usually `http://localhost:3000` or `http://localhost:5173`).

---

## 🌐 Deploying to GitHub Pages / Vercel / Netlify

- **Build for Production**:
  ```bash
  npm run build
  ```
- The production-ready files will be generated in the `dist/` directory, ready for deployment to **Vercel**, **Netlify**, or **GitHub Pages**.