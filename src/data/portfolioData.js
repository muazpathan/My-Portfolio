// ============================================================
// portfolioData.js — Centralized configuration for Mohammed Muaz Nazir Pathan's Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Mohammed Muaz Nazir Pathan",
  firstName: "Muaz Pathan",
  brandName: "Muaz Pathan",
  title: "Cloud Architect & Enterprise Operations Specialist",
  location: "Margao, Goa, India",
  phone: "+91 9767702818",
  emails: {
    primary: "muazpathan0416@gmail.com",
    secondary: "muazz.pathann@gmail.com",
  },
  summary:
    "Results-driven Cloud Architect and BCA specialist with a proven track record in enterprise operations management, infrastructure optimization, and distributed systems. Passionate about architecting highly available, secure cloud solutions across AWS & Azure while leveraging data analytics and SAP transaction frameworks to drive business efficiency.",
  resumeUrl: "/Mohammed_Muaz_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/muazpathan",
  linkedin: "https://linkedin.com/muaz-pthan",
  instagram: "https://instagram.com/muazz_pathann",
};

export const heroContent = {
  greeting: "Hi, I'm Muaz Pathan",
  titleHighlight: "Cloud Architect & Systems Engineer",
  subtitle:
    "Architecting resilient cloud infrastructures, scalable microservices, and enterprise data workflows.",
  ctaPrimary: { text: "View Architecture", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:muazpathan0416@gmail.com?subject=Cloud Architecture Inquiry – Portfolio&body=Hello Muaz,%0D%0A%0D%0AI came across your portfolio and would like to discuss a Cloud Architecture opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Mohammed_Muaz_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Mohammed Muaz Nazir Pathan</span>, an aspiring Cloud Architect and BCA student based in Margao, Goa. I bridge enterprise retail operations with cutting-edge cloud infrastructure — designing highly available, secure architectures across <span class="text-black font-black">AWS & Azure</span>, scalable relational databases with MySQL, and building user-centric platforms like <span class="text-black font-black">COMPASS</span>.`,
  techStack: ["AWS & Azure", "Docker & Cloud Systems", "PHP, MySQL & REST APIs"],
};

export const skillsContent = {
  badge: "Architecture Lifecycle",
  heading: "How I design resilient, cost-effective cloud architectures",
  description:
    "I follow Well-Architected Framework principles, automated provisioning, and data-driven analysis to deliver scalable, secure systems.",
  cards: [
    {
      number: "01",
      title: "Assess & Design",
      text: "Evaluating workload requirements, multi-region failover, latency bounds, and cost optimization models for modern cloud deployment.",
    },
    {
      number: "02",
      title: "Provision & Automate",
      text: "Setting up VPC networking, subnets, IAM policies, and automating server provisioning with containerized environments.",
    },
    {
      number: "03",
      title: "Scale & Orchestrate",
      text: "Configuring elastic auto-scaling, load balancing, microservices with Docker, and high-availability database clusters.",
    },
    {
      number: "04",
      title: "Secure & Monitor",
      text: "Implementing continuous cloud monitoring, zero-trust security postures, automated backups, and financial compliance audits.",
    },
  ],
  endText: "Cloud Ready & Scalable!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Cloud Infrastructure & DevOps",
      skills: [
        { name: "AWS (EC2, S3, RDS, IAM, VPC)", level: 90 },
        { name: "Azure Cloud Services", level: 85 },
        { name: "Docker & Containerization", level: 88 },
        { name: "CI/CD & Deployment Workflows", level: 82 },
      ],
    },
    {
      title: "Systems & Databases",
      skills: [
        { name: "MySQL & Relational Design", level: 90 },
        { name: "SQL Query Optimization", level: 86 },
        { name: "Cloud Storage & High Availability", level: 88 },
        { name: "Linux Server Administration", level: 85 },
      ],
    },
    {
      title: "Networking & Cloud Security",
      skills: [
        { name: "VPC, Subnets & Routing", level: 88 },
        { name: "IAM & Access Control Policies", level: 92 },
        { name: "SSL/TLS & API Security", level: 86 },
        { name: "Disaster Recovery & Backup", level: 85 },
      ],
    },
    {
      title: "Software & Web Engineering",
      skills: [
        { name: "PHP & Backend Architecture", level: 88 },
        { name: "JavaScript & RESTful APIs", level: 86 },
        { name: "HTML5, CSS3 & Bootstrap", level: 92 },
        { name: "Figma (Architecture & UI Design)", level: 88 },
      ],
    },
    {
      title: "Retail & Enterprise Systems",
      skills: [
        { name: "POS & Cashiering Systems", level: 95 },
        { name: "SAP Transaction Workflows", level: 90 },
        { name: "Cash Reconciliation & Controls", level: 92 },
        { name: "Inventory Management", level: 88 },
      ],
    },
    {
      title: "Data Analytics & Core Concepts",
      skills: [
        { name: "Advanced Excel & Reporting", level: 95 },
        { name: "Data Analytics & KPI Dashboards", level: 90 },
        { name: "System Architecture & Scalability", level: 88 },
        { name: "Distributed Systems Principles", level: 86 },
      ],
    },
  ],
};

// Architecture & Strategic Execution Highlights
export const contentCreation = {
  badge: "Architecture & Leadership",
  heading: "Cloud Architecture & Operational Leadership",
  description:
    "Combining enterprise managerial leadership with resilient cloud design and mission-critical system execution.",
  categories: [
    {
      title: "Cloud Scalability",
      description:
        "Designing elastic, scalable architectures for high-traffic environments and mission-critical applications across AWS & Azure.",
      stats: "High Availability",
      icon: "☁️",
    },
    {
      title: "Financial & Cloud Governance",
      description:
        "Managing financial controls, transaction audits, and cloud resource cost optimization with complete transparency.",
      stats: "Zero Discrepancy",
      icon: "💰",
    },
    {
      title: "Team Leadership",
      description:
        "Led 5 cashiers and 30 sales associates at Reliance Trends, leveraging operational KPIs to boost performance and service quality.",
      stats: "35+ Team Members",
      icon: "👑",
    },
    {
      title: "Data & Infrastructure Analytics",
      description:
        "Built audit datasets and transactional dashboards in Excel and SAP for executive decision-making and operational traceability.",
      stats: "Actionable Insights",
      icon: "📊",
    },
  ],
};

// Leadership & Activities Data
export const leadershipList = [
  {
    title: "Commercial Manager — Reliance Trends (Margao)",
    description:
      "Led 5 cashiers and 30 sales associates, leveraging operational KPIs and transaction data to monitor team performance and business efficiency.",
    role: "Commercial Manager",
    badge: "Leadership",
  },
  {
    title: "Asst. Department Manager — ABFRL Pantaloons (Margao)",
    description:
      "Managed POS, cashiering, transaction processing, and departmental operations, ensuring data integrity across daily workflows.",
    role: "Asst. Department Manager",
    badge: "Operations",
  },
  {
    title: "COMPASS Project Lead & Cloud Architect — Damodar College",
    description:
      "Spearheaded the development of a collaborative academic reflection platform connecting students with faculty guidance, peer learning, and cloud-ready infrastructure.",
    role: "Project Lead & Cloud Architect",
    badge: "Cloud Innovation",
  },
  {
    title: "Cash Reconciliation & Financial Controls",
    description:
      "Engineered audit datasets and transactional analysis frameworks ensuring data accuracy, consistency, and zero cash discrepancies.",
    role: "Financial & Systems Auditor",
    badge: "Governance",
  },
];

// Experience / Internships Data
export const internshipsList = [
  {
    organization: "Reliance Trends - Margao",
    role: "Commercial Manager",
    duration: "12/2025 - 05/2026",
    badge: "Leadership",
    skills: [
      "Team Leadership (35+ Staff)",
      "POS & SAP Workflows",
      "Cash Reconciliation & Financial Controls",
      "Operational KPI Monitoring",
    ],
    tech: ["SAP", "Advanced Excel", "POS Systems", "Data Analytics"],
  },
  {
    organization: "ABFRL (Pantaloons) - Margao",
    role: "Asst. Department Manager",
    duration: "06/2024 - 12/2025",
    badge: "Operations",
    skills: [
      "Departmental Operations",
      "Transaction Processing",
      "Bottleneck Analysis & Optimization",
      "Audit Datasets & Traceability",
    ],
    tech: ["POS Systems", "Excel Reporting", "Audit Datasets", "Operational Workflows"],
  },
  {
    organization: "Shree Damodar College - Margao",
    role: "BCA Computer Science & Cloud Architect Lead",
    duration: "2024 - Present",
    badge: "Cloud & CS",
    skills: [
      "Cloud-Native Architecture",
      "Full-Stack Web Development",
      "Relational Database Modeling",
      "Design Thinking Methodology",
    ],
    tech: ["AWS", "Azure", "PHP", "MySQL", "JavaScript", "Docker"],
  },
];

// Soft Skills Data
export const softSkillsList = [
  {
    name: "Team Leadership",
    icon: "👑",
    desc: "Guiding and empowering 35+ associates and cashiers with clear operational direction and accountability.",
  },
  {
    name: "Analytical Problem Solving",
    icon: "🧩",
    desc: "Pinpointing architectural bottlenecks, security vulnerabilities, and discrepancies in financial and system data.",
  },
  {
    name: "Data & Systems Analysis",
    icon: "📊",
    desc: "Interpreting transaction patterns and cloud telemetry to make data-backed operational and architectural decisions.",
  },
  {
    name: "Cross-Functional Communication",
    icon: "💬",
    desc: "Articulate coordination across store staff, executive management, technical stakeholders, and academic faculty.",
  },
  {
    name: "Client & Service Excellence",
    icon: "🌟",
    desc: "Dedicated to delivering exceptional customer service, managing user expectations, and resolving escalations.",
  },
  {
    name: "Detail-Oriented Precision",
    icon: "🔍",
    desc: "Ensuring meticulous data integrity, cash reconciliation accuracy, and cloud security compliance.",
  },
  {
    name: "Process Optimization",
    icon: "⚡",
    desc: "Streamlining workflows and automating infrastructure pipelines to boost reliability and efficiency.",
  },
  {
    name: "Cloud Adaptability",
    icon: "🚀",
    desc: "Seamlessly bridging retail management operations, enterprise SAP systems, and modern cloud architectures.",
  },
];

export const projects = [
  {
    id: "compass",
    number: "01",
    badge: "🚀 Flagship Cloud-Ready Platform",
    title: "COMPASS — Academic Reflection & Support Platform",
    description:
      "A student-centric academic support platform developed with Design Thinking (User-Centered Design) and a cloud-ready architecture. Digitizes student-faculty communication, promotes collaborative peer learning, and provides structured academic guidance. Built with scalable relational database schemas, modular service design, searchable query repositories, student reflection analytics, and an architecture ready for AI-based query categorization and cloud auto-scaling.",
    techTags: [
      "AWS",
      "Cloud Architecture",
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Figma",
      "Design Thinking",
      "Analytics",
    ],
    links: {
      github: "https://github.com/muazpathan",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "cloud-reconciliation",
    number: "02",
    badge: "💼 Enterprise Cloud Systems",
    title: "Retail POS & Cloud Transaction Reconciliation Suite",
    description:
      "Enterprise operational analysis and reconciliation pipeline developed for high-volume retail environments at Reliance Trends and ABFRL Pantaloons. Handled cash reconciliation, exception handling, transaction pattern analysis, and automated audit datasets to eliminate discrepancy risks with cloud-ready audit trails.",
    techTags: [
      "SAP",
      "Advanced Excel",
      "POS Systems",
      "Cloud Data Pipelines",
      "Financial Controls",
      "KPI Dashboards",
    ],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Cloud Architecture & Solutions (AWS / Azure)",
      issuer: "Cloud Infrastructure",
      icon: "☁️",
    },
    {
      name: "Retail Commercial Management",
      issuer: "Reliance Trends",
      icon: "🏢",
    },
    {
      name: "Departmental Operations & POS",
      issuer: "ABFRL (Pantaloons)",
      icon: "🛒",
    },
    {
      name: "Bachelor of Computer Applications (CS)",
      issuer: "Damodar College, Margao",
      icon: "🎓",
    },
    {
      name: "SAP & Cash Reconciliation Controls",
      issuer: "Retail Financial Systems",
      icon: "💼",
    },
    {
      name: "Operational Data Analytics & Systems",
      issuer: "Advanced Excel & KPIs",
      icon: "📊",
    },
  ],
  viewAllUrl: "#",
};

export const education = {
  degree: "Bachelor’s Of Computer Applications (Computer Science)",
  institution: "Shree Damodar College Of Commerce And Economics – Margao",
  graduation: "2027",
  location: "Margao, Goa",
};

export const references = [
  {
    name: "Danish Sayed",
    role: "Senior Analyst, TCS",
    email: "danish.7@tcs.com",
  },
];

export const footerContent = {
  taglines: [
    "Cloud Architecture & Enterprise Operations",
    "AWS · Azure · Docker · Microservices",
    "BCA Computer Science · Margao, Goa",
  ],
  credential: "BCA (Computer Science) · Aspiring Cloud Architect",
  copyright: `© ${new Date().getFullYear()} Mohammed Muaz Nazir Pathan | Cloud Portfolio`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};


