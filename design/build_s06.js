// Renders the S06 deck in the S04 design, reusing the S04 bundle's fonts, logo and deck engine.
// Usage: node design/build_s06.js  (from anywhere; the repository is this file's parent folder)
const fs = require('fs');
const path = require('path');
const slides = require('./s06_slides.js');
const { withTitle } = require('./deck.js');

const repo = process.argv[2] || path.resolve(__dirname, '..');
const SRC = path.join(repo, 'S04-Portfolio-Construction', 'S04 Portfolio Construction.html');
const OUT_HTML = path.join(repo, 'S06-Final-Strategy-Prep-and-Presentation', 'S06 Final Strategy Prep & Presentation.html');
const OUT_MD = path.join(repo, 'design', 'S06 Final Strategy Prep & Presentation - copy.md');
const OPEN_QUESTIONS = path.join(__dirname, 's06_open_questions.md');
const TITLE = 'S06 · Final Strategy Prep & Presentation';
const LOGO = '1ed1baf3-b691-4e40-8cbc-5318e0848c8f';

const INK = '#121110', PAPER = '#F2F0EB', RED = '#E84328', CARD = '#E4E1DA', DARKCARD = '#201F1D';
const HEAD = "font-family: 'Archivo Black', system-ui, sans-serif;";
const MONO = "font-family: 'JetBrains Mono', monospace;";

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const wbr = (s) => esc(s).replace(/([/._])/g, '$1<wbr>');
// `code` → mono span; **x** → accent
function inline(s, monoColor) {
  return s.split(/(`[^`]+`)/).map((part) => {
    if (part.startsWith('`')) {
      const c = monoColor ? ` color: ${monoColor};` : '';
      return `<span style="${MONO} font-size: 0.93em;${c}">${wbr(part.slice(1, -1))}</span>`;
    }
    return esc(part).replace(/\*\*([^*]+)\*\*/g, `<span style="color: ${RED};">$1</span>`);
  }).join('');
}
const plain = (s) => s.replace(/`/g, '').replace(/\*\*/g, '');
const num = (i) => String(i).padStart(2, '0');
const attr = (s) => esc(s).replace(/"/g, '&quot;');

function open(s, n, bg, color, pad = '69px 78px 54px') {
  return `<section data-label="${attr(s.label)}" data-screen-label="${num(n)}" data-speaker-notes="${attr(s.notes)}">
  <div style="position: absolute; inset: 0; overflow: hidden; background: ${bg}; font-family: 'Archivo', system-ui, sans-serif; color: ${color}; display: flex; flex-direction: column; padding: ${pad};">`;
}
const close = `\n  </div>\n</section>\n`;

function header(s, n, dark) {
  return `
    <div style="display: flex; align-items: center; gap: 24px; flex: none;">
      <div style="font-size: 24px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: ${dark ? '#A5A29B' : '#56534E'};">${esc(s.kicker)}</div>
      <div style="margin-left: auto; ${HEAD} font-size: 24px; color: ${dark ? '#56534E' : '#A5A29B'};">${num(n)}</div>
    </div>
    <div style="display: flex; gap: 60px; align-items: flex-start; margin-top: 36px; flex: none;">
      <h1 style="flex: 1; margin: 0; ${HEAD} font-size: ${s.titleSize || 84}px; line-height: 0.94; letter-spacing: -0.04em; text-transform: uppercase;">${esc(s.title.toUpperCase())}<span style="color: ${RED};">.</span></h1>
      <div style="width: 640px; flex: none; font-size: 26px; line-height: 1.5; font-weight: 500; color: ${dark ? '#C9C6BF' : '#3A3833'}; padding-top: 12px;">${inline(s.deck)}</div>
    </div>`;
}

function callout(c, dark) {
  if (!c) return '';
  return `<div style="flex: 1;"></div>
    <div style="display: flex; gap: 24px; align-items: baseline; margin-top: 30px; flex: none;">
      <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: ${RED}; letter-spacing: 0.16em; flex: none; max-width: 460px;">${esc(c[0])}</div>
      <div style="font-size: 26px; line-height: 1.4; color: ${dark ? '#C9C6BF' : '#56534E'};">${inline(c[1])}</div>
    </div>`;
}

function cardGrid(cards, opts) {
  const n = cards.length;
  const cols = opts.cols || n;
  const rows = Math.ceil(n / cols);
  const size = opts.size || (rows > 1 ? { pad: '27px 30px 30px', num: 48, title: 36, body: 30, min: 540 }
    : cols >= 5 ? { pad: '24px 27px 27px', num: 48, title: 31, body: 28, min: 500 }
    : cols === 4 ? { pad: '30px 33px 33px', num: 60, title: 34, body: 33, min: 500 }
    : { pad: '24px 27px 27px', num: 42, title: 30, body: 27, min: 220 });
  const items = cards.map((c, i) => {
    let bg = opts.onDark ? DARKCARD : CARD, fg = opts.onDark ? PAPER : INK, body = opts.onDark ? '#C9C6BF' : '#3A3833', numc = RED, chipc = RED;
    if (c.dark) { bg = INK; fg = PAPER; body = '#C9C6BF'; }
    if (c.accent) { bg = RED; fg = '#FFF4F1'; body = '#FFF4F1'; numc = INK; chipc = INK; }
    const chip = c.chip ? `\n        <div style="${MONO} font-size: 21px; line-height: 1.35; color: ${chipc}; margin-top: auto; padding-top: 16px;">${wbr(c.chip)}</div>` : '';
    return `
      <div style="background: ${bg}; color: ${fg}; padding: ${size.pad}; display: flex; flex-direction: column; min-width: 0;">
        <div style="display: flex; flex-direction: column; gap: 14px;"><div style="${HEAD} font-size: ${size.num}px; line-height: 1; color: ${numc}; letter-spacing: -0.04em; flex: none;">${num(i + 1)}</div><div><div style="${HEAD} font-size: ${size.title}px; line-height: 1.05; letter-spacing: -0.02em; text-transform: uppercase;">${esc(c.t.toUpperCase())}</div></div></div>
        <div style="font-size: ${size.body}px; line-height: 1.38; margin-top: 14px; color: ${body};">${inline(c.b)}</div>${chip}
      </div>`;
  }).join('');
  return `
    <div style="flex: none; min-height: ${size.min}px; display: grid; grid-template-columns: repeat(${cols}, minmax(0, 1fr)); gap: 18px; margin-top: ${opts.mt || 48}px;">${items}
    </div>`;
}

const R = {
  pillars(s, n) {
    return require('./pillars.js').slide(s.session, num(n));
  },

  cover(s, n) {
    const contents = s.contents.map((c, i) => `
        <div style="display: flex; gap: 21px; align-items: baseline; padding: 21px 0; border-top: 2px solid rgba(255,244,241,0.35);${i === s.contents.length - 1 ? ' border-bottom: 2px solid rgba(255,244,241,0.35);' : ''}">
          <div style="${HEAD} font-size: 24px; opacity: 0.7; width: 33px;">${num(i + 1)}</div>
          <div style="${HEAD} font-size: 30px; line-height: 1.1; letter-spacing: -0.02em; text-transform: uppercase;">${esc(c)}</div>
        </div>`).join('');
    return `<section data-label="${attr(s.label)}" data-screen-label="${num(n)}" data-speaker-notes="${attr(s.notes)}">
  <div style="position: absolute; inset: 0; overflow: hidden; background: ${PAPER}; font-family: 'Archivo', system-ui, sans-serif; color: ${INK};">
    <div style="position: absolute; top: 0; right: 0; width: 558px; height: 1080px; background: ${RED};"></div>
    <div style="position: absolute; top: 0; right: 558px; width: 144px; height: 522px; background: ${INK};"></div>
    <div style="position: absolute; top: 69px; left: 78px; display: flex; align-items: center; gap: 24px;">
      <img src="${LOGO}" alt="KaxaNuk — Sharing knowledge" style="height: 66px; width: auto; display: block;">
      <div style="width: 51px; height: 4px; background: ${RED};"></div>
      <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: #56534E; letter-spacing: 0.16em;">Investment Bootcamp</div>
    </div>
    <div style="position: absolute; left: 78px; top: 222px; width: 1140px;">
      <h1 style="margin: 0; ${HEAD} font-size: ${s.size1 || 112}px; line-height: 0.86; letter-spacing: -0.045em; text-transform: uppercase;">${esc(s.title1)}</h1>
      <h1 style="margin: 9px 0 0; ${HEAD} font-size: ${s.size2 || 104}px; line-height: 0.86; letter-spacing: -0.045em; text-transform: uppercase;"><span style="color: ${RED};">${esc(s.title2)}</span></h1>
    </div>
    <div style="position: absolute; left: 78px; bottom: 84px; width: 1030px; display: flex; gap: 51px; align-items: flex-start;">
      <div style="${HEAD} font-size: 111px; line-height: 0.8; color: ${RED}; letter-spacing: -0.05em;">${s.numeral}</div>
      <div style="font-size: 26px; line-height: 1.5; font-weight: 500; padding-top: 9px;">${inline(s.deck)}</div>
    </div>
    <div style="position: absolute; right: 78px; top: 210px; width: 402px; color: #FFF4F1;">
      <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: #FFF4F1; letter-spacing: 0.2em; opacity: 0.72;">Contents</div>
      <div style="display: flex; flex-direction: column; margin-top: 24px;">${contents}
      </div>
    </div>${close}`;
  },

  cards(s, n) {
    return open(s, n, PAPER, INK) + header(s, n, false) + cardGrid(s.cards, { cols: s.cols }) + '\n    ' + callout(s.callout, false) + close;
  },

  statement(s, n) {
    const steps = s.steps.map(([name, sub, today], i) => today ? `
        <div style="padding: 16px 16px 18px; background: ${INK}; color: ${PAPER}; min-width: 0;">
          <div style="display: flex; gap: 10px; align-items: baseline;"><div style="${HEAD} font-size: 30px; line-height: 1; color: ${RED};">${i + 1}</div><div style="${HEAD} font-size: 18px; text-transform: uppercase; letter-spacing: -0.01em;">${esc(name)}</div></div>
          <div style="font-size: 19px; line-height: 1.3; margin-top: 8px; color: #C9C6BF;">${esc(sub)} · <span style="color: ${RED}; font-weight: 600; letter-spacing: 0.12em;">TODAY</span></div>
        </div>` : `
        <div style="padding: 16px 16px 18px; border-top: 3px solid rgba(255,244,241,0.5); min-width: 0;">
          <div style="display: flex; gap: 10px; align-items: baseline;"><div style="${HEAD} font-size: 30px; line-height: 1; color: ${INK};">${i + 1}</div><div style="${HEAD} font-size: 18px; text-transform: uppercase; letter-spacing: -0.01em;">${esc(name)}</div></div>
          <div style="font-size: 19px; line-height: 1.3; margin-top: 8px; color: #FFF4F1;">${esc(sub)}</div>
        </div>`).join('');
    return open(s, n, RED, '#FFF4F1', '69px 78px 84px') + `
    <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: #FFF4F1; letter-spacing: 0.2em; opacity: 0.75; flex: none;">${esc(s.kicker)}</div>
    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; max-width: 1640px;">
      <h1 style="margin: 0; ${HEAD} font-size: 112px; line-height: 0.9; letter-spacing: -0.045em; text-transform: uppercase;">${esc(s.title.toUpperCase())}<span style="color: ${INK};">${esc(s.titleDark.toUpperCase())}</span></h1>
      <div style="margin-top: 36px; font-size: 32px; line-height: 1.35; font-weight: 500; color: ${INK};">${inline(s.deck)}</div><div style="display: grid; grid-template-columns: repeat(8, minmax(0, 1fr)); gap: 10px; margin-top: 48px;">${steps}
      </div><div style="margin-top: 48px; padding-top: 24px; border-top: 2px solid rgba(255,244,241,0.4); display: flex; gap: 24px; align-items: baseline;"><div style="font-size: 24px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: ${INK}; flex: none;">${esc(s.callout[0])}</div><div style="font-size: 28px; line-height: 1.4; color: #FFF4F1;">${inline(s.callout[1])}</div></div>
    </div>
    <div style="position: absolute; right: 78px; bottom: 84px; ${HEAD} font-size: 24px; opacity: 0.7;">${num(n)}</div>` + close;
  },

  divider(s, n) {
    return open(s, n, RED, '#FFF4F1', '69px 78px 84px') + `
    <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: #FFF4F1; letter-spacing: 0.2em; opacity: 0.75; flex: none;">${esc(s.kicker)}</div>
    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; max-width: 1640px;">
      <h1 style="margin: 0; ${HEAD} font-size: 138px; line-height: 0.9; letter-spacing: -0.045em; text-transform: uppercase;">${esc(s.title.toUpperCase())}</h1>
      <div style="margin-top: 60px; font-size: 38px; line-height: 1.35; font-weight: 500; color: ${INK};">${esc(s.deck)}</div>
    </div>
    <div style="position: absolute; right: 78px; bottom: 84px; ${HEAD} font-size: 24px; opacity: 0.7;">${num(n)}</div>` + close;
  },

  live(s, n) {
    const lines = s.code.map((l) => typeof l === 'string' ? `<div>${wbr(l)}</div>` : `<div><span style="color: ${RED};">Codex: </span>${wbr(l.codex)}</div>`).join('');
    const title = 'PASTE THIS INTO YOUR ASSISTANT';
    return open(s, n, INK, PAPER) + header(s, n, true) + `
    <div style="background: ${DARKCARD}; padding: 30px 42px 33px; margin-top: 36px; flex: none;">
      <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: ${RED}; letter-spacing: 0.16em;">${title}</div>
      <div style="${MONO} font-size: ${s.code.length > 1 ? 28 : 26}px; line-height: 1.5; color: ${PAPER}; margin-top: 16px;">${lines}</div>
      <div style="font-size: 24px; line-height: 1.45; color: #A5A29B; margin-top: 18px; padding-top: 16px; border-top: 2px solid #3A3833;">${inline(s.behind, PAPER)}</div>
    </div>` + cardGrid(s.cards, { onDark: true, mt: 24 }) + callout(s.callout, true) + close;
  },

  gate(s, n) {
    // the gate's three verdicts: met, not met, not assessed
    const tag = (v) => {
      const st = v === 'NOT MET' ? `background: ${RED}; color: #FFF4F1;`
        : v === 'NOT ASSESSED' ? 'background: #CFCBC3; color: #3A3833;'
        : `background: ${INK}; color: ${PAPER};`;
      return `<div style="${st} ${HEAD} font-size: 26px; letter-spacing: 0.02em; padding: 12px 18px; text-align: center; width: 270px; flex: none; white-space: nowrap;">${v}</div>`;
    };
    const rows = s.rows.map(([crit, v, ev], i) => `
      <div style="display: flex; gap: 30px; align-items: center; padding: 16px 0; border-top: 2px solid #CFCBC3;${i === s.rows.length - 1 ? ' border-bottom: 2px solid #CFCBC3;' : ''}">
        <div style="${HEAD} font-size: 40px; color: ${RED}; width: 60px; flex: none; letter-spacing: -0.04em;">${i + 1}</div>
        <div style="${HEAD} font-size: 32px; text-transform: uppercase; letter-spacing: -0.02em; width: 440px; flex: none;">${esc(crit.toUpperCase())}</div>
        ${tag(v)}
        <div style="font-size: 29px; line-height: 1.35; color: #3A3833;">${inline(ev)}</div>
      </div>`).join('');
    return open(s, n, PAPER, INK) + header(s, n, false) + `
    <div style="flex: none; margin-top: 48px;">${rows}
    </div>
    ` + callout(s.callout, false) + close;
  },

  matrix(s, n) {
    const cols = s.columns.map(([dim, rows]) => `
      <div style="display: flex; flex-direction: column; min-width: 0;">
        <div style="background: ${INK}; color: ${PAPER}; padding: 20px 27px; display: flex; align-items: baseline; gap: 18px;">
          <div style="${HEAD} font-size: 30px; text-transform: uppercase; letter-spacing: -0.02em; flex: 1;">${esc(dim.toUpperCase())}</div>
          <div style="${MONO} font-size: 21px; color: ${RED};">33.3%</div>
        </div>${rows.map(([crit, ev]) => `
        <div style="background: ${CARD}; margin-top: 12px; padding: 20px 27px 22px; display: flex; flex-direction: column; gap: 10px; flex: 1;">
          <div style="${HEAD} font-size: 28px; line-height: 1.08; text-transform: uppercase; letter-spacing: -0.02em;">${esc(crit.toUpperCase())}</div>
          <div style="display: flex; align-items: baseline; gap: 14px; margin-top: auto;"><div style="${MONO} font-size: 21px; color: ${RED};">${wbr(ev)}</div><div style="margin-left: auto; ${MONO} font-size: 19px; color: #7D7979;">0 · 33 · 66 · 100</div></div>
        </div>`).join('')}
      </div>`).join('');
    return open(s, n, PAPER, INK) + header(s, n, false) + `
    <div style="flex: none; min-height: 560px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; margin-top: 44px;">${cols}
    </div>
    ` + callout(s.callout, false) + close;
  },

  stop(s, n) {
    const item = (t) => `
          <div style="display: flex; gap: 15px; align-items: baseline; padding: 7px 0;"><div style="width: 12px; height: 12px; background: ${RED}; flex: none;"></div><div style="font-size: 23px; line-height: 1.32;">${inline(t)}</div></div>`;
    return open(s, n, PAPER, INK) + header(s, n, false) + `
    <div style="flex: 1; min-height: 0; display: grid; grid-template-columns: 1.25fr 1fr; gap: 18px; margin-top: 36px;">
      <div style="background: ${CARD}; padding: 27px 33px 27px; min-width: 0;">
        <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: ${RED}; letter-spacing: 0.16em;">ON DISK WHEN YOU LEAVE</div>
        <div style="margin-top: 12px; border-top: 2px solid #B6B2AA; padding-top: 4px;">${s.left.map(item).join('')}
        </div>
      </div>
      <div style="background: ${INK}; color: ${PAPER}; padding: 27px 33px 27px; display: flex; flex-direction: column; min-width: 0;">
        <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: ${RED}; letter-spacing: 0.16em;">NOT TODAY</div>
        <div style="margin-top: 12px; border-top: 2px solid #3A3833; padding-top: 4px;">${s.right.map(item).join('')}
        </div>
        <div style="margin-top: auto; padding-top: 18px; border-top: 2px solid #3A3833; font-size: 25px; line-height: 1.4; color: #C9C6BF;"><span style="font-size: 22px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: ${RED};">WHY WE STOP</span><br>${inline(s.why)}</div>
      </div>
    </div>` + close;
  },

  refs(s, n) {
    const groups = s.groups.map(([head, items], gi) => `
    <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: ${RED}; letter-spacing: 0.16em; margin-top: 36px;">${esc(head)}</div>
    <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 21px 42px; margin-top: 15px;">${items.map(([who, yr, title, tagline]) => `
      <div style="border-top: 2px solid #CFCBC3; padding: 15px 0 9px; min-width: 0;">
        <div style="${HEAD} font-size: 27px; text-transform: uppercase; letter-spacing: -0.02em;">${esc(who)}</div>
        <div style="display: flex; gap: 18px; align-items: baseline; margin-top: 9px;"><div style="${MONO} font-size: 25px; color: ${RED}; flex: none;">${yr}</div><div style="font-size: 25px; line-height: 1.3; color: #3A3833;">${esc(title)}</div></div>${tagline ? `
        <div style="${MONO} font-size: 21px; color: #56534E; margin-top: 8px;">→ ${esc(tagline)}</div>` : ''}
      </div>`).join('')}
    </div>`).join('');
    return open(s, n, PAPER, INK) + header({ ...s, titleSize: 78 }, n, false).replace('width: 640px', 'width: 700px') + groups + '\n    ' + callout(s.callout, false) + close;
  },

  closing(s, n) {
    const panels = s.panels.map(([h, mono, txt]) => `
        <div style="background: ${DARKCARD}; padding: 24px 27px; min-width: 0; display: flex; flex-direction: column;">
          <div style="font-size: 22px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: ${RED};">${esc(h)}</div>${mono ? `
          <div style="${MONO} font-size: 21px; color: ${PAPER}; margin-top: 10px;">${wbr(mono)}</div>` : ''}
          <div style="font-size: 22px; line-height: 1.35; color: #A5A29B; margin-top: 10px;">${inline(txt)}</div>
        </div>`).join('');
    const next = s.next.map(([k, v], i) => `
      <div>
        <div style="font-size: 24px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; opacity: 0.72;">${esc(k)}</div>
        <div style="${HEAD} font-size: ${i === 2 ? 30 : 42}px; line-height: 1.05; margin-top: 9px; letter-spacing: -0.02em;">${esc(v)}</div>
      </div>`).join('');
    return `<section data-label="${attr(s.label)}" data-screen-label="${num(n)}" data-speaker-notes="${attr(s.notes)}">
  <div style="position: absolute; inset: 0; overflow: hidden; background: ${INK}; font-family: 'Archivo', system-ui, sans-serif; color: ${PAPER};">
    <div style="position: absolute; top: 0; right: 0; width: 558px; height: 1080px; background: ${RED};"></div>
    <div style="position: absolute; top: 69px; left: 78px; display: flex; align-items: center; gap: 24px;">
      <img src="${LOGO}" alt="KaxaNuk — Sharing knowledge" style="height: 66px; width: auto; display: block;">
      <div style="width: 51px; height: 4px; background: ${RED};"></div>
      <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: #A5A29B; letter-spacing: 0.16em;">Investment Bootcamp</div>
    </div>
    <div style="position: absolute; left: 78px; top: 186px; bottom: 54px; width: 1188px; display: flex; flex-direction: column;">
      <h1 style="margin: 0; ${HEAD} font-size: 120px; line-height: 0.9; letter-spacing: -0.045em; text-transform: uppercase;">${esc(s.title1.toUpperCase())}</h1>
      <h1 style="margin: 9px 0 0; ${HEAD} font-size: 120px; line-height: 0.9; letter-spacing: -0.045em; text-transform: uppercase;"><span style="color: ${RED};">${esc(s.title2.toUpperCase())}</span></h1>
      <div style="margin-top: 36px; font-size: 30px; line-height: 1.4; font-weight: 500; color: #C9C6BF; max-width: 34ch;">${inline(s.deck)}</div>
      <div style="flex: 1;"></div>
      <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px;">${panels}
      </div>
      <div style="display: flex; align-items: baseline; gap: 33px; margin-top: 30px;">
        <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: ${RED}; letter-spacing: 0.16em;">QUESTIONS</div>
        <div style="${MONO} font-size: 36px;">research@kaxanuk.mx</div>
      </div>
    </div>
    <div style="position: absolute; right: 78px; top: 288px; width: 402px; color: #FFF4F1; display: flex; flex-direction: column; gap: 33px;">${next}
    </div>
    <div style="position: absolute; right: 78px; top: 69px; ${HEAD} font-size: 24px; color: #FFF4F1; opacity: 0.7;">${num(n)}</div>${close}`;
  },

  disclaimer(s, n) {
    return `<section data-label="${attr(s.label)}" data-screen-label="${num(n)}" data-speaker-notes="${attr(s.notes)}">
  <div style="position: absolute; inset: 0; overflow: hidden; background: ${PAPER}; font-family: 'Archivo', system-ui, sans-serif; color: ${INK};">
    <div style="position: absolute; top: 69px; left: 78px; right: 78px; display: flex; align-items: center; gap: 24px;">
      <div style="font-size: 24px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: #56534E;">Disclaimers</div>
      <div style="margin-left: auto; ${HEAD} font-size: 24px; color: #A5A29B;">${num(n)}</div>
    </div>
    <h1 style="position: absolute; left: 78px; top: 150px; margin: 0; ${HEAD} font-size: 72px; line-height: 0.94; letter-spacing: -0.04em; text-transform: uppercase;">Disclaimers</h1>
    <div style="position: absolute; left: 78px; top: 306px; width: 1560px; font-size: 25px; line-height: 1.6; color: #3A3833;">${esc(DISCLAIMER)}</div>
    <div style="position: absolute; left: 78px; bottom: 84px; display: flex; align-items: center; gap: 24px;">
      <img src="${LOGO}" alt="KaxaNuk" style="height: 54px; width: auto; display: block;">
      <div style="width: 51px; height: 4px; background: ${RED};"></div>
      <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: #56534E; letter-spacing: 0.16em;">${esc(s.footer)}</div>
    </div>${close}`;
  },
};

const DISCLAIMER = 'The content of this document is strictly informative and does not constitute an offer or recommendation of KaxaNuk S.C. to buy, sell or subscribe any kind of securities, or to perform specific transactions. KaxaNuk S.C. is not responsible for the interpretation given to the information and/or content of this document. KaxaNuk S.C. does not accept and will not accept any liability for losses or damages resulting from investment decisions that would have been based on this document. The persons responsible for the preparation of this content certify that the opinions stated reflect their own point of view and do not represent the view of KaxaNuk S.C. nor of its officials. This document is based on publicly available information which is considered reliable, however KaxaNuk S.C. makes no warranty regarding its accuracy or completeness.';

// ── HTML: swap the S04 template's sections for S06's, keep everything else in the bundle.
const sections = slides.map((s, i) => R[s.type](s, i + 1)).join('\n');
const bundle = fs.readFileSync(SRC, 'utf8');
const key = '<script type="__bundler/template">';
const start = bundle.indexOf(key) + key.length;
const end = bundle.indexOf('</script>', start);
const template = JSON.parse(bundle.slice(start, end));
const a = template.indexOf('<section');
const b = template.lastIndexOf('</section>') + '</section>'.length;
const newTemplate = withTitle(template.slice(0, a) + sections + template.slice(b), TITLE);
const encoded = JSON.stringify(newTemplate).replace(/<\//g, '<\\u002F');
let out = bundle.slice(0, start) + '\n' + encoded + '\n  ' + bundle.slice(end);
out = out.replace('font-size="130" fill="#121110">S04</text>', 'font-size="130" fill="#121110">S06</text>')
  .replace(/<title>[^<]*<\/title>/, `<title>${esc(TITLE)}</title>`);
fs.writeFileSync(OUT_HTML, out);

// ── Markdown copy, in the S04 copy's format.
const words = (s) => {
  const parts = [s.title, s.title1, s.title2, s.titleDark, s.deck, s.callout && s.callout.join(' '), s.behind, s.why,
    ...(s.cards || []).flatMap((c) => [c.t, c.b, c.chip]), ...(s.rows || []).flat(), ...(s.left || []), ...(s.right || []),
    ...(s.columns || []).flatMap(([d, r]) => [d, ...r.flat()]), ...(s.contents || [])];
  return parts.filter(Boolean).map(plain).join(' ').split(/\s+/).filter(Boolean).length;
};
const md = [];
md.push('# S06 — Final Strategy Prep & Presentation · slide copy', '');
md.push(`The copy for the S06 deck, ${slides.length} slides, laid out in \`S06 Final Strategy Prep & Presentation.html\`. It adapts the old session 05 deck (Final Strategy Prep & Presentation: the presentation challenge, and how to score a strategy, with its 3 × 3 scoring template) to the KaxaNuk Researcher's step 7, and was checked against the \`challenge\` prompt, the \`paper-trading-gate\` skill, the strategy template's \`AGENTS.md\`, \`FINDINGS_N.md\` and \`RESULTS.md\`, and the worked example's \`Paper_Trading/BITACORA.md\`. On screen each slide carries about 60 words; the detail is in the speaker notes. Each slide's on-screen word count follows its kicker.`, '');
const sectionNames = { 4: '01 CHALLENGE YOUR OWN RUN', 7: '02 TRY TO BREAK IT', 11: '03 THE GATE', 16: '04 DEFEND IT' };
md.push('', '---', '', '## Opening', '');
slides.forEach((s, i) => {
  const n = i + 1;
  if (sectionNames[n]) md.push('', '---', '', `## ${sectionNames[n]}`, '');
  if (s.type === 'stop' && !md.includes('## Close')) { /* stays in section 04 */ }
  if (s.type === 'cards' && s.label === 'To do') md.push('', '---', '', '## Close', '');
  if (s.type === 'pillars') {
    md.push(`### ${num(n)} · BACK TO THE PILLARS.`, '', `*pillars* · from \`design/pillars.js\``, '', require('./pillars.js').markdown(s.session).text.split('\n').slice(2).join('\n'), '');
    return;
  }
  const title = s.titleDark ? (s.title + s.titleDark).toUpperCase() : s.title ? s.title.toUpperCase() + (s.type === 'divider' ? '' : '.') : s.type === 'cover' ? `${s.title1} ${s.title2}`.toUpperCase() : s.type === 'closing' ? `${s.title1} ${s.title2}`.toUpperCase() : 'DISCLAIMERS';
  md.push(`### ${num(n)} · ${title}`, '');
  md.push(`*${s.type}* · kicker: **${s.kicker || 'DISCLAIMERS'}** · ${words(s)} words`, '');
  if (s.type === 'statement') md.push(`Title: ${s.title.toUpperCase()}${s.titleDark.toUpperCase()}`, '');
  if (s.deck) md.push(s.deck, '');
  if (s.contents) md.push(`_Layout:_ Large numeral: ${s.numeral}. CONTENTS: ${s.contents.map((c, j) => `${num(j + 1)} ${c}`).join(' · ')}`, '');
  if (s.code) {
    md.push('**PASTE THIS INTO CLAUDE OR CODEX**', '', '```text');
    s.code.forEach((l) => md.push(typeof l === 'string' ? l : `Codex: ${l.codex}`));
    md.push('```', '', s.behind, '');
  }
  if (s.cards) s.cards.forEach((c, j) => md.push(`- **${num(j + 1)} ${c.t.toUpperCase()}**: ${c.b}${c.chip ? ` \`${c.chip}\`` : ''}`));
  if (s.steps) s.steps.forEach(([nm, sub, t], j) => md.push(`- **${j + 1} ${nm}**: ${sub}${t ? ' _[TODAY]_' : ''}`));
  if (s.rows) { md.push('| # | Criterion | Verdict | Evidence |', '| --- | --- | --- | --- |'); s.rows.forEach(([c, v, e], j) => md.push(`| ${j + 1} | ${c} | **${v}** | ${e} |`)); }
  if (s.columns) s.columns.forEach(([d, rows]) => md.push(`- **${d.toUpperCase()}** (33.3%): ${rows.map(([c, e]) => `${c} → \`${e}\``).join(' · ')}`));
  if (s.left) { md.push(`- **ON DISK WHEN YOU LEAVE**: ${s.left.join('; ')}`, `- **NOT TODAY**: ${s.right.join('; ')}`); }
  if (s.groups) s.groups.forEach(([h, items]) => md.push(`- **${h}**: ${items.map(([w, y, t, tg]) => `${y} ${w}, ${t}${tg ? ` _[${tg}]_` : ''}`).join(' · ')}`));
  if (s.panels) { s.panels.forEach(([h, m, t]) => md.push(`- **${h}**: ${t}${m ? ` \`${m}\`` : ''}`)); md.push('', `_Layout:_ Right panel: ${s.next.map(([k, v]) => `${k.toUpperCase()} / ${v}`).join(' / ')}`); }
  if (s.type === 'disclaimer') md.push(DISCLAIMER, '', `_Layout:_ Footer: ${s.footer.toUpperCase()}`);
  if (s.callout) md.push('', `**${s.callout[0]}** — ${s.callout[1]}`);
  if (s.why) md.push('', `**WHY WE STOP** — ${s.why}`);
  md.push('', '<details><summary>Speaker notes</summary>', '', s.notes, '', '</details>', '');
});
// the open questions are authoring notes, kept out of the public tree
if (fs.existsSync(OPEN_QUESTIONS)) md.push(fs.readFileSync(OPEN_QUESTIONS, 'utf8'));
fs.writeFileSync(OUT_MD, md.join('\n'));
console.log('slides', slides.length, 'max words', Math.max(...slides.map(words)), slides.map((s, i) => `${i + 1}:${words(s)}`).join(' '));
