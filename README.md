# Investment Bootcamp

Build one investment strategy and test the idea correctly, from a written claim to an honest verdict.

The Investment Bootcamp is the capstone of the KaxaNuk Training Workshops. Three pillars,
[Coding Foundations](https://github.com/KaxaNuk/Coding-Foundations),
[Financial Markets](https://github.com/KaxaNuk/Financial-Markets) and
[Mathematical Finance](https://github.com/KaxaNuk/Mathematical-Finance), feed it. The program
guide, [`PROGRAM.md`](PROGRAM.md), explains how the four fit together.

## Objective

Each learner takes one idea from a written claim to a priced, attributed and challenged experiment
on the KaxaNuk Strategy Template. The order is fixed:

- claims before papers;
- a feature screened by its information coefficient (IC) before any book exists;
- a blueprint pushed before the rule;
- a free equal-weight book checked by invariants;
- engine-priced results, net of stated costs;
- a Brinson-Fachler attribution, one holdout run and a challenge of the blueprint's own predictions;
- a published trial count and an honest verdict at the paper-trading gate.

The aim is a process that finds the flaw while it is still cheap. A rejected idea is reported as
clearly as a kept one, and can earn full marks.

## Who it is for

- **Universities** first: finance, economics, engineering and quantitative programmes that want a
  term project with a real research process.
- **Students** and **KN Hack participants**. The Bootcamp is the natural preparation for KN Hack.
- **Investment teams** (pension funds, asset managers, insurers, advisers, family offices),
  **emerging managers** and **individual professionals**.

There are two doors. **Coders** write Python and pytest. **No-code Lab users** take the platform
door: the starter kit runs unchanged, the feature comes from a tested menu, and tests are tables of
inputs and expected outputs.

## What you need

- **The pillar sessions your route assigns.** [S00](S00-Onboarding-and-Self-Check/) starts with a
  self-check taken with the AI off. It writes `ROUTE.md`: the pillar sessions to finish before each
  Bootcamp session. [`SYLLABUS.md`](SYLLABUS.md) lists the hard prerequisites.
- **A laptop and a GitHub account.**
- **A command-capable AI assistant**, one that can run commands in your terminal. Its subscription
  is your own cost.
- **The Data Curator with its Yahoo Finance extension.** Free, no key. It has no fundamentals, no
  VWAP and no unadjusted prices. FRED and the Ken French Data Library are free too. A free FMP key
  of your own is optional.
- **For S04 to S06 only:** a demo account on [lab.kaxanuk.mx](https://lab.kaxanuk.mx), a 14-day
  trial. Request it in S00 and activate it in S04, so its 14 days cover S04, S05, S06 and their
  homework. Without a demo account, you work from reference engine outputs that KaxaNuk provides
  for the two default claims.

S00 to S03 and the equal-weight book in S04 run free. No pillar session needs the Lab demo.

## Sessions

| Session | Module | What you leave with | Runs on |
| --- | --- | --- | --- |
| [S00 · Onboarding and Self-Check](S00-Onboarding-and-Self-Check/) | B0 Onboarding | a working stack, `ROUTE.md`, a researcher home | free |
| [S01 · Kick-off and Process](S01-Kick-off-and-Process/) | B1 From Idea to Evidence | a strategy repository, `OBJECTIVE.md`, the benchmark entry | free |
| [S02 · Investment Research: the Hypothesis Workshop](S02-Investment-Research/) | B1 From Idea to Evidence | a five-part hypothesis, claims rewritten from notes | free |
| [S03 · Feature Engineering: the Feature Lab](S03-Feature-Engineering/) | B1 From Idea to Evidence | a point-in-time universe, one feature screened and counted | free |
| [S04 · Portfolio Construction: Blueprint Before the Rule](S04-Portfolio-Construction/) | B2 From Book to Verdict | `BLUEPRINT_1.md` pushed first, an equal-weight book that passes its invariants | free, then Lab demo |
| [S05 · Backtest and Attribution](S05-Backtest-and-Attribution/) | B2 From Book to Verdict | engine-priced runs, a Brinson-Fachler attribution, `FINDINGS_1.md` | Lab demo or reference outputs |
| [S06 · Final Strategy Prep & Presentation](S06-Final-Strategy-Prep-and-Presentation/) | B2 From Book to Verdict | the challenge, N, a deflated Sharpe, the gate verdict, a rehearsed talk | Lab demo or reference outputs |

Each session's outcomes and prerequisites are in [`SYLLABUS.md`](SYLLABUS.md); its own `README.md`
adds the lab, the AI mode and the readings.

## How to take it

- **Start at S00.** Its self-check routes you through the pillar sessions you need and skips the
  ones you already know. Typical routes take 13 to 43 sessions in all; see
  [`PROGRAM.md`](PROGRAM.md).
- **In person:** about 2 hours a session. Plan S04, S05 and S06 inside one 14-day demo window.
- **Self-paced:** a written walkthrough per session, with an optional narrated deck labelled
  AI-generated. English first; Spanish follows.
- **As a KN Hack team:** start S00 about five weeks before the event and split the pillar sessions
  by role. `PROGRAM.md` shows the route.

Every session runs the same way: a first artefact with the AI off, a concept, a drill with the AI
off, a build with the AI on, and a checkpoint with the AI off. Only what you can do and explain with
the AI off is assessed.

## Presentation day

The presentation is a separate day after S06: a cohort demo day, or KN Hack for that cohort.

- **Ten minutes, five questions**, each answered from a file: what and why (`OBJECTIVE.md`); how it
  was tested (`RESULTS.md`); how it allocates (`BLUEPRINT_1.md`); did it work, net of costs and
  against the index and the control (`FINDINGS_1.md`); and why, through attribution and the gate
  (`Paper_Trading/BITACORA.md`).
- **Scored on the 3x3 rubric:** three areas (strategy definition, feature engineering, strategy
  design), three rows each, every row scored 0, 33, 66 or 100. **There is no row for return.**
- **Pass/fail process gates:** the free stages rerun from a clean clone; the blueprint push comes
  before the rule; every figure traces to an engine file or carries a label; N is published; the
  holdout is opened once; the five gate criteria are assessed with evidence. "Not met" and "not
  assessed" score as fully as "met".
- **Certificates** are issued only at a live defence. A certificate states completion of an
  educational program, never a qualification to manage money.

## Licences

Text is [CC BY 4.0](LICENSE). Code is [MIT](LICENSE-CODE). The decks in the session folders predate
this syllabus and will be rewritten to match it.

## Disclaimer

This is educational material. Nothing here is a recommendation to buy, sell or hold any security.
Every backtest is hypothetical. Every figure about a book comes from the engine that produced it,
or is labelled a teaching computation. The promise is a correct test of an idea, never better
returns.

---

*Educational material. Nothing here is a recommendation to buy, sell or hold any security; backtests are hypothetical. Text CC BY 4.0, code MIT: see [LICENSE](LICENSE) and [LICENSE-CODE](LICENSE-CODE).*
