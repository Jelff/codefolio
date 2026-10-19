# Codefolio

Base mínima para implementar um portfólio com React, TypeScript e Tailwind CSS, usando Vite.

## Requisitos

- Node.js 24 ou superior (com nvm: `nvm use`)
- npm

## Desenvolvimento

```bash
npm ci
npm run dev
```

Abra o endereço informado pelo Vite (por padrão, http://localhost:5173).
`npm start` também inicia o servidor de desenvolvimento.

## Comandos

- `npm run typecheck`: verifica os tipos da aplicação e da configuração.
- `npm run build`: executa `tsc -b` e gera a versão de produção em `dist/`.
- `npm run preview`: serve o build localmente para conferência.

## Estrutura

- `src/App.tsx`: ponto de partida da interface, com um placeholder mínimo.
- `src/main.tsx`: inicialização do React.
- `src/index.css`: importação do Tailwind CSS e ponto de entrada dos estilos globais.
- `vite.config.ts`: integração do React e do Tailwind CSS com Vite.
- `index.html`: documento HTML principal.

O Tailwind CSS usa o plugin oficial para Vite e configuração via CSS.
Adicione componentes, seções e recursos conforme a implementação do portfólio.
## Pipeline de qualidade

O GitHub Actions executa em Ubuntu com Node.js 24 nos pushes para `main` e
`develop` e na abertura, atualização e reabertura de PRs destinados a elas.
Usa cache do npm e `npm ci`, respeitando o lockfile.

A sequência obrigatória é **qualidade → build → consolidação do resultado**.
O build depende da aprovação da qualidade; a consolidação reprova quando algum
job obrigatório falha, é cancelado ou não é executado.

- `npm run type-check:quick`: TypeScript sem emissão com `tsconfig.json`.
- `npm run type-check:full`: analisa a configuração base e a estrita, imprime os
  diagnósticos e reprova erros ou mensagens de depreciação emitidas pelo compilador.
  Não identifica todas as APIs marcadas como obsoletas.
- `npm run type-check:strict`: usa `tsconfig.strict.json`, incluindo validações
  de índices, propriedades opcionais, retornos, variáveis e parâmetros não utilizados.
- `npm run lint:check`: regras recomendadas de JavaScript, TypeScript, React Hooks
  e React Refresh, sem permitir avisos ou diretivas de desativação desnecessárias.
- `npm run format:check`: confere TS, TSX, JS, JSX, JSON, CSS e Markdown em `src/`.
  Usa dois espaços, aspas duplas, ponto e vírgula, largura de 80 e ordenação de
  classes Tailwind. `npm run format` aplica a formatação.
- `npm run duplication:check`: jscpd em `src/`, mínimo de cinco linhas e 50 tokens,
  com limite de 10% de duplicação. Relatórios de console e JSON em `reports/jscpd/`;
  o CI publica o relatório como artefato, inclusive se o limite for excedido.
- `npm run build`: compilação TypeScript e bundle Vite em `dist/`.

Execute `npm run ci:local` para reproduzir o pipeline FULL do Actions.
O próprio pipeline instala as dependências com `npm ci` e executa oito etapas:
instalação, três análises TypeScript, ESLint, Prettier, duplicação e build.
A saída inclui cores (desative com `NO_COLOR=1`), tempos reais, progresso a cada
15 segundos e relatório final. Falhas obrigatórias interrompem a execução e
retornam código diferente de zero; o relatório lista somente etapas executadas.
No Actions, as etapas aparecem em grupos de logs dentro do job Pipeline FULL.
O resumo TypeScript contabiliza diagnósticos por configuração; um mesmo problema
pode aparecer nas configurações base e estrita.
O limite de duplicação é o mesmo localmente e no CI. A análise completa já inclui
as verificações estritas; a etapa separada é mantida conforme o modelo do pipeline.

Este pipeline não executa testes unitários, de integração, end-to-end ou Trivy.
