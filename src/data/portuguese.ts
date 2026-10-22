import * as english from "./profile";
import { projects as englishProjects, type Project } from "./projects";

export const personal: typeof english.personal = {
  ...english.personal,
  role: "Engenheiro de Software · Desenvolvedor Full Stack",
  introduction:
    "Desenvolvo aplicações web com React, TypeScript e NestJS, conectando interfaces, serviços e inteligência artificial.",
  location: "Natal, RN — Brasil",
  resume: "/jefferson-mendonca-resume-pt.pdf",
  about: [
    "Sou Jefferson Mendonça, engenheiro de software em Natal, RN. Atuo no desenvolvimento full stack de aplicações web, com experiência também em mobile, inteligência artificial e automação.",
    "No Senac RN, desenvolvo soluções institucionais que conectam pessoas à informação. Trabalho com React, TypeScript e NestJS, integrando serviços backend, respostas de IA em tempo real e recuperação de conhecimento com RAG.",
    "Além da implementação, contribuo para decisões de arquitetura, padrões de desenvolvimento e processos de entrega contínua. Ênfase na revisão do código, documentação e testes de ponta a ponta para dar suporte à evolução dos sistemas e ao trabalho da equipe.",
  ],
  philosophy:
    "Interfaces bem pensadas. Sistemas confiáveis. Padrões de qualidade compartilhados.",
};
export const experience: typeof english.experience = [
  {
    role: "Engenheiro de Software",
    company: "Senac RN · Ambiente de Inovação Tecnológica",
    period: "2024 — Atual",
    description:
      "Desenvolvo soluções institucionais utilizadas por mais de 5.000 pessoas, incluindo o Sofia IA Hub. Implemento funcionalidades frontend e backend, contribuo para decisões de arquitetura em camadas e integro respostas de IA em tempo real. Padronizo processos de entrega antes descentralizados por meio de fluxos documentados.",
    practices:
      "React · TypeScript · NestJS · PostgreSQL · Playwright · GitHub Actions · Docker · Revisão de código",
  },
  {
    role: "Estagiário em Desenvolvimento Mobile",
    company: "Inter Sistemas",
    period: "2024",
    description:
      "Desenvolvi e mantive dois aplicativos de transporte e saúde utilizados por mais de 1.000 pessoas. Prototipei interfaces, implementei funcionalidades, corrigi problemas existentes e estabeleci um design system. Integrei os aplicativos a serviços backend por APIs REST.",
    practices: "Flutter · Dart · APIs REST · Design systems",
  },
  {
    role: "Estagiário em Desenvolvimento Frontend",
    company: "DTI · SEAP/RN",
    period: "2021 — 2023",
    description:
      "Desenvolvi sistemas web institucionais utilizados por aproximadamente 1.500 servidores públicos. Criei componentes reutilizáveis, melhorei interfaces e integrei APIs para apoiar a evolução contínua dos sistemas.",
    practices:
      "Angular · TypeScript · HTML · CSS · Desenvolvimento baseado em componentes",
  },
  {
    role: "Desenvolvedor Frontend Júnior",
    company: "Wunderman Thompson Technology Brasil",
    period: "2021",
    description:
      "Desenvolvi interfaces para campanhas digitais da Pfizer, implementando experiências responsivas com atenção à compatibilidade entre navegadores.",
    practices: "HTML · CSS · JavaScript · Design responsivo",
  },
];
export const education: typeof english.education = {
  degree: "Análise e Desenvolvimento de Sistemas",
  institution: "Instituto Federal do Rio Grande do Norte · IFRN",
  period: "Conclusão prevista · 2026",
  qualification: "Curso superior de tecnologia (TADS)",
};
const skillTranslations: Record<string, string> = {
  "Frontend engineering": "Engenharia frontend",
  "Backend & data": "Backend e dados",
  "Software quality": "Qualidade de software",
  "DevOps & collaboration": "DevOps e colaboração",
  "Artificial intelligence": "Inteligência artificial",
  "Mobile & embedded systems": "Mobile e sistemas embarcados",
  "REST APIs": "APIs REST",
  "End-to-end testing": "Testes de ponta a ponta",
  "Clean Code": "Código limpo",
  "Design patterns": "Padrões de projeto",
  "Layered architecture": "Arquitetura em camadas",
  "Code review": "Revisão de código",
  Agile: "Métodos ágeis",
  "Retrieval-augmented generation (RAG)":
    "Geração aumentada por recuperação (RAG)",
  "Conversational assistants": "Assistentes conversacionais",
  "Real-time response streaming": "Respostas em tempo real",
  "Document analysis": "Análise de documentos",
  "Sensor integration & monitoring": "Integração e monitoramento de sensores",
  "Data acquisition": "Aquisição de dados",
};
export const skills = english.skills.map(({ category, items }) => ({
  category: skillTranslations[category] ?? category,
  items: items.map((item) => ({
    ...item,
    label: skillTranslations[item.label] ?? item.label,
  })),
}));
export const recognition: typeof english.recognition = {
  title: "Prêmio IEL de Talentos",
  year: "2026",
  project: "Sofia IA Hub",
  result: "1º lugar · Estadual / 4º lugar · Nacional",
  description:
    "Reconhecimento pela plataforma institucional de IA que conecta assistentes conversacionais ao conhecimento da organização.",
};
export const languages =
  "Português · Nativo. Inglês · Leitura e escrita avançadas; comunicação verbal intermediária.";
const translatedProjects: Record<
  string,
  Omit<Project, "slug" | "name" | "technologies">
> = {
  "sofia-ia-hub": {
    period: "Reconhecido em 2026",
    category: "Plataforma institucional de IA",
    summary:
      "Uma plataforma que centraliza o uso da Inteligência Artificial e o acesso a informações institucionais e educacionais em um único ambiente digital. Permite a criação de assistentes inteligentes personalizados para consultas, jornadas de aprendizagem e simulações interativas, combinando IA generativa e bases de conhecimento. Voltada para alunos e criadores de assistentes autorizados, a solução reúne acessibilidade, gestão de assistentes e acompanhamento de desempenho, proporcionando uma utilização mais organizada, eficiente e direcionada da Inteligência Artificial dentro da instituição.",
    role: "Desenvolvimento full stack · Integrações de IA · CI/CD",
    sections: [
      {
        title: "Contexto e propósito",
        body: "Desenvolvido no Ambiente de Inovação Tecnológica do Senac RN, o Sofia IA Hub conecta assistentes conversacionais ao conhecimento institucional. A geração aumentada por recuperação (RAG) incorpora informações da organização às consultas com inteligência artificial.",
      },
      {
        title: "Minha contribuição",
        body: "Atuei no frontend, nas integrações backend, nos fluxos de IA e nos processos de CI/CD, conectando a interface aos serviços que processam e entregam as respostas.",
      },
      {
        title: "Engenharia da solução",
        body: "A plataforma combina React e TypeScript no frontend, NestJS e PostgreSQL no backend e RAG para recuperar conhecimento institucional. Docker e CI/CD apoiam o fluxo de entrega da aplicação.",
      },
      {
        title: "Reconhecimento",
        body: "O Sofia IA Hub conquistou o primeiro lugar estadual e o quarto lugar nacional no Prêmio IEL de Talentos 2026, em reconhecimento ao trabalho com inteligência artificial no contexto institucional.",
      },
    ],
  },
  "direito-ai": {
    category: "Consulta jurídica com IA",
    summary:
      "Um assistente de IA para consultas trabalhistas, com análise de documentos e acesso autenticado.",
    role: "Desenvolvimento full stack",
    sections: [
      {
        title: "Contexto e propósito",
        body: "O DireitoAI apoia consultas sobre direito trabalhista com inteligência artificial. A aplicação combina geração aumentada por recuperação (RAG) e análise de documentos em uma experiência com acesso autenticado.",
      },
      {
        title: "Minha contribuição",
        body: "Desenvolvi o frontend e as integrações backend, incluindo autenticação gov.br, JWT, análise de documentos e pipelines de entrega automatizados.",
      },
      {
        title: "Engenharia da solução",
        body: "O frontend utiliza React e o backend, Node.js. A solução reúne RAG nas consultas com IA, gov.br e JWT na autenticação, além de Docker e CI/CD no fluxo de entrega.",
      },
      {
        title: "Resultado",
        body: "O resultado é uma aplicação full stack que reúne acesso autenticado, análise de documentos e consultas trabalhistas com IA em uma única experiência.",
      },
    ],
  },
};
export const projects: Project[] = englishProjects.map((project) => ({
  ...project,
  ...translatedProjects[project.slug],
}));
