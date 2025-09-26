import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: "1",
    title: "Uganda Revenue Authority Tax Portal",
    slug: "ura-tax-portal",
    clientName: "Uganda Revenue Authority",
    summary: "Comprehensive online tax filing and management system serving over 500,000 taxpayers across Uganda.",
    challenge: "The Uganda Revenue Authority needed a modern, scalable online platform to streamline tax filing processes, reduce manual paperwork, and improve taxpayer compliance. The existing system was outdated and couldn't handle the growing number of users.",
    solution: "We developed a robust web-based tax portal with features including online tax filing, payment processing, document management, and real-time status tracking. The system integrates with multiple payment gateways and provides comprehensive reporting capabilities.",
    outcomes: [
      "Reduced tax filing time by 70%",
      "Increased online tax submissions by 300%",
      "Improved taxpayer satisfaction scores by 85%",
      "Reduced processing costs by 40%",
      "Enhanced compliance tracking and reporting"
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Redis"],
    images: ["/images/projects/ura-portal-1.jpg", "/images/projects/ura-portal-2.jpg", "/images/projects/ura-portal-3.jpg"],
    publishDate: "2023-08-15",
    tags: ["Government", "Web Development", "Tax Management", "Large Scale"],
    industry: "Government",
    seoMeta: {
      title: "URA Tax Portal Development - Government IT Solutions Uganda",
      description: "Case study: How we developed a comprehensive tax portal for Uganda Revenue Authority, serving 500,000+ taxpayers.",
      keywords: ["government portal", "tax system", "URA", "uganda", "web development", "case study"]
    }
  },
  {
    id: "2",
    title: "Stanbic Bank Mobile Banking App",
    slug: "stanbic-mobile-banking",
    clientName: "Stanbic Bank Uganda",
    summary: "Secure and user-friendly mobile banking application with advanced features for personal and business banking.",
    challenge: "Stanbic Bank needed to modernize their mobile banking experience to compete with fintech solutions while maintaining the highest security standards. The challenge was to create an intuitive app that could handle complex banking operations securely.",
    solution: "We developed a comprehensive mobile banking app with biometric authentication, real-time transactions, bill payments, loan applications, and investment management. The app features advanced security measures and offline capabilities.",
    outcomes: [
      "Increased mobile banking adoption by 250%",
      "Reduced branch visits by 60%",
      "Improved customer satisfaction by 90%",
      "Enhanced security with zero fraud incidents",
      "Streamlined banking operations"
    ],
    techStack: ["React Native", "Node.js", "MongoDB", "AWS", "Kubernetes", "Blockchain"],
    images: ["/images/projects/stanbic-app-1.jpg", "/images/projects/stanbic-app-2.jpg", "/images/projects/stanbic-app-3.jpg"],
    publishDate: "2023-06-20",
    tags: ["Banking", "Mobile App", "Fintech", "Security"],
    industry: "Financial Services",
    seoMeta: {
      title: "Stanbic Bank Mobile App Development - Banking Solutions Uganda",
      description: "Case study: Mobile banking app development for Stanbic Bank Uganda with advanced security and user experience.",
      keywords: ["mobile banking", "fintech", "stanbic bank", "uganda", "app development", "financial services"]
    }
  },
  {
    id: "3",
    title: "Makerere University Student Portal",
    slug: "makerere-student-portal",
    clientName: "Makerere University",
    summary: "Integrated student management system serving 40,000+ students with academic, financial, and administrative services.",
    challenge: "Makerere University needed a unified digital platform to manage student services, from admissions to graduation. The existing fragmented systems caused inefficiencies and poor student experience.",
    solution: "We created a comprehensive student portal integrating admissions, course registration, fee payments, academic records, library services, and graduation processes. The system includes mobile apps for students and staff.",
    outcomes: [
      "Streamlined services for 40,000+ students",
      "Reduced administrative processing time by 80%",
      "Improved student satisfaction by 75%",
      "Enhanced data accuracy and reporting",
      "Reduced paper usage by 90%"
    ],
    techStack: ["Vue.js", "Laravel", "MySQL", "Docker", "Redis", "PWA"],
    images: ["/images/projects/makerere-portal-1.jpg", "/images/projects/makerere-portal-2.jpg", "/images/projects/makerere-portal-3.jpg"],
    publishDate: "2023-04-10",
    tags: ["Education", "Student Management", "University", "Large Scale"],
    industry: "Education",
    seoMeta: {
      title: "Makerere University Student Portal - Education IT Solutions",
      description: "Case study: Student management system development for Makerere University serving 40,000+ students.",
      keywords: ["student portal", "university system", "makerere", "education software", "uganda", "student management"]
    }
  },
  {
    id: "4",
    title: "Mulago Hospital Management System",
    slug: "mulago-hospital-system",
    clientName: "Mulago National Referral Hospital",
    summary: "Comprehensive hospital management system improving patient care and operational efficiency at Uganda's largest hospital.",
    challenge: "Mulago Hospital needed to digitize patient records, streamline appointment scheduling, and improve inventory management. The manual processes were causing delays and affecting patient care quality.",
    solution: "We implemented a complete hospital management system with electronic health records, appointment scheduling, pharmacy management, laboratory integration, and billing systems. The solution includes mobile apps for healthcare workers.",
    outcomes: [
      "Reduced patient waiting time by 50%",
      "Improved medical record accuracy by 95%",
      "Enhanced inventory management efficiency",
      "Better patient care coordination",
      "Streamlined billing and insurance processing"
    ],
    techStack: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "HL7 FHIR"],
    images: ["/images/projects/mulago-hms-1.jpg", "/images/projects/mulago-hms-2.jpg", "/images/projects/mulago-hms-3.jpg"],
    publishDate: "2023-02-28",
    tags: ["Healthcare", "Hospital Management", "EHR", "Medical"],
    industry: "Healthcare",
    seoMeta: {
      title: "Mulago Hospital Management System - Healthcare IT Solutions",
      description: "Case study: Hospital management system for Mulago National Referral Hospital improving patient care and efficiency.",
      keywords: ["hospital management", "healthcare IT", "mulago hospital", "EHR", "uganda", "medical software"]
    }
  },
  {
    id: "5",
    title: "Jumia Uganda E-commerce Platform",
    slug: "jumia-ecommerce-platform",
    clientName: "Jumia Uganda",
    summary: "Scalable e-commerce platform enhancement supporting thousands of vendors and millions of products.",
    challenge: "Jumia Uganda needed to enhance their e-commerce platform to handle increased traffic, improve search functionality, and provide better vendor management tools. Performance and scalability were major concerns.",
    solution: "We optimized the existing platform and added new features including advanced search with AI, vendor analytics dashboard, mobile payment integration, and real-time inventory management. Implemented microservices architecture for better scalability.",
    outcomes: [
      "Improved platform performance by 300%",
      "Increased vendor satisfaction by 80%",
      "Enhanced search accuracy by 90%",
      "Reduced page load times by 60%",
      "Improved mobile conversion rates by 45%"
    ],
    techStack: ["React", "Microservices", "Elasticsearch", "Redis", "AWS", "Docker"],
    images: ["/images/projects/jumia-platform-1.jpg", "/images/projects/jumia-platform-2.jpg", "/images/projects/jumia-platform-3.jpg"],
    publishDate: "2023-01-15",
    tags: ["E-commerce", "Retail", "Scalability", "Performance"],
    industry: "Retail",
    seoMeta: {
      title: "Jumia Uganda E-commerce Platform Enhancement - Retail IT Solutions",
      description: "Case study: E-commerce platform optimization for Jumia Uganda improving performance and vendor experience.",
      keywords: ["e-commerce", "jumia", "retail platform", "uganda", "online shopping", "vendor management"]
    }
  },
  {
    id: "6",
    title: "NSSF Digital Services Platform",
    slug: "nssf-digital-platform",
    clientName: "National Social Security Fund",
    summary: "Digital transformation of pension services serving over 2 million members across Uganda.",
    challenge: "NSSF needed to modernize their member services, enabling online contributions tracking, benefit calculations, and claim processing. The manual processes were inefficient and caused member dissatisfaction.",
    solution: "We developed a comprehensive digital platform with member self-service portal, employer contribution system, automated benefit calculations, and mobile money integration. The system includes advanced analytics and reporting capabilities.",
    outcomes: [
      "Digitized services for 2+ million members",
      "Reduced claim processing time by 85%",
      "Improved member satisfaction by 70%",
      "Enhanced contribution tracking accuracy",
      "Streamlined employer reporting processes"
    ],
    techStack: ["React", "Java Spring", "Oracle DB", "Kubernetes", "Apache Kafka", "Mobile Money APIs"],
    images: ["/images/projects/nssf-platform-1.jpg", "/images/projects/nssf-platform-2.jpg", "/images/projects/nssf-platform-3.jpg"],
    publishDate: "2022-11-30",
    tags: ["Government", "Social Security", "Digital Transformation", "Large Scale"],
    industry: "Government",
    seoMeta: {
      title: "NSSF Digital Platform - Social Security IT Solutions Uganda",
      description: "Case study: Digital transformation of NSSF services serving 2+ million members with online pension services.",
      keywords: ["NSSF", "social security", "pension system", "digital transformation", "uganda", "government services"]
    }
  },
  {
    id: "7",
    title: "MTN Uganda Customer Portal",
    slug: "mtn-customer-portal",
    clientName: "MTN Uganda",
    summary: "Self-service customer portal enabling millions of subscribers to manage their accounts and services online.",
    challenge: "MTN Uganda wanted to reduce call center load and improve customer experience by providing comprehensive self-service options. The challenge was to create a portal that could handle millions of users while integrating with legacy systems.",
    solution: "We built a robust customer portal with account management, bill payments, service subscriptions, data bundle purchases, and customer support integration. The platform includes mobile apps and USSD integration for feature phone users.",
    outcomes: [
      "Reduced call center volume by 40%",
      "Improved customer satisfaction by 65%",
      "Increased self-service adoption by 200%",
      "Enhanced service delivery efficiency",
      "Reduced operational costs significantly"
    ],
    techStack: ["Vue.js", "Node.js", "MongoDB", "Redis", "Docker", "USSD Gateway"],
    images: ["/images/projects/mtn-portal-1.jpg", "/images/projects/mtn-portal-2.jpg", "/images/projects/mtn-portal-3.jpg"],
    publishDate: "2022-09-20",
    tags: ["Telecommunications", "Customer Portal", "Self-Service", "Mobile"],
    industry: "Telecommunications",
    seoMeta: {
      title: "MTN Uganda Customer Portal - Telecom IT Solutions",
      description: "Case study: Self-service customer portal for MTN Uganda enabling millions of subscribers to manage accounts online.",
      keywords: ["MTN", "customer portal", "telecommunications", "self-service", "uganda", "mobile services"]
    }
  },
  {
    id: "8",
    title: "Uganda Coffee Development Authority Platform",
    slug: "ucda-coffee-platform",
    clientName: "Uganda Coffee Development Authority",
    summary: "Digital platform for coffee value chain management from farmers to exporters across Uganda.",
    challenge: "UCDA needed a comprehensive system to track coffee production, quality control, farmer registration, and export documentation. The fragmented manual processes were affecting the coffee industry's efficiency and traceability.",
    solution: "We developed an integrated platform covering farmer registration, production tracking, quality assessment, warehouse management, and export documentation. The system includes mobile apps for field officers and farmers.",
    outcomes: [
      "Registered 500,000+ coffee farmers",
      "Improved traceability across value chain",
      "Enhanced quality control processes",
      "Streamlined export documentation",
      "Increased farmer income transparency"
    ],
    techStack: ["React Native", "Django", "PostgreSQL", "GIS Integration", "Blockchain", "IoT Sensors"],
    images: ["/images/projects/ucda-platform-1.jpg", "/images/projects/ucda-platform-2.jpg", "/images/projects/ucda-platform-3.jpg"],
    publishDate: "2022-07-10",
    tags: ["Agriculture", "Supply Chain", "Traceability", "Mobile"],
    industry: "Agriculture",
    seoMeta: {
      title: "UCDA Coffee Platform - Agriculture IT Solutions Uganda",
      description: "Case study: Digital coffee value chain platform for Uganda Coffee Development Authority improving farmer services.",
      keywords: ["coffee platform", "UCDA", "agriculture", "supply chain", "farmers", "uganda", "traceability"]
    }
  }
];