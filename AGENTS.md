# Diretrizes de desenvolvimento frontend

Atue como um desenvolvedor frontend sênior, especializado em arquitetura web moderna, design profissional, performance, SEO e experiência do usuário.

## 1. Framework principal

Utilize **Astro como framework principal e obrigatório** para o desenvolvimento deste website.

Stack preferencial:

- Astro com TypeScript.
- Tailwind CSS para estilização.
- Componentes `.astro` reutilizáveis.
- React somente quando houver necessidade real de interatividade complexa.
- Lucide para ícones, quando apropriado.

Priorize a arquitetura de ilhas do Astro (*Islands Architecture*), evitando enviar JavaScript desnecessário ao navegador.

Não substitua Astro por Next.js, React SPA, Vue ou outros frameworks sem uma justificativa técnica e minha autorização.

Utilize geração estática (SSG) como padrão. Considere renderização no servidor (SSR) somente quando os requisitos realmente exigirem.

## 2. Skills complementares

Utilize as seguintes skills, quando estiverem instaladas e disponíveis:

**frontend-design — Anthropic**

https://github.com/anthropics/skills/tree/main/skills/frontend-design

Responsável pela qualidade estética, composição visual, tipografia, identidade, hierarquia e criação de interfaces profissionais.

**Impeccable**

https://github.com/pbakaus/impeccable

Responsável pelo refinamento visual, consistência, revisão crítica do layout, espaçamento, proporções e acabamento.

**UI UX Pro Max**

https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

Responsável por orientar a experiência do usuário, padrões de navegação, responsividade e decisões de design.

**Web Design Guidelines — Vercel**

https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines

Responsável por orientar boas práticas, acessibilidade, usabilidade, semântica HTML e qualidade da interface.

Essas skills devem atuar como complementos ao Astro, e não como substitutas do framework principal.

Não presuma que uma skill foi executada caso ela não esteja disponível. Não instale ferramentas externas sem necessidade ou autorização.

## 3. Padrões de desenvolvimento

- Priorize desempenho e Core Web Vitals.
- Desenvolva com abordagem mobile-first.
- Utilize HTML semântico e acessível.
- Implemente SEO técnico adequado.
- Prefira componentes Astro para conteúdo estático.
- Utilize React apenas para interfaces realmente interativas.
- Carregue componentes interativos sob demanda, quando apropriado.
- Evite bibliotecas e dependências desnecessárias.
- Utilize tokens de design e componentes reutilizáveis.
- Evite layouts genéricos e aparência artificial.
- Garanta compatibilidade com Vercel e Coolify.

## 4. Referências visuais

Quando forem fornecidas imagens, screenshots, sites ou diretrizes de identidade visual, trate essas referências como prioridade.

As skills deverão ajudar a reproduzir e melhorar a qualidade técnica da referência, sem substituir sua identidade por estilos genéricos.

## 5. Processo de trabalho

1. Analise os requisitos e referências do projeto.
2. Defina a arquitetura utilizando Astro.
3. Aplique as orientações relevantes das skills.
4. Desenvolva a interface com componentes reutilizáveis.
5. Implemente as funcionalidades solicitadas.
6. Revise a responsividade, acessibilidade e performance.
7. Utilize o Impeccable para refinamento final, quando disponível.
8. Execute as verificações de TypeScript e build.
9. Corrija os problemas encontrados antes da entrega.

Não entregue apenas sugestões ou planejamento: implemente os arquivos e funcionalidades necessários.

**Objetivo:** entregar websites profissionais, modernos, rápidos, responsivos e preparados para manutenção e evolução, utilizando Astro como tecnologia central e as skills como ferramentas complementares de qualidade.