# Cedar Night — plano de implementação e mídia

## Direção implementada

Evoluir o React existente: conteúdo profissional e estudos de caso bilíngues,
rotas, links e PDFs preservados. A navegação reúne projetos, sobre, experiência e
contato. Projetos vêm depois da abertura para facilitar a avaliação do trabalho.

1. Centralizar a paleta oficial e o movimento em tokens CSS. Usar serifas
   expressivas nos títulos e fonte sem serifa na leitura e navegação.
2. Criar uma abertura tipográfica, grades assimétricas e linhas editoriais.
3. Usar progresso de leitura, navegação contextual, resumos sticky no desktop e
   respostas de links e botões. O scroll permanece nativo.
4. Apresentar o Sofia por capítulos selecionáveis e um fluxo conceitual de RAG.
   DireitoAI recebe uma composição editorial própria. Ambos identificam essas
   composições como perspectivas técnicas, não capturas do produto.
5. Validar pipeline, navegação, idiomas, teclado, telas e redução de movimento.

CSS com scroll timelines tem melhoria progressiva. Sem suporte ou com movimento
reduzido, todo conteúdo e controles permanecem disponíveis. Não foram necessárias
bibliotecas de animação. Sem dados reais de produto, não reproduzir telas,
resultados, conversas ou marcas por geração de imagem.

## Sofia IA Hub: direção para o vídeo

O vídeo real deve ser a peça principal; o avatar 3D existente pode ser sua capa.
Não é necessário gerar ilustrações adicionais. A mídia será integrada após o
recebimento dos arquivos reais, preservando cores e interface do Sofia.

### Roteiro sugerido: 30 a 45 segundos

| Trecho  | Conteúdo                                                                |
| ------- | ----------------------------------------------------------------------- |
| 0–4 s   | Avatar e nome real do produto, com transição discreta para a interface. |
| 4–10 s  | Abrir um assistente existente e mostrar seu propósito.                  |
| 10–18 s | Digitar uma pergunta curta, com informações demonstrativas.             |
| 18–32 s | Mostrar a resposta real em streaming e o resultado da consulta.         |
| 32–40 s | Destacar uma funcionalidade adicional existente, se relevante.          |
| 40–45 s | Encerrar com a contribuição profissional, sem métricas novas.           |

Se houver fontes ou documentos exibidos pelo produto, podem aparecer no trecho da
resposta. Confirmar esse comportamento na gravação; não acrescentá-lo como recurso
presumido. Evitar informações pessoais, documentos internos restritos e credenciais.
Não acelerar a geração da resposta de modo a sugerir desempenho que não existe.

### Arquivos para entregar e integrar

- Vídeo original: MP4 H.264, 1920 × 1080, proporção 16:9, 30 fps. Gravar em janela
  com texto legível. Produzir uma versão web com fast start; meta de até 8 MB,
  ajustada à legibilidade. WebM pode ser uma alternativa adicional.
- Capa real: WebP ou AVIF, 1600 × 900, 16:9, cores originais do produto. Captura
  real ou composição do avatar existente com o nome oficial. Meta de até 200 KB.
- Avatar existente: PNG ou WebP transparente, idealmente 1024 × 1024. Não recriar
  sua identidade. Usar contido na capa, sem animação contínua ou efeitos luminosos.
- Legendas: WebVTT em português para narração e sons informativos. Se o vídeo for
  silencioso, incluir uma descrição textual dos passos e do resultado. Para a
  versão inglesa do portfólio, fornecer legenda ou transcrição equivalente.
- Logo oficial, caso disponível: SVG original, sem redesenho por IA.

### Comportamento de integração planejado

Aplicar na apresentação do Sofia, antes dos capítulos técnicos, e reutilizar no
estudo de caso. Player nativo com controles, capa real, dimensões reservadas,
`preload="none"`, sem autoplay e sem loop. Carregar a mídia apenas quando solicitada.
Manter nome e contexto fora do vídeo, disponíveis para leitores de tela.

No desktop, apresentar o vídeo em um quadro editorial amplo e manter a narrativa
adjacente. No mobile, colocar o player na ordem de leitura e oferecer tela cheia;
produzir uma edição com enquadramento mais próximo se o texto original ficar pequeno.
Não cortar a interface para preencher um quadro. O fundo Cedar Night é do portfólio,
não deve alterar cores da aplicação gravada.

## Observação sobre os documentos de entrada

`src/docs/profissional-ui.md` estava vazio no disco durante a inspeção. A direção
foi extraída de `src/docs/codefolio-redesign.md` e do `AGENTS.md` do repositório.

## Validação realizada

- Node.js 24.21.0: `npm run ci:local` aprovado nas oito etapas após os ajustes
  finais, sem novas dependências de aplicação.
- Chrome: larguras de 320, 390, 768, 1024 e 1440 px, sem transbordamento horizontal.
- Texto ampliado a 200% em 640 e 1440 px; ajuste da composição da abertura e do
  cabeçalho para preservar as ações.
- Teclado: Enter e Tab no menu e nos capítulos do Sofia, Escape com retorno de
  foco, contorno visível e foco transferido à seção de destino.
- Alternância PT/EN incluindo os capítulos, estudos de caso dos dois projetos,
  retorno a `#work`, repetição de um link para a mesma seção e página inexistente.
- Currículo português servido com HTTP 200; redução de movimento mantém conteúdo e
  controles disponíveis, sem animação de entrada ou scroll suave.
- Contraste calculado dos textos principais, secundários, discretos e de destaque
  sobre os fundos usados. Texto discreto no hover dos capítulos usa a cor
  secundária para manter contraste AA.

A revisão de navegador foi feita no Chrome local. Outros motores e dispositivos
físicos não foram verificados nesta execução. A mídia do Sofia continua pendente.
