import * as english from "./profile";
import { projects as englishProjects, type Project } from "./projects";

export const personal: typeof english.personal = {
  ...english.personal,
  role: "Engenheiro de Software · Desenvolvedor Full Stack",
  introduction:
    "Desenvolvo produtos digitais confiáveis, unindo engenharia full stack, inteligência artificial e boas práticas de software.",
  location: "Natal, RN — Brasil",
  resume: "/jefferson-mendonca-resume-pt.pdf",
  about: [
    "Sou Jefferson Mendonça, engenheiro de software com experiência em desenvolvimento web e mobile, inteligência artificial e automação. Atuo do frontend ao backend, com foco em qualidade de código, interfaces claras e sistemas confiáveis.",
    "Meu trabalho conecta interfaces aos sistemas que as tornam úteis: conhecimento institucional por meio de geração aumentada por recuperação (RAG), respostas de IA em tempo real, serviços backend e fluxos automatizados de entrega. Participo de decisões de arquitetura e desenvolvo com React, TypeScript e NestJS.",
    "A qualidade também está na forma como uma equipe trabalha. Defino padrões de desenvolvimento, documento processos de entrega e utilizo testes de ponta a ponta para validar jornadas reais. Experiências anteriores com sistemas públicos e aplicativos móveis me ensinaram a adaptar essas práticas a diferentes produtos e pessoas.",
  ],
  philosophy:
    "Interfaces bem pensadas. Sistemas confiáveis. Padrões de engenharia compartilhados.",
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
  items: items.map((item) => skillTranslations[item] ?? item),
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
      "Conectando conhecimento institucional a assistentes conversacionais por meio de geração aumentada por recuperação.",
    role: "Desenvolvimento full stack · Integrações de IA · CI/CD",
    sections: [
      {
        title: "Contexto e propósito",
        body: "Desenvolvido no Ambiente de Inovação Tecnológica do Senac RN, o Sofia IA Hub leva conhecimento institucional a assistentes conversacionais. Seu propósito é conectar esses assistentes às informações da organização por meio de geração aumentada por recuperação (RAG).",
      },
      {
        title: "Minha contribuição",
        body: "Desenvolvi a plataforma atuando em funcionalidades frontend, integrações backend, fluxos de IA e processos de CI/CD. Meu trabalho conectou a experiência do usuário aos serviços que processam e entregam respostas de inteligência artificial.",
      },
      {
        title: "Engenharia da solução",
        body: "A stack documentada combina React e TypeScript no frontend, NestJS e PostgreSQL no backend, RAG para recuperação de conhecimento institucional e Docker. O currículo também descreve decisões de arquitetura em camadas, respostas de IA em tempo real e entregas automatizadas como parte da minha atuação no Senac.",
      },
      {
        title: "Foco técnico",
        body: "A implementação reuniu frontend, backend e serviços de processamento de IA. Conectar essas partes, lidar com respostas em streaming e construir fluxos de entrega reproduzíveis foram áreas centrais do trabalho. Os detalhes das escolhas técnicas ainda não estão documentados neste estudo de caso.",
      },
      {
        title: "Reconhecimento e impacto",
        body: "O Sofia IA Hub conquistou o primeiro lugar estadual e o quarto lugar nacional no Prêmio IEL de Talentos 2026. Ele integra as soluções institucionais que desenvolvi no Senac RN, cujo alcance conjunto ultrapassa 5.000 usuários; esse número não representa a quantidade de usuários exclusiva do Sofia.",
      },
    ],
    editorialNote:
      "Estudo de caso baseado no currículo profissional. Datas do projeto, diagramas de arquitetura, detalhes das escolhas técnicas e links públicos de repositórios ou demonstrações não foram fornecidos. Materiais técnicos adicionais aguardam documentação.",
  },
  "direito-ai": {
    period: "Data não documentada",
    category: "Consulta jurídica com IA",
    summary:
      "Um assistente de IA full stack para consultas trabalhistas, combinando análise de documentos e acesso autenticado.",
    role: "Desenvolvimento full stack",
    sections: [
      {
        title: "Contexto e propósito",
        body: "O DireitoAI é uma aplicação de inteligência artificial para consultas jurídicas trabalhistas. O projeto reúne geração aumentada por recuperação e análise de documentos em uma experiência full stack de consulta a informações jurídicas.",
      },
      {
        title: "Minha contribuição",
        body: "Desenvolvi a aplicação full stack, incluindo autenticação Gov.br, JWT, análise de documentos e pipelines automatizados. O trabalho abrange a interface, as integrações backend e o fluxo de entrega.",
      },
      {
        title: "Engenharia da solução",
        body: "O frontend utiliza React e o backend, Node.js. A solução documentada utiliza RAG, autenticação Gov.br e JWT, com Docker e CI/CD para entregas automatizadas. O currículo não especifica a infraestrutura de recuperação nem o provedor do modelo de IA.",
      },
      {
        title: "Foco técnico",
        body: "O escopo documentado combina acesso autenticado, processamento de documentos e consultas assistidas por IA. Decisões detalhadas de segurança, avaliação da recuperação e topologia de implantação ainda precisam ser documentadas; nenhuma implementação específica é presumida aqui.",
      },
      {
        title: "Resultado",
        body: "Foi desenvolvida uma aplicação full stack de IA para consultas jurídicas trabalhistas. Números de adoção, resultados mensurados e informações de lançamento público não constam no currículo de referência.",
      },
    ],
    editorialNote:
      "Estudo de caso baseado no currículo profissional. Datas do projeto, capturas de tela, resultados mensurados e links públicos de repositórios ou demonstrações não foram fornecidos. Materiais técnicos adicionais aguardam documentação.",
  },
};
export const projects: Project[] = englishProjects.map((project) => ({
  ...project,
  ...translatedProjects[project.slug],
}));
