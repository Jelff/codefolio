interface CaseSection {
  title: string;
  body: string;
}
export interface Project {
  slug: string;
  name: string;
  period: string;
  category: string;
  summary: string;
  role: string;
  technologies: string[];
  sections: CaseSection[];
  editorialNote: string;
}
// Missing dates, technical details and public URLs are explicitly documented,
// rather than inferred from employment dates or presented as verified facts.
export const projects: Project[] = [
  {
    slug: "sofia-ia-hub",
    name: "Sofia IA Hub",
    period: "Recognized in 2026",
    category: "Institutional AI platform",
    summary:
      "Connecting institutional knowledge to conversational AI assistants through retrieval-augmented generation.",
    role: "Full-stack development · AI integrations · CI/CD",
    technologies: [
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "RAG",
      "Docker",
    ],
    sections: [
      {
        title: "Context & purpose",
        body: "Developed at Senac RN’s Technology Innovation Environment, Sofia IA Hub brings institutional knowledge into conversational assistants. Its purpose is to connect these assistants to organizational information through retrieval-augmented generation (RAG).",
      },
      {
        title: "My contribution",
        body: "I developed the platform across frontend features, backend integrations, AI workflows and CI/CD processes. My work connected the user-facing experience with the services that process and deliver AI responses.",
      },
      {
        title: "Engineering the solution",
        body: "The documented stack combines React and TypeScript on the frontend, NestJS and PostgreSQL on the backend, RAG for institutional knowledge retrieval and Docker. The résumé also describes layered architecture decisions, real-time AI response streaming and automated delivery as part of my work at Senac.",
      },
      {
        title: "Technical focus",
        body: "The implementation brought together frontend, backend and AI processing services. Connecting these parts, handling streamed responses and building repeatable delivery workflows were core areas of engineering work. Detailed implementation trade-offs are not yet documented in this case study.",
      },
      {
        title: "Recognition & impact",
        body: "Sofia IA Hub earned first place at state level and fourth place nationally in the 2026 IEL Talent Award. It is part of the institutional software I developed at Senac RN, whose combined reach exceeds 5,000 users; that figure is not a Sofia-specific user count.",
      },
    ],
    editorialNote:
      "Case study based on the professional résumé. Project dates, architecture diagrams, implementation trade-offs and public repository or demo links are not provided. Additional technical materials are pending documentation.",
  },
  {
    slug: "direito-ai",
    name: "DireitoAI",
    period: "Date not documented",
    category: "AI-assisted legal research",
    summary:
      "A full-stack AI assistant for labor-law queries, combining document analysis and authenticated access.",
    role: "Full-stack development",
    technologies: ["React", "Node.js", "RAG", "JWT", "Docker", "CI/CD"],
    sections: [
      {
        title: "Context & purpose",
        body: "DireitoAI is an AI application for labor-law queries. The project brings retrieval-augmented generation and document analysis into a full-stack experience for consulting legal information.",
      },
      {
        title: "My contribution",
        body: "I developed the full-stack application, including Gov.br authentication, JWT, document analysis and automated pipelines. The work spans the interface, backend integration and delivery workflow.",
      },
      {
        title: "Engineering the solution",
        body: "React provides the frontend and Node.js supports the backend. The documented solution uses RAG, Gov.br authentication and JWT, with Docker and CI/CD for automated delivery. The résumé does not specify the retrieval infrastructure or AI model provider.",
      },
      {
        title: "Technical focus",
        body: "The documented scope combines authenticated access, document processing and AI-assisted queries. Detailed security decisions, retrieval evaluation and deployment topology remain to be documented; no specific implementation is assumed here.",
      },
      {
        title: "Outcome",
        body: "A full-stack AI application for labor-law consultation was developed. Adoption figures, measured outcomes and public release details are not included in the source résumé.",
      },
    ],
    editorialNote:
      "Case study based on the professional résumé. Project dates, screenshots, measured results and public repository or demo links are not provided. Additional technical materials are pending documentation.",
  },
];
