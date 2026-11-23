/**
 * Gera public/og-image.jpg (1200x630) seguindo a identidade visual do site:
 * fundo preto da marca, faixas douradas, logo oficial, título em Newsreader
 * com "Elói Mendes." em dourado metálico e foto da suíte com tratamento quente.
 *
 * Uso: npm run og
 * Para trocar a foto, altere o caminho em "foto da suíte" abaixo.
 */
import path from 'node:path';
import sharp from 'sharp';

const projectDir = process.cwd();

const W = 1200;
const H = 630;
const BAR = 6;
const INK = '#1f1d1e';
const CREAM = '#f7f3ec';
const P = (...p) => path.join(projectDir, ...p);

const fonts = {
  serif: P('node_modules/@fontsource-variable/newsreader/files/newsreader-latin-opsz-normal.woff2'),
  sans: P('node_modules/@fontsource/lato/files/lato-latin-700-normal.woff'),
};
const goldStops = `
  <stop offset="0" stop-color="#a8730c"/><stop offset="0.22" stop-color="#d9a21e"/>
  <stop offset="0.45" stop-color="#f7d55a"/><stop offset="0.7" stop-color="#dcaa2c"/><stop offset="1" stop-color="#a8730c"/>`;

// ---------- foto da suíte (direita) com tratamento quente ----------
const PHOTO_X = 470;
const photoW = W - PHOTO_X;
const photoH = H - BAR * 2;
const photo = await sharp(P('src/assets/fotos/suite-hidromassagem/suite-hidromassagem-cama-casal-extragrande-fratelli-premium-hotel-eloi-mendes.jpg'))
  // reenquadra perto da cama: corta o ar-condicionado (alto à esquerda)
  .resize({ width: 960 })
  .extract({ left: 960 - photoW, top: 720 - photoH, width: photoW, height: photoH })
  .recomb([
    [1.07, 0.03, 0],
    [0.01, 1.0, 0.0],
    [0.0, 0.0, 0.86],
  ])
  .modulate({ brightness: 0.9, saturation: 1.04 })
  .linear(1.04, -4)
  .png()
  .toBuffer();

const photoShade = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${photoW}" height="${photoH}">
  <defs>
    <linearGradient id="l" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="${INK}" stop-opacity="1"/>
      <stop offset="0.28" stop-color="${INK}" stop-opacity="0.72"/>
      <stop offset="0.62" stop-color="${INK}" stop-opacity="0.12"/>
      <stop offset="1" stop-color="${INK}" stop-opacity="0.05"/>
    </linearGradient>
    <radialGradient id="v" cx="62%" cy="48%" r="75%">
      <stop offset="0.55" stop-color="${INK}" stop-opacity="0"/>
      <stop offset="1" stop-color="${INK}" stop-opacity="0.6"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#v)"/>
  <rect width="100%" height="100%" fill="url(#l)"/>
</svg>`);

// ---------- textos ----------
const textImage = (markup, font, file, width, extra = {}) =>
  sharp({ text: { text: markup, font, fontfile: file, rgba: true, width, dpi: 72, ...extra } }).png().toBuffer();

const HEAD_W = 600;
const HEAD_FONT = 'Newsreader Medium 66';
const headSpacing = { spacing: 2 };
// camada creme (parte dourada invisível) + máscara da parte dourada
const headCream = await textImage(
  `<span foreground="${CREAM}">Seu descanso tem endereço em <span fgalpha="1">Elói Mendes.</span></span>`,
  HEAD_FONT,
  fonts.serif,
  HEAD_W,
  headSpacing,
);
const headGoldMask = await textImage(
  `<span foreground="#ffffff" fgalpha="1">Seu descanso tem endereço em </span><span foreground="#ffffff">Elói Mendes.</span>`,
  HEAD_FONT,
  fonts.serif,
  HEAD_W,
  headSpacing,
);
const headMeta = await sharp(headCream).metadata();
const goldFill = await sharp(
  Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${headMeta.width}" height="${headMeta.height}">
    <defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="0.3">${goldStops}</linearGradient></defs>
    <rect width="100%" height="100%" fill="url(#g)"/></svg>`),
)
  .png()
  .toBuffer();
const headGold = await sharp(goldFill).composite([{ input: headGoldMask, blend: 'dest-in' }]).png().toBuffer();
const headlineImg = await sharp(headCream).composite([{ input: headGold, blend: 'over' }]).png().toBuffer();

const addressImg = await textImage(
  `<span foreground="${CREAM}" fgalpha="72%" letter_spacing="3200">AV. BELO HORIZONTE, 386  ·  CENTRO  ·  ELÓI MENDES, MG</span>`,
  'Lato Bold 15',
  fonts.sans,
  700,
);

// ---------- logo ----------
const logo = await sharp(P('src/assets/brand/logo-on-dark.png')).resize({ width: 300 }).png().toBuffer();
const logoMeta = await sharp(logo).metadata();

// ---------- base: fundo, faixas douradas, fio ----------
const base = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="gold" x1="0" x2="1" y1="0" y2="0">${goldStops}</linearGradient>
    <radialGradient id="glow" cx="18%" cy="40%" r="60%"><stop offset="0" stop-color="#2a2829"/><stop offset="1" stop-color="${INK}"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
</svg>`);
const bars = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs><linearGradient id="gold" x1="0" x2="1" y1="0" y2="0">${goldStops}</linearGradient></defs>
  <rect width="${W}" height="${BAR}" fill="url(#gold)"/>
  <rect y="${H - BAR}" width="${W}" height="${BAR}" fill="url(#gold)"/>
  <rect x="76" y="${78 + logoMeta.height + 40}" width="64" height="2" fill="url(#gold)"/>
</svg>`);

const LEFT = 76;
const ruleY = 78 + logoMeta.height + 40;
const headTop = ruleY + 30;
const addrMeta = await sharp(addressImg).metadata();

await sharp(base)
  .composite([
    { input: photo, left: PHOTO_X, top: BAR },
    { input: photoShade, left: PHOTO_X, top: BAR },
    { input: bars, left: 0, top: 0 },
    { input: logo, left: LEFT, top: 78 },
    { input: headlineImg, left: LEFT - 2, top: headTop },
    { input: addressImg, left: LEFT, top: H - BAR - 56 - addrMeta.height },
  ])
  .jpeg({ quality: 86, mozjpeg: true, chromaSubsampling: '4:4:4' })
  .toFile(P('public/og-image.jpg'));

console.log('public/og-image.jpg gerada (1200x630)');
