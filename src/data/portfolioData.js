export const portfolioData = {
  personal: {
    name: "Baranisri S",
    fullName: "Baranisri Senthilkumar",
    title: "B.E. Computer Science & Engineering Student",
    subTitle: "Aspiring Software Developer | AI & Web Enthusiast",
    location: "Tamil Nadu, India",
    email: "baranisrisenthilkumar@gmail.com",
    phone: "+91 6383776383",
    rawPhone: "6383776383",
    linkedIn: "https://www.linkedin.com/in/baranisri-senthilkumar-0001773ab",
    linkedInHandle: "baranisri-senthilkumar",
    github: "https://github.com/BaranisriSenthilkumar-03",
    githubHandle: "BaranisriSenthilkumar-03",
    avatar: "/profile.jpg",
    status: "Open to Internships & Projects",
    bio: "Motivated Computer Science and Engineering student seeking internship and entry-level opportunities to apply programming knowledge, develop software solutions, and strengthen problem-solving skills. Eager to master emerging technologies, collaborate with dynamic teams, and engineer impactful solutions.",
    stats: [
      { label: "Current CGPA", value: "7.9" },
      { label: "Degree Year", value: "2nd Year" },
      { label: "Certifications", value: "2+" },
      { label: "Languages", value: "3" }
    ]
  },
  roles: [
    "Aspiring Software Developer",
    "Computer Science Engineer",
    "Generative AI Learner",
    "Frontend & React Developer"
  ],
  highlights: [
    {
      icon: "🎓",
      title: "Strong Academic Record",
      desc: "Pursuing B.E. in CSE at K. Ramakrishnan College of Technology with a 7.9 CGPA."
    },
    {
      icon: "⚡",
      title: "Full-Stack & Systems Focus",
      desc: "Proficient in C, Python, Java, modern Web Technologies, and SQL databases."
    },
    {
      icon: "🤖",
      title: "Emerging Tech & GenAI",
      desc: "Simplilearn certified in Generative AI; passionate about LLMs and automation."
    },
    {
      icon: "🌐",
      title: "Multilingual & Collaborative",
      desc: "Fluent in Tamil, English, and learning German. NPTEL certified in Soft Skills."
    }
  ],
  skills: [
    // Programming Languages
    { name: "Python", category: "Languages", level: "Intermediate", percentage: 85, icon: "🐍" },
    { name: "Java", category: "Languages", level: "Intermediate", percentage: 80, icon: "☕" },
    { name: "C", category: "Languages", level: "Proficient", percentage: 75, icon: "⚙️" },
    { name: "JavaScript (ES6+)", category: "Languages", level: "Intermediate", percentage: 80, icon: "⚡" },

    // Web Technologies
    { name: "React.js", category: "Web Tech", level: "Intermediate", percentage: 80, icon: "⚛️" },
    { name: "HTML5 & CSS3", category: "Web Tech", level: "Advanced", percentage: 90, icon: "🎨" },
    { name: "Responsive UI", category: "Web Tech", level: "Advanced", percentage: 85, icon: "📱" },

    // Databases & Tools
    { name: "SQL / MySQL", category: "Databases & Tools", level: "Intermediate", percentage: 80, icon: "🗄️" },
    { name: "Git & GitHub", category: "Databases & Tools", level: "Proficient", percentage: 85, icon: "🐙" },
    { name: "VS Code", category: "Databases & Tools", level: "Proficient", percentage: 90, icon: "💻" },

    // Core Focus Areas
    { name: "Software Development", category: "Core Areas", level: "Focused", percentage: 85, icon: "🚀" },
    { name: "Artificial Intelligence", category: "Core Areas", level: "Exploring", percentage: 75, icon: "🤖" },
    { name: "Cloud Computing", category: "Core Areas", level: "Exploring", percentage: 70, icon: "☁️" },
    { name: "Cybersecurity", category: "Core Areas", level: "Foundational", percentage: 70, icon: "🛡️" }
  ],
  softSkills: [
    { name: "Effective Communication", icon: "💬" },
    { name: "Teamwork & Collaboration", icon: "🤝" },
    { name: "Analytical Problem-Solving", icon: "🧩" },
    { name: "Time Management", icon: "⏰" },
    { name: "Adaptability & Resilience", icon: "🔄" },
    { name: "Continuous Learning", icon: "📚" }
  ],
  projects: [
    {
      id: 1,
      title: "Generative AI Knowledge Assistant",
      tagline: "Intelligent conversational assistant and automated summarizer",
      category: "AI & Python",
      description: "An AI-powered tool applying Generative AI principles to summarize documents, generate insights, and answer contextual questions with speed and precision.",
      techStack: ["Python", "GenAI", "API Integration", "Prompt Engineering"],
      icon: "🤖",
      gradient: "linear-gradient(135deg, #4f46e5, #06b6d4)",
      githubUrl: "https://github.com/BaranisriSenthilkumar-03"
    },
    {
      id: 2,
      title: "Academic Student Management Portal",
      tagline: "Comprehensive record management and grading software",
      category: "Software & SQL",
      description: "A centralized software solution for tracking student records, courses, attendance, and exam grades with a robust relational SQL database backend.",
      techStack: ["Java", "SQL", "Database Design", "OOP"],
      icon: "📊",
      gradient: "linear-gradient(135deg, #0284c7, #2563eb)",
      githubUrl: "https://github.com/BaranisriSenthilkumar-03"
    },
    {
      id: 3,
      title: "Modern Interactive React Portfolio",
      tagline: "Responsive glassmorphism portfolio with real-time theme switcher",
      category: "Web Development",
      description: "A sleek, high-performance portfolio built with React and modern CSS, featuring dynamic animations, responsive mobile design, and interactive modals.",
      techStack: ["React.js", "JavaScript", "Modern CSS", "Vite"],
      icon: "✨",
      gradient: "linear-gradient(135deg, #9333ea, #4f46e5)",
      githubUrl: "https://github.com/BaranisriSenthilkumar-03"
    },
    {
      id: 4,
      title: "CyberGuard Network Port Analyzer",
      tagline: "Lightweight socket-based network vulnerability scanner",
      category: "Security & Tools",
      description: "A network diagnostic tool written in Python to inspect open ports, analyze service banners, and provide early alerts on potential network vulnerabilities.",
      techStack: ["Python", "Socket Programming", "Cybersecurity", "Networking"],
      icon: "🛡️",
      gradient: "linear-gradient(135deg, #059669, #0284c7)",
      githubUrl: "https://github.com/BaranisriSenthilkumar-03"
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) – Computer Science & Engineering",
      institution: "K. Ramakrishnan College of Technology",
      period: "2025 – 2029",
      currentYear: "2nd Year",
      score: "CGPA: 7.9",
      details: "Focusing on Core Data Structures, Algorithms, Object-Oriented Systems, and Artificial Intelligence."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Laurel Higher Secondary School",
      period: "Completed 2025",
      currentYear: "State Board",
      score: "80%",
      details: "Completed Higher Secondary with rigorous focus on Mathematics, Physics, and Computer Science."
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "St. Isabel Girls Higher Secondary School",
      period: "Completed 2023",
      currentYear: "State Board",
      score: "70%",
      details: "Solid secondary school foundation with active participation in science and extracurricular activities."
    }
  ],
  certifications: [
    {
      title: "Generative AI",
      issuer: "Simplilearn",
      icon: "🤖",
      tagline: "Core Generative AI Concepts, LLM Fundamentals & Application Workflows",
      skills: ["Generative AI", "Prompt Design", "AI Integration"]
    },
    {
      title: "Soft Skills",
      issuer: "NPTEL",
      icon: "🌟",
      tagline: "Professional Communication, Teamwork, Workplace Ethics & Leadership",
      skills: ["Leadership", "Interpersonal Skills", "Corporate Etiquette"]
    }
  ],
  languages: [
    { name: "Tamil", level: "Native / Bilingual", percentage: 100, flag: "🇮🇳" },
    { name: "English", level: "Professional Working Proficiency", percentage: 88, flag: "🌐" },
    { name: "German", level: "Elementary Proficiency", percentage: 40, flag: "🇩🇪" }
  ]
};
