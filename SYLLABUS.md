# Investment Bootcamp: Syllabus

Status: the syllabus and the outcomes are set. Walkthroughs, notebooks and new decks are in
production; the decks in the session folders predate this syllabus.

Seven sessions in three modules. S00 routes you through the pillars; S01 to S06 take one idea from a
written claim to a verdict. The program guide, [`PROGRAM.md`](PROGRAM.md), covers the shared
universe, the AI policy and assessment.

## How a session runs

| Block | Time | AI | What happens |
| --- | --- | --- | --- |
| Retrieval and first artefact | 10 min | off | recall earlier work, then write and push the session's first artefact |
| Concept | 20 min | | the idea, shown on the worked example or the running case |
| Drill | 25-30 min | off | predict, then run; explain in plain English; find the seeded bug |
| Build | 45 min | on | you write the spec and the tests, the agent implements, you review the diff |
| Checkpoint | 15-20 min | off | explain the diff or take a short quiz, then commit |

## Hard prerequisites

A hard prerequisite is a pillar session without which the lab cannot run. S00's self-check tests
each one; you skip what you pass. A soft prerequisite helps you understand the session, and comes
with a fixture or a one-page pointer if you skip it.

| Bootcamp session | Hard prerequisites |
| --- | --- |
| [Bootcamp S00] | none |
| [Bootcamp S01] | [CF S01], [CF S04] |
| [Bootcamp S02] | [CF S04] |
| [Bootcamp S03] | [CF S05], [CF S06], [CF S07], [FM S06], [MF S08] |
| [Bootcamp S04] | [CF S08], [FM S09], [MF S12] (starter kit fallback) |
| [Bootcamp S05] | [FM S07], [FM S12], [MF S01] |
| [Bootcamp S06] | [CF S01], [FM S12], [MF S04], [MF S12] |

The starter kit fallback for MF S12 is a tested `dsr.py` and a statistics section; it serves S06's
deflated Sharpe too. The starter kit is planned.

## Module B0: Onboarding

A verified stack, a personal route through the pillars and, once the agent loop is learned, a
researcher home.

### [S00 · Onboarding and Self-Check](S00-Onboarding-and-Self-Check/)

- Run the doctor checklist and save its report: each tool's version, and each key shown as set or
  missing, never its value.
- Take the 33-item self-check with no assistant and no web, and commit the `ROUTE.md` it prints.
- Create `kn-workbench` and a researcher home with `init-researcher` and its interview, once the
  doctor is green and CF S04 is done or tested out.
- Download one quarter of SPY as a smoke test, and state the holdout rule.

**Before:** nothing; this is where the program starts. A red doctor item routes you to [CF S01] or
[CF S04].

**Prepares for:** [CF S01], [CF S04], [FM S01], [MF S01], [Bootcamp S01].

## Module B1: From Idea to Evidence

Claims, reading, a universe and a screened feature before any book exists: parts A to D of the
order of work. Runs free.

### [S01 · Kick-off and Process](S01-Kick-off-and-Process/)

- Place any task on the eight steps and on parts A to H of the order of work, and name the file each
  part writes.
- Predict the worked example's verdict, then read its files without running anything and state its
  claim, its control and why its kill switch tripped.
- Create a strategy with `init-strategy` and write the first pass of `OBJECTIVE.md` with
  `/objective`, each claim untested and naming the question that would settle it.
- Append the benchmark entry to `JOURNAL_1.md` before any result, with the trial count at zero.

**Before:** hard [CF S01] (git, clean clone, uv, lock file, `.env` never printed), [CF S04] (the
KaxaNuk Researcher, skills and commands, plan, go, review, commit). Soft [FM S01] (security master,
dated and current sector), [FM S06] (the benchmark chosen first), [FM S12] and [MF S01] (reading the
worked example's CAGR and Sharpe).

**Prepares for:** [Bootcamp S02], [Bootcamp S03].

### [S02 · Investment Research: the Hypothesis Workshop](S02-Investment-Research/)

- Write by hand a five-part hypothesis and answer the seven questions before any backtest.
- Rewrite each claim's evidence with the second pass of `/objective`, from the notes read as
  homework, leaving every unsupported line as a lead.
- Find three design flaws in a seeded duration-tilt case.
- Answer an AI investment committee and log each objection you could not answer as a lead.

**Before:** hard [CF S04]. Soft [FM S02] (CPI release dates), [FM S03] (duration, for the seeded
case), [FM S08] (efficiency, decay, fabricated citations), [FM S11] (risk factor or return signal),
[MF S04] (t-statistics, p-values, multiple comparisons), [MF S06] (reading a regression table).

**Prepares for:** [Bootcamp S03], [Bootcamp S04].

### [S03 · Feature Engineering: the Feature Lab](S03-Feature-Engineering/)

- Seed a point-in-time universe from KN-TU30, log replacements, and state its usable date.
- Port your tested `c_*` feature into the strategy and run the starter refinery to get per-date
  `r_*` ranks and z-scores.
- Write the keep threshold and the predicted IC sign, then run the starter analyzer and read IC and
  ICIR (IC information ratio) at two horizons with the look-ahead audit.
- Decide keep or drop, record it in `RESULTS.md`, count every feature screened, and show which
  number a seeded same-day look-ahead inflated.

**Before:** hard [CF S05] (Jupyter, modules, stripped outputs, `DatetimeIndex`), [CF S06] (shift,
rolling windows, warm-up nulls, `index < date`, per-date groupby), [CF S07] (`c_*` features with
`DataColumn`), [FM S06] (survivorship, point-in-time membership), [MF S08] (MAD z-scores, ranks,
IC, ICIR, the fundamental law). Soft [FM S01], [FM S02] (adjusted and unadjusted prices), [FM S05]
(only for a fundamentals feature), [FM S07] (the traded-value proxy), [MF S07] (look-ahead as
causality), [FM S09] and [MF S05] (correlation, for the diversification check).

**Prepares for:** [Bootcamp S04], [Bootcamp S06].

## Module B2: From Book to Verdict

Blueprint before the rule, then the book, the engine, attribution and the gate: parts E to H of the
order of work. The equal-weight book and alternative sizing are free. Backtests and attribution run
on one Lab demo account within a written budget, or on reference engine outputs from KaxaNuk.

### [S04 · Portfolio Construction: Blueprint Before the Rule](S04-Portfolio-Construction/)

- Answer the blueprint critic and push `BLUEPRINT_1.md` before the rule, with cited predictions, a
  control that differs in one thing, a falsifier, a kill switch, declared sub-periods and a trial
  budget.
- Write the rule cell on the prior close for an equal-weight book with SHY as priced cash, and pass
  the invariants and a Verify check.
- Catch a seeded book that passes all five invariants but holds only survivors.
- Rebuild the equal-weight answer key on the Lab demo and log each local-versus-Lab difference.

**Before:** hard [CF S08] (weight files, invariants, Verify), [FM S09] (long-only mechanics, two kinds
of cash, effective N), [MF S12] (trial budget, statistics section; starter kit fallback). Soft
[CF S06], [CF S09] (spec before code), [FM S03] (SHY as priced cash), [FM S07] (turnover),
[MF S05] (covariance, estimation error), [MF S09] (the clustering behind HRP), [MF S10] (sizing
methods; starter kit fallback).

**Prepares for:** [Bootcamp S05].

### [S05 · Backtest and Attribution](S05-Backtest-and-Attribution/)

- Predict the cost drag, then price the rule, the control and the alternative on the Backtest Engine
  with stated costs, every run in `run_manifest.csv`.
- Re-price the rule at two cost levels and in the declared sub-periods, and explain why a truncated
  window's CAGR is not comparable.
- Run a Brinson-Fachler attribution per sleeve and name the effect that carried the active return.
- Fill `FINDINGS_1.md` so every figure traces to an engine file or the manifest.

**Before:** hard [FM S07] (costs with units, commission on unadjusted shares), [FM S12] (reading engine
metrics and Brinson-Fachler), [MF S01] (annualisation, Sharpe, the CAGR of a short window). Soft
[CF S10] (guarded imports of licensed libraries), [FM S02], [FM S10] (beta), [FM S11] (the factor
layer), [MF S02] (tails, VaR, CVaR), [MF S06] (regression, for the Ken French diagnostic).

**Prepares for:** [Bootcamp S06].

### [S06 · Final Strategy Prep & Presentation](S06-Final-Strategy-Prep-and-Presentation/)

- Run `/challenge 1` on complete findings and append its entry: which predictions held, which
  falsifiers fired, how many leads remain open.
- Publish N and a deflated Sharpe computed with the AI off from the engine's Sharpe, labelled
  derived.
- Assess the five paper-trading gate criteria as met, not met or not assessed, each with its
  evidence file, and write `RESULTS.md` as kept or rejected.
- Reproduce the free stages from a clean clone, tag the release, and rehearse the ten-minute
  presentation in pairs.

**Before:** hard [CF S01] (clean clone), [FM S12] (gate criteria), [MF S04] (Sharpe statistics),
[MF S12] (deflated Sharpe, N, the holdout; starter kit fallback). Soft [CF S11] (changelog,
Semantic Versioning, tags), [CF S12] (CI, release), [FM S08] (post-publication decay), [MF S02]
(skewness and kurtosis in the deflated Sharpe), [MF S03] (random-draw percentiles), [MF S07] (the
timing-shift arm).

**Prepares for:** paper trading of your own strategy (step 7, outside the course), KN Hack, and a
second experiment (`BLUEPRINT_2.md`).

## Capstone: Meents'ul Bootcamp

Meents'ul is a Maya word for searching for fruit after the harvest. The Bootcamp's capstone is your
strategy repository:

- Its free stages (curator, universe, refinery, analyzer, equal-weight book, invariants) rerun from
  a clean clone.
- It holds `OBJECTIVE.md` with cited claims, the `Bibliotheca/` notes, `Investable_Universe.csv`
  and the tracked `Universe/Selection_Log.csv`, `Data/Curator/custom_calculations.py` with tests,
  `RESULTS.md`, `JOURNAL_1.md`, `BLUEPRINT_1.md` pushed before the rule, `experiment_1.ipynb` with
  its invariants and Verify, `run_manifest.csv` and `engine_summary.csv` for every engine run,
  `FINDINGS_1.md`, and the gate status in `Paper_Trading/BITACORA.md`.
- It is scored on the 3x3 rubric, with no row for return, plus the pass/fail process gates, and
  presented in ten minutes at a demo day or KN Hack. See the [`README.md`](README.md).
- On the public path, gate criterion 2 (idiosyncratic return in both attribution layers) reads "not
  assessed". Saying so plainly is part of the grade.

## What changed from the previous edition

- **S00 is new.** Setup, the self-check that routes you through the pillars, and the researcher home
  moved here from S01 and S03.
- **S01** keeps the eight steps and the two doors. Step 8, production, is now outside the course
  and outside the repository.
- **S02 is a hypothesis workshop.** Its six-act history of investment research moved to [FM S08]
  as pre-reading; S02 keeps the synthesis.
- **S03 is a feature lab:** one feature, screened by IC on a point-in-time universe, before any
  book.
- **S04 to S06 are slimmer.** The counterfactual books and the holdout run are homework inside the
  demo window, so each session fits two hours.

## Shared across the program

- **KN-TU30**, the shared teaching universe: 22 US stocks chosen by a stated point-in-time rule
  (the two largest US-incorporated common stocks in each of 11 sectors on 2004-12-31), plus 8 ETFs:
  SPY, RSP, SHY, IEF, TLT, GLD, DBC, UUP. The stock list is published with its selection log. Its
  stated bias: survivors, no delistings in the free data, a thin cross-section.
- **The running case:** 12-1 momentum, `c_momentum_252d_skip_21d`; every figure from it is a
  teaching computation.
- **`PREDICTIONS.md` and `TRIALS.csv`:** every prediction written before its estimate, every run
  counted.
- **The holdout:** 2024 stays sealed until [MF S12] opens it once; the Bootcamp's holdout runs from
  2025 to its freeze date.
- Details in [`PROGRAM.md`](PROGRAM.md).

[Bootcamp S00]: S00-Onboarding-and-Self-Check/
[Bootcamp S01]: S01-Kick-off-and-Process/
[Bootcamp S02]: S02-Investment-Research/
[Bootcamp S03]: S03-Feature-Engineering/
[Bootcamp S04]: S04-Portfolio-Construction/
[Bootcamp S05]: S05-Backtest-and-Attribution/
[Bootcamp S06]: S06-Final-Strategy-Prep-and-Presentation/
[CF S01]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S01-Terminal-Environment-and-Git/
[CF S04]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S04-The-Agent-Loop/
[CF S05]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S05-NumPy-pandas-and-Notebooks/
[CF S06]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S06-Time-Without-Look-Ahead/
[CF S07]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S07-Features-as-Data-Curator-Functions/
[CF S08]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S08-Weight-Files-and-Invariants/
[CF S09]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S09-Design-Before-You-Prompt/
[CF S10]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S10-Architecture-of-a-KaxaNuk-Library/
[CF S11]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S11-House-Rules-and-Code-Review/
[CF S12]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S12-Capstone-Ship-a-Tested-Release/
[FM S01]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S01-Ecosystem-and-Security-Master/
[FM S02]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S02-Prices-Total-Returns-and-Time-Value/
[FM S03]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S03-Rates-Bonds-and-the-Yield-Curve/
[FM S05]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S05-Statements-Valuation-and-the-Three-Dates/
[FM S06]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S06-Indices-Benchmarks-ETFs-and-Survivorship/
[FM S07]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S07-Liquidity-Trading-Costs-and-Capacity/
[FM S08]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S08-Efficiency-Anomalies-and-Decay/
[FM S09]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S09-Risk-Diversification-and-the-Long-Only-Book/
[FM S10]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S10-CAPM-Beta-and-the-Market/
[FM S11]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S11-Factor-Models-Risk-Factors-and-Return-Signals/
[FM S12]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S12-Capstone-Performance-Attribution-and-Track-Records/
[MF S01]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S01-Return-Arithmetic/
[MF S02]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S02-Distributions-Tails-and-Drawdowns/
[MF S03]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S03-Simulation-Bootstrap-and-the-Null/
[MF S04]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S04-Estimation-Inference-and-Multiple-Comparisons/
[MF S05]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S05-Linear-Algebra-and-Covariance/
[MF S06]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S06-Regression-and-Its-Failures/
[MF S07]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S07-Time-Series-and-Trend-Signals/
[MF S08]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S08-Cross-Sectional-Signals-IC-and-Fama-MacBeth/
[MF S09]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S09-PCA-Clusters-and-Regimes/
[MF S10]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S10-Portfolio-Optimisation-and-Estimation-Error/
[MF S12]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S12-Capstone-Overfitting-Deflated-Sharpe-and-the-Holdout/

---

*Educational material. Nothing here is a recommendation to buy, sell or hold any security; backtests are hypothetical. Text CC BY 4.0, code MIT: see [LICENSE](LICENSE) and [LICENSE-CODE](LICENSE-CODE).*
