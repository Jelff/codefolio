# Acessibilidade

Referência: [WCAG 2.2](https://www.w3.org/TR/WCAG22/), com objetivo de
nível AA. As preferências de leitura complementam a acessibilidade da interface;
não representam certificação de conformidade.

## Plano e implementação

- Preservar link de salto, regiões semânticas, idioma e foco entre rotas.
- Oferecer preferências de texto ampliado, links sublinhados e redução de
  movimento em português e inglês, usando controles nativos.
- Armazenar apenas essas preferências localmente, tolerando armazenamento
  indisponível e dados inválidos. Restaurar não altera tema nem idioma.
- Remover a animação contínua da lista de tecnologias, mantendo rolagem manual.
- Manter o botão de tema inteiro acionável por toque e mouse.
- Preservar cores, bordas e tipografia existentes, sem novas dependências.

## Verificação manual antes de declarar conformidade

Ainda é necessário executar em navegador e com tecnologias assistivas:

- Percorrer página inicial e detalhes por Tab/Shift+Tab; verificar foco visível,
  salto ao conteúdo, menu, troca de idioma e navegação entre rotas.
- Verificar os ajustes com teclado, persistência após recarga e restauração.
- Conferir 320, 768 e 1440 pixels, zoom de 200% e reflow equivalente a 400%.
- Combinar texto ampliado com zoom, textos longos e menu aberto.
- Verificar movimento reduzido do sistema com o ajuste local ligado/desligado.
- Avaliar contraste em ambos os temas, incluindo hover, foco e imagens de fundo.
- Conferir leitura com NVDA/Firefox e VoiceOver/Safari.
- Auditar legendas e alternativas das demonstrações externas e acessibilidade
  dos currículos PDF separadamente.

O pipeline de qualidade verifica o código, mas não substitui essas avaliações.
