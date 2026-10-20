# CODEFOLIO — CEDAR NIGHT REDESIGN

## 1. OBJETIVO

Realizar o redesign visual e interativo do **Codefolio**, meu portfólio profissional, utilizando a implementação React existente como base.

O objetivo é transformar sua identidade visual e experiência de navegação em uma interface autoral, moderna, fluida e sofisticada, combinando:

- Creative Development.
- Interaction Design.
- Motion UI.
- Editorial Web Design.
- Scroll-Driven Storytelling.
- Microinteractions.
- Advanced Frontend Engineering.

A nova direção visual será denominada **Cedar Night — Warm Kimbie Editorial**.

A experiência deve transmitir personalidade, competência técnica, criatividade e maturidade de engenharia.

Não criar um novo projeto. Evoluir a aplicação existente.

---

## 2. DIREÇÃO CRIATIVA

A proposta é desenvolver uma experiência que combine **design editorial, movimento e interatividade**, sem reproduzir o padrão convencional de portfólios frontend.

O site deverá apresentar:

- Composição visual autoral.
- Tipografia expressiva.
- Hierarquia editorial.
- Elementos gráficos integrados.
- Transições fluidas.
- Microinterações sofisticadas.
- Hovers com personalidade.
- Navegação contínua.
- Apresentações interativas de projetos.
- Movimento coordenado com a rolagem.

Evitar soluções genéricas como:

- Cards arredondados repetidos em todas as seções.
- Layouts previsíveis de texto e imagem.
- Fade-ins excessivos.
- Gradientes e efeitos glow sem propósito.
- Hovers que apenas aumentam a escala.
- Animações independentes sem continuidade visual.

Os elementos devem parecer partes de um único sistema de design.

A experiência deve ser sofisticada sem perder clareza, acessibilidade e desempenho.

---

## 3. REFERÊNCIA DE INTERAÇÃO — MIJOBELLO

Referência principal:

[https://mijobello.com/works/mijobello-old](https://mijobello.com/works/mijobello-old)

Utilizar esse site como referência para compreender e reinterpretar:

### Editorial Grid System

Composições modulares, linhas divisórias, alinhamentos precisos e estruturas editoriais.

### Expressive Typography

Títulos com presença visual, contrastes de escala e tipografia integrada à composição.

### Visual Continuity

Continuidade entre seções, elementos e estados da interface.

### Layered Composition

Sobreposição de elementos, enquadramentos, mockups e composições em camadas.

### Motion-Driven Interaction

Elementos que respondem ao scroll, hover e click por meio de movimentos coordenados.

### Interactive Navigation

Navegação contextual, transições de menus e estados visuais consistentes.

### Microinteraction Consistency

Hovers, indicadores, filtros e botões com uma linguagem de movimento compartilhada.

**Não copiar a paleta de cores, os componentes ou a identidade gráfica do Mijobello.**

A referência serve para orientar a qualidade das interações, a composição e a continuidade visual.

---

## 4. IDENTIDADE VISUAL — CEDAR NIGHT

A identidade será inspirada na personalidade cromática do tema Kimbie Dark do Visual Studio Code.

O conceito é uma interface escura, quente, amadeirada, aconchegante e sofisticada.

A estética deve remeter a:

- Madeira escura.
- Café e espresso.
- Cobre.
- Terracota.
- Areia.
- Tons terrosos.
- Materiais naturais.
- Elegância editorial.

O resultado deve permanecer moderno mas também aparência rústica e ou/vintage mas sem excessivamente.

### 4.1. Paleta oficial

| Token                | Valor     |
| -------------------- | --------- |
| Background Primary   | `#1B1612` |
| Background Secondary | `#241D18` |
| Surface              | `#2D241E` |
| Surface Hover        | `#3A2E26` |
| Text Primary         | `#F2E6D8` |
| Text Secondary       | `#CBB8A3` |
| Text Muted           | `#9C8875` |
| Accent Primary       | `#D98C4A` |
| Accent Secondary     | `#C46A3A` |
| Accent Complementary | `#7A8B5A` |
| Border               | `#4A3B31` |
| Border Subtle        | `#352B24` |

### 4.2. Aplicação

Centralizar a paleta em tokens semânticos, utilizando CSS Custom Properties e Tailwind CSS conforme a versão instalada.

Evitar valores hexadecimais repetidos diretamente nos componentes.

A distribuição cromática deverá seguir:

- Fundo escuro como elemento dominante.
- Texto creme como principal referência tipográfica.
- Tons de areia nas informações secundárias.
- Cobre como destaque interativo.
- Terracota e oliva em aplicações pontuais.
- Linhas discretas para estruturar as composições.

Não utilizar todas as cores igualmente.

Evitar gradientes exagerados, cores neon e efeitos luminosos excessivos.

Verificar contraste e legibilidade em todos os estados.

---

## 5. TIPOGRAFIA E COMPOSIÇÃO

Reavaliar a tipografia e a composição existentes para adequá-las à nova identidade.

Priorizar:

- Expressive Typography.
- Editorial Hierarchy.
- Contraste de escala.
- Ritmo tipográfico.
- Grid consistente.
- Espaçamentos intencionais.
- Linhas estruturais.
- Composições assimétricas quando apropriadas.
- Uso equilibrado de espaços negativos.

A tipografia deverá assumir papel expressivo sem prejudicar a legibilidade.

Não utilizar um único padrão visual para todas as seções.

As composições devem compartilhar a mesma linguagem, mas podem apresentar estruturas diferentes conforme o conteúdo.

---

## 6. MOTION DESIGN SYSTEM

Criar um sistema consistente de movimento para toda a aplicação.

Definir e centralizar, quando apropriado:

- Durations.
- Easing curves.
- Stagger intervals.
- Motion distances.
- Transform scales.
- Reveal patterns.
- Transições de estado.
- Comportamento de entrada e saída.

### 6.1. Motion Choreography

As animações devem possuir relações temporais e espaciais.

Evitar que componentes sejam animados isoladamente sem coordenação.

A experiência deve transmitir a sensação de uma composição visual em transformação.

### 6.2. Easing

Utilizar curvas refinadas e movimentos naturais.

Evitar movimentos excessivamente lineares ou mecânicos.

Diferenciar:

- Feedback imediato.
- Microinterações.
- Transições de navegação.
- Revelações de conteúdo.
- Animações narrativas.

### 6.3. Continuidade

Preservar relações visuais entre estados.

Quando apropriado, utilizar técnicas de FLIP, shared layout transitions, masking e transformações coordenadas.

---

## 7. SCROLL-DRIVEN EXPERIENCE

O scroll será um dos principais elementos interativos do novo Codefolio.

Explorar, quando fizer sentido:

- Scroll-linked timelines.
- ScrollTrigger scrub.
- Scroll pinning.
- Sticky storytelling.
- Progressive reveals.
- Scale transformations.
- Layered transitions.
- Parallax.
- Clip-path reveals.
- Mask-based transitions.
- Sequenciamento de conteúdo.
- Transformações espaciais.
- Mudanças progressivas de composição.

A rolagem poderá controlar diretamente o progresso de determinadas animações.

O objetivo não é apenas revelar elementos quando entram na viewport.

Em seções estratégicas, o próprio scroll deverá participar da apresentação do conteúdo.

Não utilizar animações complexas indiscriminadamente.

Evitar scroll hijacking e comportamentos que retirem o controle natural da navegação.

---

## 8. HOVERS E MICROINTERAÇÕES

Reformular os estados interativos dos componentes.

Considerar:

- Botões.
- Links.
- Menus.
- Cards.
- Imagens.
- Filtros.
- Indicadores.
- Navegação.
- Elementos editoriais.
- Componentes de apresentação dos projetos.

Explorar recursos como:

- Animated underlines.
- Sliding text reveals.
- Text masking.
- Image reveals.
- Transformações sutis.
- Deslocamentos direcionais.
- Transições cromáticas.
- Layout transitions.
- Magnetic interactions, quando apropriado.
- Pointer-following effects, quando justificados.

Não utilizar o mesmo hover em todos os componentes.

Cada comportamento deve refletir sua função e pertencer ao Motion Design System.

---

## 9. NAVEGAÇÃO E CONTINUIDADE VISUAL

Priorizar uma experiência de navegação contínua, predominantemente baseada em scroll e clicks.

Evitar fragmentar o portfólio em várias páginas desnecessárias.

Avaliar a estrutura atual antes de modificar rotas ou mecanismos de navegação.

Explorar:

- Navegação contextual.
- Transições de menu.
- Indicadores de progresso.
- Elementos persistentes.
- Transições entre seções.
- Continuidade espacial.
- Mudanças progressivas de conteúdo.

A navegação deve permanecer intuitiva.

Não adicionar mecanismos interativos complexos apenas pela estética.

Preservar acesso direto às informações e aos projetos relevantes.

---

## 10. APRESENTAÇÃO INTERATIVA DOS PROJETOS

A apresentação dos projetos deverá receber atenção especial.

O objetivo é permitir que o visitante compreenda as funcionalidades e o valor dos sistemas, e não apenas visualize screenshots estáticas.

Considere:

- Interactive Product Showcases.
- Scroll-Driven Demonstrations.
- Interface Walkthroughs.
- Progressive Feature Reveals.
- Device Mockup Animations.
- Interactive UI Previews.
- Media Sequencing.
- Project Storytelling.
- Product Case Studies.
- Cinematic Web Presentations.

Cada projeto poderá possuir uma abordagem específica.

Não desenvolver um único componente genérico para todas as demonstrações.

Analisar o funcionamento e o conteúdo de cada sistema antes de definir sua apresentação.

### 10.1. Conteúdo técnico

Preservar informações sobre:

- Objetivo do projeto.
- Problema resolvido.
- Tecnologias.
- Funcionalidades.
- Participação profissional.
- Responsabilidades.
- Resultados.
- Links relevantes.

A narrativa visual deve complementar essas informações, nunca substituí-las.

### 10.2. Identidade dos projetos

A identidade Cedar Night pertence ao Codefolio.

Cada projeto apresentado deverá preservar sua própria identidade visual.

No caso do Sofia IA Hub, por exemplo:

- Preservar cores originais.
- Preservar logotipo.
- Preservar características reais da interface.
- Demonstrar funcionalidades existentes.
- Não inventar recursos ou resultados.

A apresentação pode utilizar animações, mockups e transições, mas deve manter fidelidade ao produto.

---

## 11. STACK TECNOLÓGICA

Utilizar a arquitetura React existente, priorizando:

- React.
- TypeScript.
- Tailwind CSS.
- CSS moderno.

Ferramentas candidatas:

### GSAP + ScrollTrigger

Para timelines complexas, scroll-driven interactions, pinning e transformações coordenadas.

### Motion for React

Para microinterações, mudanças de estado e transições de layout.

### Lenis

Para suavização de scroll quando tecnicamente adequada.

### SVG e CSS Animations

Para recursos gráficos, efeitos leves e elementos escaláveis.

### Three.js / React Three Fiber

Somente quando recursos tridimensionais justificarem o custo técnico.

Antes de adicionar dependências:

1. Verificar a stack instalada.
2. Analisar possíveis conflitos.
3. Considerar recursos nativos.
4. Justificar a utilização.
5. Preservar compatibilidade.

Não utilizar bibliotecas concorrentes para controlar as mesmas propriedades de animação sem uma razão clara.

---

## 12. RESPONSIVIDADE — MOBILE-FIRST ENGINEERING

Adotar mobile-first na implementação.

Entretanto, considerar a experiência desktop como a principal vitrine criativa do portfólio.

### Desktop

Priorizar excelência em:

- Composição editorial.
- Tipografia expressiva.
- Hover interactions.
- Scroll-driven storytelling.
- Sticky sections.
- Timelines complexas.
- Animações espaciais.
- Apresentação interativa dos projetos.

### Mobile

Garantir:

- Layouts adaptativos.
- Navegação touch.
- Alternativas para hover.
- Tipografia legível.
- Transições leves.
- Performance.
- Áreas de toque adequadas.
- Ausência de overflow horizontal.
- Navegação natural.

Não simplesmente reduzir a experiência desktop.

Adaptar a composição e os comportamentos quando necessário, preservando a intenção visual e narrativa.

**Diretriz: mobile-first na engenharia, desktop-first na excelência criativa e qualidade consistente em todos os dispositivos.**

---

## 13. PERFORMANCE E ACESSIBILIDADE

Preservar excelente desempenho durante o redesign.

Priorizar:

- Transform e opacity quando apropriados.
- Animações eficientes.
- Lazy loading.
- Otimização de mídias.
- Cleanup de listeners e timelines.
- Controle de renderizações.
- Core Web Vitals.
- HTML semântico.
- Navegação por teclado.
- Estados de foco.
- Contraste acessível.
- `prefers-reduced-motion`.
- Compatibilidade entre dispositivos.

Não sacrificar performance apenas para adicionar efeitos visuais.

A sofisticação deverá vir da precisão do design e da engenharia.

---

## 14. INTEGRAÇÃO COM CHATGPT — RECURSOS VISUAIS

O ChatGPT será utilizado como ferramenta complementar de direção criativa e produção visual.

Poderá contribuir com:

- Composições editoriais.
- Conceitos visuais.
- Assets gráficos.
- Storyboards.
- Mockups.
- Estudos de apresentação de projetos.
- Sequências visuais.
- Especificações de motion.
- Elementos gráficos personalizados.

Quando um recurso externo for necessário, descrever:

- Objetivo.
- Local de aplicação.
- Dimensões.
- Proporção.
- Paleta.
- Transparência.
- Formato.
- Variações responsivas.
- Comportamento esperado.

Não considerar uma imagem estática equivalente a um componente interativo funcional.

---

## 15. PRESERVAÇÃO DA APLICAÇÃO EXISTENTE

Antes de modificar qualquer parte relevante, compreender a implementação atual.

Preservar:

- Funcionalidades existentes.
- Dados e informações profissionais.
- Projetos cadastrados.
- Links.
- Integrações.
- Rotas necessárias.
- Componentes reutilizáveis adequados.
- Estruturas arquiteturais válidas.

Não apagar conteúdos sem justificativa.

Não reescrever toda a aplicação sem necessidade técnica.

Priorizar evolução incremental e refatoração orientada por objetivos.

---

## 16. EXECUÇÃO NO CODEX

Este documento constitui a especificação de redesign visual e interativo do Codefolio.

Execute as tarefas solicitadas dentro do repositório existente, utilizando estas diretrizes como referência.

### Etapa 1 — Inspeção

Analise:

- Estrutura do projeto.
- Dependências.
- Componentes.
- Estilos.
- Design tokens existentes.
- Navegação.
- Animações.
- Responsividade.
- Apresentação dos projetos.

### Etapa 2 — Planejamento técnico e visual

Identifique o que deverá ser:

- Preservado.
- Refinado.
- Redesenhado.
- Substituído.
- Criado.

Priorize as alterações com maior impacto na experiência e na consistência visual.

### Etapa 3 — Implementação

Implemente as mudanças conforme a tarefa atual, mantendo:

- Arquitetura sustentável.
- Componentes reutilizáveis.
- Consistência cromática.
- Motion Design System.
- Responsividade.
- Performance.
- Acessibilidade.

### Etapa 4 — Validação

Após as alterações:

- Executar verificações disponíveis.
- Identificar erros.
- Avaliar responsividade.
- Verificar interações.
- Analisar animações.
- Verificar compatibilidade.
- Corrigir problemas introduzidos.

### Etapa 5 — Refinamento

Avaliar criticamente:

- Composição.
- Tipografia.
- Movimento.
- Easing.
- Hierarquia.
- Continuidade visual.
- Usabilidade.
- Performance.

Não considerar uma implementação satisfatória apenas porque compila.

**Importante:** este documento não autoriza executar todo o redesign automaticamente em uma única etapa. Utilize-o como diretriz permanente e implemente conforme as solicitações específicas, preservando o controle criativo e técnico sobre a evolução do projeto.

---

## 17. RESULTADO ESPERADO

Transformar a experiência visual do Codefolio por meio de uma nova identidade editorial e interativa.

O resultado deverá apresentar:

- Identidade Cedar Night consistente.
- Composições autorais.
- Tipografia expressiva.
- Grids editoriais.
- Hovers sofisticados.
- Microinterações precisas.
- Transições fluidas.
- Scroll-driven storytelling.
- Apresentações interativas dos projetos.
- Experiência desktop de alto nível.
- Mobile responsivo e refinado.
- Excelente desempenho.
- Arquitetura frontend sustentável.

O Codefolio não deve parecer um template convencional com animações adicionais.

**A experiência final deve transmitir a qualidade de um produto digital cuidadosamente projetado, em que estética, movimento, conteúdo, interação e engenharia funcionam como um sistema único.**
