# Fratelli Premium Hotel — site institucional

Site estático em **Astro + TypeScript + Tailwind CSS v4**, sem React e com JavaScript mínimo (menu mobile, formulário de disponibilidade e mapa sob demanda).

## Comandos

| Comando | O que faz |
|---|---|
| `npm install` | Instala as dependências |
| `npm run dev` | Servidor local em `http://localhost:4321` |
| `npm run check` | Verificação de tipos (`astro check`) |
| `npm run build` | Gera o site estático em `dist/` |
| `npm run preview` | Serve o `dist/` localmente |

Requer Node 22+.

## Deploy

- **Vercel:** importar o repositório. O framework Astro é detectado automaticamente (build `npm run build`, saída `dist`).
- **Coolify:** Build Pack *Nixpacks* ou *Static*, com comando de build `npm run build` e diretório publicado `dist`.
- **Domínio do site:** é usado no canonical, no sitemap, no `robots.txt` e na URL da imagem OpenGraph (o WhatsApp busca a prévia por essa URL). Na Vercel e no Coolify ele é detectado sozinho. Quando houver domínio definitivo, defina a variável de ambiente `SITE_URL` (ex.: `https://www.dominio.com.br`) e faça um novo deploy.

## Onde editar o conteúdo

Todo o conteúdo variável fica em `src/data/`:

| Arquivo | Conteúdo |
|---|---|
| `hotel.ts` | Endereço, telefone, WhatsApp, Booking, horários, links do mapa e `flags` de exibição |
| `rooms.ts` | As 3 categorias de acomodação (texto, metragem, camas, comodidades, foto) |
| `amenities.ts` | Comodidades e os 4 destaques da home |
| `reviews.ts` | Notas do Booking e do Google e data da consulta |
| `nav.ts` | Itens do menu |

### Fotos

- Ficam em `src/assets/fotos/<categoria>/`, com nomes descritivos para SEO no padrão `categoria-quarto-NN-detalhe-fratelli-premium-hotel-eloi-mendes.webp`.
- **Fotos dos quartos:** fotos profissionais (2560×1440) convertidas para WebP com qualidade 82, cerca de 70% menores que os JPG originais e sem perda visível. Os originais ficam em `Novas Fotos/`, fora do repositório. Cada categoria tem 2 modelos de quarto, intercalados na galeria.
- **Áreas comuns** (recepção e salão do café): ainda são as fotos anteriores, de menor resolução. Vale substituí-las quando houver fotos profissionais desses ambientes.
- **Galerias dos quartos:** campo `photos` em `src/data/rooms.ts`. A primeira foto é a capa, e cada uma tem seu `alt`.
- **Topos de página:** a home usa as 3 fotos definidas em `src/pages/index.astro`. As páginas internas usam `src/data/heroes.ts`, onde também fica o ponto de foco (`focus`) de cada foto.
- **Dados das áreas comuns:** ficam em `src/data/photos.ts`.
- **Carrossel:** quartos com mais de uma foto usam `src/components/ui/Carousel.astro`.
  - `variant="full"` (página Acomodações): setas, indicadores, arrastar, teclado e pausa.
  - `variant="subtle"` (cartões da home): só a troca automática.
- **Adicionar uma foto:** copie o arquivo com nome descritivo para a pasta da categoria, importe em `rooms.ts` ou `photos.ts` e inclua `{ src, alt }` na lista.
- **Converter novas fotos:** use WebP com qualidade 80–85 (por exemplo, pelo `sharp`: `.webp({ quality: 82, effort: 6, smartSubsample: true })`), mantendo cerca de 2560 px de largura. O Astro gera os tamanhos menores para cada tela.

## Logotipo e dourado

- O logo oficial (`Logotipo Luxuoso Fratelli Premium Hotel.png`, na raiz) foi limpo e recortado em `src/assets/brand/`:
  - `logo-on-light.png`: ouro profundo, usado no header creme.
  - `logo-on-dark.png`: cores originais, usado no rodapé.
  - `monogram.png`: moldura FPH, base dos ícones.
- Favicon, apple-touch-icon e `icon-512.png` em `public/` foram gerados a partir do logo.
- **Imagem de compartilhamento (OpenGraph):** `public/og-image.jpg` (1200×630, ~140 KB), a arte fornecida pelo cliente. Para trocá-la, substitua o arquivo mantendo o nome, as dimensões 1200×630 e o tamanho abaixo de 300 KB (limite prático do WhatsApp).
- Os tons de dourado e os degradês (`--gradient-gold`, `--gradient-gold-deep`) estão em `src/styles/global.css`, amostrados do logo.
- Utilitários disponíveis:
  - `bg-gold-metal`: fundo metálico.
  - `metal-shine`: brilho que desliza no hover.
  - `text-gold-metal` / `text-gold-metal-deep`: texto em degradê, para fundo escuro e claro.
- Se o hotel tiver o logo em vetor (.svg, .ai, .pdf), vale substituir os PNGs para ganhar nitidez máxima.

## Pendências do hotel (`TODO(hotel)`)

Busque por `TODO(hotel)` no código. Antes do lançamento, confirmar:

- [ ] WhatsApp oficial da recepção (hoje usa (35) 99972-9999)
- [ ] Link direto da ficha no Booking (hoje usa uma busca)
- [ ] E-mail, Instagram e CEP (os campos aparecem automaticamente quando preenchidos)
- [ ] Domínio definitivo (`SITE_URL` e `robots.txt`) e coordenadas exatas do mapa
- [ ] Diferenças entre as variantes dos quartos Duplo e Deluxe (climatização, varanda, térreo, camas)
- [ ] Café da manhã incluso e jantar no restaurante (`flags.breakfastIncluded`, `flags.showDinner`)
- [ ] Horários de check-in e check-out
- [ ] Políticas: pets, berços, camas extras e taxas (`flags.showPolicies`)
- [ ] Notas e quantidade de avaliações atualizadas (`reviews.ts`; com `reviewCount` preenchido, o JSON-LD passa a incluir `aggregateRating`)
- [ ] Revisar as respostas da FAQ em `src/data/faq.ts` e incluir políticas (pets, berços, camas extras)
- [ ] Definir ferramenta de analytics (sugestão: Vercel Web Analytics ou Plausible) e medir cliques em WhatsApp, telefone e Booking
- [x] Fotos profissionais dos quartos
- [ ] Fotos profissionais da recepção, do salão do café e da fachada
- [ ] Foto profissional para o topo da home: suíte com luz quente, enquadramento amplo, sem ar-condicionado no quadro (hoje o topo alterna suíte, banheira e recepção com tratamento de cor via CSS, em `src/pages/index.astro`)
- [ ] Confirmar a foto "cama de casal e sofá", que hoje aparece nas galerias do Deluxe e da Suíte

## Estrutura

```
src/
  components/
    icons/      Icon (Lucide) e WhatsAppIcon
    layout/     Header, Footer, Logo, SEO (meta + JSON-LD), FloatingWhatsApp
    sections/   PageHero, RoomCard, RoomFeature, AmenityGrid, RatingsBand, CtaBand, MapFacade, AvailabilityForm…
    ui/         Button, Eyebrow, Media, ImagePlaceholder
  data/         conteúdo do hotel
  layouts/      BaseLayout
  lib/          whatsapp.ts (links com mensagem pronta)
  pages/        / · /sobre · /acomodacoes · /cafe-da-manha · /comodidades · /avaliacoes · /localizacao · /contato · 404
  styles/       global.css (tokens de design no @theme)
```
