// Renders a deck in the S04 design from a content module, and rebundles it into the S04 HTML shell
// (fonts, logo and deck-stage are taken from the shell; only the slides are replaced).
// usage, from the repo root:
//   node design/render.js design/s05_content.js "S04 Portfolio Construction.html" "S05 Backtest and Attribution.html"
const fs = require('fs');
const path = require('path');

const [, , contentPath, shellPath, outPath] = process.argv;
const deck = require(path.resolve(contentPath));

const INK = '#121110', PAPER = '#F2F0EB', RED = '#E84328', CARD = '#E4E1DA', CARD_D = '#201F1D';
const BLACK = "font-family: 'Archivo Black', system-ui, sans-serif;";
const MONO = "font-family: 'JetBrains Mono', monospace;";
const LOGO = '1ed1baf3-b691-4e40-8cbc-5318e0848c8f';

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const wbr = s => esc(s).replace(/([./_])/g, '$1<wbr>').replace(/<wbr>$/, '');
// `code` → mono span; everything else escaped
function fmt(text, monoColor) {
  return String(text).split(/(`[^`]+`)/).map(part => {
    if (part.startsWith('`') && part.endsWith('`')) {
      const c = monoColor ? ` color: ${monoColor};` : '';
      return `<span style="${MONO} font-size: 0.93em;${c}">${wbr(part.slice(1, -1))}</span>`;
    }
    return esc(part);
  }).join('');
}
const title = (t, accent = RED) => {
  const m = t.match(/^(.*?)([.?])$/);
  return m ? `${esc(m[1])}<span style="color: ${accent};">${m[2]}</span>` : esc(t);
};

function frame(s, bg, inner) {
  const color = bg === PAPER ? INK : bg === INK ? PAPER : '#FFF4F1';
  return `<section data-label="${esc(s.label || s.title)}" data-screen-label="${s.n}" data-speaker-notes="${esc(s.notes)}">
  <div style="position: absolute; inset: 0; overflow: hidden; background: ${bg}; font-family: 'Archivo', system-ui, sans-serif; color: ${color}; display: flex; flex-direction: column; padding: 69px 78px 54px;">
${inner}
  </div>
</section>`;
}
function header(s, dark) {
  return `    <div style="display: flex; align-items: center; gap: 24px; flex: none;">
      <div style="font-size: 24px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: ${dark ? '#A5A29B' : '#56534E'};">${esc(s.kicker)}</div>
      <div style="margin-left: auto; ${BLACK} font-size: 24px; color: ${dark ? '#56534E' : '#A5A29B'};">${s.n}</div>
    </div>`;
}
function titleRow(s, dark, size = 84) {
  const deckHtml = s.deck ? `<div style="width: ${s.deckWidth || 640}px; flex: none; font-size: 26px; line-height: 1.5; font-weight: 500; color: ${dark ? '#C9C6BF' : '#3A3833'}; padding-top: 12px;">${fmt(s.deck, dark ? PAPER : null)}</div>` : '';
  return `    <div style="display: flex; gap: 60px; align-items: flex-start; margin-top: 36px; flex: none;">
      <h1 style="flex: 1; margin: 0; ${BLACK} font-size: ${size}px; line-height: 0.94; letter-spacing: -0.04em; text-transform: uppercase;">${title(s.title)}</h1>
      ${deckHtml}
    </div>`;
}
function callout(label, text, dark) {
  if (!label) return '';
  return `    <div style="display: flex; gap: 24px; align-items: baseline; margin-top: 30px; flex: none;">
      <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: ${RED}; letter-spacing: 0.16em; flex: none; max-width: 460px;">${esc(label)}</div>
      <div style="font-size: 26px; line-height: 1.4; color: ${dark ? '#C9C6BF' : '#56534E'};">${fmt(text, dark ? PAPER : null)}</div>
    </div>`;
}
// sizes: lg (≤4 cards), md (5 cards / compact), sm (under a paste box)
const SIZES = {
  lg: { pad: '30px 33px 33px', num: 60, head: 40, body: 33, chip: 21, min: 540, mt: 48 },
  md: { pad: '24px 27px 27px', num: 48, head: 31, body: 28, chip: 21, min: 540, mt: 48 },
  sm: { pad: '24px 27px 27px', num: 42, head: 30, body: 27, chip: 21, min: 220, mt: 24 },
};
function cards(s, dark, size) {
  const z = SIZES[size || s.size || (s.cards.length >= 5 ? 'md' : 'lg')];
  const hl = s.hl === undefined ? s.cards.length - 1 : s.hl; // highlighted card index (-1: none)
  const head = s.headSize || z.head;
  const items = s.cards.map((c, i) => {
    let bg, fg, body, numC = RED;
    if (i === hl && !dark) { bg = INK; fg = PAPER; body = '#C9C6BF'; }
    else if (i === hl && dark) { bg = RED; fg = '#FFF4F1'; body = '#FFF4F1'; numC = INK; }
    else if (dark) { bg = CARD_D; fg = PAPER; body = '#C9C6BF'; }
    else { bg = CARD; fg = INK; body = '#3A3833'; }
    const grey = c.grey ? ' opacity: 0.45;' : '';
    const chip = c.chip ? `<div style="${MONO} font-size: ${c.chipSize || z.chip}px; line-height: 1.35; color: ${numC === INK ? INK : RED}; margin-top: auto; padding-top: 16px;">${wbr(c.chip)}</div>` : '';
    return `      <div style="background: ${bg}; color: ${fg}; padding: ${z.pad}; display: flex; flex-direction: column; min-width: 0;${grey}">
        <div style="display: flex; flex-direction: column; gap: 14px;"><div style="${BLACK} font-size: ${z.num}px; line-height: 1; color: ${numC}; letter-spacing: -0.04em; flex: none;">${esc(c.num || String(i + 1).padStart(2, '0'))}</div><div><div style="${BLACK} font-size: ${head}px; line-height: 1.05; letter-spacing: -0.02em; text-transform: uppercase;">${esc(c.h)}</div></div></div>
        <div style="font-size: ${s.bodySize || z.body}px; line-height: 1.38; margin-top: 14px; color: ${body};">${fmt(c.b, (i === hl || dark) ? null : null)}</div>
        ${chip}
      </div>`;
  }).join('\n');
  const cols = s.cols || s.cards.length;
  const rows = s.rows ? `grid-template-rows: repeat(${s.rows}, minmax(0, 1fr));` : '';
  const grow = s.rows ? 'flex: 1; min-height: 0;' : `flex: none; min-height: ${s.minHeight || z.min}px;`;
  return `    <div style="${grow} display: grid; grid-template-columns: repeat(${cols}, minmax(0, 1fr)); ${rows} gap: 18px; margin-top: ${s.rows ? 24 : z.mt}px;">
${items}
    </div>`;
}
function pasteBox(s) {
  const lines = s.paste.map(l => {
    const m = l.match(/^(Codex: |\d · )(.*)$/);
    return m ? `<div style="margin-top: 6px;"><span style="color: ${RED};">${esc(m[1])}</span>${wbr(m[2])}</div>` : `<div>${wbr(l)}</div>`;
  }).join('');
  const behind = s.behind ? `<div style="font-size: 24px; line-height: 1.45; color: #A5A29B; margin-top: 18px; padding-top: 16px; border-top: 2px solid #3A3833;">${fmt(s.behind, PAPER)}</div>` : '';
  return `    <div style="background: ${CARD_D}; padding: 30px 42px 33px; margin-top: 36px; flex: none;">
      <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: ${RED}; letter-spacing: 0.16em;">PASTE THIS INTO CLAUDE OR CODEX</div>
      <div style="${MONO} font-size: ${s.pasteSize || 26}px; line-height: 1.45; color: ${PAPER}; margin-top: 16px;">${lines}</div>
      ${behind}
    </div>`;
}
function table(s, dark) {
  const t = s.table;
  const line = dark ? '#3A3833' : '#CFCBC3';
  const th = t.head.map((h, i) => `<th style="text-align: ${i ? 'right' : 'left'}; font-size: 20px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: ${dark ? '#A5A29B' : '#56534E'}; padding: 14px 18px; border-bottom: 3px solid ${dark ? '#56534E' : '#121110'};">${esc(h)}</th>`).join('');
  const tr = t.rows.map((r, ri) => {
    const strong = t.strong && t.strong.includes(ri);
    return '<tr>' + r.map((c, i) => `<td style="text-align: ${i ? 'right' : 'left'}; padding: 16px 18px; border-bottom: 2px solid ${line}; font-size: ${i ? 30 : 28}px; ${i ? MONO : ''} ${strong ? `color: ${RED}; font-weight: 600;` : ''}${i === t.boldCol ? ' font-weight: 600;' : ''}">${i ? esc(c) : fmt(c)}</td>`).join('') + '</tr>';
  }).join('\n');
  return `    <table style="width: 100%; border-collapse: collapse; margin-top: 42px; flex: none;"><thead><tr>${th}</tr></thead><tbody>
${tr}
    </tbody></table>`;
}

const kinds = {
  cover(s) {
    const items = s.contents.map((c, i) => `        <div style="display: flex; gap: 21px; align-items: baseline; padding: 21px 0; border-top: 2px solid rgba(255,244,241,0.35);${i === s.contents.length - 1 ? ' border-bottom: 2px solid rgba(255,244,241,0.35);' : ''}">
          <div style="${BLACK} font-size: 24px; opacity: 0.7; width: 33px;">${String(i + 1).padStart(2, '0')}</div>
          <div style="${BLACK} font-size: 30px; line-height: 1.1; letter-spacing: -0.02em; text-transform: uppercase;">${esc(c)}</div>
        </div>`).join('\n');
    return `<section data-label="Cover" data-screen-label="${s.n}" data-speaker-notes="${esc(s.notes)}">
  <div style="position: absolute; inset: 0; overflow: hidden; background: ${PAPER}; font-family: 'Archivo', system-ui, sans-serif; color: ${INK};">
    <div style="position: absolute; top: 0; right: 0; width: 558px; height: 1080px; background: ${RED};"></div>
    <div style="position: absolute; top: 0; right: 558px; width: 144px; height: 522px; background: ${INK};"></div>
    <div style="position: absolute; top: 69px; left: 78px; display: flex; align-items: center; gap: 24px;">
      <img src="${LOGO}" alt="KaxaNuk — Sharing knowledge" style="height: 66px; width: auto; display: block;">
      <div style="width: 51px; height: 4px; background: ${RED};"></div>
      <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: #56534E; letter-spacing: 0.16em;">Investment Bootcamp</div>
    </div>
    <div style="position: absolute; left: 78px; top: 222px; width: 1140px;">
      <h1 style="margin: 0; ${BLACK} font-size: ${s.size1 || 141}px; line-height: 0.86; letter-spacing: -0.045em; text-transform: uppercase;">${esc(s.line1)}</h1>
      <h1 style="margin: 9px 0 0; ${BLACK} font-size: ${s.size2 || 124}px; line-height: 0.86; letter-spacing: -0.045em; text-transform: uppercase;"><span style="color: ${RED};">${esc(s.line2)}</span></h1>
    </div>
    <div style="position: absolute; left: 78px; bottom: 84px; width: 1030px; display: flex; gap: 51px; align-items: flex-start;">
      <div style="${BLACK} font-size: 111px; line-height: 0.8; color: ${RED}; letter-spacing: -0.05em;">${esc(s.session)}</div>
      <div style="font-size: 26px; line-height: 1.5; font-weight: 500; padding-top: 9px;">${esc(s.deck)}</div>
    </div>
    <div style="position: absolute; right: 78px; top: 210px; width: 402px; color: #FFF4F1;">
      <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: #FFF4F1; letter-spacing: 0.2em; opacity: 0.72;">Contents</div>
      <div style="display: flex; flex-direction: column; margin-top: 24px;">
${items}
      </div>
    </div>
  </div>
</section>`;
  },
  cards(s) {
    const dark = !!s.dark;
    const pre = s.paste ? pasteBox(s) : '';
    return frame(s, dark ? INK : PAPER, [header(s, dark), titleRow(s, dark), pre, cards(s, dark, s.paste ? 'sm' : s.size), s.rows ? '' : '    <div style="flex: 1;"></div>', callout(s.calloutLabel, s.callout, dark)].join('\n'));
  },
  table(s) {
    const dark = !!s.dark;
    return frame(s, dark ? INK : PAPER, [header(s, dark), titleRow(s, dark), table(s, dark), '    <div style="flex: 1;"></div>', callout(s.calloutLabel, s.callout, dark)].join('\n'));
  },
  statement(s) {
    const steps = s.steps.map((st, i) => {
      const today = st.today;
      const box = today ? `background: ${INK}; color: ${PAPER};` : 'border-top: 3px solid rgba(255,244,241,0.5);';
      return `        <div style="padding: 16px 16px 18px; ${box} min-width: 0;">
          <div style="display: flex; gap: 10px; align-items: baseline;"><div style="${BLACK} font-size: 30px; line-height: 1; color: ${today ? RED : INK};">${i + 1}</div><div style="${BLACK} font-size: 18px; text-transform: uppercase; letter-spacing: -0.01em;">${esc(st.h)}</div></div>
          <div style="font-size: 19px; line-height: 1.3; margin-top: 8px; color: ${today ? '#C9C6BF' : '#FFF4F1'};">${esc(st.b)}${today ? ` · <span style="color: ${RED}; font-weight: 600; letter-spacing: 0.12em;">TODAY</span>` : ''}</div>
        </div>`;
    }).join('\n');
    const [a, b] = s.title.split('|');
    return `<section data-label="${esc(s.label)}" data-screen-label="${s.n}" data-speaker-notes="${esc(s.notes)}">
  <div style="position: absolute; inset: 0; overflow: hidden; background: ${RED}; font-family: 'Archivo', system-ui, sans-serif; color: #FFF4F1; display: flex; flex-direction: column; padding: 69px 78px 84px;">
    <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: #FFF4F1; letter-spacing: 0.2em; opacity: 0.75; flex: none;">${esc(s.kicker)}</div>
    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; max-width: 1640px;">
      <h1 style="margin: 0; ${BLACK} font-size: 124px; line-height: 0.9; letter-spacing: -0.045em; text-transform: uppercase;">${esc(a)}<span style="color: ${INK};">${esc(b)}</span></h1>
      <div style="margin-top: 36px; font-size: 32px; line-height: 1.35; font-weight: 500; color: ${INK};">${esc(s.deck)}</div><div style="display: grid; grid-template-columns: repeat(8, minmax(0, 1fr)); gap: 10px; margin-top: 48px;">
${steps}
      </div><div style="margin-top: 48px; padding-top: 24px; border-top: 2px solid rgba(255,244,241,0.4); display: flex; gap: 24px; align-items: baseline;"><div style="font-size: 24px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: ${INK}; flex: none;">${esc(s.calloutLabel)}</div><div style="font-size: 28px; line-height: 1.4; color: #FFF4F1;">${fmt(s.callout)}</div></div>
    </div>
    <div style="position: absolute; right: 78px; bottom: 84px; ${BLACK} font-size: 24px; opacity: 0.7;">${s.n}</div>
  </div>
</section>`;
  },
  divider(s) {
    return `<section data-label="${esc(s.kicker.replace('SECTION', 'Section'))}" data-screen-label="${s.n}" data-speaker-notes="${esc(s.notes)}">
  <div style="position: absolute; inset: 0; overflow: hidden; background: ${RED}; font-family: 'Archivo', system-ui, sans-serif; color: #FFF4F1; display: flex; flex-direction: column; padding: 69px 78px 84px;">
    <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: #FFF4F1; letter-spacing: 0.2em; opacity: 0.75; flex: none;">${esc(s.kicker)}</div>
    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; max-width: 1640px;">
      <h1 style="margin: 0; ${BLACK} font-size: 138px; line-height: 0.9; letter-spacing: -0.045em; text-transform: uppercase;">${esc(s.title)}</h1>
      <div style="margin-top: 60px; font-size: 38px; line-height: 1.35; font-weight: 500; color: ${INK};">${esc(s.deck)}</div>
    </div>
    <div style="position: absolute; right: 78px; bottom: 84px; ${BLACK} font-size: 24px; opacity: 0.7;">${s.n}</div>
  </div>
</section>`;
  },
  stop(s) {
    const li = (t, dot = RED) => `          <div style="display: flex; gap: 15px; align-items: baseline; padding: 7px 0;"><div style="width: 12px; height: 12px; background: ${dot}; flex: none;"></div><div style="font-size: 23px; line-height: 1.32;">${fmt(t)}</div></div>`;
    return frame(s, PAPER, [header(s, false), titleRow(s, false), `    <div style="flex: 1; min-height: 0; display: grid; grid-template-columns: 1.25fr 1fr; gap: 18px; margin-top: 36px;">
      <div style="background: ${CARD}; padding: 27px 33px 27px; min-width: 0;">
        <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: ${RED}; letter-spacing: 0.16em;">${esc(s.leftLabel)}</div>
        <div style="margin-top: 12px; border-top: 2px solid #B6B2AA; padding-top: 4px;">
${s.left.map(t => li(t)).join('\n')}
        </div>
      </div>
      <div style="background: ${INK}; color: ${PAPER}; padding: 27px 33px 27px; display: flex; flex-direction: column; min-width: 0;">
        <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: ${RED}; letter-spacing: 0.16em;">${esc(s.rightLabel)}</div>
        <div style="margin-top: 12px; border-top: 2px solid #3A3833; padding-top: 4px;">
${s.right.map(t => li(t)).join('\n')}
        </div>
        <div style="margin-top: auto; padding-top: 18px; border-top: 2px solid #3A3833; font-size: 25px; line-height: 1.4; color: #C9C6BF;"><span style="font-size: 22px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: ${RED};">${esc(s.calloutLabel)}</span><br>${fmt(s.callout, PAPER)}</div>
      </div>
    </div>`].join('\n'));
  },
  refs(s) {
    const group = g => `    <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: ${RED}; letter-spacing: 0.16em; margin-top: 36px;">${esc(g.label)}</div>
    <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 21px 42px; margin-top: 15px;">
${g.items.map(it => `      <div style="border-top: 2px solid #CFCBC3; padding: 15px 0 9px; min-width: 0;">
        <div style="${BLACK} font-size: 27px; text-transform: uppercase; letter-spacing: -0.02em;">${esc(it.a)}</div>
        <div style="display: flex; gap: 18px; align-items: baseline; margin-top: 9px;"><div style="${MONO} font-size: 25px; color: ${RED}; flex: none;">${esc(it.y)}</div><div style="font-size: 25px; line-height: 1.3; color: #3A3833;">${esc(it.t)}</div></div>
        ${it.tag ? `<div style="${MONO} font-size: 21px; color: #56534E; margin-top: 8px;">→ ${esc(it.tag)}</div>` : ''}
      </div>`).join('\n')}
    </div>`;
    return frame(s, PAPER, [header(s, false), titleRow({ ...s, deckWidth: 700 }, false, 78), ...s.groups.map(group), '    <div style="flex: 1;"></div>', callout(s.calloutLabel, s.callout, false)].join('\n'));
  },
  closing(s) {
    const boxes = s.boxes.map(b => `        <div style="background: ${CARD_D}; padding: 24px 27px; min-width: 0; display: flex; flex-direction: column;">
          <div style="font-size: 22px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: ${RED};">${esc(b.h)}</div>
          ${b.chip ? `<div style="${MONO} font-size: 21px; color: ${PAPER}; margin-top: 10px;">${wbr(b.chip)}</div>` : ''}
          <div style="font-size: 22px; line-height: 1.35; color: #A5A29B; margin-top: 10px;">${esc(b.b)}</div>
        </div>`).join('\n');
    const side = s.next.map(([k, v, sz]) => `      <div>
        <div style="font-size: 24px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; opacity: 0.72;">${esc(k)}</div>
        <div style="${BLACK} font-size: ${sz || 42}px; line-height: 1.05; margin-top: 9px; letter-spacing: -0.02em;">${esc(v)}</div>
      </div>`).join('\n');
    return `<section data-label="Close" data-screen-label="${s.n}" data-speaker-notes="${esc(s.notes)}">
  <div style="position: absolute; inset: 0; overflow: hidden; background: ${INK}; font-family: 'Archivo', system-ui, sans-serif; color: ${PAPER};">
    <div style="position: absolute; top: 0; right: 0; width: 558px; height: 1080px; background: ${RED};"></div>
    <div style="position: absolute; top: 69px; left: 78px; display: flex; align-items: center; gap: 24px;">
      <img src="${LOGO}" alt="KaxaNuk — Sharing knowledge" style="height: 66px; width: auto; display: block;">
      <div style="width: 51px; height: 4px; background: ${RED};"></div>
      <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: #A5A29B; letter-spacing: 0.16em;">Investment Bootcamp</div>
    </div>
    <div style="position: absolute; left: 78px; top: 186px; bottom: 54px; width: 1188px; display: flex; flex-direction: column;">
      <h1 style="margin: 0; ${BLACK} font-size: 120px; line-height: 0.9; letter-spacing: -0.045em; text-transform: uppercase;">${esc(s.line1)}</h1>
      <h1 style="margin: 9px 0 0; ${BLACK} font-size: 120px; line-height: 0.9; letter-spacing: -0.045em; text-transform: uppercase;"><span style="color: ${RED};">${esc(s.line2)}</span></h1>
      <div style="margin-top: 36px; font-size: 30px; line-height: 1.4; font-weight: 500; color: #C9C6BF; max-width: 34ch;">${esc(s.deck)}</div>
      <div style="flex: 1;"></div>
      <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px;">
${boxes}
      </div>
      <div style="display: flex; align-items: baseline; gap: 33px; margin-top: 30px;">
        <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: ${RED}; letter-spacing: 0.16em;">QUESTIONS</div>
        <div style="${MONO} font-size: 36px;">research@kaxanuk.mx</div>
      </div>
    </div>
    <div style="position: absolute; right: 78px; top: 288px; width: 402px; color: #FFF4F1; display: flex; flex-direction: column; gap: 33px;">
${side}
    </div>
    <div style="position: absolute; right: 78px; top: 69px; ${BLACK} font-size: 24px; color: #FFF4F1; opacity: 0.7;">${s.n}</div>
  </div>
</section>`;
  },
  disclaimer(s) {
    return `<section data-label="Disclaimers" data-screen-label="${s.n}" data-speaker-notes="${esc(s.notes)}">
  <div style="position: absolute; inset: 0; overflow: hidden; background: ${PAPER}; font-family: 'Archivo', system-ui, sans-serif; color: ${INK};">
    <div style="position: absolute; top: 69px; left: 78px; right: 78px; display: flex; align-items: center; gap: 24px;">
      <div style="font-size: 24px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: #56534E;">Disclaimers</div>
      <div style="margin-left: auto; ${BLACK} font-size: 24px; color: #A5A29B;">${s.n}</div>
    </div>
    <h1 style="position: absolute; left: 78px; top: 150px; margin: 0; ${BLACK} font-size: 72px; line-height: 0.94; letter-spacing: -0.04em; text-transform: uppercase;">Disclaimers</h1>
    <div style="position: absolute; left: 78px; top: 306px; width: 1560px; font-size: 25px; line-height: 1.6; color: #3A3833;">${esc(s.text)}</div>
    <div style="position: absolute; left: 78px; bottom: 84px; display: flex; align-items: center; gap: 24px;">
      <img src="${LOGO}" alt="KaxaNuk" style="height: 54px; width: auto; display: block;">
      <div style="width: 51px; height: 4px; background: ${RED};"></div>
      <div style="font-size: 24px; font-weight: 600; text-transform: uppercase; color: #56534E; letter-spacing: 0.16em;">${esc(s.footer)}</div>
    </div>
  </div>
</section>`;
  },
};

// ---- assemble
const shell = fs.readFileSync(shellPath, 'utf8').split('\n');
const tplIdx = shell.findIndex(l => l.startsWith('"<!DOCTYPE html>'));
const tpl = JSON.parse(shell[tplIdx]);
const start = tpl.indexOf('<section');
const end = tpl.lastIndexOf('</section>') + '</section>'.length;
const slides = deck.slides.map((s, i) => {
  s.n = String(i + 1).padStart(2, '0');
  if (!kinds[s.kind]) throw new Error('unknown kind ' + s.kind);
  return kinds[s.kind](s);
}).join('\n\n');
const newTpl = tpl.slice(0, start) + slides + tpl.slice(end);
shell[tplIdx] = JSON.stringify(newTpl).replace(/<\//g, '<\\u002F');
let out = shell.join('\n').replace(/font-size="130" fill="#121110">S0\d</, `font-size="130" fill="#121110">${deck.thumb}<`);
fs.writeFileSync(outPath, out);
console.log('slides:', deck.slides.length, 'bytes:', out.length);
