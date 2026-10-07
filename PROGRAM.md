# KaxaNuk Training Workshops: Program Guide

Free, hands-on workshops. Learn only the coding, markets and math your background lacks, then build
one investment strategy and test the idea correctly on the KaxaNuk Strategy Template, with the
KaxaNuk Researcher as your research companion and the KaxaNuk Investment Lab for the engine runs.
Take each session in person (about 2 hours) or self-paced: one notebook and one narrated deck in
the pillars, a written walkthrough and an optional narrated deck in the Bootcamp.

The material is free. A command-capable AI assistant is your own cost. Nothing here is a
recommendation to buy, sell or hold; every backtest is hypothetical; the promise is a correct test
of an idea, never better returns.

## The one rule

One rule runs through all four workshops, in four vocabularies:

| Workshop | The rule |
| --- | --- |
| Coding Foundations | the spec before the code |
| Financial Markets | the claim and the benchmark before the data |
| Mathematical Finance | the prediction before the estimate |
| Investment Bootcamp | the blueprint before the rule |

Write down what you expect, push it, then do the work. The push time is the evidence that the
expectation came first.

## The four workshops

Three pillars feed one capstone. Each pillar has 12 sessions in three modules of four, plus
electives.

| Workshop | Prefix | What it teaches | Modules |
| --- | --- | --- | --- |
| [Coding Foundations](https://github.com/KaxaNuk/Coding-Foundations) | CF | the code door: research code you can trust, with an AI teammate | M1 Workbench and Language; M2 Research Data in pandas; M3 Trustworthy Research Software |
| [Financial Markets](https://github.com/KaxaNuk/Financial-Markets) | FM | what is traded, and what it is measured against | M1 Markets and Instruments; M2 Equity Research; M3 Risk and Performance |
| [Mathematical Finance](https://github.com/KaxaNuk/Mathematical-Finance) | MF | how to know, with machine learning inside it ([MF S09], [MF S11]) | M1 Returns, Risk and Uncertainty; M2 Linear Models and the Cross-Section; M3 Learning, Optimisation and Research Statistics |
| [Investment Bootcamp](https://github.com/KaxaNuk/Investment-Bootcamp) | Bootcamp | one strategy, from a written claim to an honest verdict | B0 Onboarding; B1 From Idea to Evidence; B2 From Book to Verdict |

Sessions are referred to by prefix and id: CF S06, MF S12, Bootcamp S03. Each workshop's
`SYLLABUS.md` lists its sessions and outcomes.

## How to start

Everyone starts at [Bootcamp S00]:

1. **The doctor checklist.** Version commands for each tool, and each key shown as set or missing,
   never its value. A red item routes you to [CF S01] (git, uv, Python, the assistant) or
   [CF S04] (APM, the KaxaNuk Researcher).
2. **The self-check**, taken with no assistant and no web. It has 33 items, one for each pillar
   session the Bootcamp needs: 11 per pillar. A script scores it and prints `ROUTE.md`, the pillar
   sessions to finish before each Bootcamp session. You commit it to your private repository.
3. **The setup**, once the doctor is green and CF S04 is done or tested out: `kn-workbench`, a
   researcher home and a smoke download.

Missing one item routes you to that session. Missing two or more in a module routes the whole
module. You test out of a module by passing its items and its quizzes, never by one item.

## Typical routes

A route is the set of hard prerequisites of the Bootcamp, minus what S00 tests out. Soft
prerequisites come as fixtures or one-page pointers unless you choose the session. With nothing
tested out, the route is 21 pillar sessions plus the 7 Bootcamp sessions: 28 sessions, about 56
hours. The rows below are typical routes after S00, not fixed ones. Every count includes the 7
Bootcamp sessions.

| Background | Typical sessions | Sessions |
| --- | --- | --- |
| Finance professional or analyst who does not code (code door) | Bootcamp S00; [CF S01-S08], with [CF S09-S12] recommended so you can review what the agent writes; [MF S01]-[MF S04], [MF S06], [MF S08], [MF S12], with [MF S05], [MF S07] and [MF S10] recommended; FM only where S00 flags, typically [FM S06], [FM S07], [FM S09] and [FM S12]; then Bootcamp S01-S06 | 26-33 (52-66 hours) |
| No-code Lab user (platform door) | Bootcamp S00 (the setup after CF S04); [CF S01], [CF S02] (reading Python only), [CF S03] (tests as tables), [CF S04], [CF S05] (running notebooks); [FM S01], [FM S02], [FM S06], [FM S07], [FM S09], [FM S12] minus what S00 tests out (typically 3-6); [MF S01]-[MF S04], [MF S06], [MF S08], [MF S12] minus what S00 tests out (typically 5-7); then Bootcamp S01-S06, with the platform-door variant of S03 and S04 | 20-25 |
| Software engineer or data scientist without finance | Bootcamp S00; [FM S01-S12] ([FM S04] optional); [CF S04], [CF S07], [CF S08], [CF S11], plus [CF S06] if S00 flags pandas causality; [MF S01], [MF S08], [MF S12], plus [MF S03], [MF S04] and [MF S06] where S00 flags them. Order: FM M1, CF S04, FM M2 with CF S06-S08, MF S01 and S08, FM M3, MF S12, CF S11; then Bootcamp S01-S06 | 25-30 |
| Mathematics, physics, actuarial or engineering student | Bootcamp S00; [CF S01-S08] and [CF S11] (CF S02-S03 only if flagged); [FM S01-S12]; [MF S08] and [MF S12], plus [MF S09]-[MF S10], [MF S11] if machine learning is new, and the MF M1-M2 sessions S00 flags, usually [MF S01] and [MF S04]; then Bootcamp S01-S06 | 30-36 |
| University student new to both coding and finance | Bootcamp S00 (route: everything), then CF S01-S05, FM M1, MF M1, CF S06-S08, FM M2, MF M2, CF M3, FM M3, MF M3, with the S00 setup after CF S04; then Bootcamp S01-S06 | 43 (about 86 hours: a semester at three sessions a week) |
| Experienced quant new to the KaxaNuk stack | Bootcamp S00, then only what it flags, most often [CF S04], [CF S07], [CF S11], [FM S06], [FM S07] and [MF S12]; then Bootcamp S01-S06 | 13-17 |
| KN Hack team, by role | Start S00 five weeks ahead (about 6-7 hours a week; three weeks means about 11). Everyone: S00, [CF S01] if the doctor is red, [CF S04], [FM S06], [FM S12], [MF S04], [MF S12]. Then one coder takes [CF S05-S08]; one markets person [FM S01], [FM S02], [FM S07], [FM S09]; one math person [MF S01], [MF S07], [MF S08], [MF S10]. Non-coders take the platform door. The starter kit covers the book check, `dsr.py` and the statistics section. Bootcamp S01-S06 before the event, on event demo accounts; the scored presentation is the event pitch | about 16 per person (32 hours) |

**For the university student route**, every FM and MF lab follows CF S05, MF S01 follows FM S02,
FM S12 follows MF S02, and MF S10 follows FM S09.

**Teaching it as a university course.** Run one pillar per half-term, two sessions a week, with
each session's facilitator notes: Coding for finance classes, Markets for computing classes, Math
for both. Markets or Math alone needs CF S01-S05, or CF S01, S03 and S04 plus the S00 setup. The
Bootcamp is the term project. KaxaNuk can provision demo accounts for a cohort so that Bootcamp
S04-S06 fall inside one trial window; otherwise the cohort uses reference engine outputs.

## Hard prerequisites of the Bootcamp

A hard prerequisite is a session without which the lab cannot run. Each Bootcamp session's
`README.md` also lists its soft prerequisites. Its section *Reinforce in the pillars*, also a slide
in its deck, lists every pillar session behind it: required, helpful, or one that goes further.

| Bootcamp session | Hard prerequisites |
| --- | --- |
| [Bootcamp S00] | none |
| [Bootcamp S01] | [CF S01], [CF S04] |
| [Bootcamp S02] | [CF S04] |
| [Bootcamp S03] | [CF S05], [CF S06], [CF S07], [FM S06], [MF S08] |
| [Bootcamp S04] | [CF S08], [FM S09], [MF S12] (starter kit fallback) |
| [Bootcamp S05] | [FM S07], [FM S12], [MF S01] |
| [Bootcamp S06] | [CF S01], [FM S12], [MF S04], [MF S12] |

**What you carry into the Bootcamp.** Pillar work is reused, and each piece has a fallback in the
planned starter kit:

| From | Becomes | Fallback |
| --- | --- | --- |
| [CF S08] Verify | the Verify cell of Bootcamp S04 | the starter book check |
| [CF S12] tested `c_*` feature | the Bootcamp S03 candidate | the running case, or the tested `c_*` menu |
| [FM S06] `BENCHMARK.md` and the [FM S12] memo | the benchmark entry in `JOURNAL_1.md` (Bootcamp S01) | the default claims' benchmarks: TU22-EW and SPY for the stocks, 60/40 SPY/IEF for the ETFs |
| [MF S12] `dsr.py` and statistics section | `BLUEPRINT_1.md` (S04), and N and the deflated Sharpe (S06) | the starter `dsr.py`, with tests, and statistics section |
| `TRIALS.csv` rows from every pillar | N, the trial count published in Bootcamp S06 | none: every run counts |

## The shared teaching universe: KN-TU30

One universe is shared by all four workshops. **KN-TU30** is 22 US stocks chosen by a stated
point-in-time rule (the two largest US-incorporated common stocks in each of 11 sectors on
2004-12-31), plus 8 ETFs: SPY, RSP, SHY, IEF, TLT, GLD, DBC, UUP. The stock list is published with
its selection log.

- **Sectors** follow a KaxaNuk teaching scheme of 11 groups mapped from public SEC SIC codes.
  Nothing is selected on today's classification.
- **Replacements.** A name the free data cannot serve (delisted, acquired, a recycled ticker) is
  replaced by the next largest it can serve, and the chain is logged. The replacement is itself
  survivorship, and is stated as such.
- **ETF roles:** SPY the market, RSP the equal-weight S&P 500, SHY priced cash, IEF and TLT
  duration, GLD gold, DBC commodity futures, UUP the dollar.
- **Windows.** Stocks, SPY, RSP and SHY from 2005-01-03. The multi-asset ETFs start in 2007, so a
  book on the ETF sleeve starts about 2008.
- **Benchmarks.** SPY; TU22-EW, the 22 stocks at equal weight rebalanced monthly, as the control
  and the attribution benchmark for the stock sleeve; RSP as its market-wide analogue; 60/40
  SPY/IEF for the ETF sleeve.
- **Stated bias**, in every verdict: the stocks are survivors, the free data hold no delistings,
  and the cross-section is thin (22 names give noisy ICs).
- **Data.** You download with your own code; nothing vendor-derived is committed. Prices come from
  the Data Curator with its Yahoo Finance extension (free, no key; no fundamentals, no VWAP, no
  unadjusted prices); rates and CPI from FRED; factor returns from the Ken French Data Library. A
  free FMP key of your own is optional.

**The running case** is 12-1 momentum, the column `c_momentum_252d_skip_21d`. Every figure from it
is a teaching computation: a 22-name survivor set is not evidence. It runs through the program:
built test-first in [CF S07]; turnover and cost drag in [FM S07]; its public analogue, decay and
the 2009 crash in [FM S08]; time-series against cross-sectional momentum in [FM S11]; a reference
engine report in [FM S12]; a random-book percentile in [MF S03]; IC, ICIR and Fama-MacBeth in
[MF S08]; a feature in [MF S11]; its variants counted and the holdout opened in [MF S12]; default
claim A in [Bootcamp S01].

## Your logs

Your work never lives in a course repository. It lives in your own:

- **`kn-workbench`**, your private repository, created in [CF S01]: `src/`, `tests/unit/`,
  `PREDICTIONS.md`, `TRIALS.csv` and `CLAIMS.md`.
- **`ROUTE.md`**, written by the Bootcamp S00 self-check.
- **`PREDICTIONS.md`**: each prediction with an 80% interval, pushed before the estimate.
- **`TRIALS.csv`**: one row for every run, screen and variant, including each one an agent proposed
  and ran. Rows from every pillar add up to N, the trial count you publish in Bootcamp S06.
- **The holdouts.** The pillars run to the end of 2023. The year 2024 stays sealed until [MF S12]
  opens it once. The Bootcamp treats 2024 as in-sample; its own holdout runs from 2025 to its
  freeze date, which rolls forward once a year, and is opened once in Bootcamp S05's homework.
  Holdout data are downloaded only when the holdout opens. The Lab cannot enforce this, so run
  windows are checked in Bootcamp S06.
- **A researcher home** (`init-researcher`) and **a strategy repository** (`init-strategy`). In a
  strategy repository, logs you keep by hand go in tracked files: `Universe/Selection_Log.csv` and
  dated `JOURNAL_1.md` entries.

Transcripts, `ROUTE.md` and quiz results stay in your private repository. A provided script removes
keys and email addresses before any submission.

## How a session runs

| Block | Time | AI | What happens |
| --- | --- | --- | --- |
| Retrieval and first artefact | 10 min | off | recall earlier sessions, then write and push the first artefact: a prediction in `drills.md` or `SPEC.md` (CF); a `CLAIM.md` of at most three lines, the claim, its comparator and what refutes it, or `BENCHMARK.md` (FM); a `PREDICTIONS.md` entry with an 80% interval (MF); `OBJECTIVE.md`, `BLUEPRINT_1.md` or a dated prediction (Bootcamp). It is scored at the end |
| Concept | 20 min | | the idea, on KN-TU30 or the running case |
| Drill | 25-30 min | off | predict, then run; explain in plain English; find the seeded bug (look-ahead, survivorship, pooled ranks, an off-by-one shift, units); fill in the missing lines yourself; a worked example with steps removed |
| Build | 45 min | on | you write the spec and the tests first, the agent implements, you review the diff against the checklist and commit only what you can explain |
| Checkpoint | 15-20 min | off | explain the diff or take a short quiz, then commit |

## The AI policy, and why

**Graded skill is measured with the AI off. The AI builds; it never thinks for you.**

The evidence for this split:

- **Bastani et al. (2025)**, a field experiment in high-school mathematics: students who practised
  with an unrestricted GPT-4 assistant scored 17% lower than the control group once access was
  removed. A tutor version with guardrails largely avoided that harm.
- **Kestin et al. (2025)**, a randomised trial with 194 university physics students: an AI tutor
  built on research-based teaching practice produced more than twice the learning gain of an
  in-class active-learning lesson.
- **Shen and Tamkin (2026)**, a randomised trial with 52 engineers learning a new Python library:
  those who used AI assistance scored 50% on the follow-up quiz, against 67% for those who coded by
  hand. The largest gap was on debugging.

An assistant that does the thinking can replace the learning; an assistant designed as a tutor can
speed it up. So skill is built and graded with the AI off, and the AI is used to build, under a
spec and tests you wrote first.

**How it works in practice:**

- **A ramp for novices.** In [CF S01] the assistant is installed in explain-only mode: it may
  explain an error, and you fix it. Inline autocomplete stays off through CF S01-S04. The agent
  loop, with APM and the KaxaNuk Researcher, starts in [CF S04].
- **Two doors.** Coders write pytest. Non-coders write tests as tables of inputs and expected
  outputs, which a helper turns into pytest; [CF S03] teaches both.
- **The tutor** gives hints in levels, asks for your prediction first, and never writes code in an
  AI-off block.
- **Guards.** A hook in your repositories stops the agent editing `tests/` and `checks/`, and a
  workflow checks `tests/` against your tagged test commit. Guards leak, so no grade depends on
  them.
- **Hazards, taught once and applied after:** fabricated citations ([FM S08]; in [Bootcamp S02] a
  citation is a lead until it resolves to a note); look-ahead inside language models ([MF S11]);
  AI-proposed variants inflating the trial count ([MF S12]; from [Bootcamp S03] every variant an
  agent proposes and runs is a `TRIALS.csv` row). No number comes from the model: every figure
  comes from code you ran, and a book's performance from the Backtest Engine. The assistant never
  computes a performance number, a deflated Sharpe included.

**Readings:**

- Bastani, Bastani, Sungu, Ge, Kabakci and Mariman (2025). *Generative AI without guardrails can
  harm learning: Evidence from high school mathematics*. PNAS 122(26). Open access: SSRN 4895486
- Kestin, Miller, Klales, Milbourne and Ponti (2025). *AI tutoring outperforms in-class active
  learning: an RCT introducing a novel research-based design in an authentic educational setting*.
  Scientific Reports 15. Open access: https://doi.org/10.1038/s41598-025-97652-6
- Shen and Tamkin (2026). *How AI Impacts Skill Formation*. arXiv. Open access: arXiv:2601.20245

## The KaxaNuk review checklist

Used in every review of an agent's diff:

1. **Scope.** It implements a spec, claim, prediction or blueprint pushed before it, and nothing
   more.
2. **Tests.** Yours, untouched by the agent, red before and green after. One assert per test.
   Invalid input raises.
3. **Causality.** A value dated t uses data through t-1. History is cut with `index < date`. No
   full-sample statistic inside a per-date calculation. Ranks are per date, never pooled.
   Fundamentals and macro series are joined on the date they became available.
4. **Universe.** Membership comes from the seed. Nothing is selected on `current_*` columns.
   Replacements are logged. Nothing is held past its last price.
5. **Missing data.** Null is not zero. No silent `fillna(0)` or forward fill;
   `pct_change(fill_method=None)`. Every correction is logged.
6. **Die loud.** Errors raise with a message. No bare `except`, no silent skip.
7. **Units.** Frequency and annualisation stated; percent or decimal stated; commission per share
   in dollars on unadjusted shares; slippage in basis points.
8. **House style.** ruff and the Bloom Code checker clean. Full names, no import aliases, no nested
   functions, no reassignment, no tuple returns, type hints everywhere.
9. **Numbers.** Every book figure traces to an engine file or the run manifest, or is labelled
   "teaching computation" or "derived".
10. **Trials and holdouts.** Every run is a `TRIALS.csv` row. Holdout dates stay untouched until
    the holdout is opened.
11. **Secrets and hygiene.** No key printed or committed. Notebook outputs stripped. Transcripts
    scrubbed before any submission.
12. **Citations.** Every reference resolves to a note. None comes from the model's memory.
13. **Explain.** You can explain every changed line with the AI off (platform door: every result
    and every table), and the commit message says what moved and why.

## Assessment

- **Formative, every session:** the first artefact, pushed before the work and scored after; an
  automated check that the session's artefacts exist, their tests pass and the invariants hold; a
  five-question quiz taken with the AI off and scored by a script, never by a language model, that
  revisits earlier sessions; and one explain item, three to five sentences on a diff or a result.
  The checks, quizzes and solutions are public, so these scores are for you and award nothing.
- **Order evidence.** A workflow in your repository records the time of each push. The spec, the
  claim, the prediction and the blueprint must be pushed before the work. In Bootcamp S05 and S06
  the Lab run times are compared with the blueprint's push time. Self-paced, the order is attested,
  not proven.
- **Meents'ul**, a Maya word for searching for fruit after the harvest, is the name of each
  workshop's capstone: a tested `kn-workbench` release in [CF S12]; a benchmark-first performance
  memo in [FM S12]; a pre-registered evaluation on the 2024 holdout in [MF S12]; and the strategy
  repository in [Bootcamp S06]. Each pillar capstone is defended with the AI off, on three questions
  drawn at random about lines or numbers a reviewer picks. It is graded on process and explanation,
  never on returns.
- **Certificates** (pillar badges and the program certificate) are issued only at scheduled live
  defences: cohorts, university partners and KN Hack, on items that are not published. Self-paced
  learners receive a completion record. A certificate states completion of an educational program,
  never a qualification to manage money.
- **The Bootcamp's 3x3 rubric.** Three areas, three rows each, every row scored 0, 33, 66 or 100
  at equal weight. Strategy definition: hypothesis and source of returns; research foundation;
  scientific process. Feature engineering: data quality and integrity; feature design and
  relevance; signal construction. Strategy design: portfolio construction logic; backtesting and
  robustness; attribution and understanding. **There is no row for return.** Pass/fail process
  gates sit beside it, and "not met" and "not assessed" score as fully as "met". A rejected idea
  reported honestly can earn full marks.

## Electives

Planned, outside the twelve sessions of each pillar, and not needed for the Bootcamp:

| Elective | Workshop |
| --- | --- |
| FM-E1 Crypto as an Asset Class | Financial Markets |
| FM-E2 Macro, the Debt Cycle, the Curve and FX Carry | Financial Markets |
| MF-E1 Option Pricing: Binomial Trees and Black-Scholes | Mathematical Finance |
| MF-E2 Text and Language Models | Mathematical Finance |
| MF-E3 Volatility Forecasting, GARCH and Regimes | Mathematical Finance |
| CF-E1 Presenting Research with Streamlit | Coding Foundations |

## Free, and the Lab demo

| Part | Runs on |
| --- | --- |
| Every pillar session | free: the Data Curator with Yahoo, FRED, the Ken French Data Library, and reference engine outputs from KaxaNuk where a session reads one |
| Bootcamp S00 to S03 | free |
| Bootcamp S04 | the equal-weight book is free; the Lab demo provides an answer key |
| Bootcamp S05 and S06 | a lab.kaxanuk.mx demo account, or reference engine outputs from KaxaNuk |
| Paper trading (step 7) | outside the course: it needs an engine licence, or a record kept by hand |

- **The KaxaNuk Researcher** is free and MIT-licensed. It needs a command-capable AI assistant,
  whose subscription is your own cost.
- **The demo account** on [lab.kaxanuk.mx](https://lab.kaxanuk.mx) is a 14-day trial. Request it in
  Bootcamp S00 and activate it in Bootcamp S04, so its 14 days cover S04, S05, S06 and their
  homework.
- **Without a demo account**, KaxaNuk provides reference engine outputs for the two default claims.
  Items that need your own book priced read "not assessed".
- **The starter kit** (planned) supplies hand-written equivalents of the stages the pillars build:
  a curator, a refinery, an analyzer, a book check, sizing functions and `dsr.py`.

## Languages

English is the source. Spanish is generated into an `es/` folder that mirrors each repository, with
a shared glossary, and a person reviews every translation. Folder names, product names, file names,
column prefixes (`m_`, `c_`, `r_`, `current_`) and code stay in English.

## Licences

Text is CC BY 4.0 ([LICENSE](LICENSE)). Code that KaxaNuk wrote is MIT ([LICENSE-CODE](LICENSE-CODE)).
Material adapted from others keeps its own licence and is credited. Sources whose licence does not
allow adaptation are read and linked, never paraphrased into the material.

## Disclaimer

This is educational material. Nothing here is a recommendation to buy, sell or hold any security.
Every backtest is hypothetical. Every figure about a book comes from the engine that produced it,
or is labelled a teaching computation. Certificates state completion of an educational program,
never a qualification to manage money.

[Bootcamp S00]: S00-Onboarding-and-Self-Check/
[Bootcamp S01]: S01-Kick-off-and-Process/
[Bootcamp S02]: S02-Investment-Research/
[Bootcamp S03]: S03-Feature-Engineering/
[Bootcamp S04]: S04-Portfolio-Construction/
[Bootcamp S05]: S05-Backtest-and-Attribution/
[Bootcamp S06]: S06-Final-Strategy-Prep-and-Presentation/
[CF S01-S08]: https://github.com/KaxaNuk/Coding-Foundations/blob/main/SYLLABUS.md
[CF S09-S12]: https://github.com/KaxaNuk/Coding-Foundations/blob/main/SYLLABUS.md
[CF S05-S08]: https://github.com/KaxaNuk/Coding-Foundations/blob/main/SYLLABUS.md
[FM S01-S12]: https://github.com/KaxaNuk/Financial-Markets/blob/main/SYLLABUS.md
[CF S01]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S01-Terminal-Environment-and-Git/
[CF S02]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S02-Python-Core-on-Prices/
[CF S03]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S03-Functions-Types-and-Tests/
[CF S04]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S04-The-Agent-Loop/
[CF S05]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S05-NumPy-pandas-and-Notebooks/
[CF S06]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S06-Time-Without-Look-Ahead/
[CF S07]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S07-Features-as-Data-Curator-Functions/
[CF S08]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S08-Weight-Files-and-Invariants/
[CF S11]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S11-House-Rules-and-Code-Review/
[CF S12]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S12-Capstone-Ship-a-Tested-Release/
[FM S01]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S01-Ecosystem-and-Security-Master/
[FM S02]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S02-Prices-Total-Returns-and-Time-Value/
[FM S04]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S04-Derivatives-FX-and-Commodities/
[FM S06]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S06-Indices-Benchmarks-ETFs-and-Survivorship/
[FM S07]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S07-Liquidity-Trading-Costs-and-Capacity/
[FM S08]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S08-Efficiency-Anomalies-and-Decay/
[FM S09]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S09-Risk-Diversification-and-the-Long-Only-Book/
[FM S11]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S11-Factor-Models-Risk-Factors-and-Return-Signals/
[FM S12]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S12-Capstone-Performance-Attribution-and-Track-Records/
[MF S01]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S01-Return-Arithmetic/
[MF S03]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S03-Simulation-Bootstrap-and-the-Null/
[MF S04]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S04-Estimation-Inference-and-Multiple-Comparisons/
[MF S05]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S05-Linear-Algebra-and-Covariance/
[MF S06]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S06-Regression-and-Its-Failures/
[MF S07]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S07-Time-Series-and-Trend-Signals/
[MF S08]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S08-Cross-Sectional-Signals-IC-and-Fama-MacBeth/
[MF S09]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S09-PCA-Clusters-and-Regimes/
[MF S10]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S10-Portfolio-Optimisation-and-Estimation-Error/
[MF S11]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S11-Supervised-Learning-Without-Leakage/
[MF S12]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S12-Capstone-Overfitting-Deflated-Sharpe-and-the-Holdout/

---

*Educational material. Nothing here is a recommendation to buy, sell or hold any security; backtests are hypothetical. Text CC BY 4.0, code MIT: see [LICENSE](LICENSE) and [LICENSE-CODE](LICENSE-CODE).*
