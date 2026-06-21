
export interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  role?: string;
  contribution?: string;
  techStack: string[];
  features: string[];
  architecture: string;
  lessons: string[];
  githubUrl: string;
  demoUrl?: string;
  isPrivateRepo?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    icon: string;
  }[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Achievement {
  value: string;
  label: string;
  description: string;
}

export interface FeaturedProject {
  title: string;
  badge: string;
  description: string;
  techStack: string[];
  keyAchievements: string[];
  detailedFeatures?: {
    category: string;
    items: string[];
  }[];
  impact: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "StudyNova",
    badge: "Educational Platform",
    description: "StudyNova is an educational productivity platform designed to help students organize their academic journey, access valuable learning resources, create structured notes, test their knowledge through quizzes, and collaborate with students from different academic years.\n\nThe platform enables students who have already completed a year of study to share course materials, summaries, notes, practical work, assignments, and previous exams with students currently studying that same year.\n\nFor example, second-year students can share first-year resources, summaries, and exams to help new first-year students learn more efficiently and prepare better for assessments.\n\nStudyNova aims to create a collaborative academic ecosystem where students help each other succeed through shared knowledge and organized learning resources.",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL"],
    keyAchievements: [
      "Student-driven resource sharing",
      "Course material organization",
      "Notes and summary management",
      "Previous exams and assignments archive",
      "Quiz generation and self-testing tools",
      "Academic collaboration between different student levels",
      "Educational productivity tools",
      "Full-stack architecture",
      "Modern database design with Prisma ORM",
      "Secure authentication and user management"
    ],
    detailedFeatures: [
      {
        category: "Academic Resources",
        items: ["Course files", "Lecture notes", "Summaries", "TD/TP materials", "Assignments", "Previous exams"]
      },
      {
        category: "Collaboration",
        items: ["Students sharing resources", "Year-to-year knowledge transfer", "Community-driven learning"]
      },
      {
        category: "Learning Tools",
        items: ["Smart note organization", "Quiz generation", "Revision tools", "Study planning"]
      },
      {
        category: "Platform Features",
        items: ["Authentication", "Dashboard", "Resource management", "User profiles", "Search and filtering"]
      }
    ],
    impact: "A full-stack productivity platform built to solve real student challenges."
  }
];

export const allProjects: Project[] = [
  {
    title: "Saha-Event",
    description: "Full-Stack Event Management Platform",
    problem: "Finding and booking event venues in Algeria is often inefficient, with limited visibility into availability, pricing, and reservation status.",
    solution: "Saha-Event provides a centralized platform for discovering venues, checking real-time availability, and managing secure reservations through a streamlined digital experience.",
    techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Event creation and management",
      "User registration system",
      "Modern admin dashboard",
      "Authentication & authorization",
      "RESTful API design"
    ],
    architecture: "Designed as a full-stack web platform with a React SPA frontend, Node.js/Express backend, and PostgreSQL database, enabling efficient venue management, real-time booking workflows, and secure user operations.",
    lessons: [
      "Full-stack authentication and authorization patterns",
      "RESTful API design best practices",
      "Building responsive data-driven dashboards",
      "Database relationship modeling"
    ],
    githubUrl: "https://github.com/Zakaria-tet-cs/Saha-Event",
    demoUrl: "https://saha-event-8dgv.vercel.app/"
  },
  {
    title: "Giftoria",
    description: "Gift Discovery Platform",
    problem: "Finding the right gift for a special occasion can be overwhelming due to the large number of options and lack of personalized guidance.",
    solution: "Giftoria provides a streamlined platform that helps users discover relevant gift ideas based on the occasion, making gift selection faster and more convenient.",
    role: "Frontend Developer",
    contribution: "Designed and developed the user interface and frontend experience, focusing on responsive layouts, intuitive navigation, and a seamless gift discovery journey for users.",
    techStack: ["JavaScript", "CSS", "HTML"],
    features: [
      "Gift discovery by occasion",
      "Responsive user interface",
      "Clean and intuitive navigation",
      "Occasion-focused browsing",
      "Mobile-friendly experience",
      "Modern frontend design"
    ],
    architecture: "Built the frontend layer using JavaScript, HTML, and CSS with a focus on responsive design, usability, and a smooth user experience across devices.",
    lessons: [
      "Strengthened practical frontend development skills",
      "Responsive design principles",
      "UI implementation",
      "User experience optimization"
    ],
    githubUrl: "",
    isPrivateRepo: true
  },
  {
    title: "MedLinkDZ",
    description: "Database Contribution",
    problem: "Millions of Algerians struggle to find essential medications due to recurring shortages, unequal distribution across wilayas, and the absence of any structured platform to connect those who need medications with those who have them.",
    solution: "MedLinkDZ is a web platform that bridges this gap by allowing users to publish and browse medication offers and requests across all 69 wilayas, supervised by an administrator to ensure reliable and secure exchanges.",
    role: "Database Designer & Developer",
    contribution: "Designed and implemented the relational database structure, including entity relationships, schema design, data integrity constraints, and database organization to support the platform's functionality.",
    techStack: ["PostgreSQL", "SQL", "Database Modeling", "ERD Design", "Relational Database Design"],
    features: [
      "Entity relationship design",
      "Schema design & normalization",
      "Data integrity constraints",
      "Database organization",
      "Relational data modeling"
    ],
    architecture: "Designed a relational database architecture focused on scalability, data consistency, and efficient management of healthcare-related information through well-structured schemas and relationships.",
    lessons: [
      "Database modeling and relationship design",
      "Schema normalization techniques",
      "Translating business requirements into relational structures",
      "Data integrity and constraint design",
    ],
    githubUrl: "https://github.com/yyb-21/MedLinkDZ",
    demoUrl: "https://medlink-dz.vercel.app/",
  }
];

export const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "Code2" },
      { name: "Next.js", icon: "Layout" },
      { name: "TypeScript", icon: "FileJson" },
      { name: "Tailwind CSS", icon: "Palette" },
      { name: "Framer Motion", icon: "Sparkles" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "Server" },
      { name: "Express.js", icon: "Network" }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: "DatabaseZap" },
      { name: "Prisma ORM", icon: "Layers" }
    ]
  },
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript", icon: "FileCode" },
      { name: "TypeScript", icon: "FileJson" },
      { name: "Python", icon: "TerminalSquare" },
      { name: "Java", icon: "Coffee" },
      { name: "C", icon: "Cpu" }
    ]
  },
  {
    category: "Computer Science",
    items: [
      { name: "Algorithms", icon: "GitCommit" },
      { name: "Data Structures", icon: "Network" },
      { name: "Operating Systems", icon: "Cpu" },
      { name: "Software Engineering", icon: "Code2" }
    ]
  }
];

export const learningJourneyItems = [
  {
    phase: "Current Focus",
    title: "Current Focus",
    items: [
      "Full-Stack Development",
      "Software Engineering",
      "Modern Web Technologies"
    ]
  },
  {
    phase: "Currently Learning",
    title: "Currently Learning",
    items: [
      "Artificial Intelligence Fundamentals",
      "Machine Learning Concepts",
      "Software Architecture"
    ]
  },
  {
    phase: "Future Goals",
    title: "Future Goals",
    items: [
      "Advanced Software Engineering",
      "Intelligent Systems",
      "Scalable Applications"
    ]
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2023 – 2024",
    title: "Scientific Baccalaureate & Web Development Foundations",
    description:
      "Completed my Scientific Baccalaureate, building a strong foundation in mathematics and analytical thinking. Began learning web development fundamentals — HTML and CSS.",
  },
  {
    year: "2024 – 2025",
    title: "Computer Science at ESTIN",
    description:
      "Enrolled at ESTIN and built a rigorous foundation in computer science: C programming, algorithms, data structures, operating systems, and discrete mathematics. Simultaneously learned JavaScript, TypeScript, and React.",
  },
  {
    year: "2025 – 2026",
    title: "Backend Development & First Real-World Projects",
    description:
      "Expanded into backend development with Node.js, REST APIs, and database design. Contributed to Saha Event, the database design of MedLinkDZ, and the frontend of Giftoria.",
  },
  {
    year: "2026 – Present",
    title: "Building StudyNova & Exploring Artificial Intelligence",
    description:
      "Currently developing StudyNova, an educational productivity platform. Alongside this, exploring Artificial Intelligence fundamentals and modern software engineering practices.",
  },
];
