// Extracts the slides of a bundled deck into an editable HTML file, and bundles them back.
// The bundle keeps fonts, logo and the deck engine; only the <section> slides are swapped.
// usage, from the repo root:
//   node design/deck.js extract "S01-Kick-off-and-Process/S01 Kick-off and Process.html" design/s01_slides.html
//   node design/deck.js bundle design/s01_slides.html "S01-Kick-off-and-Process/S01 Kick-off and Process.html"
// In a slides file, the first line `<!-- title: ... -->` names the deck (the browser tab title),
// and `<section data-pillars="S03"></section>` is replaced by the S03 "Reinforce in the pillars"
// slide from design/pillars.js. Slides are renumbered by position on every bundle.
const fs = require('fs');
const path = require('path');

const TEMPLATE_START = '"<!DOCTYPE html>';
// a Windows checkout may turn LF into CRLF; the bundles and slides are LF in the repository
const readText = file => fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
const TITLE_RE = /^<!-- title: (.*?) -->/;
// the slide's own number: 24px Archivo Black, in the header or a corner
const NUMBER_RE = /(<div style="[^"]*Archivo Black[^"]*font-size: 24px;[^"]*">)(\d\d)(<\/div>)/g;

function readBundle(bundlePath) {
  const lines = readText(bundlePath).split('\n');
  const index = lines.findIndex(line => line.startsWith(TEMPLATE_START));
  if (index < 0) throw new Error(`no template line in ${bundlePath}`);
  return { lines, index, template: JSON.parse(lines[index]) };
}

function slideRegion(template) {
  const start = template.indexOf('<section');
  const end = template.lastIndexOf('</section>') + '</section>'.length;
  if (start < 0 || end < start) throw new Error('no <section> slides in the template');
  return { start, end };
}

const escapeHtml = text => String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// The loader replaces the whole document with the template, so the tab title must live in both.
function withTitle(template, title) {
  const tag = `<title>${escapeHtml(title)}</title>`;
  if (/<title>[^<]*<\/title>/.test(template)) return template.replace(/<title>[^<]*<\/title>/, tag);
  const viewport = '<meta name="viewport" content="width=device-width, initial-scale=1">';
  if (!template.includes(viewport)) throw new Error('no viewport meta to place the title after');
  return template.replace(viewport, `${viewport}\n${tag}`);
}

function writeBundle(bundle, template, title, outPath) {
  const lines = bundle.lines.slice();
  lines[bundle.index] = JSON.stringify(withTitle(template, title)).replace(/<\//g, '<\\u002F');
  const html = lines.join('\n').replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
  fs.writeFileSync(outPath, html);
  return html;
}

function renumber(sections) {
  return sections.map((section, i) => {
    const number = String(i + 1).padStart(2, '0');
    const old = (section.match(/data-screen-label="(\d\d)"/) || [])[1];
    if (!old) throw new Error(`slide ${number} has no data-screen-label`);
    const relabelled = section.replace(`data-screen-label="${old}"`, `data-screen-label="${number}"`);
    return relabelled.replace(NUMBER_RE, (all, open, shown, close) => (shown === old ? open + number + close : all));
  });
}

function expandPillars(sections) {
  return sections.map((section, i) => {
    const placeholder = section.match(/^<section data-pillars="(S\d\d)"><\/section>/);
    if (!placeholder) return section;
    const pillars = require('./pillars.js');
    const number = String(i + 1).padStart(2, '0');
    return pillars.slide(placeholder[1], number) + section.slice(placeholder[0].length);
  });
}

function extract(bundlePath, slidesPath) {
  const { template } = readBundle(bundlePath);
  const { start, end } = slideRegion(template);
  const title = path.basename(bundlePath, '.html');
  const usage = `node design/deck.js bundle ${slidesPath.replace(/\\/g, '/')} "${bundlePath.replace(/\\/g, '/')}"`;
  fs.writeFileSync(slidesPath, `<!-- title: ${title} -->\n<!-- Edit the slides here, then: ${usage} -->\n${template.slice(start, end)}\n`);
  console.log('extracted', (template.slice(start, end).match(/<section /g) || []).length, 'slides to', slidesPath);
}

function bundle(slidesPath, bundlePath) {
  const source = readText(slidesPath);
  const title = (source.match(TITLE_RE) || [])[1];
  if (!title) throw new Error(`${slidesPath} must start with <!-- title: ... -->`);
  const slides = source.slice(source.indexOf('<section'), source.lastIndexOf('</section>') + '</section>'.length);
  const sections = renumber(expandPillars(slides.split(/(?=<section )/)));
  const target = readBundle(bundlePath);
  const { start, end } = slideRegion(target.template);
  const template = target.template.slice(0, start) + sections.join('') + target.template.slice(end);
  const html = writeBundle(target, template, title, bundlePath);
  console.log('bundled', sections.length, 'slides,', html.length, 'bytes, into', bundlePath);
}

module.exports = { readText, readBundle, slideRegion, withTitle, writeBundle };

if (require.main === module) {
  const [command, from, to] = process.argv.slice(2);
  if (command === 'extract' && from && to) extract(from, to);
  else if (command === 'bundle' && from && to) bundle(from, to);
  else {
    console.error('usage: node design/deck.js extract <deck.html> <slides.html> | bundle <slides.html> <deck.html>');
    process.exit(1);
  }
}
