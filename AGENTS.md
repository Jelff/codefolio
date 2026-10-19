# Diretrizes do Codefolio

Portfólio profissional em React 19, TypeScript, Tailwind CSS 4 e Vite.
A interface ainda é uma base inicial; sua evolução deve preservar uma identidade
editorial minimalista, com foco no conteúdo e na legibilidade.

## Arquitetura e componentes

- `src/main.tsx` inicializa o React em `StrictMode` e importa o CSS global.
- `src/App.tsx` compõe a página. Extraia seções e elementos reutilizáveis conforme
  a interface crescer, evitando concentrar toda a implementação nesse arquivo.
- `src/index.css` importa Tailwind e abriga estilos globais e tokens compartilhados
  via `@theme` quando necessários. `index.html` é a entrada HTML.
- Crie `src/components/` para componentes/seções e `src/assets/` para recursos
  importados conforme necessário; essas pastas ainda não existem. Separe dados
  e hooks em módulos de `src/` quando isso simplificar os componentes.
- Reutilize padrões recorrentes, como títulos, links e cartões, usando composição
  e props tipadas. Renderize listas a partir de dados com chaves estáveis; evite
  duplicação de JSX, abstrações prematuras e pastas vazias.
- Mantenha estado próximo de quem o usa e derive valores quando possível.
  Reserve efeitos para sincronização externa e respeite as regras de hooks.
- `scripts/` contém verificações e pipeline; `.github/workflows/ci.yml` define CI.
  Não edite artefatos de `dist/` nem relatórios de `reports/jscpd/`.

## Identidade visual e responsividade

- Preserve hierarquia tipográfica clara, espaço em branco generoso, alinhamentos
  consistentes, paleta neutra e uso contido de cor. Evite ornamentação excessiva.
- Ao definir fontes, cores, espaçamentos e larguras, centralize valores recorrentes
  e reutilize-os. Não introduza estilos divergentes entre seções sem necessidade.
- Use utilitários Tailwind nos componentes e CSS global para regras compartilhadas.
  Evite bibliotecas de UI e efeitos que descaracterizem a proposta editorial.
- Implemente primeiro para telas pequenas; adapte colunas, tipografia e espaços
  com os breakpoints do Tailwind conforme o conteúdo exigir.
- Prefira Grid/Flex, larguras fluidas e limites de leitura. Evite dimensões fixas
  que cortem conteúdo ou provoquem rolagem horizontal.
- Verifique telas pequenas, médias e grandes, textos longos e zoom de 200%,
  preservando ordem de leitura e acesso a todas as ações.

## Acessibilidade e animações

- Use HTML semântico, regiões de navegação e títulos hierárquicos com um `h1`
  principal. Links navegam; botões executam ações. Prefira controles nativos.
- Garanta teclado, foco visível, nomes acessíveis e rótulos de formulários.
  Não remova o contorno de foco sem alternativa equivalente.
- Mantenha contraste WCAG AA e não comunique estados apenas por cor. Informações
  em hover também devem estar disponíveis por foco/toque. Use texto alternativo
  em imagens informativas e `alt=""` nas decorativas.
- Use animações discretas e funcionais, preferindo CSS e `transform`/`opacity`.
  Evite `transition-all`, movimento contínuo e mudanças de layout durante efeitos.
- Respeite `prefers-reduced-motion` com `motion-reduce`/`motion-safe`; conteúdo
  e ações devem continuar disponíveis sem animação.

## Código, dependências e performance

- Use componentes funcionais, ES modules e TypeScript. Evite `any`, coerções
  inseguras e desativações de regras; respeite as verificações estritas existentes.
- Use PascalCase para componentes/arquivos, camelCase para funções/variáveis
  e prefixo `use` para hooks. Mantenha módulos com responsabilidade clara.
- Siga Prettier: dois espaços, aspas duplas, ponto e vírgula e largura de 80
  caracteres. Deixe o plugin Tailwind ordenar as classes.
- Prefira React, APIs nativas e ferramentas existentes. Adicione dependências
  apenas para necessidades concretas, justificando a escolha e atualizando
  `package-lock.json`. Não introduza bibliotecas por conveniência pontual.
- Otimize imagens e reserve suas dimensões. Carregue imagens fora da primeira
  tela sob demanda, sem atrasar a imagem principal. Evite scripts e recursos pesados.
- Use evidências de custo para justificar memoização e carregamento dinâmico;
  não acrescente otimizações que só aumentem a complexidade.

## Comandos e validação

Use Node.js 24 (`nvm use`, conforme `.nvmrc`) e npm.

- `npm ci`: instala dependências pelo lockfile.
- `npm run dev` (ou `npm start`): inicia Vite; `npm run preview`: serve o build.
- `npm run build`: executa `tsc -b` e gera o bundle de produção.
- `npm run type-check:quick`, `npm run type-check:full` e
  `npm run type-check:strict`: verificações TypeScript base, estendida e estrita.
- `npm run lint:check`: executa ESLint sem tolerância a warnings.
- `npm run format:check` / `npm run format`: verifica/aplica Prettier em `src/`;
  esses scripts não abrangem este `AGENTS.md` na raiz.
- `npm run duplication:check`: verifica duplicação em `src/`, com limite de 10%.
- `npm run quality:check`: reúne TypeScript, lint, formatação e duplicação.
- Após mudanças de código/configuração, execute `npm run ci:local`: instala
  dependências, executa todas as verificações e o build. É o mesmo pipeline da CI
  em `main` e `develop`. Corrija falhas e relate verificações não concluídas.
- Para alterações apenas documentais, revise o diff e confira caminhos e comandos
  no repositório. Para alterações visuais/interativas, valide também no navegador
  responsividade, teclado, foco e redução de movimento.
- Não há runner de testes nem `npm test` configurados. Ao introduzir testes,
  configure explicitamente o runner e sua integração ao pipeline.
- Use commits focados com `feat:`, `refactor:` ou `chore:`. PRs devem explicar
  resultado e validações, referenciar issues pertinentes e incluir capturas para
  mudanças visuais. Preserve alterações existentes fora do escopo solicitado.
