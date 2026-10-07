// Lints the six decks against the house rules in AGENTS.md and the facts in SYLLABUS.md.
// usage, from the repo root: node design/check.js   (exit code 1 when anything is found)
const fs = require('fs');
const path = require('path');
const { readBundle } = require('./deck.js');

const repo = path.resolve(__dirname, '..');
const DECKS = [
  'S01-Kick-off-and-Process/S01 Kick-off and Process.html',
  'S02-Investment-Research/S02 Investment Research.html',
  'S03-Feature-Engineering/S03 Feature Engineering.html',
  'S04-Portfolio-Construction/S04 Portfolio Construction.html',
  'S05-Backtest-and-Attribution/S05 Backtest and Attribution.html',
  'S06-Final-Strategy-Prep-and-Presentation/S06 Final Strategy Prep & Presentation.html',
];
const FORBIDDEN = [
  [/actionable/i, 'banned word'],
  [/alpha signal/i, 'banned phrase'],
  [/superior returns?/i, 'banned phrase'],
  [/live alpha/i, 'banned phrase'],
  [/KN Fund/i, 'internal fund named'],
  [/funded strategy/i, 'promise of funding'],
  [/BRAINSTORMING_/, 'retired file: the benchmark lives in JOURNAL_1.md'],
  [/\bExp_\d/, 'folder is Experiment_N'],
  [/\bsix sessions\b/i, 'there are seven sessions, S00 to S06'],
  [/\b3\.14\b/, 'the program uses Python 3.13'],
  [/\bpip install\b/, 'the program installs with uv'],
  [/Claude or Codex/i, 'assistant-neutral wording'],
  [/\[[A-Z][A-Z .]{2,}\]/, 'placeholder text'],
  [/github\.com\/you\b/, 'placeholder link'],
  [/Final Strategy &(amp;)? Presentation/i, 'the session is Final Strategy Prep & Presentation'],
];
// "alpha" is kept only as a regression intercept, or as a name someone else gave it
const ALPHA_ALLOWED = /Jensen|CAPM alpha|alpha \(the intercept|Alpha Sizing|alpha-decomposition|`alpha`|column alpha|alpha column/i;
// the slide's own number: 24px Archivo Black, in the header or a corner
const NUMBER_RE = /<div style="[^"]*Archivo Black[^"]*font-size: 24px;[^"]*">(\d\d)<\/div>/g;
const PILLAR_RE = /href="https:\/\/github\.com\/KaxaNuk\/(Coding-Foundations|Financial-Markets|Mathematical-Finance)\/tree\/main\/([^/"]+)\/"/g;

const decode = text => text.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
function slideText(section) {
  const label = (section.match(/data-label="([^"]*)"/) || [])[1] || '';
  const notes = (section.match(/data-speaker-notes="([^"]*)"/) || [])[1] || '';
  const body = section.replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ');
  return decode(`${label} | ${body} | ${notes}`).replace(/\s+/g, ' ');
}

const findings = [];
for (const deck of DECKS) {
  const id = deck.slice(0, 3);
  const html = fs.readFileSync(path.join(repo, deck), 'utf8');
  const { template } = readBundle(path.join(repo, deck));
  const outer = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
  const inner = (template.match(/<title>([^<]*)<\/title>/) || [])[1];
  if (!outer || outer === 'Bundled Page' || outer !== inner) findings.push(`${id}: tab title "${outer}" / "${inner}"`);
  const sections = template.slice(template.indexOf('<section')).split(/(?=<section )/);
  if (!sections.some(s => s.includes('data-label="Reinforce in the pillars"'))) findings.push(`${id}: no "Reinforce in the pillars" slide`);
  sections.forEach((section, i) => {
    const number = String(i + 1).padStart(2, '0');
    const where = `${id} #${number}`;
    const label = (section.match(/data-screen-label="(\d\d)"/) || [])[1];
    if (label !== number) findings.push(`${where}: data-screen-label is ${label}`);
    const shown = [...section.matchAll(NUMBER_RE)].map(m => m[1]);
    const own = shown.filter(n => n === number).length;
    if (i > 0 && own !== 1) findings.push(`${where}: shows its number ${own} times (${shown.join(',') || 'none'})`);
    const text = slideText(section);
    for (const [pattern, why] of FORBIDDEN) {
      const m = text.match(pattern);
      if (m) findings.push(`${where}: ${why}: "…${text.slice(Math.max(0, m.index - 40), m.index + 50)}…"`);
    }
    for (const m of text.matchAll(/\balpha\b/gi)) {
      const context = text.slice(Math.max(0, m.index - 50), m.index + 50);
      if (!ALPHA_ALLOWED.test(context)) findings.push(`${where}: "alpha" not as an intercept: "…${context}…"`);
    }
    for (const [, workshop, folder] of section.matchAll(PILLAR_RE)) {
      if (!fs.existsSync(path.join(repo, '..', workshop, folder))) findings.push(`${where}: no folder ${workshop}/${folder}`);
    }
  });
}
findings.forEach(f => console.log(f));
console.log(findings.length ? `${findings.length} findings` : 'clean');
process.exit(findings.length ? 1 : 0);
