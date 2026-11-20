// portfolio.js
const portfolio = {
    // =======================
    // 🔹 Personal Information
    // =======================
    name: "Manikanta Tanniru",
    title: "Software Engineer | Backend & Distributed Systems",
    subTitle:
      "Half logic, half caffeine, but fully committed to making weird ideas real.",
    email: "tanniru.manikanta96@gmail.com",
    phone: "+1 (408)650-2162",
    location: "San Jose, California, USA",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/manikanta-tanniru-380239252/",
      github: "https://github.com/manikantaTanniru",
    },
  
    // =======================
    // 🔹 Impact highlights (hero stats)
    // =======================
    impact: [
      { value: 3000, unit: "+ hrs", label: "of manual testing eliminated each year by Project Horus", source: "Amazon Robotics" },
      { prefix: "<", value: 200, unit: "ms", label: "P99 latency held at peak on serverless systems", source: "VeroTX Networks" },
      { value: 30, unit: "%", label: "fewer customer-impacting failures via retries & circuit breakers", source: "VeroTX Networks" },
      { value: 40, unit: "%", label: "less manual campaign setup through workflow automation", source: "DarioHealth" },
    ],

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
        title: "Software Engineer",
        company: "Walmart Global Tech, Sunnyvale, CA",
        duration: "Aug 2026 – Present",
        details: [
          "Developing and maintaining Java 17 and Spring Boot microservices supporting Walmart's Last Mile Delivery platform and driver performance metrics.",
          "Working on backend microservices that process driver trip events and calculate performance metrics for delivery operations.",
          "Contributing to the migration of the Driver Metrics platform from myMetrics 1.0 to myMetrics 2.0, analyzing existing business logic, event contracts, and calculation workflows.",
          "Analyzing the end-to-end Driver Standards Service (DSS) event-processing pipeline, including event consumption, prevalidation, conversion, mapping, validation, extraction, enrichment, and metrics aggregation.",
          "Investigating Cancellation Rate (CR) and On-Time Arrival (OTA) calculations across driver trip scenarios, including cancellations, reschedules, completed trips, and trip-status changes.",
          "Debugging Kafka-based event-processing workflows to identify discrepancies between incoming trip events, calculated driver metrics, and persisted records in Azure Cosmos DB.",
          "Troubleshooting missing CR/OTA metrics caused by cancellation reason-code mismatches, event contract changes, trip-status inconsistencies, and validation logic.",
          "Collaborating with cross-functional engineering and testing teams to investigate failing scenarios, validate event payloads, and align backend processing logic with updated business requirements.",
          "Supporting backend debugging and API validation using Java, Spring Boot, REST APIs, and event payload analysis to improve the reliability of driver performance calculations.",
        ],
      },
      {
        title: "AI Software Engineer",
        company: "VeroTX Networks, San Jose, CA",
        duration: "May 2026 – July 2026",
        details: [
          "Designed, built, tested, deployed, and operated large-scale backend services and distributed applications, owning functionality throughout the complete software development lifecycle.",
          "Architected low-latency, highly available serverless and microservices-based systems using AWS Lambda, DynamoDB, SQS, and Step Functions, maintaining P99 latency under 200 ms during peak workloads.",
          "Designed scalable service architectures using established software design patterns for fault tolerance, asynchronous processing, extensibility, and failure isolation.",
          "Designed and developed high-throughput REST APIs using Java, Node.js, and TypeScript, incorporating validation, idempotency, error handling, and maintainable API contracts.",
          "Applied distributed-system reliability patterns including timeouts, retries, circuit breakers, graceful fallbacks, and failure isolation, reducing customer-impacting failures by 30%.",
          "Designed secure, versioned persistence solutions using DynamoDB, supporting millions of artifacts, workflow approvals, and audit records with IAM-based access controls.",
          "Performed production troubleshooting and root-cause analysis, identifying systemic issues and implementing long-term corrective actions.",
          "Implemented agent-orchestrated AI workflows with throttling, retries, evaluation, approval, and failure isolation while safely supporting hundreds of concurrent requests.",
        ],
      },
      {
        title: "SDE II",
        company: "Amazon, Sunnyvale, CA",
        duration: "Feb 2025 – May 2026",
        details: [
          "Designed, developed, tested, deployed, and operated distributed software systems for Amazon Robotics, from requirements and architecture through release and production support.",
          "Worked on Hummingbird, an event-driven integration platform enabling reliable data exchange between Amazon Robotics applications and enterprise systems.",
          "Designed and implemented workflow-based integrations between Oracle EBS, Kinaxis, PLM, SAP, Proplanner, and downstream Amazon systems.",
          "Built scalable AWS orchestration pipelines using Step Functions, EventBridge, Lambda, SQS, DynamoDB, S3, and CloudWatch, supporting resilient asynchronous processing.",
          "Applied distributed-system principles including asynchronous processing, loose coupling, retries, idempotency, failure handling, and service isolation.",
          "Optimized backend services, database queries, and integration workflows to improve performance, response latency, throughput, and reliability.",
          "Worked on the end-to-end architecture and implementation of Project Horus, an automated testing platform that reduced manual business-process testing by more than 3,000 hours annually.",
          "Designed and helped implement a user-facing portal for the Mockingbird access automation platform, giving users a centralized view of teams, application access, and authorization status.",
          "Optimized distributed backend flows between Self-Service Lambda, Connector Lambdas, and DeprovisionService, improving reliability of automated access-management workflows.",
        ],
      },
      {
        title: "Full Stack Developer",
        company: "DarioHealth, USA",
        duration: "Dec 2023 – Feb 2025",
        details: [
          "Designed and developed production backend and full-stack applications using Java, Node.js, REST APIs, React, and AWS for complex healthcare and enterprise workflows.",
          "Designed scalable backend services using microservices and RESTful architecture, applying reusable design patterns and clean service boundaries.",
          "Built backend services for automated campaign and content workflows, reducing manual campaign setup effort by approximately 40%.",
          "Built event-driven and asynchronous processing workflows using AWS services to improve scalability and decouple application components.",
          "Developed AWS Lambda and Step Functions automation for multi-stage generation, validation, and approval workflows.",
        ],
      },
      {
        title: "Software Developer",
        company: "Veritas Software, India",
        duration: "June 2019 – Jan 2021",
        details: [
          "Designed and developed backend applications and REST APIs using Java, Python, Django, and Flask, including authentication and database integrations.",
          "Applied Java 8 Streams, Lambda expressions, multithreading, and Concurrency APIs to improve application performance, maintainability, and reliability.",
          "Designed data persistence and versioning solutions using DynamoDB and relational databases, supporting content iterations, approvals, and audit history.",
          "Investigated application defects and production issues, performed root-cause analysis, and implemented fixes to improve system reliability.",
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
      "Hi, I’m Manikanta Tanniru, a Software Development Engineer with 5+ years designing, building, and maintaining scalable distributed systems and cloud-native applications. I specialize in Java/Spring Boot microservices, REST APIs, event-driven architectures with Apache Kafka, and system design. Currently a Software Engineer at Walmart Global Tech, I work on Last Mile Delivery backend microservices and driver performance metrics, including the myMetrics 2.0 migration. Previously I built agent-orchestrated AI workflows and low-latency serverless systems at VeroTX Networks, and at Amazon Robotics I worked on Hummingbird, Project Horus, and Mockingbird, building enterprise integrations and automation at scale.",
    // =======================
    // 🔹 Contact Info
    // =======================
    email: "tanniru.manikanta96@gmail.com",
    linkedin: "https://www.linkedin.com/in/manikanta-tanniru",
    github: "https://github.com/manikantaTanniru"
  };
  
  export default portfolio;
