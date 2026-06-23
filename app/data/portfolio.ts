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
  certificatesDriveUrl: "https://drive.google.com/drive/folders/1bcjNAkJ3_ZjYkFKiS8-brhi8Uyu5Z3rj?usp=sharing",
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
    honors: "Earned High Academic Distinction",
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

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  github: string;
  githubStatus: "public" | "private";
  demo: string;
  demoStatus: "public" | "restricted" | "none";
  category: string;
  screenshots: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "employee-evaluation",
    title: "Employee Evaluation System",
    description:
      "A comprehensive performance management platform enabling HR teams to conduct structured employee assessments, track KPIs, and visualize performance trends through interactive dashboards.",
    image: "/projects/evaluation.svg",
    technologies: ["React", "Node.js", "Firebase", "Tailwind CSS", "JavaScript"],
    features: ["Performance Tracking", "Score Visualization", "Employee Assessments", "HR Dashboard"],
    github: "",
    githubStatus: "private" as const,
    demo: "",
    demoStatus: "restricted" as const,
    category: "Web App",
    screenshots: [
      "/projectScreenshots/EmployeeEvaluationSystem/AdminDashboard.png",
      "/projectScreenshots/EmployeeEvaluationSystem/EmployeeDashboard.png",
      "/projectScreenshots/EmployeeEvaluationSystem/EvaluationPage.png",
      "/projectScreenshots/EmployeeEvaluationSystem/EvaluationForm.png",
      "/projectScreenshots/EmployeeEvaluationSystem/Self-AssessmentForm.png",
      "/projectScreenshots/EmployeeEvaluationSystem/UserManagement.png",
      "/projectScreenshots/EmployeeEvaluationSystem/AccountRegistration.png",
      "/projectScreenshots/EmployeeEvaluationSystem/AccountPage.png",
      "/projectScreenshots/EmployeeEvaluationSystem/EvalLoginPage.png",
    ],
  },
  {
    id: "payroll",
    title: "Payroll Management System",
    description:
      "An automated payroll solution that streamlines salary computation, attendance tracking, and leave management — reducing manual errors and processing time for HR departments.",
    image: "/projects/payroll.svg",
    technologies: ["React", "Node.js", "MySQL", "Tailwind CSS", "JavaScript"],
    features: ["Payroll Automation", "Attendance Tracking", "Leave Management", "Payslip Generation"],
    github: "",
    githubStatus: "private" as const,
    demo: "",
    demoStatus: "restricted" as const,
    category: "Web App",
    featured: true,
    screenshots: [
      "/projectScreenshots/PayrollManagementSystem/AdminDashboard.png",
      "/projectScreenshots/PayrollManagementSystem/PayrollPage.png",
      "/projectScreenshots/PayrollManagementSystem/AttendancePage.png",
      "/projectScreenshots/PayrollManagementSystem/SalaryAdjustment.png",
      "/projectScreenshots/PayrollManagementSystem/ApplicationsPage.png",
      "/projectScreenshots/PayrollManagementSystem/LoginPage.png",
    ],
  },
  {
    id: "document-tracking",
    title: "Document Tracking System",
    description:
      "A workflow management system for monitoring document status across departments, enabling approvals, routing, and audit trails for organizational compliance.",
    image: "/projects/document-tracking.svg",
    technologies: ["Laravel", "PHP", "MySQL", "Vue.js", "JavaScript"],
    features: ["Workflow Monitoring", "Status Tracking", "Approval Management", "Audit Trail"],
    github: "",
    githubStatus: "private" as const,
    demo: "",
    demoStatus: "restricted" as const,
    category: "Web App",
    screenshots: [
      "/projectScreenshots/DocumentTrackingSystem/AdminDashboard.png",
      "/projectScreenshots/DocumentTrackingSystem/Dashboard.png",
      "/projectScreenshots/DocumentTrackingSystem/DocumentPage.png",
      "/projectScreenshots/DocumentTrackingSystem/DocumentInfo.png",
      "/projectScreenshots/DocumentTrackingSystem/TrackedDocument.png",
      "/projectScreenshots/DocumentTrackingSystem/RoutingHistory.png",
      "/projectScreenshots/DocumentTrackingSystem/QR-Tracker.png",
      "/projectScreenshots/DocumentTrackingSystem/LoginPage.png",
    ],
  },
  {
    id: "therapease",
    title: "TherapEase",
    description:
      "An AI-augmented therapy management platform for pediatric care, enabling therapists to maintain patient records, track progress, and collaborate with parents in real-time.",
    image: "/projects/therapease.svg",
    technologies: ["React", "Node.js", "MySQL", "Figma", "AI Integration", "JavaScript", "Tailwind CSS"],
    features: ["AI-Augmented Assessment", "Pediatric Therapy Records", "Parent-Therapist Collaboration", "Progress Tracking"],
    github: "https://github.com/greggJmnz/therapease.git",
    githubStatus: "public" as const,
    demo: "https://therapease-tsu.vercel.app/public-website",
    demoStatus: "public" as const,
    category: "Healthcare App",
    featured: true,
    screenshots: [
      "/projectScreenshots/TherapyManagementSystem/LandingPage.png",
      "/projectScreenshots/TherapyManagementSystem/TherapistDashboard.png",
      "/projectScreenshots/TherapyManagementSystem/PatientManagementPage.png",
      "/projectScreenshots/TherapyManagementSystem/ScheduleManagementPage.png",
      "/projectScreenshots/TherapyManagementSystem/ProgressTrackingPage.png",
      "/projectScreenshots/TherapyManagementSystem/AI-InsightsPage1.png",
      "/projectScreenshots/TherapyManagementSystem/AI-InsightsPage2.png",
      "/projectScreenshots/TherapyManagementSystem/DailyNotesPage.png",
      "/projectScreenshots/TherapyManagementSystem/HomeExercisePage.png",
    ],
  },
  {
    id: "cems",
    title: "Church Event Management System",
    description:
      "A comprehensive, role-based management portal for local church congregations — featuring event scheduling, QR code attendance scanning, ministry oversight, and financial tracking for tithes and offerings, built with a React + Vite frontend and Node.js + Express backend on Firebase.",
    image: "/projects/cems.svg",
    technologies: ["React", "Vite", "Node.js", "Express", "Firebase", "JavaScript", "Tailwind CSS"],
    features: ["Event Management", "QR Attendance", "Ministry Oversight", "Financial Tracking"],
    github: "https://github.com/greggJmnz/CEMS.git",
    githubStatus: "public" as const,
    demo: "https://cems-chi.vercel.app/",
    demoStatus: "public" as const,
    category: "Web App",
    featured: true,
    screenshots: [
      "/projectScreenshots/ChurchEventManagementSystem/AdminDashboard.png",
      "/projectScreenshots/ChurchEventManagementSystem/MemberDashboard.png",
      "/projectScreenshots/ChurchEventManagementSystem/EventsPage.png",
      "/projectScreenshots/ChurchEventManagementSystem/MinistriesPage.png",
      "/projectScreenshots/ChurchEventManagementSystem/MemberMinistryPage.png",
      "/projectScreenshots/ChurchEventManagementSystem/MinistryInfo.png",
      "/projectScreenshots/ChurchEventManagementSystem/AttendanceMonitoringPage.png",
      "/projectScreenshots/ChurchEventManagementSystem/AttendanceLogs.png",
      "/projectScreenshots/ChurchEventManagementSystem/FinancialPage.png",
      "/projectScreenshots/ChurchEventManagementSystem/loginPage.png",
    ],
  },
  {
    id: "banking",
    title: "Banking Transaction System",
    description:
      "A secure console-based banking application implementing core financial operations including deposits, withdrawals, and balance inquiries using Java OOP principles.",
    image: "/projects/banking.svg",
    technologies: ["Java", "OOP", "Console UI", "File I/O"],
    features: ["Deposits", "Withdrawals", "Balance Inquiries", "Transaction History"],
    github: "",
    githubStatus: "private" as const,
    demo: "",
    demoStatus: "none" as const,
    category: "Desktop App",
    screenshots: [],
  },
];

export const certifications = [
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    icon: "network",
    color: "cyan",
    year: "2024",
  },
  {
    name: "CCNA: Switching, Routing and Wireless Essentials",
    issuer: "Cisco",
    icon: "router",
    color: "blue",
    year: "2024",
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
    year: "2025",
  },
  {
    name: "IT Customer Support Basics",
    issuer: "Online Learning Platform",
    icon: "headset",
    color: "blue",
    year: "2026",
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
