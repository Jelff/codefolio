interface CaseSection {
  title: string;
  body: string;
}
export interface Project {
  slug: string;
  name: string;
  period?: string;
  category: string;
  summary: string;
  role: string;
  technologies: string[];
  sections: CaseSection[];
}
// Publish only supplied project facts; omit unknown dates and unavailable links.
export const projects: Project[] = [
  {
    slug: "sofia-ia-hub",
    name: "Sofia IA Hub",
    period: "Recognized in 2026",
    category: "Institutional AI platform",
    summary:
      "An institutional AI platform that connects conversational assistants to organizational knowledge through retrieval-augmented generation (RAG).",
    role: "Full-stack development · AI integrations · CI/CD",
    technologies: [
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "RAG",
      "Docker",
      "GitHub Actions (CI/CD)",
      "Playwright (E2E)",
    ],
    sections: [
      {
        title: "Context & purpose",
        body: "Developed at Senac RN’s Technology Innovation Environment, Sofia IA Hub connects conversational assistants to institutional knowledge. Retrieval-augmented generation (RAG) brings organizational information into AI-assisted queries. I also defined and implemented the platform’s continuous integration and delivery (CI/CD) processes.",
      },
      {
        title: "My contribution",
        body: "I worked across the frontend, backend integrations, AI workflows and CI/CD processes, connecting the interface to the services that process and deliver responses.",
      },
      {
        title: "Engineering the solution",
        body: "The platform combines React and TypeScript on the frontend, NestJS and PostgreSQL on the backend, and RAG for institutional knowledge retrieval. Docker supports containerization, GitHub Actions workflows automate CI/CD pipelines, and Playwright supports end-to-end testing.",
      },
      {
        title: "Recognition",
        body: "Sofia IA Hub earned first place at state level and fourth place nationally in the 2026 IEL Talent Award, recognizing the work on institutional artificial intelligence.",
      },
    ],
  },
  {
    slug: "direito-ai",
    name: "DireitoAI",
    category: "AI-assisted legal research",
    summary:
      "An AI assistant for labor-law queries, with document analysis and authenticated access.",
    role: "Full-stack development",
    technologies: ["React", "Node.js", "RAG", "JWT", "Docker", "CI/CD"],
    sections: [
      {
        title: "Context & purpose",
        body: "DireitoAI supports labor-law queries through artificial intelligence. The application combines retrieval-augmented generation (RAG) and document analysis in an authenticated experience.",
      },
      {
        title: "My contribution",
        body: "I developed the frontend and backend integrations, including gov.br authentication, JWT, document analysis and automated delivery pipelines.",
      },
      {
        title: "Engineering the solution",
        body: "React provides the frontend and Node.js supports the backend. The solution uses RAG for AI-assisted queries, gov.br and JWT for authentication, and Docker and CI/CD in the delivery workflow.",
      },
      {
        title: "Outcome",
        body: "The result is a full-stack application that brings authenticated access, document analysis and AI-assisted labor-law queries into one experience.",
      },
    ],
  },
];
