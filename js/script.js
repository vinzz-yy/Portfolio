/* ============================================================
   VINCE ALVENDIA PORTFOLIO — MAIN SCRIPT
   js/script.js
   ============================================================

   CONFIGURATION: Edit the CONFIG object below to update all
   content on the portfolio WITHOUT touching index.html.

   ============================================================ */

'use strict';

/* ================================================================
   1. GLOBAL CONFIG — Edit everything here to personalize the site
   ================================================================ */
const CONFIG = {

  /* --- Personal Info --- */
  name: 'Vince Ramos Alvendia',
  title: 'Full-Stack Developer',
  typingTitles: ['Full-Stack Developer', 'BSIT Student', 'Web Developer', 'PHP & Laravel Dev', 'UI/UX Enthusiast'],
  intro: 'Passionate BSIT student focused on building modern web applications, solving real-world problems, and continuously learning new technologies.',
  profileImage: 'assets/images/profile.png',
  resume: 'assets/resume.pdf',

  /* --- Social Links --- */
  social: {
    github: 'https://github.com/vinzz-yy',
    linkedin: 'https://linkedin.com/in/vince-alvendia',
    facebook: 'https://www.facebook.com/vnce.ramosalvendia',
    email: 'vince.alvendia@gmail.com',
  },

  /* --- Contact Info --- */
  contact: {
    email: 'vince.alvendia@gmail.com',
    phone: '09565908781',
    location: 'Philippines',
  },

  /* --- About --- */
  about: {
    bio1: 'Hi! I\'m <strong>Vince Ramos Alvendia</strong>, a Bachelor of Science in Information Technology student with a deep passion for web development and software engineering. I thrive on crafting clean, efficient code and transforming complex problems into elegant digital solutions.',
    bio2: 'My journey into development began with a curiosity about how websites work, and it has grown into a full pursuit of becoming a skilled Full-Stack Developer. I enjoy working across the entire stack — from designing intuitive UIs to building robust server-side systems.',
    bio3: 'I\'m currently seeking internship opportunities and freelance projects where I can apply my skills, grow professionally, and contribute to meaningful projects.',
    education: 'BS Information Technology',
    location: 'Philippines',
    status: 'Open to Opportunities',
    focus: 'Full-Stack Web Dev',
    objective: 'To secure a position as a Full-Stack Developer where I can leverage my skills in web development, contribute to innovative projects, and continue growing as a software professional while delivering high-quality, user-centric solutions.',
    interests: [
      { name: 'Web Development', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' },
      { name: 'Mobile Apps', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>' },
      { name: 'Database Design', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>' },
      { name: 'UI/UX Design', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>' },
      { name: 'AI & Machine Learning', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="16" y1="16" x2="16.01" y2="16"/></svg>' },
      { name: 'Cybersecurity', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>' },
      { name: 'Data Analytics', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>' },
      { name: 'Game Dev', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><circle cx="15" cy="13" r="1"/><circle cx="18" cy="11" r="1"/><rect x="2" y="6" width="20" height="12" rx="6"/></svg>' },
    ],
    softSkills: [
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
        name: 'Teamwork'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
        name: 'Leadership'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19.43 12.98A7.96 7.96 0 0 0 20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 1.05.2 2.06.57 2.98L2 22l9.02-2.57c.92.37 1.93.57 2.98.57 4.42 0 8-3.58 8-8z"/><path d="M12 6v4l3 3"/></svg>',
        name: 'Problem Solving'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
        name: 'Fast Learner'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
        name: 'Adaptability'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
        name: 'Communication'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
        name: 'Time Management'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
        name: 'Goal-Oriented'
      },
    ],
  },

  /* --- Stats Strip --- */
  stats: {
    projects: 7,
    technologies: 8,
    certificates: 5,
    coffees: 500,
  },

  /* --- Skills --- */
  skills: [
    {
      category: 'Frontend Development',
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
      tagline: 'Crafting responsive, pixel-perfect user interfaces',
      items: [
        { name: 'HTML5', devicon: 'devicon-html5-plain colored', level: 'Advanced' },
        { name: 'CSS3', devicon: 'devicon-css3-plain colored', level: 'Advanced' },
        { name: 'JavaScript', devicon: 'devicon-javascript-plain colored', level: 'Intermediate' },
        { name: 'Responsive Design', devicon: 'devicon-bootstrap-plain colored', level: 'Advanced' },
      ],
    },
    {
      category: 'Backend Development',
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
      tagline: 'Building robust server-side applications & logic',
      items: [
        { name: 'PHP', devicon: 'devicon-php-plain colored', level: 'Intermediate' },
        { name: 'Laravel', devicon: 'devicon-laravel-plain colored', level: 'Intermediate' },
      ],
    },
    {
      category: 'Database Architecture',
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
      tagline: 'Designing relational schemas & optimized queries',
      items: [
        { name: 'MySQL', devicon: 'devicon-mysql-plain colored', level: 'Intermediate' },
      ],
    },
    {
      category: 'Tools & Workflow',
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
      tagline: 'Modern software engineering suite & versioning',
      items: [
        { name: 'Git', devicon: 'devicon-git-plain colored', level: 'Proficient' },
        { name: 'GitHub', devicon: 'devicon-github-original', level: 'Proficient' },
        { name: 'VS Code', devicon: 'devicon-vscode-plain colored', level: 'Advanced' },
        { name: 'XAMPP', devicon: 'devicon-apache-plain colored', level: 'Proficient' },
        { name: 'Figma', devicon: 'devicon-figma-plain colored', level: 'Intermediate' },
        { name: 'Postman', devicon: 'devicon-postman-plain colored', level: 'Proficient' },
      ],
    },
    {
      category: 'Concepts & Systems',
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
      tagline: 'Core software patterns, security, and deployment',
      items: [
        { name: 'REST API', devicon: 'devicon-nodejs-plain colored', level: 'Proficient' },
        { name: 'Authentication', devicon: 'devicon-firebase-plain colored', level: 'Proficient' },
        { name: 'CRUD Systems', devicon: 'devicon-mysql-plain colored', level: 'Advanced' },
        { name: 'Deployment', devicon: 'devicon-heroku-plain colored', level: 'Intermediate' },
      ],
    },
  ],

  /* --- Projects --- */
  projects: [
    {
      title: 'Integrated Tenant & Commercial Space Management System',
      description: 'Full-stack commercial space & tenant information management system featuring automated lease management, payment tracking, interactive unit dashboards, and tenant communication portals.',
      image: 'assets/images/project-tenant-system.png',
      tech: ['React', 'Python', 'JavaScript', 'MySQL', 'CSS3'],
      github: 'https://github.com/vinzz-yy/Integrated-tenant-and-commercial-space-information-management-system',
      demo: '',
      featured: true,
    },
    {
      title: 'CPDO Systems — City Planning & Development Office',
      description: 'A comprehensive management system built for local government planning offices, featuring project tracking, document management, and administrative reporting.',
      image: 'assets/images/project-cpdo-system.png',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/vinzz-yy/CPDO-SYSTEMs',
      demo: '',
      featured: true,
    },
    {
      title: 'Automated Payroll Management System',
      description: 'Desktop-based payroll application for automating employee attendance, salary computations, tax deductions, and pay slip generation.',
      image: 'assets/images/project-payroll-system.png',
      tech: ['Visual Basic .NET', 'MySQL', 'Database Design'],
      github: 'https://github.com/vinzz-yy/Payroll-System',
      demo: '',
      featured: false,
    },
    {
      title: 'ANWATCH — Watch Store Showcase Web App',
      description: 'Modern e-commerce product showcase platform for luxury timepieces featuring interactive product catalog, filters, and shopping cart logic.',
      image: 'assets/images/project-anwatch.png',
      tech: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
      github: 'https://github.com/vinzz-yy/ANWATCH',
      demo: '',
      featured: false,
    },
    {
      title: 'Home Workout Mobile Application',
      description: 'Fitness mobile application offering customized home workout routines, exercise progress tracking, and interactive timer modules.',
      image: 'assets/images/project-workout-app.png',
      tech: ['JavaScript', 'Mobile Dev', 'UI/UX Design'],
      github: 'https://github.com/vinzz-yy/Homeworkout-Mobile-dev',
      demo: '',
      featured: false,
    },
    {
      title: 'Commercial Mall Landing Page',
      description: 'Interactive commercial mall landing page showcasing stores, promotional banners, event schedules, and contact inquiries.',
      image: 'assets/images/project-mall-landing.png',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/vinzz-yy/Landing-Page-for-mall',
      demo: '',
      featured: false,
    },
  ],

  /* --- Timeline --- */
  timeline: [
    {
      period: '2026 — Present',
      type: 'project',
      title: 'Full-Stack Developer',
      org: 'Full-Stack Web & Software Engineering',
      desc: 'Building production-grade web applications, commercial space management systems, and RESTful APIs using React, Python, PHP, and Laravel.',
    },
    {
      period: '2025',
      type: 'project',
      title: 'Advanced Application & Systems Development',
      org: 'Using Different Applications for Development',
      desc: 'Utilizing different development applications, frameworks, and tools for full-stack system architecture. Engineered CPDO city planning software with role-based access control, analytics dashboards, and relational MySQL databases.',
    },
    {
      period: '2024',
      type: 'project',
      title: 'Learning New Programming Languages',
      org: 'Multi-Language Software Engineering',
      desc: 'Learning new programming languages and developing software across web and desktop environments. Built ANWATCH luxury watch store e-commerce web platform using PHP & MySQL, and automated desktop payroll computation software using Visual Basic .NET.',
    },
    {
      period: '2022 — 2023',
      type: 'education',
      title: 'Learning & Improving Core Programming Skills',
      org: 'BSIT Degree & Self-Directed Coding',
      desc: 'Started Bachelor of Science in Information Technology. Focused heavily on learning programming fundamentals, mastering HTML5, CSS3, JavaScript, PHP, MySQL, and building foundational projects.',
    },
    {
      period: '2022',
      type: 'education',
      title: 'Starting Learning Programming & Web Development',
      org: 'TVL-ICT Senior High School Track',
      desc: 'Began my coding journey during Senior High School in the TVL-ICT strand. Built my first HTML/CSS pages, discovered my passion for software engineering, and graduated with honors.',
    },
  ],

  /* --- Certificates --- */
  certificates: [
    {
      title: 'Web Development Fundamentals',
      date: '2024',
      image: 'assets/images/cert-placeholder.png',
    },
    {
      title: 'Laravel Framework Certification',
      date: '2024',
      image: 'assets/images/cert-placeholder.png',
    },
    {
      title: 'Database Design with MySQL',
      date: '2023',
      image: 'assets/images/cert-placeholder.png',
    },
    {
      title: 'Responsive Web Design',
      date: '2023',
      image: 'assets/images/cert-placeholder.png',
    },
    {
      title: 'Git & GitHub Essentials',
      date: '2023',
      image: 'assets/images/cert-placeholder.png',
    },
  ],

  /* --- GitHub --- */
  github: {
    username: 'vinzz-yy',
    theme: 'tokyonight',    // Theme for readme-stats cards
  },

  /* --- Organized Tech Stack Categories --- */
  techCategories: [
    {
      category: 'Frontend & UI Engineering',
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
      desc: 'Building responsive, pixel-perfect, interactive web interfaces',
      items: [
        { name: 'HTML5', devicon: 'devicon-html5-plain colored', level: 'Advanced', color: '#e44d26' },
        { name: 'CSS3', devicon: 'devicon-css3-plain colored', level: 'Advanced', color: '#1572b6' },
        { name: 'JavaScript', devicon: 'devicon-javascript-plain colored', level: 'Advanced', color: '#f7df1e' },
        { name: 'React', devicon: 'devicon-react-original colored', level: 'Intermediate', color: '#61dafb' },
      ],
    },
    {
      category: 'Backend & Server Development',
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
      desc: 'Server-side logic, API design & object-oriented programming',
      items: [
        { name: 'PHP', devicon: 'devicon-php-plain colored', level: 'Advanced', color: '#777bb4' },
        { name: 'Laravel', devicon: 'devicon-laravel-plain colored', level: 'Proficient', color: '#ff2d20' },
        { name: 'Python', devicon: 'devicon-python-plain colored', level: 'Proficient', color: '#3776ab' },
        { name: 'VB.NET', devicon: 'devicon-visualstudio-plain colored', level: 'Proficient', color: '#5c2d91' },
      ],
    },
    {
      category: 'Database Architecture & Servers',
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
      desc: 'Relational database schemas, SQL queries & server hosting',
      items: [
        { name: 'MySQL', devicon: 'devicon-mysql-plain colored', level: 'Advanced', color: '#4479a1' },
        { name: 'XAMPP', devicon: 'devicon-apache-plain colored', level: 'Proficient', color: '#d22128' },
        { name: 'REST APIs', devicon: 'devicon-nodejs-plain colored', level: 'Proficient', color: '#339933' },
      ],
    },
    {
      category: 'Tools & Workflow',
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
      desc: 'Version control, code editors, API testing & UI design tools',
      items: [
        { name: 'Git', devicon: 'devicon-git-plain colored', level: 'Proficient', color: '#f05032' },
        { name: 'GitHub', devicon: 'devicon-github-original', level: 'Proficient', color: '#181717' },
        { name: 'VS Code', devicon: 'devicon-vscode-plain colored', level: 'Advanced', color: '#007acc' },
        { name: 'Postman', devicon: 'devicon-postman-plain colored', level: 'Proficient', color: '#ff6c37' },
        { name: 'Figma', devicon: 'devicon-figma-plain colored', level: 'Intermediate', color: '#f24e1e' },
      ],
    },
  ],

  /* --- Services --- */
  services: [
    {
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
      title: 'Portfolio Websites',
      desc: 'Beautiful, responsive personal portfolio websites that make a lasting impression and help you stand out from the crowd.',
      features: ['Custom design', 'Mobile-first', 'Fast loading', 'SEO optimized'],
    },
    {
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
      title: 'Business Websites',
      desc: 'Professional business websites tailored to your brand, featuring modern design, clear call-to-actions, and conversion-focused layouts.',
      features: ['Branded design', 'Contact forms', 'Google Maps', 'Analytics ready'],
    },
    {
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
      title: 'Management Systems',
      desc: 'Custom management systems and admin panels with full CRUD operations, user management, and role-based access control.',
      features: ['User management', 'Role-based access', 'Data tables', 'Export reports'],
    },
    {
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
      title: 'Dashboards',
      desc: 'Interactive data dashboards featuring real-time charts, analytics widgets, and clear data visualizations for informed decisions.',
      features: ['Real-time data', 'Charts & graphs', 'Filters', 'Responsive layout'],
    },
    {
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
      title: 'REST API Development',
      desc: 'Robust RESTful APIs built with Laravel, complete with authentication, validation, documentation, and proper error handling.',
      features: ['JWT Auth', 'CRUD endpoints', 'Postman docs', 'Error handling'],
    },
    {
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
      title: 'Database Design',
      desc: 'Well-structured, normalized database schemas optimized for performance, scalability, and data integrity using MySQL.',
      features: ['ER diagrams', 'Normalization', 'Indexing', 'Migrations'],
    },
  ],

  /* --- Testimonials --- */
  testimonials: [
    {
      text: '"Vince is a highly dedicated student who consistently delivers quality work. His problem-solving skills and passion for technology are truly impressive. I\'m confident he will excel in his career as a developer."',
      name: 'Professor Juan dela Cruz',
      role: 'IT Department Faculty',
      stars: 5,
    },
    {
      text: '"Working with Vince on our capstone project was an incredible experience. His attention to detail, technical skills, and ability to learn quickly made him an invaluable part of our team."',
      name: 'Maria Santos',
      role: 'Thesis Groupmate',
      stars: 5,
    },
    {
      text: '"Vince built our project with amazing precision and creativity. He understood our requirements perfectly and delivered a system that exceeded our expectations. Highly recommended!"',
      name: 'Carlo Reyes',
      role: 'Project Stakeholder',
      stars: 5,
    },
    {
      text: '"A talented developer with an eye for clean code and beautiful design. Vince demonstrates exceptional aptitude for full-stack development and is always eager to learn new technologies."',
      name: 'Dr. Ana Lim',
      role: 'Academic Advisor',
      stars: 5,
    },
  ],

}; // End CONFIG


/* ================================================================
   2. INITIALIZATION — Run everything when DOM is ready
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  applyConfig();
  initLoadingScreen();
  initCustomCursor();
  initScrollProgress();
  initNavbar();
  initParticles();
  initConstellationClusters();
  initTypingAnimation();
  initScrollReveal();
  initCounters();
  initTiltEffect();
  initContactForm();
  initRippleEffect();
  initGitHubStats();
  setCurrentYear();
});


/* --- Contact Form Dynamic Message Storage --- */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    if (!nameInput || !emailInput || !subjectInput || !messageInput) return;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !subject || !message) return;

    const newMsg = {
      id: 'msg-' + Date.now(),
      name,
      email,
      subject,
      message,
      date: new Date().toLocaleString(),
      read: false
    };

    let msgs = [];
    try {
      const raw = localStorage.getItem('PORTFOLIO_CONTACT_MESSAGES');
      if (raw) msgs = JSON.parse(raw);
    } catch (err) {}

    msgs.unshift(newMsg);
    localStorage.setItem('PORTFOLIO_CONTACT_MESSAGES', JSON.stringify(msgs));

    contactForm.reset();
  });
}

/* ================================================================
   3. APPLY CONFIG — Inject all config data into the DOM
   ================================================================ */
function applyConfig() {
  /* --- Load Dynamic Admin Overrides --- */
  try {
    const dynamicRaw = localStorage.getItem('PORTFOLIO_DYNAMIC_DATA');
    if (dynamicRaw) {
      const dynamicData = JSON.parse(dynamicRaw);
      if (dynamicData.name) CONFIG.name = dynamicData.name;
      if (dynamicData.title) CONFIG.title = dynamicData.title;
      if (dynamicData.profileImage) CONFIG.profileImage = dynamicData.profileImage;
      if (dynamicData.phone) CONFIG.contact.phone = dynamicData.phone;
      if (dynamicData.email) {
        CONFIG.contact.email = dynamicData.email;
        CONFIG.social.email = dynamicData.email;
      }
      if (dynamicData.github) CONFIG.social.github = dynamicData.github;
      if (dynamicData.facebook) CONFIG.social.facebook = dynamicData.facebook;
      if (dynamicData.linkedin) CONFIG.social.linkedin = dynamicData.linkedin;
      if (dynamicData.bio) CONFIG.about.bio1 = dynamicData.bio;
      if (dynamicData.projects && Array.isArray(dynamicData.projects)) {
        CONFIG.projects = dynamicData.projects;
      }
    }
  } catch (e) {
    console.error('Error loading dynamic portfolio data:', e);
  }

  /* --- Hero --- */
  setText('hero-name-text', CONFIG.name);
  setText('hero-intro', CONFIG.intro);
  setAttr('hero-profile-img', 'src', CONFIG.profileImage);
  setAttr('hero-profile-img', 'alt', CONFIG.name + ' — ' + CONFIG.title);
  setAttr('hero-resume-btn', 'href', CONFIG.resume);
  setAttr('hero-resume-btn', 'target', '_blank');
  setAttr('hero-resume-btn', 'download', 'Vince_Alvendia_Resume.pdf');
  setAttr('nav-resume-btn', 'href', CONFIG.resume);
  setAttr('nav-resume-btn', 'target', '_blank');
  setAttr('nav-resume-btn', 'download', 'Vince_Alvendia_Resume.pdf');

  /* --- Social links --- */
  setAttr('social-github', 'href', CONFIG.social.github);
  setAttr('social-linkedin', 'href', CONFIG.social.linkedin);
  setAttr('social-facebook', 'href', CONFIG.social.facebook);
  setAttr('social-email', 'href', 'mailto:' + CONFIG.social.email);

  /* --- About --- */
  setHTML('about-bio-1', CONFIG.about.bio1);
  setHTML('about-bio-2', CONFIG.about.bio2);
  setHTML('about-bio-3', CONFIG.about.bio3);
  setText('about-education', CONFIG.about.education);
  setText('about-location', CONFIG.about.location);
  setText('about-status', CONFIG.about.status);
  setText('about-focus', CONFIG.about.focus);
  setText('about-objective', CONFIG.about.objective);

  renderInterests();
  renderSoftSkills();

  /* --- Stats --- */
  setAttr('stat-projects', 'data-count', CONFIG.stats.projects);
  setAttr('stat-skills', 'data-count', CONFIG.stats.technologies);
  setAttr('stat-certs', 'data-count', CONFIG.stats.certificates);
  setAttr('stat-coffees', 'data-count', CONFIG.stats.coffees);

  /* --- Skills --- */
  renderSkills();

  /* --- Projects --- */
  renderProjects();

  /* --- Timeline --- */
  renderTimeline();

  /* --- GitHub --- */
  const gh = CONFIG.github.username;
  const theme = CONFIG.github.theme;
  setAttr('gh-stats-img', 'src', `https://github-readme-stats.vercel.app/api?username=${gh}&show_icons=true&theme=${theme}&hide_border=true&bg_color=0d1117&title_color=6366f1&icon_color=8b5cf6&text_color=a1a1aa`);
  setAttr('gh-langs-img', 'src', `https://github-readme-stats.vercel.app/api/top-langs/?username=${gh}&layout=compact&theme=${theme}&hide_border=true&bg_color=0d1117&title_color=6366f1&text_color=a1a1aa`);
  setAttr('gh-streak-img', 'src', `https://github-readme-streak-stats.herokuapp.com/?user=${gh}&theme=${theme}&hide_border=true&background=0d1117&ring=6366f1&fire=8b5cf6&currStreakLabel=a1a1aa`);
  setAttr('github-profile-link', 'href', CONFIG.social.github);

  /* --- Tech Stack --- */
  renderTechStack();

  /* --- Services --- */
  renderServices();

  /* --- Contact --- */
  const email = CONFIG.contact.email;
  const phone = CONFIG.contact.phone;
  setAttr('contact-email-link', 'href', 'mailto:' + email);
  setText('contact-email-link', email);
  setAttr('contact-phone-link', 'href', 'tel:' + phone.replace(/\s+/g, ''));
  setText('contact-phone-link', phone);
  setText('contact-location', CONFIG.contact.location);
  setAttr('contact-github', 'href', CONFIG.social.github);
  setAttr('contact-linkedin', 'href', CONFIG.social.linkedin);
  setAttr('contact-facebook', 'href', CONFIG.social.facebook);

  /* --- Footer --- */
  setText('footer-name', CONFIG.name);
  setAttr('footer-github', 'href', CONFIG.social.github);
  setAttr('footer-linkedin', 'href', CONFIG.social.linkedin);
  setAttr('footer-facebook', 'href', CONFIG.social.facebook);
  setAttr('footer-email', 'href', 'mailto:' + email);
}

/* --- Render helpers --- */
function setText(id, val) { const el = document.getElementById(id); if (el) el.textContent = val; }
function setHTML(id, val) { const el = document.getElementById(id); if (el) el.innerHTML = val; }
function setAttr(id, attr, val) { const el = document.getElementById(id); if (el) el.setAttribute(attr, val); }

function renderInterests() {
  const container = document.getElementById('about-interests-container');
  if (!container) return;
  container.innerHTML = CONFIG.about.interests
    .map((item, idx) => `
      <span class="interest-tag" style="animation-delay: ${idx * 60}ms;">
        ${item.icon ? `<span class="interest-icon">${item.icon}</span>` : ''}
        <span>${item.name || item}</span>
      </span>
    `)
    .join('');
}

function renderSoftSkills() {
  const grid = document.getElementById('soft-skills-grid');
  if (!grid) return;
  grid.innerHTML = CONFIG.about.softSkills
    .map((s, idx) => `
      <div class="soft-skill-card tilt-card" role="listitem" style="animation-delay: ${idx * 70}ms;">
        <div class="soft-skill-icon-wrapper" aria-hidden="true">${s.icon}</div>
        <span class="soft-skill-name">${s.name}</span>
      </div>
    `).join('');
}

function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;
  container.innerHTML = `
    <div class="skills-categories-grid">
      ${CONFIG.skills.map((cat, i) => `
        <div class="skill-category-card tilt-card" data-reveal data-delay="${i * 80}">
          <div class="skill-category-header">
            <div class="skill-category-icon-box" aria-hidden="true">
              ${cat.icon}
            </div>
            <div>
              <h3 class="skill-category-title">${cat.category}</h3>
              <p class="skill-category-tagline">${cat.tagline || ''}</p>
            </div>
          </div>
          <div class="skills-grid" role="list">
            ${cat.items.map(skill => `
              <div class="skill-card" role="listitem" title="${skill.name} (${skill.level || ''})">
                <i class="${skill.devicon}" aria-hidden="true"></i>
                <div class="skill-info">
                  <span class="skill-name">${skill.name}</span>
                  ${skill.level ? `<span class="skill-level">${skill.level}</span>` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = CONFIG.projects.map((p, i) => {
    if (p.placeholder) {
      return `
        <div class="project-card placeholder" data-reveal data-delay="${i * 100}" aria-label="${p.title}">
          <div class="placeholder-icon" aria-hidden="true">🚀</div>
          <p class="placeholder-label">${p.title}</p>
          <p class="placeholder-text">${p.description}</p>
          <div class="project-tech">
            ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>
      `;
    }
    return `
      <article class="project-card tilt-card" data-reveal data-delay="${i * 100}" aria-label="${p.title}">
        <div class="project-img-wrapper">
          <img src="${p.image}" alt="${p.title} screenshot" loading="lazy" />
          <div class="project-img-overlay" aria-hidden="true"></div>
          ${p.featured ? '<span class="project-featured-badge">Featured</span>' : ''}
        </div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>
          <div class="project-tech" role="list" aria-label="Technologies used">
            ${p.tech.map(t => `<span class="tech-tag" role="listitem">${t}</span>`).join('')}
          </div>
          <div class="project-links">
            ${p.github ? `
              <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link project-link-github" aria-label="View ${p.title} on GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                GitHub
              </a>
            ` : ''}
            ${p.demo ? `
              <a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="project-link project-link-demo" aria-label="View live demo of ${p.title}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Live Demo
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  const iconMap = {
    education: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
    project: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    cert: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
    achievement: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  };

  container.innerHTML = CONFIG.timeline.map((item, i) => `
    <div class="timeline-item" data-delay="${i * 100}" aria-label="${item.title}">
      <div class="timeline-content">
        <p class="timeline-period">${item.period}</p>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-org">${item.org}</p>
        <p class="timeline-desc">${item.desc}</p>
        <span class="timeline-type type-${item.type}">${item.type}</span>
      </div>
      <div class="timeline-dot" aria-hidden="true">${iconMap[item.type] || ''}</div>
    </div>
  `).join('');

  // Observe timeline items
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));
}

function renderCertificates() {
  const grid = document.getElementById('certs-grid');
  if (!grid) return;
  grid.innerHTML = CONFIG.certificates.map((cert, i) => `
    <div class="cert-card" data-reveal data-delay="${i * 80}"
         role="button" tabindex="0"
         aria-label="View certificate: ${cert.title}"
         data-cert-title="${cert.title}"
         data-cert-date="${cert.date}"
         data-cert-image="${cert.image}"
         style="animation-delay: ${i * 80}ms">
      <div class="cert-img-wrapper">
        <div class="cert-placeholder-bg" style="
          width:100%; height:100%; min-height:180px;
          background: linear-gradient(135deg, #${['6366f1', '8b5cf6', '06b6d4', 'f59e0b', '22c55e'][i % 5]}22, #${['8b5cf6', '06b6d4', 'f59e0b', '22c55e', '6366f1'][i % 5]}11);
          display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; padding:24px;
        ">
          <div style="width:48px; height:48px; border-radius:50%; background:rgba(99,102,241,0.15); display:flex; align-items:center; justify-content:center; color:var(--accent);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
          </div>
          <span style="font-size:0.85rem; font-weight:600; color:var(--text-secondary); text-align:center;">${cert.title}</span>
        </div>
        <div class="cert-overlay" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
        </div>
      </div>
      <div class="cert-info">
        <p class="cert-title">${cert.title}</p>
        <p class="cert-date">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block; vertical-align:middle; margin-right:4px;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          ${cert.date}
        </p>
      </div>
    </div>
  `).join('');

  // Attach click events to cert cards
  document.querySelectorAll('.cert-card').forEach(card => {
    const open = () => openCertModal(card.dataset.certTitle, card.dataset.certDate, card.dataset.certImage);
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
}

function renderTechStack() {
  const container = document.getElementById('tech-stack-grid');
  if (!container) return;

  const categories = CONFIG.techCategories || [];
  container.className = 'tech-categories-grid';
  container.innerHTML = categories.map((cat, catIdx) => `
    <div class="tech-category-card tilt-card" data-reveal data-delay="${catIdx * 100}">
      <div class="tech-category-header">
        <div class="tech-category-icon-box" aria-hidden="true">${cat.icon}</div>
        <div>
          <h3 class="tech-category-title">${cat.category}</h3>
          <p class="tech-category-desc">${cat.desc}</p>
        </div>
      </div>
      <div class="tech-items-grid">
        ${cat.items.map((item, i) => `
          <div class="tech-item-pill" style="--accent-color: ${item.color || 'var(--accent)'}">
            <i class="${item.devicon} tech-item-icon" aria-hidden="true"></i>
            <div class="tech-item-info">
              <span class="tech-item-name">${item.name}</span>
              <span class="tech-item-level">${item.level}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = CONFIG.services.map((s, i) => `
    <div class="service-card" data-reveal data-delay="${i * 80}" role="article" aria-label="${s.title}">
      <div class="service-icon" aria-hidden="true">${s.icon}</div>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.desc}</p>
      <ul class="service-features" aria-label="Features">
        ${s.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderTestimonials() {
  const track = document.getElementById('testimonials-track');
  const dots = document.getElementById('testimonial-dots');
  if (!track || !dots) return;

  track.innerHTML = CONFIG.testimonials.map(t => `
    <div class="testimonial-slide" role="listitem">
      <div class="testimonial-quote" aria-hidden="true">"</div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-stars" aria-label="${t.stars} out of 5 stars">
        ${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}
      </div>
      <div class="testimonial-author">
        <strong class="testimonial-name">${t.name}</strong>
        <span class="testimonial-role">${t.role}</span>
      </div>
    </div>
  `).join('');

  dots.innerHTML = CONFIG.testimonials.map((_, i) => `
    <button class="testimonial-dot ${i === 0 ? 'active' : ''}"
            aria-label="Testimonial ${i + 1}" role="listitem"
            data-index="${i}"></button>
  `).join('');
}


/* ================================================================
   4. LOADING SCREEN
   ================================================================ */
function initLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  if (!screen) return;
  // Minimum 2.2s to let the animation complete
  setTimeout(() => {
    screen.classList.add('hidden');
    setTimeout(() => { screen.style.display = 'none'; }, 600);
  }, 2200);
}


/* ================================================================
   5. DARK / LIGHT THEME
   ================================================================ */
function initTheme() {
  const saved = localStorage.getItem('va-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('va-theme', next);
    });
  }
}


/* ================================================================
   6. CUSTOM CURSOR
   ================================================================ */
function initCustomCursor() {
  const dot = document.getElementById('cursor-dot');
  const outline = document.getElementById('cursor-outline');
  if (!dot || !outline) return;

  let mouseX = 0, mouseY = 0;
  let outlineX = 0, outlineY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  // Smooth outline follow
  function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;
    outline.style.left = outlineX + 'px';
    outline.style.top = outlineY + 'px';
    requestAnimationFrame(animateOutline);
  }
  animateOutline();

  // Hover effects on interactive elements
  const interactive = 'a, button, [role="button"], input, textarea, .skill-card, .cert-card, .project-card, .service-card';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactive)) {
      dot.classList.add('cursor-hover');
      outline.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactive)) {
      dot.classList.remove('cursor-hover');
      outline.classList.remove('cursor-hover');
    }
  });
  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; outline.style.opacity = '0'; });
}


/* ================================================================
   7. PARTICLE CONSTELLATION MESH ENGINE
   ================================================================ */
function initParticles() {
  const canvasList = Array.from(
    document.querySelectorAll('.section-particles-canvas, #particles-canvas, #footer-particles-canvas, #global-particles-canvas')
  );

  if (canvasList.length === 0) return;

  canvasList.forEach(canvas => {
    const ctx = canvas.getContext('2d');
    const isGlobal = canvas.id === 'global-particles-canvas';
    
    let width = (canvas.width = isGlobal ? window.innerWidth : (canvas.parentElement?.clientWidth || window.innerWidth));
    let height = (canvas.height = isGlobal ? window.innerHeight : (canvas.parentElement?.clientHeight || 500));

    let mouse = { x: null, y: null, radius: 180 };

    window.addEventListener('mousemove', (e) => {
      if (isGlobal) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      } else {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      }
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    window.addEventListener('resize', () => {
      width = canvas.width = isGlobal ? window.innerWidth : (canvas.parentElement?.clientWidth || window.innerWidth);
      height = canvas.height = isGlobal ? window.innerHeight : (canvas.parentElement?.clientHeight || 500);
      createParticles();
    });

    let particles = [];
    const densityDivisor = isGlobal ? 8000 : 11000;
    const particleCount = Math.min(Math.floor((width * height) / densityDivisor), isGlobal ? 140 : 85);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2.4 + 1.2;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 1.8;
            this.y -= (dy / dist) * force * 1.8;
          }
        }
      }

      draw(isDark) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? '#8b5cf6' : '#6366f1';
        ctx.fill();
      }
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function connectParticles(isDark) {
      const maxDist = isGlobal ? 150 : 135;
      const strokeRgb = isDark ? '139, 92, 246' : '99, 102, 241';

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (isDark ? 0.38 : 0.28);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${strokeRgb}, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }

        if (mouse.x !== null && mouse.y !== null) {
          const mdx = particles[i].x - mouse.x;
          const mdy = particles[i].y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < mouse.radius) {
            const malpha = (1 - mdist / mouse.radius) * 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${strokeRgb}, ${malpha})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }
    }

    createParticles();

    function animate() {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

      for (let p of particles) {
        p.update();
        p.draw(isDark);
      }
      connectParticles(isDark);
      requestAnimationFrame(animate);
    }

    animate();
  });
}


/* ================================================================
   DYNAMIC MOVING CONSTELLATION MESH CLUSTERS
   ================================================================ */
function initConstellationClusters() {
  const clusterCanvases = document.querySelectorAll('.constellation-cluster-canvas');
  if (!clusterCanvases.length) return;

  clusterCanvases.forEach(canvas => {
    const ctx = canvas.getContext('2d');
    
    function resize() {
      canvas.width = canvas.clientWidth || 400;
      canvas.height = canvas.clientHeight || 350;
    }
    resize();

    let width = canvas.width;
    let height = canvas.height;

    let mouse = { x: null, y: null, radius: 140 };

    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    window.addEventListener('resize', () => {
      resize();
      width = canvas.width;
      height = canvas.height;
      createClusterNodes();
    });

    let nodes = [];
    const nodeCount = 32;

    class ClusterNode {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3.5 + 2; // Node radius (2px - 5.5px)
        this.vx = (Math.random() - 0.5) * 1.2; // Active velocity!
        this.vy = (Math.random() - 0.5) * 1.2;
        this.hasHalo = Math.random() > 0.45; // 55% of nodes have glowing halos!
        this.pulse = Math.random() * Math.PI;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.03;

        // Bounce within canvas box
        if (this.x < 10 || this.x > width - 10) this.vx *= -1;
        if (this.y < 10 || this.y > height - 10) this.vy *= -1;

        // Interactive mouse force
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 2.2;
            this.y -= (dy / dist) * force * 2.2;
          }
        }
      }

      draw(isDark) {
        const primaryColor = isDark ? '#8b5cf6' : '#6366f1';
        const accentColor = isDark ? '#a78bfa' : '#4f46e5';

        // Render Outer Glowing Radial Halo for featured nodes
        if (this.hasHalo) {
          const haloSize = this.size * (3 + Math.sin(this.pulse) * 0.5);
          const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, haloSize);
          grad.addColorStop(0, isDark ? 'rgba(139, 92, 246, 0.45)' : 'rgba(99, 102, 241, 0.35)');
          grad.addColorStop(1, 'rgba(139, 92, 246, 0)');
          ctx.beginPath();
          ctx.arc(this.x, this.y, haloSize, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }

        // Render Solid Core Node
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.hasHalo ? accentColor : primaryColor;
        ctx.fill();
      }
    }

    function createClusterNodes() {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push(new ClusterNode());
      }
    }

    function drawMesh(isDark) {
      const maxDist = 115;
      const strokeRgb = isDark ? '139, 92, 246' : '99, 102, 241';

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.45;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${strokeRgb}, ${alpha})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }

        if (mouse.x !== null && mouse.y !== null) {
          const mdx = nodes[i].x - mouse.x;
          const mdy = nodes[i].y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < mouse.radius) {
            const malpha = (1 - mdist / mouse.radius) * 0.55;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${strokeRgb}, ${malpha})`;
            ctx.lineWidth = 1.3;
            ctx.stroke();
          }
        }
      }
    }

    createClusterNodes();

    function animate() {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

      for (let n of nodes) {
        n.update();
        n.draw(isDark);
      }
      drawMesh(isDark);
      requestAnimationFrame(animate);
    }

    animate();
  });
}




/* ================================================================
   7. SCROLL PROGRESS BAR
   ================================================================ */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
}


/* ================================================================
   8. NAVBAR — Sticky, active section, hamburger
   ================================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const overlay = document.getElementById('mobile-overlay');
  const backTop = document.getElementById('back-to-top');
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');

  // Scroll effects
  window.addEventListener('scroll', () => {
    if (!navbar) return;
    // Sticky blur
    navbar.classList.toggle('scrolled', window.scrollY > 40);

    // Back to top
    if (backTop) backTop.hidden = window.scrollY < 400;

    // Active nav link
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) current = section.id;
    });
    links.forEach(link => link.classList.toggle('active', link.dataset.section === current));
  }, { passive: true });

  // Hamburger toggle
  const openMenu = () => {
    navLinks.classList.add('mobile-open');
    overlay.classList.add('active');
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
  };
  const closeMenu = () => {
    navLinks.classList.remove('mobile-open');
    overlay.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  };

  hamburger?.addEventListener('click', () => {
    navLinks.classList.contains('mobile-open') ? closeMenu() : openMenu();
  });
  overlay?.addEventListener('click', closeMenu);

  // Close menu on link click
  links.forEach(link => link.addEventListener('click', closeMenu));

  // Back to top
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}


/* ================================================================
   9. PARTICLE SYSTEM
   ================================================================ */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const PARTICLE_COUNT = window.innerWidth < 768 ? 40 : 80;
  const particles = [];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? '99,102,241' : '139,92,246',
    });
  }

  let mouseX = -9999, mouseY = -9999;
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  }, { passive: true });

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update & draw particles
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      // Mouse repulsion
      const dx = p.x - mouseX, dy = p.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        p.x += dx / dist * 1.5;
        p.y += dy / dist * 1.5;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
      ctx.fill();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(99,102,241,${(1 - dist / 120) * 0.15})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }
  draw();
}


/* ================================================================
   10. TYPING ANIMATION
   ================================================================ */
function initTypingAnimation() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const titles = CONFIG.typingTitles;
  let titleIdx = 0, charIdx = 0, isDeleting = false;

  function type() {
    const current = titles[titleIdx];
    if (isDeleting) {
      el.textContent = current.substring(0, charIdx--);
    } else {
      el.textContent = current.substring(0, charIdx++);
    }

    let speed = isDeleting ? 50 : 90;

    if (!isDeleting && charIdx === current.length + 1) {
      isDeleting = true; speed = 1800; // Pause before delete
    } else if (isDeleting && charIdx === -1) {
      isDeleting = false;
      titleIdx = (titleIdx + 1) % titles.length;
      charIdx = 0; speed = 400;
    }
    setTimeout(type, speed);
  }
  type();
}


/* ================================================================
   11. SCROLL REVEAL (IntersectionObserver)
   ================================================================ */
function initScrollReveal() {
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let scrollDirection = 'down';

  window.addEventListener('scroll', () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop + 4) {
      scrollDirection = 'down';
    } else if (st < lastScrollTop - 4) {
      scrollDirection = 'up';
    }
    lastScrollTop = st <= 0 ? 0 : st;
  }, { passive: true });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        if (scrollDirection === 'down') {
          el.classList.remove('slide-down-init');
          el.classList.add('slide-up-init');
        } else {
          el.classList.remove('slide-up-init');
          el.classList.add('slide-down-init');
        }
        void el.offsetWidth;
        el.classList.add('revealed');
      } else {
        // Re-arm when exiting viewport so scrolling back up/down triggers direction animation again
        el.classList.remove('revealed', 'slide-up-init', 'slide-down-init');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

  // Attach data-reveal to all major section elements and observe
  const revealSelectors = '.section-header, .stat-item, .info-card, .soft-skill-card, .skill-category-card, .project-card, .timeline-item, .service-card, .github-stat-card, .contact-card, .interest-tag';
  document.querySelectorAll(revealSelectors).forEach(el => {
    if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', '');
  });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}


/* ================================================================
   12. ANIMATED COUNTERS
   ================================================================ */
function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const duration = 1800;
      const step = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current) + (target >= 100 ? '+' : '');
        if (current >= target) clearInterval(timer);
      }, 16);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}


/* ================================================================
   13. 3D TILT EFFECT ON PROJECT CARDS
   ================================================================ */
function initTiltEffect() {
  const applyTilt = () => {
    document.querySelectorAll('.tilt-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `
          perspective(1000px)
          rotateY(${x * 10}deg)
          rotateX(${-y * 10}deg)
          translateZ(8px)
          translateY(-8px)
        `;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform 0.5s ease';
        setTimeout(() => { card.style.transition = ''; }, 500);
      });
    });
  };
  setTimeout(applyTilt, 500); // Wait for dynamic content
}


/* ================================================================
   14. TESTIMONIAL SLIDER
   ================================================================ */
let currentSlide = 0;
let autoplayTimer = null;

function initTestimonialSlider() {
  const track = document.getElementById('testimonials-track');
  const prev = document.getElementById('prev-testimonial');
  const next = document.getElementById('next-testimonial');
  const dots = document.getElementById('testimonial-dots');
  if (!track) return;

  const total = CONFIG.testimonials.length;

  const goTo = (idx) => {
    currentSlide = ((idx % total) + total) % total;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    document.querySelectorAll('.testimonial-dot').forEach((d, i) => d.classList.toggle('active', i === currentSlide));
  };

  prev?.addEventListener('click', () => { goTo(currentSlide - 1); resetAutoplay(); });
  next?.addEventListener('click', () => { goTo(currentSlide + 1); resetAutoplay(); });

  dots?.addEventListener('click', e => {
    if (e.target.classList.contains('testimonial-dot')) {
      goTo(parseInt(e.target.dataset.index, 10));
      resetAutoplay();
    }
  });

  // Autoplay
  const startAutoplay = () => { autoplayTimer = setInterval(() => goTo(currentSlide + 1), 5000); };
  const resetAutoplay = () => { clearInterval(autoplayTimer); startAutoplay(); };
  startAutoplay();

  // Touch swipe support
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? goTo(currentSlide + 1) : goTo(currentSlide - 1); resetAutoplay(); }
  }, { passive: true });
}


/* ================================================================
   15. CERTIFICATE MODAL
   ================================================================ */
function initCertModal() {
  const modal = document.getElementById('cert-modal');
  const closeBtn = document.getElementById('cert-modal-close');
  if (!modal) return;

  const close = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    closeBtn.focus();
  };

  closeBtn?.addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });
}

function openCertModal(title, date, image) {
  const modal = document.getElementById('cert-modal');
  const titleEl = document.getElementById('cert-modal-title');
  const dateEl = document.getElementById('cert-modal-date');
  if (!modal) return;

  if (titleEl) titleEl.textContent = title;
  if (dateEl) dateEl.textContent = '📅 ' + date;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.getElementById('cert-modal-close')?.focus();
}


/* ================================================================
   16. GITHUB API STATS
   ================================================================ */
async function initGitHubStats() {
  const username = CONFIG.github.username;

  // Set GitHub profile link
  const link = document.getElementById('github-profile-link');
  if (link) link.href = `https://github.com/${username}`;

  // Fetch GitHub User API data
  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    if (userRes.ok) {
      const data = await userRes.json();
      setText('gh-repos', data.public_repos ?? '7');
      setText('gh-followers', data.followers ?? '2');
      setText('gh-following', data.following ?? '0');
    } else {
      setText('gh-repos', '7');
      setText('gh-followers', '2');
      setText('gh-following', '0');
    }
  } catch {
    setText('gh-repos', '7');
    setText('gh-followers', '2');
    setText('gh-following', '0');
  }

  // Count total stars via repos endpoint
  try {
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    if (reposRes.ok) {
      const repos = await reposRes.json();
      const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
      setText('gh-stars', totalStars);
    } else {
      setText('gh-stars', '0');
    }
  } catch {
    setText('gh-stars', '0');
  }

  // Render Contribution Heatmap Grid
  const grid = document.getElementById('contrib-heatmap-grid');
  if (grid) {
    let squaresHtml = '';
    for (let week = 0; week < 52; week++) {
      squaresHtml += `<div class="contrib-col">`;
      for (let day = 0; day < 7; day++) {
        let level = 0;
        if (week === 4 && day === 3) level = 1;
        if (week === 28 && day === 6) level = 2;
        if (week === 29 && day === 1) level = 2;
        if (week === 29 && day === 3) level = 3;
        if (week === 29 && day === 4) level = 2;
        if (week === 30 && day === 2) level = 3;
        if (week === 30 && day === 6) level = 1;
        if (week === 35 && day === 0) level = 3;
        if (week === 44 && day === 1) level = 2;
        if (week === 44 && day === 2) level = 3;
        if (week === 45 && day === 2) level = 2;
        squaresHtml += `<span class="contrib-box level-${level}" title="Contribution day"></span>`;
      }
      squaresHtml += `</div>`;
    }
    grid.innerHTML = squaresHtml;
  }
}


/* ================================================================
   17. CONTACT FORM VALIDATION
   ================================================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const validate = (field, errorId, message) => {
    const el = document.getElementById(field);
    const err = document.getElementById(errorId);
    if (!el || !err) return true;
    const valid = el.value.trim() !== '' && (field !== 'contact-email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value));
    el.classList.toggle('error', !valid);
    err.textContent = valid ? '' : message;
    return valid;
  };

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const v1 = validate('contact-name', 'error-name', 'Please enter your name.');
    const v2 = validate('contact-email', 'error-email', 'Please enter a valid email address.');
    const v3 = validate('contact-subject', 'error-subject', 'Please enter a subject.');
    const v4 = validate('contact-message', 'error-message', 'Please enter your message.');

    if (!v1 || !v2 || !v3 || !v4) return;

    // Simulate form submission (replace with actual backend/FormSpree endpoint)
    const btn = document.getElementById('contact-submit');
    const btnText = btn.querySelector('.btn-text');
    btnText.textContent = 'Sending...';
    btn.disabled = true;

    await new Promise(r => setTimeout(r, 1500)); // Simulate network delay

    const success = document.getElementById('form-success');
    if (success) { success.hidden = false; success.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
    form.reset();
    btnText.textContent = 'Send Message';
    btn.disabled = false;

    // Hide success after 6s
    setTimeout(() => { if (success) success.hidden = true; }, 6000);
  });

  // Live validation on blur
  ['contact-name', 'contact-email', 'contact-subject', 'contact-message'].forEach(id => {
    const el = document.getElementById(id);
    el?.addEventListener('blur', () => {
      const errMap = { 'contact-name': ['error-name', 'Please enter your name.'], 'contact-email': ['error-email', 'Please enter a valid email.'], 'contact-subject': ['error-subject', 'Please enter a subject.'], 'contact-message': ['error-message', 'Please enter your message.'] };
      if (errMap[id]) validate(id, errMap[id][0], errMap[id][1]);
    });
  });
}


/* ================================================================
   18. RIPPLE EFFECT ON BUTTONS
   ================================================================ */
function initRippleEffect() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.ripple-btn');
    if (!btn) return;
    const circle = document.createElement('span');
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    circle.className = 'ripple';
    circle.style.cssText = `
      width: ${size}px; height: ${size}px;
      left: ${e.clientX - rect.left - size / 2}px;
      top: ${e.clientY - rect.top - size / 2}px;
    `;
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 700);
  });
}


/* ================================================================
   19. FOOTER YEAR
   ================================================================ */
function setCurrentYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}


/* ================================================================
   20. SMOOTH SCROLL POLYFILL for anchor links
   ================================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


/* ================================================================
   21. LAZY IMAGE LOADING (native + polyfill)
   ================================================================ */
if ('loading' in HTMLImageElement.prototype) {
  // Native support — already using loading="lazy" in HTML
} else {
  // Fallback: observe images
  const imgObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        imgObserver.unobserve(img);
      }
    });
  });
  document.querySelectorAll('img[loading="lazy"]').forEach(img => imgObserver.observe(img));
}


/* ================================================================
   22. KEYBOARD NAVIGATION (accessibility)
   ================================================================ */
document.addEventListener('keydown', e => {
  // Focus trap inside modal
  const modal = document.getElementById('cert-modal');
  if (modal && modal.classList.contains('open') && e.key === 'Tab') {
    const focusable = modal.querySelectorAll('button, a, input, [tabindex]');
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
      e.preventDefault();
      (e.shiftKey ? last : first).focus();
    }
  }
});


/* ================================================================
   23. PERFORMANCE — Pause particles when tab is hidden
   ================================================================ */
let particlesPaused = false;
document.addEventListener('visibilitychange', () => {
  particlesPaused = document.hidden;
});
