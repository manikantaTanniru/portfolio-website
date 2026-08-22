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
      languages: ["Java 8/11/17", "Python", "Scala", "TypeScript", "JavaScript", "C#/C", "SQL"],
      coreJava: [
        "OOP",
        "Collections",
        "Multithreading",
        "Concurrency",
        "Streams API",
        "Exception Handling",
        "Design Patterns",
      ],
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
      backend: [
        "Node.js",
        "Express.js",
        "Flask",
        "FastAPI",
        "Spring Boot",
        "Spring MVC",
        "Spring Data JPA",
        "Hibernate",
        "Microservices",
      ],
      messaging: [
        "Apache Kafka",
        "ActiveMQ",
        "AWS SQS",
        "EventBridge",
        "Event-Driven Architecture",
        "Asynchronous Processing",
        "DLQ",
        "Idempotency",
      ],
      security: ["Spring Security", "OAuth2", "JWT Authentication", "Role-Based Access Control"],
      databases: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Amazon RDS",
        "DynamoDB",
        "Cosmos DB",
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
        "Helm",
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
      monitoring: ["Prometheus", "Grafana", "CloudWatch", "Structured Logging", "Dashboards & Alerting"],
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
        "Mockito",
        "JIRA",
        "Postman",
        "BrowserStack",
        "VSCode",
        "Cursor",
        "Windsurf",
      ],
      others: ["REST APIs", "GraphQL", "Redis"],
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
          "Designed and developed Java 17/Spring Boot microservices and REST APIs for scalable backend services supporting AI workflow orchestration.",
          "Built event-driven services using Kafka and ActiveMQ, implementing retries, dead-letter queues, idempotency, and asynchronous processing for reliable message delivery.",
          "Containerized services using Docker and deployed them on Kubernetes using Helm charts, improving deployment consistency across environments.",
          "Built and operationalized production AI/LLM platforms using Amazon Bedrock to automate personalized content generation, reducing manual content creation effort by 68%.",
          "Implemented secure service communication using Spring Security, OAuth2, and JWT-based authentication and authorization.",
          "Strengthened system resilience with timeouts, retries, circuit breakers, and graceful fallbacks, reducing customer-impacting failures by 30%.",
          "Wrote automated unit tests with JUnit and Mockito and participated in integration testing to improve code quality and release stability.",
          "Established end-to-end observability using CloudWatch and Prometheus with structured logging, dashboards, and alerts, reducing mean time to detect (MTTD) by 40%.",
        ],
      },
      {
        title: "SDE II",
        company: "Amazon, Sunnyvale, CA",
        duration: "Feb 2025 – May 2026",
        details: [
          "Developed Java Spring Boot microservices and backend services supporting event-driven integrations across Amazon Robotics platforms.",
          "Worked on Hummingbird, an event-driven integration platform enabling real-time data exchange across Amazon Robotics systems and external partners.",
          "Designed and implemented workflow-based integrations across systems like Oracle EBS, Kinaxis, PLM, SAP, and Proplanner; built AWS-based orchestration pipelines using Step Functions, EventBridge, Lambda, and SQS.",
          "Built large-scale dataset transformation pipelines using PySpark and Spark SQL on Databricks, processing millions of records for downstream analytics and content workflows.",
          "Contributed to self-service workflow onboarding, reducing onboarding time significantly; supported high-scale systems handling 100K+ requests/sec and 300+ API routes per tenant.",
          "Led the end-to-end architecture and implementation of Project Horus, an automated testing platform that reduced manual testing effort by over 3000 hours annually.",
          "Designed and helped implement a new user-facing portal on top of the Mockingbird access automation service, giving users a single place to view teams, app access, and status instead of scattered wiki pages.",
          "Worked with Docker, Kubernetes, and Terraform across CI/CD pipelines to support cloud-native application delivery.",
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
  // 🔹 System Design Case Studies
  // =======================
  systemDesigns: [
    {
      id: "veroTx-ai-workflows",
      name: "Agent-Orchestrated AI Workflow Platform",
      company: "VeroTX Networks",
      tagline:
        "Safely running hundreds of concurrent, multi-step AI workflows with a human in the loop.",
      problem:
        "Personalized content generation needed an LLM in the loop for planning, generation, and evaluation — but calling a model directly from a request handler doesn't survive production traffic. Requests needed to queue, retry, and pause for human approval without losing state, while keeping P99 latency under 200ms for the surrounding system.",
      decisions: [
        {
          title: "Step Functions as the workflow spine",
          detail:
            "Each request becomes a state machine: plan → generate → evaluate → approve. State persists between steps, so a slow LLM call or a pending human approval doesn't tie up compute or lose progress on failure.",
        },
        {
          title: "Throttling + retries at the orchestration layer, not the client",
          detail:
            "Concurrency limits and exponential backoff live in the Step Functions / Lambda layer, so hundreds of simultaneous requests degrade gracefully instead of stampeding Bedrock.",
        },
        {
          title: "DynamoDB as the audit-first store",
          detail:
            "Every artifact, approval, and intermediate state is written to DynamoDB with IAM-scoped access — not just for recovery, but because generated content needs a traceable approval record.",
        },
        {
          title: "Circuit breakers over blind retries",
          detail:
            "Downstream failures (Bedrock throttling, partner API errors) trip a circuit breaker with a graceful fallback instead of retrying into an outage — cut customer-impacting failures by 30%.",
        },
      ],
      stack: ["AWS Lambda", "Step Functions", "DynamoDB", "SQS", "Amazon Bedrock", "CloudWatch"],
      metrics: [
        { label: "P99 latency", value: "<200ms" },
        { label: "Manual content effort", value: "-68%" },
        { label: "Customer-impacting failures", value: "-30%" },
      ],
      diagram: "aiWorkflow",
    },
    {
      id: "hummingbird",
      name: "Hummingbird",
      company: "Amazon Robotics",
      tagline:
        "Event-driven integration platform moving real-time data between Amazon Robotics systems and external partners.",
      problem:
        "Amazon Robotics systems (Oracle EBS, Kinaxis, PLM, SAP, Proplanner) each spoke a different integration language, and point-to-point connections didn't scale past a handful of partners. New integrations needed to onboard in days, not months, while the platform absorbed 100K+ requests/sec across 300+ API routes per tenant.",
      decisions: [
        {
          title: "EventBridge as the integration bus",
          detail:
            "Partners publish domain events instead of calling each other directly — decoupling producers from consumers so a new downstream system subscribes without touching upstream code.",
        },
        {
          title: "Step Functions per integration workflow",
          detail:
            "Each partner integration is its own orchestrated workflow (validate → transform → route → confirm), isolating failures so one partner's schema quirk can't take down another's pipeline.",
        },
        {
          title: "SQS buffers for backpressure",
          detail:
            "Queues sit between EventBridge and the Lambda consumers so downstream systems with slower processing don't force upstream retries or dropped events during traffic spikes.",
        },
        {
          title: "Self-service onboarding over tickets",
          detail:
            "New tenants configure routes and schemas through a self-service flow instead of filing integration requests — the main lever that cut onboarding time significantly.",
        },
      ],
      stack: ["EventBridge", "Step Functions", "AWS Lambda", "SQS", "Oracle EBS", "SAP"],
      metrics: [
        { label: "Throughput", value: "100K+ req/sec" },
        { label: "API routes / tenant", value: "300+" },
        { label: "Onboarding time", value: "Significantly reduced" },
      ],
      diagram: "hummingbird",
    },
    {
      id: "project-horus",
      name: "Project Horus",
      company: "Amazon Robotics",
      tagline:
        "Automated testing platform that replaced 3,000+ hours of manual business-process testing a year.",
      problem:
        "Business-process workflows across Amazon Robotics were validated manually before releases — slow, inconsistent, and a hard ceiling on release velocity. Running test suites against real-world load meant provisioning workers that sat idle most of the time if done statically.",
      decisions: [
        {
          title: "ECS Fargate worker fleet, not fixed EC2 capacity",
          detail:
            "Test execution runs on auto-scaling Fargate workers that spin up for a suite and disappear after — no idle fleet to pay for between test runs, which is what drove the 93% infrastructure cost reduction.",
        },
        {
          title: "Step Functions as the test orchestrator",
          detail:
            "Suites are modeled as state machines so partial failures (one flaky workflow) don't abort the whole run, and results are aggregated once every branch completes.",
        },
        {
          title: "React dashboard over log-diving",
          detail:
            "A centralized front end surfaces pass/fail trends and flaky-test signal, replacing engineers grepping through CloudWatch logs after every run.",
        },
      ],
      stack: ["ECS Fargate", "Step Functions", "AWS Lambda", "React", "CloudWatch"],
      metrics: [
        { label: "Manual testing saved", value: "3,000+ hrs/yr" },
        { label: "Infra cost", value: "-93%" },
      ],
      diagram: "horus",
    },
  ],

    // =======================
    // 🔹 About Me
    // =======================
    about:
      "Hi, I’m Manikanta Tanniru, a Software Engineer with 6+ years building high-scale backend, microservices, and AI-powered platforms. I specialize in Java/Spring Boot microservices, event-driven systems with Kafka, production LLM integration, and cloud-native system design. Currently an AI Software Engineer at VeroTX Networks, I build agent-orchestrated AI workflows and low-latency serverless systems on AWS. Previously at Amazon Robotics, I worked on Hummingbird, Horus, and Mockingbird — building integrations across enterprise systems and improving automation at scale. I enjoy translating complex business problems into measurable efficiency, cost, and productivity gains.",
    // =======================
    // 🔹 Contact Info
    // =======================
    email: "tannirumanikanta1996@gmail.com",
    linkedin: "https://www.linkedin.com/in/manikanta-tanniru",
    github: "https://github.com/manikantaTanniru"
  };
  
  export default portfolio;
