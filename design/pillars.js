// The pillar sessions behind each Bootcamp session, in one place: the "Reinforce in the pillars"
// slide in every deck and the section of the same name in each session README come from here.
// Roles: required (a hard prerequisite in SYLLABUS.md), helpful (a soft one), further (a pillar
// session whose own "Prepares for" names this Bootcamp session, though the syllabus does not).
// usage, from the repo root: node design/pillars.js S03   prints the README section for S03
const REPOS = {
  CF: { repo: 'Coding-Foundations', pillar: 'Coding', name: 'Coding Foundations' },
  FM: { repo: 'Financial-Markets', pillar: 'Markets', name: 'Financial Markets' },
  MF: { repo: 'Mathematical-Finance', pillar: 'Math', name: 'Mathematical Finance' },
};
const SESSIONS = {
  'CF S01': ['S01-Terminal-Environment-and-Git', 'Terminal, Environment and Git'],
  'CF S03': ['S03-Functions-Types-and-Tests', 'Functions, Types and Tests'],
  'CF S04': ['S04-The-Agent-Loop', 'The Agent Loop: Plan, Go, Review, Commit'],
  'CF S05': ['S05-NumPy-pandas-and-Notebooks', 'NumPy, pandas and Notebooks'],
  'CF S06': ['S06-Time-Without-Look-Ahead', 'Time Without Look-Ahead'],
  'CF S07': ['S07-Features-as-Data-Curator-Functions', 'Features as Data Curator Functions'],
  'CF S08': ['S08-Weight-Files-and-Invariants', 'Weight Files and Invariants'],
  'CF S09': ['S09-Design-Before-You-Prompt', 'Design Before You Prompt'],
  'CF S10': ['S10-Architecture-of-a-KaxaNuk-Library', 'Architecture of a KaxaNuk Library'],
  'CF S11': ['S11-House-Rules-and-Code-Review', 'House Rules and Code Review'],
  'CF S12': ['S12-Capstone-Ship-a-Tested-Release', 'Capstone: Ship a Tested Release'],
  'FM S01': ['S01-Ecosystem-and-Security-Master', 'The Ecosystem and the Security Master'],
  'FM S02': ['S02-Prices-Total-Returns-and-Time-Value', 'Prices, Total Returns and Time Value'],
  'FM S03': ['S03-Rates-Bonds-and-the-Yield-Curve', 'Rates, Bonds and the Yield Curve'],
  'FM S05': ['S05-Statements-Valuation-and-the-Three-Dates', 'Statements, Valuation and the Three Dates'],
  'FM S06': ['S06-Indices-Benchmarks-ETFs-and-Survivorship', 'Indices, Benchmarks, ETFs and Survivorship'],
  'FM S07': ['S07-Liquidity-Trading-Costs-and-Capacity', 'Liquidity, Trading Costs and Capacity'],
  'FM S08': ['S08-Efficiency-Anomalies-and-Decay', 'Efficiency, Anomalies and Decay'],
  'FM S09': ['S09-Risk-Diversification-and-the-Long-Only-Book', 'Risk, Diversification and the Long-Only Book'],
  'FM S10': ['S10-CAPM-Beta-and-the-Market', 'CAPM, Beta and the Market'],
  'FM S11': ['S11-Factor-Models-Risk-Factors-and-Return-Signals', 'Factor Models: Risk Factors and Return Signals'],
  'FM S12': ['S12-Capstone-Performance-Attribution-and-Track-Records', 'Capstone: Performance, Attribution and Track Records'],
  'MF S01': ['S01-Return-Arithmetic', 'Return Arithmetic'],
  'MF S02': ['S02-Distributions-Tails-and-Drawdowns', 'Distributions, Tails and Drawdowns'],
  'MF S03': ['S03-Simulation-Bootstrap-and-the-Null', 'Simulation, the Bootstrap and the Null'],
  'MF S04': ['S04-Estimation-Inference-and-Multiple-Comparisons', 'Estimation, Inference and Multiple Comparisons'],
  'MF S05': ['S05-Linear-Algebra-and-Covariance', 'Linear Algebra and Covariance'],
  'MF S06': ['S06-Regression-and-Its-Failures', 'Regression and Its Failures'],
  'MF S07': ['S07-Time-Series-and-Trend-Signals', 'Time Series and Trend Signals'],
  'MF S08': ['S08-Cross-Sectional-Signals-IC-and-Fama-MacBeth', 'Cross-Sectional Signals: IC, Breadth and Fama-MacBeth'],
  'MF S09': ['S09-PCA-Clusters-and-Regimes', 'Unsupervised Learning: PCA, Clusters and Regimes'],
  'MF S10': ['S10-Portfolio-Optimisation-and-Estimation-Error', 'Portfolio Optimisation and Estimation Error'],
  'MF S11': ['S11-Supervised-Learning-Without-Leakage', 'Supervised Learning Without Leakage'],
  'MF S12': ['S12-Capstone-Overfitting-Deflated-Sharpe-and-the-Holdout', 'Capstone: Overfitting, the Deflated Sharpe and the Holdout'],
};
// [id, role, focus]; focus may hold `code`
const MAP = {
  S00: [
    ['CF S01', 'helpful', 'git, uv, Python and your assistant, for a red doctor item'],
    ['CF S04', 'helpful', 'APM and the KaxaNuk Researcher, for a red doctor item'],
    ['FM S01', 'helpful', 'where the markets pillar starts'],
    ['MF S01', 'helpful', 'where the math pillar starts'],
  ],
  S01: [
    ['CF S01', 'required', 'git, a clean clone, uv and its lock file, `.env` never printed'],
    ['CF S04', 'required', 'the KaxaNuk Researcher: plan, go, review, commit'],
    ['FM S01', 'helpful', 'the security master, dated and current sector'],
    ['FM S06', 'helpful', 'the benchmark, chosen first'],
    ['FM S12', 'helpful', 'reading the worked example’s CAGR and Sharpe'],
    ['MF S01', 'helpful', 'reading the worked example’s CAGR and Sharpe'],
  ],
  S02: [
    ['CF S04', 'required', 'the agent loop: plan, go, review, commit'],
    ['FM S02', 'helpful', 'CPI release dates'],
    ['FM S03', 'helpful', 'duration, for the seeded case'],
    ['FM S08', 'helpful', 'efficiency, decay, fabricated citations; the history in six acts'],
    ['FM S11', 'helpful', 'a risk factor or a return signal'],
    ['MF S04', 'helpful', 't-statistics, p-values, multiple comparisons'],
    ['MF S06', 'helpful', 'reading a regression table'],
  ],
  S03: [
    ['CF S05', 'required', 'Jupyter, modules, stripped outputs, `DatetimeIndex`'],
    ['CF S06', 'required', 'shift, warm-up nulls, `index < date`, per-date ranks'],
    ['CF S07', 'required', '`c_*` features with `DataColumn`'],
    ['CF S03', 'further', 'tests as tables, the platform door'],
    ['CF S12', 'further', 'your tested `c_*` candidate'],
    ['FM S06', 'required', 'survivorship, point-in-time membership'],
    ['FM S01', 'helpful', 'the security master'],
    ['FM S02', 'helpful', 'adjusted and unadjusted prices'],
    ['FM S05', 'helpful', 'only for a fundamentals feature'],
    ['FM S07', 'helpful', 'the traded-value proxy'],
    ['FM S09', 'helpful', 'correlation, for the diversification check'],
    ['FM S11', 'further', 'classifying your candidate feature'],
    ['MF S08', 'required', 'MAD z-scores, ranks, IC, ICIR, the fundamental law'],
    ['MF S05', 'helpful', 'correlation, for the diversification check'],
    ['MF S07', 'helpful', 'look-ahead as causality'],
    ['MF S11', 'further', 'a machine-learning feature, without leakage'],
  ],
  S04: [
    ['CF S08', 'required', 'weight files, the invariants, Verify'],
    ['CF S06', 'helpful', 'the prior close: `index < date`'],
    ['CF S09', 'helpful', 'the spec before the code'],
    ['CF S11', 'further', 'reviewing the diff against the checklist'],
    ['CF S12', 'further', '`book_check` becomes the Verify cell'],
    ['FM S09', 'required', 'long-only mechanics, two kinds of cash, effective N'],
    ['FM S03', 'helpful', 'SHY as priced cash'],
    ['FM S07', 'helpful', 'turnover'],
    ['FM S06', 'further', 'TU22-EW as the control book'],
    ['MF S12', 'required', 'the trial budget and the statistics section'],
    ['MF S05', 'helpful', 'covariance and estimation error'],
    ['MF S09', 'helpful', 'the clustering behind HRP'],
    ['MF S10', 'helpful', 'sizing methods and `sizing.py`'],
  ],
  S05: [
    ['CF S10', 'helpful', 'guarded imports of licensed libraries'],
    ['CF S11', 'further', 'reviewing the agent’s draft against the checklist'],
    ['FM S07', 'required', 'costs with units, commission on unadjusted shares'],
    ['FM S12', 'required', 'engine metrics and Brinson-Fachler'],
    ['FM S02', 'helpful', 'total returns and the unadjusted price'],
    ['FM S10', 'helpful', 'beta'],
    ['FM S11', 'helpful', 'the factor layer'],
    ['FM S09', 'further', 'setting the cash reserve before the first run'],
    ['MF S01', 'required', 'annualisation, Sharpe, the CAGR of a short window'],
    ['MF S02', 'helpful', 'tails, VaR, CVaR'],
    ['MF S06', 'helpful', 'regression, for the Ken French diagnostic'],
    ['MF S08', 'further', 'reading a factor layer'],
  ],
  S06: [
    ['CF S01', 'required', 'a clean clone'],
    ['CF S11', 'helpful', 'changelog, Semantic Versioning, tags'],
    ['CF S12', 'helpful', 'CI, a release, a clean clone'],
    ['FM S12', 'required', 'the five gate criteria'],
    ['FM S08', 'helpful', 'decay after publication'],
    ['MF S04', 'required', 'Sharpe statistics'],
    ['MF S12', 'required', 'the deflated Sharpe, N, the holdout'],
    ['MF S02', 'helpful', 'skewness and kurtosis in the deflated Sharpe'],
    ['MF S03', 'helpful', 'random-draw percentiles'],
    ['MF S07', 'helpful', 'the timing-shift arm'],
  ],
};
const ROLE_ORDER = { required: 0, helpful: 1, further: 2 };

function url(id) {
  const [prefix] = id.split(' ');
  return `https://github.com/KaxaNuk/${REPOS[prefix].repo}/tree/main/${SESSIONS[id][0]}/`;
}

// entries of one Bootcamp session, grouped by pillar, required first
function groups(session) {
  const entries = MAP[session];
  if (!entries) throw new Error(`no pillar map for ${session}`);
  return Object.keys(REPOS).map(prefix => ({
    prefix,
    ...REPOS[prefix],
    entries: entries.filter(([id]) => id.startsWith(prefix))
      .sort((a, b) => ROLE_ORDER[a[1]] - ROLE_ORDER[b[1]])
      .map(([id, role, focus]) => ({ id, role, focus, title: SESSIONS[id][1], url: url(id) })),
  }));
}

const esc = text => String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const MONO = "font-family: 'JetBrains Mono', monospace;";
const BLACK = "font-family: 'Archivo Black', system-ui, sans-serif;";
const RED = '#E84328';
const html = text => esc(text).replace(/`([^`]+)`/g, `<span style="${MONO} font-size: 0.92em;">$1</span>`);
const plain = text => text.replace(/`/g, '');

function marker(role) {
  if (role === 'required') return `<div style="width: 13px; height: 13px; background: ${RED}; flex: none;"></div>`;
  if (role === 'helpful') return `<div style="width: 13px; height: 13px; border: 3px solid ${RED}; box-sizing: border-box; flex: none;"></div>`;
  return '<div style="width: 13px; height: 3px; background: #A5A29B; flex: none; position: relative; top: -7px;"></div>';
}

// the slide, in the design shared by the six decks; `number` is the two-digit slide number
function slide(session, number) {
  const columns = groups(session);
  const longest = Math.max(...columns.map(c => c.entries.length));
  const size = longest >= 7 ? { title: 21, focus: 19, pad: 10 } : longest >= 5 ? { title: 23, focus: 20, pad: 12 } : { title: 26, focus: 22, pad: 18 };
  const column = c => `      <div style="min-width: 0; display: flex; flex-direction: column;">
        <div style="font-size: 22px; font-weight: 600; text-transform: uppercase; color: ${RED}; letter-spacing: 0.16em; padding-bottom: 10px;">${esc(c.pillar)} · ${esc(c.name)}</div>
${c.entries.map(e => `        <a href="${e.url}" target="_blank" rel="noopener" title="${esc(e.id)} · ${esc(e.title)}" style="display: block; color: inherit; text-decoration: none; border-top: 2px solid #CFCBC3; padding: ${size.pad}px 0;">
          <div style="display: flex; gap: 12px; align-items: baseline;">${marker(e.role)}<div style="${MONO} font-size: ${size.title}px; color: ${RED}; flex: none;">${esc(e.id)}</div><div style="font-size: ${size.title}px; line-height: 1.25; font-weight: 600; min-width: 0;">${esc(e.title)}</div></div>
          <div style="font-size: ${size.focus}px; line-height: 1.3; color: #56534E; margin-top: 3px; padding-left: 25px;">${html(e.focus)}</div>
        </a>`).join('\n')}
      </div>`;
  const notes = `The pillar sessions behind session ${session.slice(1)}, from the syllabus. A filled square was required before today; an open one helps; a dash goes further, where the pillar itself says it prepares for this session. If you could not do a part of today with the AI off, go back to the session beside it and redo its drill, with the AI off again. Each entry opens the session on GitHub, and the same list is in this session’s README.`;
  return `<section data-label="Reinforce in the pillars" data-screen-label="${number}" data-speaker-notes="${esc(notes)}">
  <div style="position: absolute; inset: 0; overflow: hidden; background: #F2F0EB; font-family: 'Archivo', system-ui, sans-serif; color: #121110; display: flex; flex-direction: column; padding: 69px 78px 54px;">
    <div style="display: flex; align-items: center; gap: 24px; flex: none;">
      <div style="font-size: 24px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: #56534E;">The pillars · after session ${session.slice(1)}</div>
      <div style="margin-left: auto; ${BLACK} font-size: 24px; color: #A5A29B;">${number}</div>
    </div>
    <div style="display: flex; gap: 60px; align-items: flex-start; margin-top: 30px; flex: none;">
      <h1 style="flex: 1; margin: 0; ${BLACK} font-size: 76px; line-height: 0.94; letter-spacing: -0.04em; text-transform: uppercase;">Back to the pillars<span style="color: ${RED};">.</span></h1>
      <div style="width: 700px; flex: none; font-size: 24px; line-height: 1.45; font-weight: 500; color: #3A3833; padding-top: 6px;">The coding, markets and math sessions behind today. Go back to one when you could not do its part with the AI off.</div>
    </div>
    <div style="flex: 1; min-height: 0; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 42px; margin-top: 30px; align-items: start;">
${columns.map(column).join('\n')}
    </div>
    <div style="display: flex; gap: 30px; align-items: center; margin-top: 18px; flex: none; font-size: 22px; color: #56534E;">
      <div style="font-size: 22px; font-weight: 600; text-transform: uppercase; color: ${RED}; letter-spacing: 0.16em;">Key</div>
      <div style="display: flex; gap: 10px; align-items: center;">${marker('required')}required before this session</div>
      <div style="display: flex; gap: 10px; align-items: center;">${marker('helpful')}helpful</div>
      <div style="display: flex; gap: 10px; align-items: center;">${marker('further')}go further</div>
      <div style="margin-left: auto; ${MONO} font-size: 21px;">github.com/KaxaNuk</div>
    </div>
  </div>
</section>`;
}

// the README section, with the link definitions it uses
function markdown(session) {
  const ROLE = { required: 'Required', helpful: 'Helpful', further: 'Go further' };
  const lines = ['## Reinforce in the pillars', ''];
  lines.push(session === 'S00'
    ? '`ROUTE.md`, written by the self-check, is your map through the pillars. If the doctor is red, or you want to start a pillar from its first session:'
    : 'The pillar sessions behind this one, by pillar. Go back to a required session first, and to any session whose part you could not do with the AI off; the deck shows the same map after its to-do.');
  lines.push('');
  const used = [];
  for (const c of groups(session)) {
    if (!c.entries.length) continue;
    const byRole = Object.keys(ROLE).map(role => {
      const items = c.entries.filter(e => e.role === role).map(e => { used.push(e); return `[${e.id}] ${e.focus}`; });
      return items.length ? `${session === 'S00' ? '' : `${ROLE[role]}: `}${items.join('; ')}.` : '';
    }).filter(Boolean);
    lines.push(`- **${c.name}.** ${byRole.join(' ')}`);
  }
  return { text: lines.join('\n'), links: [...new Set(used.map(e => `[${e.id}]: ${e.url}`))] };
}

module.exports = { MAP, SESSIONS, groups, slide, markdown, plain };

if (require.main === module) {
  const session = process.argv[2];
  const { text, links } = markdown(session);
  console.log(text);
  console.log('\n<!-- link definitions -->');
  console.log(links.join('\n'));
}
