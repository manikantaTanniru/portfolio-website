// portfolio.js
const portfolio = {
    // =======================
    // 🔹 Personal Information
    // =======================
    name: "Manikanta Tanniru",
    title: "AI Software Engineer | Full-Stack Engineer",
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
      languages: ["Java", "Python", "Scala", "TypeScript", "JavaScript", "C#/C", "SQL"],
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
      databases: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Amazon RDS",
        "DynamoDB",
        "MS SQL Server",
        "Oracle",
        "SSMS",
        "SSIS",
      ],
      cloudDevops: [
        "AWS (EKS, EMR, Lambda, DynamoDB, S3, RDS, IAM, CloudWatch)",
        "Azure (Databricks, Data Factory)",
        "Terraform",
        "Docker",
        "Kubernetes",
        "CI/CD",
      ],
      dataStreaming: [
        "Apache Spark",
        "PySpark",
        "Scala Spark",
        "Kafka",
        "Pulsar",
        "Databricks",
        "Performance Tuning",
      ],
      aiMl: [
        "Amazon Bedrock (Claude, Titan)",
        "Agent-based Workflows",
        "Prompt Engineering",
        "Human-in-the-Loop AI",
        "Model Guardrails",
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
        "GitHub Actions",
        "Jenkins",
        "Selenium",
        "IntelliJ",
        "Visual Studio",
        "TestNG",
        "JUnit",
        "JIRA",
        "Postman",
        "BrowserStack",
        "VSCode",
        "Cursor",
        "Windsurf",
      ],
      others: ["REST APIs", "GraphQL", "Redis", "Microservices"],
    },
  
    // =======================
    // 🔹 Education
    // =======================
    education: [
      {
        degree: "Doctor of Business Administration (DBA), Business Intelligence & Data Analytics",
        institution: "Westcliff University, San Francisco, CA",
        duration: "June 2026 – 2029",
        inProgress: true,
      },
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
        title: "AI Software Engineer",
        company: "VeroTX Networks, San Jose, CA",
        duration: "May 2026 – Present",
        details: [
          "Implemented agent-orchestrated, multi-step AI workflows (planning, generation, evaluation, approval) with throttling, retries, and failure isolation to safely handle hundreds of concurrent AI requests.",
          "Architected low-latency, highly available serverless and microservices systems using AWS Lambda, DynamoDB, SQS, and Step Functions, maintaining P99 latency under 200ms during peak traffic.",
          "Built the front-end for a user-facing access portal in React/TypeScript, consolidating team, access, and status views into a single interface.",
          "Built and operationalized production AI/LLM platforms using Amazon Bedrock to automate personalized content generation, reducing manual content creation effort by 68%.",
          "Designed secure, versioned data storage using DynamoDB to persist millions of AI-generated artifacts, approvals, and audit records with IAM-based access controls.",
          "Strengthened system resilience with timeouts, retries, circuit breakers, and graceful fallbacks, reducing customer-impacting failures by 30%.",
          "Built high-throughput REST APIs using Node.js and TypeScript, supporting thousands of requests per minute with robust validation and idempotency.",
          "Established end-to-end observability using CloudWatch, structured logging, dashboards, and alerts, reducing mean time to detect (MTTD) by 40%.",
        ],
      },
      {
        title: "SDE II",
        company: "Amazon, Sunnyvale, CA",
        duration: "Feb 2025 – May 2026",
        details: [
          "Worked on Hummingbird, an event-driven integration platform enabling real-time data exchange across Amazon Robotics systems and external partners.",
          "Designed and implemented workflow-based integrations across systems like Oracle EBS, Kinaxis, PLM, SAP, and Proplanner; built AWS-based orchestration pipelines using Step Functions, EventBridge, Lambda, and SQS.",
          "Built large-scale dataset transformation pipelines using PySpark and Spark SQL on Databricks, processing millions of records for downstream analytics and content workflows.",
          "Contributed to self-service workflow onboarding, reducing onboarding time significantly; supported high-scale systems handling 100K+ requests/sec and 300+ API routes per tenant.",
          "Led the end-to-end architecture and implementation of Project Horus, an automated testing platform that reduced manual testing effort by over 3000 hours annually.",
          "Designed and helped implement a new user-facing portal on top of the Mockingbird access automation service, giving users a single place to view teams, app access, and status instead of scattered wiki pages.",
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
    tags: ["GenAI", "Voice AI"],
    featured: true,
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
    github: "https://github.com/manikantaTanniru/kirana.ai",
    demo: "",
  },
  {
    name: "Profile Bot",
    tags: ["GenAI", "RAG"],
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
    github: "https://github.com/manikantaTanniru/Profile_bot",
    demo: "",
  },
  {
    name: "Flight Finder",
    tags: ["Full-Stack"],
    techStack: ["React.js", "Flask", "REST API", "OpenSky API"],
    description:
      "Flight search application that fetches and visualizes real-time flight data using OpenSky APIs, with filtering and user-friendly UI for exploration.",
    github: "https://github.com/manikantaTanniru/skypath-flight-search",
    demo: "",
  },
  {
    name: "RAG-as-a-Service",
    tags: ["GenAI", "RAG"],
    techStack: ["Python", "Claude 3.5 Sonnet", "Ragie.ai", "Streamlit"],
    github: "https://github.com/manikantaTanniru/rag-as-a-service",
    demo: "",
  },
  {
    name: "AI Health & Fitness Agent",
    tags: ["GenAI", "Agents"],
    techStack: ["Python", "Agno", "Google Gemini", "Streamlit"],
    github: "https://github.com/manikantaTanniru/ai_health_fitness_agent",
    demo: "",
  },
  {
    name: "Voice AI Agents",
    tags: ["GenAI", "Voice AI", "RAG"],
    techStack: ["Python", "OpenAI SDK", "Qdrant", "LangChain", "Streamlit"],
    github: "https://github.com/manikantaTanniru/voice-ai-agents",
    demo: "",
  }
],
  
    // =======================
    // 🔹 About Me
    // =======================
    about:
      "Hi, I’m Manikanta Tanniru, a Software Engineer with 5+ years building high-scale backend and AI-powered platforms. I specialize in production LLM integration, workflow automation, and cloud-native system design. Currently an AI Software Engineer at VeroTX Networks, I build agent-orchestrated AI workflows and low-latency serverless systems on AWS. Previously at Amazon Robotics, I worked on Hummingbird, Horus, and Mockingbird — building integrations across enterprise systems and improving automation at scale. I enjoy translating complex business problems into measurable efficiency, cost, and productivity gains.",
    // =======================
    // 🔹 Contact Info
    // =======================
    email: "tannirumanikanta1996@gmail.com",
    linkedin: "https://www.linkedin.com/in/manikanta-tanniru",
    github: "https://github.com/manikantaTanniru"
  };
  
  export default portfolio;
