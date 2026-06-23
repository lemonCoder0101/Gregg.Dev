// ============================================================
// CENTRALIZED PORTFOLIO CONFIGURATION
// Edit this file to update all content across the site.
// No UI component changes needed.
// ============================================================

export const personal = {
  name: "Gregg Anthony Jimenez",
  firstName: "Gregg",
  role: "IT Graduate & Aspiring Full-Stack Developer",
  tagline: "Building Digital Solutions That Improve Efficiency and User Experience",
  summary:
    "Motivated IT professional focused on improving system efficiency and delivering practical, innovative solutions in fast-paced environments. Passionate about bridging design and technology to create impactful digital products.",
  email: "jimenezgregg365@gmail.com",
  phone: "+63 985 142 3225",
  linkedin: "https://www.linkedin.com/in/gregg-jimenez/",
  github: "https://github.com/lemonCoder0101",
  github2: "https://github.com/greggJmnz",
  location: "Tarlac, Philippines",
  profileImage: "/profile.png",
  resumeUrl: "/resume.pdf",
  copyrightYear: 2026,
};

export const stats = [
  { label: "Projects Built", value: "5+", icon: "code" },
  { label: "BSIT Graduate", value: "TSU", icon: "graduation" },
  { label: "Honor", value: "Dean's Lister", icon: "award" },
  { label: "Specialization", value: "Full-Stack", icon: "layers" },
];

export const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Tarlac State University",
    specialization: "Technical Service Management",
    period: "2022 – 2026",
    honors: "MAGNA CUM LAUDE",
  },
];

export const skillCategories = [
  {
    category: "Frontend",
    icon: "monitor",
    color: "cyan",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 82 },
      { name: "TypeScript", level: 70 },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    color: "blue",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Laravel", level: 78 },
      { name: "Java (OOP)", level: 80 },
    ],
  },
  {
    category: "Database",
    icon: "database",
    color: "purple",
    skills: [
      { name: "MS Access", level: 85 },
      { name: "Database Design", level: 80 },
      { name: "SQL", level: 78 },
    ],
  },
  {
    category: "Networking",
    icon: "network",
    color: "cyan",
    skills: [
      { name: "Cisco Networking", level: 82 },
      { name: "Routing & Switching", level: 80 },
      { name: "Network Troubleshooting", level: 78 },
    ],
  },
  {
    category: "Design & Tools",
    icon: "palette",
    color: "blue",
    skills: [
      { name: "Figma", level: 85 },
      { name: "UI/UX Design", level: 80 },
      { name: "Canva", level: 88 },
    ],
  },
];

export const experience = [
  {
    role: "Web Developer Intern",
    company: "Wireless Access for Health (WAH)",
    location: "Philippines",
    period: "February 2026 – June 2026",
    type: "Internship",
    description:
      "Contributed to the development of enterprise-level health management systems, improving operational efficiency for medical staff and administrators.",
    responsibilities: [
      "Developed and maintained full-stack web applications using Laravel and React.js",
      "Designed responsive UI components aligned with modern UX principles",
      "Collaborated with cross-functional teams to deliver features on schedule",
      "Performed database design and optimization using MS Access and SQL",
      "Participated in system testing, debugging, and documentation",
    ],
    technologies: ["Laravel", "React.js", "JavaScript", "MySQL", "Figma", "HTML/CSS"],
  },
];

export const projects = [
  {
    id: "employee-evaluation",
    title: "Employee Evaluation System",
    description:
      "A comprehensive performance management platform enabling HR teams to conduct structured employee assessments, track KPIs, and visualize performance trends through interactive dashboards.",
    image: "/projects/evaluation.svg",
    technologies: ["React", "Node.js", "Firebase", "Tailwind CSS", "JavaScript"],
    features: ["Performance Tracking", "Score Visualization", "Employee Assessments", "HR Dashboard"],
    github: "#",
    demo: "#",
    category: "Web App",
  },
  {
    id: "payroll",
    title: "Payroll Management System",
    description:
      "An automated payroll solution that streamlines salary computation, attendance tracking, and leave management — reducing manual errors and processing time for HR departments.",
    image: "/projects/payroll.svg",
    technologies: ["React", "Node.js", "MySQL", "Tailwind CSS", "JavaScript"],
    features: ["Payroll Automation", "Attendance Tracking", "Leave Management", "Payslip Generation"],
    github: "#",
    demo: "#",
    category: "Web App",
    featured: true,
  },
  {
    id: "document-tracking",
    title: "Document Tracking System",
    description:
      "A workflow management system for monitoring document status across departments, enabling approvals, routing, and audit trails for organizational compliance.",
    image: "/projects/document-tracking.svg",
    technologies: ["Laravel", "PHP", "MySQL", "Vue.js"],
    features: ["Workflow Monitoring", "Status Tracking", "Approval Management", "Audit Trail"],
    github: "#",
    demo: "#",
    category: "Web App",
  },
  {
    id: "therapease",
    title: "TherapEase",
    description:
      "An AI-augmented therapy management platform for pediatric care, enabling therapists to maintain patient records, track progress, and collaborate with parents in real-time.",
    image: "/projects/therapease.svg",
    technologies: ["React", "Node.js", "MySQL", "Figma", "AI Integration"],
    features: ["AI-Augmented Assessment", "Pediatric Therapy Records", "Parent-Therapist Collaboration", "Progress Tracking"],
    github: "#",
    demo: "#",
    category: "Healthcare App",
    featured: true,
  },
  {
    id: "banking",
    title: "Banking Transaction System",
    description:
      "A secure console-based banking application implementing core financial operations including deposits, withdrawals, and balance inquiries using Java OOP principles.",
    image: "/projects/banking.svg",
    technologies: ["Java", "OOP", "Console UI", "File I/O"],
    features: ["Deposits", "Withdrawals", "Balance Inquiries", "Transaction History"],
    github: "#",
    demo: "#",
    category: "Desktop App",
  },
];

export const certifications = [
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    icon: "network",
    color: "cyan",
    year: "2023",
  },
  {
    name: "CCNA: Switching, Routing and Wireless Essentials",
    issuer: "Cisco",
    icon: "router",
    color: "blue",
    year: "2023",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    icon: "shield",
    color: "purple",
    year: "2023",
  },
  {
    name: "Introduction to Modern AI",
    issuer: "Online Learning Platform",
    icon: "brain",
    color: "cyan",
    year: "2024",
  },
  {
    name: "IT Customer Support Basics",
    issuer: "Online Learning Platform",
    icon: "headset",
    color: "blue",
    year: "2023",
  },
];

export const softSkills = [
  "Critical Thinking",
  "Problem Solving",
  "Communication",
  "Teamwork",
  "Adaptability",
  "Time Management",
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
