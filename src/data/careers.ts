export interface JobListing {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  level: 'entry' | 'mid' | 'senior' | 'lead' | 'executive';
  salaryRange?: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  preferredQualifications: string[];
  benefits: string[];
  postedDate: string;
  applicationDeadline?: string;
  isActive: boolean;
  isUrgent?: boolean;
  tags: string[];
}

export const jobListings: JobListing[] = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    slug: "senior-full-stack-developer",
    department: "Engineering",
    location: "Kampala, Uganda",
    type: "full-time",
    level: "senior",
    salaryRange: "UGX 8,000,000 - 12,000,000 per year",
    description: "We're looking for an experienced Full Stack Developer to join our growing engineering team. You'll work on cutting-edge projects for clients across East Africa, building scalable web applications and APIs.",
    responsibilities: [
      "Design and develop scalable web applications using modern frameworks",
      "Build and maintain RESTful APIs and microservices",
      "Collaborate with cross-functional teams to deliver high-quality solutions",
      "Mentor junior developers and contribute to code reviews",
      "Participate in architecture decisions and technical planning",
      "Ensure code quality, performance, and security best practices"
    ],
    requirements: [
      "5+ years of experience in full-stack development",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Knowledge of cloud platforms (AWS, Azure, or Google Cloud)",
      "Understanding of DevOps practices and CI/CD pipelines",
      "Strong problem-solving and communication skills",
      "Bachelor's degree in Computer Science or related field"
    ],
    preferredQualifications: [
      "Experience with Docker and Kubernetes",
      "Knowledge of microservices architecture",
      "Previous experience in a startup or fast-paced environment",
      "Contributions to open-source projects",
      "Experience with mobile app development (React Native)"
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Health insurance for you and your family",
      "Professional development budget",
      "Flexible working hours and remote work options",
      "Annual team retreats and company events",
      "Latest MacBook Pro and development tools"
    ],
    postedDate: "2024-01-15T10:00:00Z",
    applicationDeadline: "2024-02-15T23:59:59Z",
    isActive: true,
    isUrgent: true,
    tags: ["React", "Node.js", "TypeScript", "AWS", "Full Stack"]
  },
  {
    id: "2",
    title: "Cybersecurity Analyst",
    slug: "cybersecurity-analyst",
    department: "Security",
    location: "Kampala, Uganda",
    type: "full-time",
    level: "mid",
    salaryRange: "UGX 6,000,000 - 9,000,000 per year",
    description: "Join our cybersecurity team to help protect our clients from evolving cyber threats. You'll conduct security assessments, implement security measures, and respond to security incidents.",
    responsibilities: [
      "Conduct security assessments and vulnerability testing",
      "Monitor security systems and respond to incidents",
      "Develop and implement security policies and procedures",
      "Provide security training to clients and internal teams",
      "Stay updated on latest security threats and technologies",
      "Collaborate with development teams on secure coding practices"
    ],
    requirements: [
      "3+ years of experience in cybersecurity",
      "Knowledge of security frameworks (ISO 27001, NIST)",
      "Experience with security tools (SIEM, vulnerability scanners)",
      "Understanding of network security and penetration testing",
      "Relevant certifications (CISSP, CEH, or similar)",
      "Strong analytical and problem-solving skills"
    ],
    preferredQualifications: [
      "Experience with cloud security (AWS, Azure)",
      "Knowledge of compliance requirements (GDPR, PCI DSS)",
      "Experience in incident response and forensics",
      "Programming skills in Python or PowerShell",
      "Previous consulting experience"
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Health insurance coverage",
      "Certification and training budget",
      "Conference attendance opportunities",
      "Flexible working arrangements",
      "Professional development support"
    ],
    postedDate: "2024-01-10T14:30:00Z",
    applicationDeadline: "2024-02-10T23:59:59Z",
    isActive: true,
    tags: ["Cybersecurity", "SIEM", "Penetration Testing", "ISO 27001"]
  },
  {
    id: "3",
    title: "Cloud Solutions Architect",
    slug: "cloud-solutions-architect",
    department: "Engineering",
    location: "Kampala, Uganda",
    type: "full-time",
    level: "senior",
    salaryRange: "UGX 10,000,000 - 15,000,000 per year",
    description: "Lead cloud transformation initiatives for our enterprise clients. Design and implement scalable, secure cloud architectures using AWS, Azure, and Google Cloud platforms.",
    responsibilities: [
      "Design cloud architectures for enterprise clients",
      "Lead cloud migration and transformation projects",
      "Provide technical leadership and mentorship",
      "Develop cloud best practices and standards",
      "Collaborate with sales teams on technical proposals",
      "Stay current with cloud technologies and trends"
    ],
    requirements: [
      "7+ years of experience in cloud architecture",
      "Expert knowledge of AWS, Azure, or Google Cloud",
      "Experience with Infrastructure as Code (Terraform, CloudFormation)",
      "Strong understanding of DevOps and CI/CD practices",
      "Cloud certifications (AWS Solutions Architect, Azure Architect)",
      "Excellent communication and presentation skills"
    ],
    preferredQualifications: [
      "Multiple cloud platform certifications",
      "Experience with Kubernetes and containerization",
      "Knowledge of serverless architectures",
      "Previous consulting or client-facing experience",
      "Experience with enterprise-scale implementations"
    ],
    benefits: [
      "Competitive salary package",
      "Comprehensive health insurance",
      "Professional development budget",
      "Cloud certification support",
      "Flexible work arrangements",
      "Stock options"
    ],
    postedDate: "2024-01-08T09:00:00Z",
    isActive: true,
    tags: ["AWS", "Azure", "Cloud Architecture", "DevOps", "Terraform"]
  },
  {
    id: "4",
    title: "UI/UX Designer",
    slug: "ui-ux-designer",
    department: "Design",
    location: "Kampala, Uganda",
    type: "full-time",
    level: "mid",
    salaryRange: "UGX 4,500,000 - 7,000,000 per year",
    description: "Create exceptional user experiences for web and mobile applications. Work closely with our development and product teams to design intuitive, beautiful interfaces.",
    responsibilities: [
      "Design user interfaces for web and mobile applications",
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and design systems",
      "Collaborate with developers to ensure design implementation",
      "Maintain brand consistency across all digital products",
      "Present design concepts to clients and stakeholders"
    ],
    requirements: [
      "3+ years of experience in UI/UX design",
      "Proficiency in Figma, Adobe Creative Suite, and prototyping tools",
      "Strong portfolio demonstrating design process and outcomes",
      "Understanding of user-centered design principles",
      "Knowledge of responsive design and mobile-first approach",
      "Excellent visual design and typography skills"
    ],
    preferredQualifications: [
      "Experience with design systems and component libraries",
      "Knowledge of front-end development (HTML, CSS, JavaScript)",
      "Experience with user research methodologies",
      "Understanding of accessibility standards (WCAG)",
      "Previous agency or consulting experience"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Creative software licenses",
      "Design conference attendance",
      "Flexible working hours",
      "Professional development opportunities"
    ],
    postedDate: "2024-01-12T11:00:00Z",
    applicationDeadline: "2024-02-12T23:59:59Z",
    isActive: true,
    tags: ["UI/UX", "Figma", "Design Systems", "User Research"]
  },
  {
    id: "5",
    title: "DevOps Engineer",
    slug: "devops-engineer",
    department: "Engineering",
    location: "Kampala, Uganda",
    type: "full-time",
    level: "mid",
    salaryRange: "UGX 7,000,000 - 10,000,000 per year",
    description: "Build and maintain CI/CD pipelines, automate infrastructure, and ensure reliable deployments for our client projects. Help teams deliver software faster and more reliably.",
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Automate infrastructure provisioning and management",
      "Monitor application performance and system health",
      "Implement security best practices in deployment processes",
      "Collaborate with development teams on deployment strategies",
      "Troubleshoot production issues and optimize system performance"
    ],
    requirements: [
      "4+ years of experience in DevOps or Site Reliability Engineering",
      "Experience with containerization (Docker, Kubernetes)",
      "Knowledge of Infrastructure as Code (Terraform, Ansible)",
      "Proficiency with CI/CD tools (Jenkins, GitLab CI, GitHub Actions)",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Strong scripting skills (Bash, Python, or Go)"
    ],
    preferredQualifications: [
      "Experience with monitoring tools (Prometheus, Grafana, ELK Stack)",
      "Knowledge of service mesh technologies (Istio, Linkerd)",
      "Experience with database administration",
      "Understanding of security scanning and compliance tools",
      "Previous experience in a fast-paced startup environment"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance coverage",
      "Training and certification budget",
      "Latest development tools and equipment",
      "Flexible work schedule",
      "Annual performance bonuses"
    ],
    postedDate: "2024-01-05T16:00:00Z",
    isActive: true,
    tags: ["DevOps", "Kubernetes", "CI/CD", "Terraform", "AWS"]
  },
  {
    id: "6",
    title: "Business Analyst",
    slug: "business-analyst",
    department: "Operations",
    location: "Kampala, Uganda",
    type: "full-time",
    level: "mid",
    salaryRange: "UGX 5,000,000 - 7,500,000 per year",
    description: "Bridge the gap between business requirements and technical solutions. Work with clients to understand their needs and translate them into actionable project requirements.",
    responsibilities: [
      "Gather and analyze business requirements from clients",
      "Create detailed project specifications and documentation",
      "Facilitate workshops and stakeholder meetings",
      "Collaborate with technical teams to ensure requirements are met",
      "Conduct user acceptance testing and quality assurance",
      "Support project managers in delivery planning"
    ],
    requirements: [
      "3+ years of experience as a Business Analyst",
      "Strong analytical and problem-solving skills",
      "Experience with requirements gathering and documentation",
      "Knowledge of project management methodologies (Agile, Scrum)",
      "Excellent communication and presentation skills",
      "Bachelor's degree in Business, IT, or related field"
    ],
    preferredQualifications: [
      "Experience with business process modeling tools",
      "Knowledge of software development lifecycle",
      "Previous consulting or client-facing experience",
      "Certification in Business Analysis (CBAP, CCBA)",
      "Experience with data analysis and reporting tools"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Professional development opportunities",
      "Certification support",
      "Flexible working arrangements",
      "Team building activities"
    ],
    postedDate: "2024-01-03T13:30:00Z",
    isActive: true,
    tags: ["Business Analysis", "Requirements Gathering", "Agile", "Documentation"]
  },
  {
    id: "7",
    title: "Software Development Intern",
    slug: "software-development-intern",
    department: "Engineering",
    location: "Kampala, Uganda",
    type: "internship",
    level: "entry",
    salaryRange: "UGX 800,000 - 1,200,000 per month",
    description: "Join our internship program to gain hands-on experience in software development. Work on real projects while learning from experienced developers.",
    responsibilities: [
      "Assist in developing web applications and APIs",
      "Write clean, maintainable code under supervision",
      "Participate in code reviews and team meetings",
      "Learn and apply software development best practices",
      "Contribute to documentation and testing efforts",
      "Support senior developers on various projects"
    ],
    requirements: [
      "Currently pursuing or recently completed degree in Computer Science",
      "Basic knowledge of programming languages (JavaScript, Python, or Java)",
      "Understanding of web development fundamentals",
      "Eagerness to learn and grow in a fast-paced environment",
      "Good communication skills and team player attitude",
      "Available for 3-6 month internship period"
    ],
    preferredQualifications: [
      "Experience with React, Node.js, or similar frameworks",
      "Knowledge of version control systems (Git)",
      "Previous internship or project experience",
      "Understanding of databases and SQL",
      "Participation in coding competitions or hackathons"
    ],
    benefits: [
      "Monthly stipend",
      "Mentorship from senior developers",
      "Real-world project experience",
      "Professional development workshops",
      "Potential for full-time offer",
      "Certificate of completion"
    ],
    postedDate: "2024-01-01T10:00:00Z",
    applicationDeadline: "2024-01-31T23:59:59Z",
    isActive: true,
    tags: ["Internship", "JavaScript", "Web Development", "Entry Level"]
  },
  {
    id: "8",
    title: "Project Manager",
    slug: "project-manager",
    department: "Operations",
    location: "Kampala, Uganda",
    type: "full-time",
    level: "senior",
    salaryRange: "UGX 8,000,000 - 12,000,000 per year",
    description: "Lead complex IT projects from initiation to delivery. Manage client relationships, coordinate cross-functional teams, and ensure projects are delivered on time and within budget.",
    responsibilities: [
      "Manage end-to-end delivery of IT projects",
      "Coordinate with clients, stakeholders, and internal teams",
      "Develop project plans, timelines, and budgets",
      "Monitor project progress and manage risks",
      "Ensure quality deliverables and client satisfaction",
      "Lead project retrospectives and continuous improvement"
    ],
    requirements: [
      "5+ years of experience in IT project management",
      "PMP, PRINCE2, or Agile certification",
      "Experience managing software development projects",
      "Strong leadership and communication skills",
      "Knowledge of project management tools (Jira, MS Project)",
      "Bachelor's degree in relevant field"
    ],
    preferredQualifications: [
      "Experience in consulting or client services",
      "Knowledge of software development methodologies",
      "Previous experience managing distributed teams",
      "Understanding of cloud technologies and digital transformation",
      "MBA or advanced project management certification"
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance for family",
      "Professional development budget",
      "Leadership training opportunities",
      "Performance-based bonuses",
      "Flexible work arrangements"
    ],
    postedDate: "2023-12-28T14:00:00Z",
    isActive: true,
    tags: ["Project Management", "PMP", "Agile", "Client Management"]
  }
];

export const departments = [
  "All Departments",
  "Engineering",
  "Security",
  "Design",
  "Operations",
  "Sales",
  "Marketing"
];

export const jobTypes = [
  "All Types",
  "Full-time",
  "Part-time",
  "Contract",
  "Internship"
];

export const jobLevels = [
  "All Levels",
  "Entry",
  "Mid",
  "Senior",
  "Lead",
  "Executive"
];

export const companyBenefits = [
  {
    title: "Competitive Compensation",
    description: "Market-competitive salaries with performance-based bonuses and stock options for senior roles.",
    icon: "💰"
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance for you and your family, plus wellness programs and gym memberships.",
    icon: "🏥"
  },
  {
    title: "Professional Growth",
    description: "Annual learning budget, conference attendance, certification support, and mentorship programs.",
    icon: "📚"
  },
  {
    title: "Work-Life Balance",
    description: "Flexible working hours, remote work options, and generous vacation policy to maintain work-life balance.",
    icon: "⚖️"
  },
  {
    title: "Latest Technology",
    description: "MacBook Pro, latest development tools, and access to cutting-edge technologies and platforms.",
    icon: "💻"
  },
  {
    title: "Team Culture",
    description: "Collaborative environment, team building activities, annual retreats, and regular social events.",
    icon: "🤝"
  }
];

export const hiringProcess = [
  {
    step: 1,
    title: "Application Review",
    description: "We review your application and portfolio within 3-5 business days.",
    duration: "3-5 days"
  },
  {
    step: 2,
    title: "Initial Screening",
    description: "Phone or video call with our HR team to discuss your background and interests.",
    duration: "30 minutes"
  },
  {
    step: 3,
    title: "Technical Assessment",
    description: "Technical interview or coding challenge relevant to the role you're applying for.",
    duration: "1-2 hours"
  },
  {
    step: 4,
    title: "Team Interview",
    description: "Meet with potential team members and discuss projects, culture, and collaboration.",
    duration: "45 minutes"
  },
  {
    step: 5,
    title: "Final Interview",
    description: "Final discussion with leadership team about role expectations and career growth.",
    duration: "30 minutes"
  },
  {
    step: 6,
    title: "Offer & Onboarding",
    description: "Receive offer letter and begin comprehensive onboarding process with your new team.",
    duration: "1 week"
  }
];

// Filter active jobs
export const activeJobs = jobListings.filter(job => job.isActive);

// Get jobs by department
export const getJobsByDepartment = (department: string) => {
  if (department === "All Departments") return activeJobs;
  return activeJobs.filter(job => job.department === department);
};

// Get jobs by type
export const getJobsByType = (type: string) => {
  if (type === "All Types") return activeJobs;
  return activeJobs.filter(job => job.type === type.toLowerCase().replace('-', '-'));
};

// Get jobs by level
export const getJobsByLevel = (level: string) => {
  if (level === "All Levels") return activeJobs;
  return activeJobs.filter(job => job.level === level.toLowerCase());
};