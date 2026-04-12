// portfolio.js
const portfolio = {
    // =======================
    // 🔹 Personal Information
    // =======================
    name: "Manikanta Tanniru",
    title: "Full-Stack Engineer | GenAI Developer",
    subTitle:
      "Half logic, half caffeine, but fully committed to making weird ideas real.",
    email: "tannirumanikanta1996@gmail.com",
    phone: "+1 (408)650-2162",
    location: "San Jose, California, USA",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/manikanta-tanniru-380239252/",
      github: "https://github.com/manikantaTanniru",
    },
  
    // =======================
    // 🔹 Skills
    // =======================
    skills: {
      languages: ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "SQL"],
      frontend: [
        "React",
        "Next.js",
        "Angular",
        "Tailwind CSS",
        "Bootstrap",
        "Redux",
        "HTML5",
        "CSS3",
        "SCSS/LESS",
      ],
      backend: ["Node.js", "Express.js", "Flask", "FastAPI", "Spring Boot"],
      databases: ["PostgreSQL", "MongoDB", "MySQL", "Amazon RDS"],
      cloudDevops: [
        "AWS (EC2, S3, RDS, Lambda, ELB)",
        "Docker",
        "Jenkins",
        "Kubernetes",
        "CI/CD",
      ],
      aiMl: [
        "PyTorch",
        "TensorFlow",
        "LangChain",
        "RAG",
        "Hugging Face",
        "Whisper",
        "Llama-3.3-70B",
      ],
      tools: [
        "Git",
        "JIRA",
        "Postman",
        "BrowserStack",
        "VSCode",
        "Cursor",
        "Windsurf",
      ],
      others: ["REST APIs", "GraphQL", "Kafka", "Redis", "Microservices"],
    },
  
    // =======================
    // 🔹 Education
    // =======================
    education: [
      {
        degree: "Master of Science in Software Engineering",
        institution: "San Jose State University, California, USA",
        duration: "Jan 2022 – May 2023",
      },
      {
        degree: "Bachelor of Engineering in Computer Science and Engineering",
        institution: "K L University, Andhra Pradesh, India",
        duration: "June 2015 – May 2019",
      },
    ],
    
    // =======================
    // 🔹 Experience
    // =======================
    experience: [
      {
        title: "Software Development Engineer",
        company: "Amazon, Sunnyvale, CA",
        duration: "Feb 2025 – Present",
        details: [
          "Working on Hummingbird, an event-driven integration platform enabling real-time data exchange across Amazon Robotics systems and external partners.",
          "Designed and implemented workflow-based integrations across systems like Oracle EBS, Kinaxis, PLM, SAP, and Proplanner.",
          "Built scalable AWS-based orchestration pipelines using Step Functions, EventBridge, Lambda, and SQS.",
          "Contributed to self-service workflow onboarding, supporting high-scale systems handling 100K+ requests/sec.",
          "Developed Project Horus, an automated testing platform that reduced manual testing effort by 3000+ hours annually.",
          "Built centralized test automation platform using React, AWS Lambda, ECS Fargate, and Step Functions.",
          "Reduced testing infrastructure cost by 93% using auto-scaling cloud-based worker fleets.",
          "Worked on Mockingbird, an internal access management platform, improving user visibility and automation workflows.",
          "Optimized backend services with pagination, API rate limiting, and CloudWatch monitoring.",
        ],
      },
      {
        title: "Full Stack Developer",
        company: "DarioHealth, USA",
        duration: "June 2023 – Feb 2025",
        details: [
          "Built dynamic frontend applications using React and TypeScript, improving responsiveness by 30%.",
          "Developed dashboards and data visualizations using Chart.js, D3.js, and Highcharts.",
          "Implemented RESTful APIs and GraphQL services, improving data fetching efficiency and reducing latency by 35%.",
          "Worked across full SDLC including design, development, and deployment using Agile practices.",
        ],
      },
      {
        title: "Software Developer",
        company: "Veritas Software, India",
        duration: "June 2019 – July 2021",
        details: [
          "Developed backend services using Django and Flask with REST APIs and authentication.",
          "Built scalable applications using Spring MVC, Spring Core, and Hibernate.",
          "Improved system performance by 40% through optimized database interactions.",
          "Enhanced system reliability by 20% through robust backend design.",
        ],
      },
    ],
  
  // =======================
// 🔹 Projects
// =======================
projects: [
  {
    name: "Kirana.ai",
    techStack: [
      "Next.js",
      "TailwindCSS",
      "Python",
      "FastAPI",
      "Whisper",
      "Llama-3",
      "Vector DB"
    ],
    description:
      "Gen-AI voice-based inventory system for small retail (Kirana) stores. Supports multilingual voice input using Whisper and processes commands using LLM workflows. Enables users to add, update, and query inventory through natural conversation.",
    github: "https://github.com/manikantaTanniru",
    demo: "",
  },
  {
    name: "Profile Bot",
    techStack: [
      "LangChain",
      "ChromaDB",
      "FastAPI",
      "GCP Cloud Run",
      "GCS",
      "OpenAI API"
    ],
    description:
      "AI chatbot that answers questions about my experience and projects using retrieval-based generation. Uses vector embeddings for context and is deployed on GCP with dynamic document ingestion.",
    github: "https://github.com/manikantaTanniru",
    demo: "",
  },
  {
    name: "Flight Finder",
    techStack: ["React.js", "Flask", "REST API", "OpenSky API"],
    description:
      "Flight search application that fetches and visualizes real-time flight data using OpenSky APIs, with filtering and user-friendly UI for exploration.",
    github: "https://github.com/manikantaTanniru",
    demo: "",
  }
],
  
    // =======================
    // 🔹 About Me
    // =======================
    about:
      "Hi, I’m Manikanta Tanniru, a Full-Stack Software Engineer with 5+ years of experience building scalable and distributed systems. Currently working at Amazon Robotics, I focus on backend systems, event-driven architectures, and cloud-based solutions using AWS. I’ve worked on platforms like Hummingbird, Horus, and Mockingbird, building integrations across enterprise systems and improving automation at scale. I enjoy designing clean, reliable systems and continuously learning new technologies to solve real-world problems.",
    // =======================
    // 🔹 Contact Info
    // =======================
    email: "tannirumanikanta1996@gmail.com",
    linkedin: "https://www.linkedin.com/in/manikanta-tanniru",
    github: "https://github.com/manikantaTanniru"
  };
  
  export default portfolio;
