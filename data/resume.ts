export const resumeData = {
  basics: {
    name: "Ritunj Kaushik",
    title: "Software Engineer | Full Stack (MERN) | React.js, Node.js, PostgreSQL | AWS Cloud | Fresher | Immediate Joiner",
    summary: "Results-driven Full Stack Developer with 1+ year building scalable web applications and enterprise SaaS platforms. Expert in MERN stack, TypeScript, Next.js, cloud technologies. Proven expertise in React.js, Redux, SSR, responsive UI/UX. Strong backend skills: RESTful APIs, microservices, database optimization, JWT authentication, CI/CD.",
    location: "Ghaziabad, Uttar Pradesh, India",
    email: "ritunjkaushik@gmail.com",
    alternateEmail: "ritunj0120@gmail.com",
    phone: "+91-8527027145",
    links: {
      linkedin: "https://www.linkedin.com/in/ritunjkaushik",
      linkedinAlt: "https://linkedin.com/in/ritunj-kaushik",
      github: "https://github.com/RitunjKaushik20"
    }
  },
  experience: [
    {
      role: "Full Stack Engineer",
      company: "Vendor Management & Finance SaaS Platform",
      dates: "January 2026 - February 2026",
      duration: "2 months",
      location: "Remote",
      bullets: [
        "Architected multi-tenant SaaS with RBAC supporting Admin, Vendor, Finance roles for contract lifecycle, invoice tracking with data isolation",
        "Built 20+ RESTful APIs using Node.js, Express.js, Prisma ORM on PostgreSQL with transactional integrity, pagination, filtering, error handling",
        "Implemented JWT authentication with refresh tokens, bcrypt hashing, role-based middleware, normalized database schema",
        "Created React.js frontend with Redux Toolkit, React Router, custom hooks, Chart.js visualization",
        "Stack: React.js, Redux, Node.js, Express.js, Prisma, PostgreSQL, JWT, RBAC, Tailwind CSS, Vercel"
      ]
    },
    {
      role: "Web Development Intern",
      company: "Prodigy InfoTech",
      dates: "November 2025 - December 2025",
      duration: "2 months",
      location: "Remote",
      bullets: [
        "Developed full-stack applications using React.js, Node.js, Express.js, MongoDB, RESTful APIs in Agile/Scrum with sprint planning, code reviews",
        "Built responsive UI components with React.js, Redux for state management, Tailwind CSS following WCAG 2.1 and cross-browser compatibility",
        "Reduced bugs by 30% through unit testing with Jest, integration testing, ESLint, Prettier, Git pre-commit hooks",
        "Optimized performance achieving 40% faster load times through code splitting, lazy loading, image optimization"
      ]
    },
    {
      role: "AWS Cloud Virtual Intern",
      company: "AICTE",
      dates: "January 2024 - February 2024",
      duration: "2 months",
      location: "Remote",
      bullets: [
        "Architected scalable cloud infrastructure on AWS using EC2, S3, Lambda, RDS with VPC networking, security groups, load balancing, auto-scaling achieving 99.9% uptime",
        "Implemented enterprise security with IAM policies, S3 encryption, CloudWatch monitoring, SNS alerts, automated incident response",
        "Optimized cloud costs by 25% through resource optimization, reserved instances, automated scaling using CloudFormation",
        "Configured CI/CD pipelines with AWS CodePipeline and CodeDeploy for automated deployment"
      ]
    }
  ],
  achievements: [
    {
      metric: "20+",
      description: "RESTful APIs built with production-grade security and error handling",
      category: "Development"
    },
    {
      metric: "30%",
      description: "Bug reduction through comprehensive testing and code quality tools",
      category: "Quality"
    },
    {
      metric: "40%",
      description: "Faster load times achieved through performance optimization",
      category: "Performance"
    },
    {
      metric: "25%",
      description: "Cloud cost optimization through resource management",
      category: "Efficiency"
    },
    {
      metric: "99.9%",
      description: "Uptime achieved for AWS cloud infrastructure",
      category: "Reliability"
    }
  ],
  projects: [
    {
      title: "Vendor Management & Finance SaaS Platform",
      links: {
        live: "https://vendo-care.vercel.app/",
        github: "https://github.com/RitunjKaushik20/VendoCare"
      },
      bullets: [
        "Architected multi-tenant SaaS with RBAC supporting Admin, Vendor, Finance roles for contract lifecycle, invoice tracking with data isolation",
        "Built 20+ RESTful APIs using Node.js, Express.js, Prisma ORM on PostgreSQL with transactional integrity, pagination, filtering, error handling",
        "Implemented JWT authentication with refresh tokens, bcrypt hashing, role-based middleware, normalized database schema",
        "Created React.js frontend with Redux Toolkit, React Router, custom hooks, Chart.js visualization"
      ],
      stack: "React.js, Redux, Node.js, Express.js, Prisma, PostgreSQL, JWT, RBAC, Tailwind CSS, Vercel"
    },
    {
      title: "Real Estate Property Management Platform",
      links: {
        live: "https://property-management-backend-six.vercel.app/",
        github: "https://github.com/RitunjKaushik20/property_management-backend"
      },
      bullets: [
        "Developed multi-tenant property system with RBAC, JWT auth, property listings, advanced filters, CRM workflows, tenant management",
        "Built 15+ RESTful APIs using Node.js, Express.js, Prisma ORM with MongoDB; integrated Multer, Cloudinary for image storage with CDN",
        "Implemented React.js frontend with Context API, dynamic forms with validation, infinite scrolling, optimistic UI updates"
      ],
      stack: "React.js, Context API, Node.js, Express.js, Prisma, MongoDB Atlas, JWT, Cloudinary, Tailwind CSS, Vercel"
    },
    {
      title: "AI-Powered Meeting Action Items Tracker",
      links: {
        live: "https://meeting-action-item-tracker.vercel.app/",
        github: "https://github.com/RitunjKaushik20/ai-meeting-tracker"
      },
      bullets: [
        "Developed SaaS application using OpenAI GPT API for NLP-based extraction of action items, task owners, due dates, priorities from transcripts",
        "Designed RESTful backend with Node.js, Express.js, Prisma ORM on PostgreSQL with pagination, full-text search, data export, webhooks",
        "Created React.js dashboard with real-time updates, drag-and-drop task management, filtering, email notifications"
      ],
      stack: "React.js, Node.js, Express.js, OpenAI API, PostgreSQL, Prisma ORM, WebSockets, Vercel"
    }
  ],
  skills: {
    frontend: ["React.js", "Next.js", "Redux Toolkit", "Context API", "React Hooks", "SSR", "SSG", "Tailwind CSS", "Material-UI", "Bootstrap", "Responsive Design", "PWA", "Vite", "Webpack"],
    backend: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Microservices", "JWT", "OAuth 2.0", "WebSockets", "Socket.io", "Middleware"],
    languages: ["JavaScript (ES6+)", "TypeScript", "Java", "Python", "SQL", "HTML5", "CSS3", "Sass/SCSS"],
    databases: ["PostgreSQL", "MongoDB Atlas", "MySQL", "Redis", "Prisma ORM", "Mongoose", "Sequelize", "Query Optimization", "Indexing", "Transactions"],
    cloudDevOps: ["AWS (EC2, S3, Lambda, RDS, IAM, CloudWatch)", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins", "Nginx", "Linux"],
    tools: ["Git", "GitHub", "Postman", "Swagger", "Jest", "Mocha", "ESLint", "Prettier", "Jira", "VS Code", "npm", "Agile/Scrum"]
  },
  education: [
    {
      degree: "Bachelor of Technology - Computer Science Engineering",
      institution: "Galgotias University",
      location: "Greater Noida, India",
      dates: "October 2022 - June 2026",
      altDates: "Jan 2021 - Jan 2025",
      gpa: "7.1/10"
    },
    {
      degree: "Class XII",
      institution: "CCDPS",
      dates: null,
      location: null
    }
  ],
  certifications: [
    "Beginner: Introduction to Generative AI",
    "Complete JavaScript Programming: From Novice to Expert",
    "Java 21 Programming Masterclass: Fundamentals for Beginners",
    "Java Programming – Udemy",
    "JavaScript Programming – Udemy",
    "Generative AI Fundamentals – Google Cloud"
  ],
  topSkillsHighlight: [
    "REST APIs",
    "JavaScript",
    "React.js"
  ],
  extra: [
    "Passionate about building scalable, production-ready web applications using modern technologies",
    "Experienced in developing end-to-end solutions with MERN stack and Next.js",
    "Quick learner | Team player | Ready to contribute from Day 1",
    "Open to: Full Stack Developer, Software Developer, Backend Developer, Software Engineer (SDE-1), Internship opportunities"
  ]
};
