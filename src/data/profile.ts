export const personal = {
  name: "Jefferson B. Mendonça",
  role: "Software Engineer · Full Stack Developer",
  introduction:
    "I’m Jefferson Mendonça, a software engineer based in Natal, Brazil. I build full-stack applications with React, TypeScript and NestJS. At Senac RN, I connect artificial intelligence with institutional knowledge to create useful tools for people’s everyday work.",
  location: "Natal, RN — Brazil",
  email: "jelffdev@gmail.com",
  resume: "/jefferson-mendonca-resume-en.pdf",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jelff" },
    { label: "GitHub", href: "https://github.com/Jelff" },
  ],
  about: [
    "I’m a software engineer based in Natal, Brazil, working across frontend, backend and AI-powered applications. At Senac RN’s Technology Innovation Environment, I develop institutional software and help shape the engineering practices behind it.",
    "My work connects interfaces to the systems that make them useful: institutional knowledge through retrieval-augmented generation, real-time AI responses, backend services and automated delivery pipelines. I take part in architectural decisions and build with React, TypeScript and NestJS.",
    "Quality also lives in how a team works. I establish development standards, document delivery processes and use end-to-end tests to validate real user journeys. Earlier roles in public-sector web systems and mobile applications taught me to adapt these practices to different products and people.",
  ],
  philosophy:
    "Thoughtful interfaces. Dependable systems. Shared engineering standards.",
};

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  practices: string;
}
export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Senac RN · Technology Innovation Environment",
    period: "2024 — Present",
    description:
      "Develop institutional software used by more than 5,000 people, including Sofia IA Hub. Build frontend and backend features, contribute to layered architecture decisions and integrate real-time AI response streaming. Standardize previously decentralized delivery processes through documented workflows.",
    practices:
      "React · TypeScript · NestJS · PostgreSQL · Playwright · GitHub Actions · Docker · Code review",
  },
  {
    role: "Mobile Development Intern",
    company: "Inter Sistemas",
    period: "2024",
    description:
      "Developed and maintained two transport and healthcare applications used by more than 1,000 people. Prototyped interfaces, implemented features, fixed existing issues and established a design system. Integrated mobile applications with REST APIs.",
    practices: "Flutter · Dart · REST APIs · Design systems",
  },
  {
    role: "Frontend Development Intern",
    company: "DTI · SEAP/RN",
    period: "2021 — 2023",
    description:
      "Developed institutional web systems used by approximately 1,500 public servants. Built reusable components, improved interfaces and integrated APIs to support the ongoing evolution of these systems.",
    practices:
      "Angular · TypeScript · HTML · CSS · Component-based development",
  },
  {
    role: "Junior Frontend Developer",
    company: "Wunderman Thompson Technology Brasil",
    period: "2021",
    description:
      "Developed frontend experiences for Pfizer digital campaigns, implementing responsive interfaces with attention to compatibility across browsers.",
    practices: "HTML · CSS · JavaScript · Responsive design",
  },
];

export const education = {
  degree: "Degree in Systems Analysis and Development",
  institution: "Federal Institute of Rio Grande do Norte · IFRN",
  period: "Expected completion · 2026",
  qualification: "Undergraduate technology degree (TADS)",
};
export const skills: { category: string; items: string[] }[] = [
  {
    category: "Frontend engineering",
    items: [
      "React",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "Material UI",
      "Bootstrap",
      "Framer Motion",
    ],
  },
  {
    category: "Backend & data",
    items: [
      "Node.js",
      "NestJS",
      "Spring Boot",
      "Java",
      "Python",
      "REST APIs",
      "JWT",
      "WebSockets",
      "SQL",
      "PostgreSQL",
      "SQL Server",
    ],
  },
  {
    category: "Software quality",
    items: [
      "Playwright",
      "End-to-end testing",
      "Clean Code",
      "SOLID",
      "Design patterns",
      "Layered architecture",
      "Code review",
    ],
  },
  {
    category: "DevOps & collaboration",
    items: [
      "Docker & Docker Compose",
      "GitHub Actions",
      "CI/CD",
      "Git & Git Flow",
      "Conventional Commits",
      "Linux",
      "npm",
      "Gradle",
      "Maven",
      "Agile",
    ],
  },
  {
    category: "Artificial intelligence",
    items: [
      "Retrieval-augmented generation (RAG)",
      "Conversational assistants",
      "Real-time response streaming",
      "Document analysis",
    ],
  },
  {
    category: "Mobile & embedded systems",
    items: [
      "Flutter",
      "Dart",
      "ESP32",
      "C++",
      "PlatformIO",
      "Sensor integration & monitoring",
      "Data acquisition",
    ],
  },
];
export const recognition = {
  title: "IEL Talent Award",
  year: "2026",
  project: "Sofia IA Hub",
  result: "1st place · State level / 4th place · National level",
  description:
    "Recognition for the institutional AI platform connecting conversational assistants to organizational knowledge.",
};
export const languages: string =
  "Portuguese · Native. English · Advanced reading and writing; intermediate spoken communication.";
