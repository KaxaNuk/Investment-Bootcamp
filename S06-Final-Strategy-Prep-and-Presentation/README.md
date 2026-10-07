# S06 · Final Strategy Prep & Presentation

**Investment Bootcamp** · Module B2: From Book to Verdict · About 2 hours in person, or a written walkthrough and an optional narrated deck self-paced · Status: planned

## First artefact

The five presentation questions, answered in your own words with no assistant before the
challenge runs: what and why; how it was tested; how it allocates; did it work; why.

## You will be able to

- Run `/challenge 1` on complete findings, with the counterfactuals and the holdout run already in
  `FINDINGS_1.md`, and append its `JOURNAL_1.md` entry: which predictions held, which falsifiers
  fired, how many leads remain open.
- Publish N and, in a cell written with the AI off, a deflated Sharpe from the engine's Sharpe with
  your `dsr.py` (or the starter kit's), labelled derived and citing the engine file.
- Assess the five paper-trading gate criteria as met, not met or not assessed, each with its
  evidence file, in `Paper_Trading/BITACORA.md` by hand, and write `RESULTS.md` as kept or
  rejected.
- Reproduce the free stages from a clean clone, tag the release, and rehearse the ten-minute
  presentation in pairs, scoring each other on the 3x3 rubric.

## Before this session

- **Required:** [CF S01] (a clean clone); [FM S12] (the gate criteria); [MF S04] (Sharpe
  statistics); [MF S12] (the deflated Sharpe, N, the holdout; the starter kit's `dsr.py` if you
  skipped it); [Bootcamp S05] and its homework.
- **Helpful:** [CF S11] (changelog, Semantic Versioning, tags); [CF S12] (CI, release); [FM S08]
  (decay after publication); [MF S02] (skewness and kurtosis in the deflated Sharpe); [MF S03]
  (random-draw percentiles); [MF S07] (the timing-shift arm).

## Lab

- **No new engine runs.** The run windows of every engine run from S05 are checked against the
  holdout dates.
- **The gate:** criterion 3 rests on the sub-periods, the cost rows and the timing shift; a
  parameter grid appears only as a labelled teaching computation, or as "not assessed". On the
  public path criterion 2, idiosyncratic return in both attribution layers, reads "not assessed",
  and saying so plainly is part of the grade.
- **The rehearsal:** ten minutes, five questions, each answered from a file: `OBJECTIVE.md`,
  `RESULTS.md`, `BLUEPRINT_1.md`, `FINDINGS_1.md` and `BITACORA.md`. Your partner scores each answer
  on the rubric row it belongs to.
- The scored presentation is on a separate day: a demo day or, for that cohort, KN Hack.

**On disk when you leave:** the challenge entry; the holdout record; the deflated-Sharpe note; the
gate status in `BITACORA.md`; `RESULTS.md`; your deck; the rehearsal scores; `CLEAN_CLONE.log`;
optionally `BLUEPRINT_2.md`.

## Product and data

The KaxaNuk Researcher: `challenge`, `paper-trading-gate`, `alpha-decomposition`,
`experiment-lifecycle`, `how-we-work`. The rubric and the presentation template in this repository
(planned). The engine files come from S05, on the Lab demo or from reference outputs. Paper trading
(step 7) needs an engine licence or a record kept by hand.

## AI mode

- **AI off:** the five questions, answered with no assistant. Fill in the missing lines of the
  deflated-Sharpe cell yourself.
- **AI on:** `/challenge` under plan and go, reviewing its diff against the KaxaNuk review checklist
  before the go. Role-play: rehearse with an AI judges' panel. Reflect on your prompts, including
  how many variants the agent proposed.

## Readings

- KaxaNuk (2026). *KaxaNuk Researcher*. Skill: 'paper-trading-gate'. Open access:
  https://github.com/KaxaNuk/KaxaNuk-Researcher
- KaxaNuk (2026). *Strategy Template*. `Paper_Trading/BITACORA.md`, shipped with the KaxaNuk
  Researcher. Open access: https://github.com/KaxaNuk/KaxaNuk-Researcher
- McLean and Pontiff (2016). *Does Academic Research Destroy Stock Return Predictability?* Journal
  of Finance 71(1). Open access: SSRN 2156623
- Bailey and Lopez de Prado (2014). *The Deflated Sharpe Ratio: Correcting for Selection Bias,
  Backtest Overfitting and Non-Normality*. Journal of Portfolio Management 40(5). Open access: SSRN
  2460551

## Prepares for

- Presentation day: a demo day or KN Hack
- Paper trading of your own strategy (step 7), outside the course
- A second experiment, `BLUEPRINT_2.md`

## Reinforce in the pillars

The pillar sessions behind this one, by pillar. Go back to a required session first, and to any
session whose part you could not do with the AI off; the deck shows the same map after its to-do.

- **Coding Foundations.** Required: [CF S01] a clean clone. Helpful: [CF S11] changelog, Semantic
  Versioning, tags; [CF S12] CI, a release, a clean clone.
- **Financial Markets.** Required: [FM S12] the five gate criteria. Helpful: [FM S08] decay after
  publication.
- **Mathematical Finance.** Required: [MF S04] Sharpe statistics; [MF S12] the deflated Sharpe, N,
  the holdout. Helpful: [MF S02] skewness and kurtosis in the deflated Sharpe; [MF S03] random-draw
  percentiles; [MF S07] the timing-shift arm.

## Deck

- [S06 Final Strategy Prep & Presentation.html](S06%20Final%20Strategy%20Prep%20%26%20Presentation.html)

The deck predates this syllabus and will be rewritten to match it.

[Bootcamp S05]: ../S05-Backtest-and-Attribution/
[CF S01]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S01-Terminal-Environment-and-Git/
[CF S11]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S11-House-Rules-and-Code-Review/
[CF S12]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S12-Capstone-Ship-a-Tested-Release/
[FM S08]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S08-Efficiency-Anomalies-and-Decay/
[FM S12]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S12-Capstone-Performance-Attribution-and-Track-Records/
[MF S02]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S02-Distributions-Tails-and-Drawdowns/
[MF S03]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S03-Simulation-Bootstrap-and-the-Null/
[MF S04]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S04-Estimation-Inference-and-Multiple-Comparisons/
[MF S07]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S07-Time-Series-and-Trend-Signals/
[MF S12]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S12-Capstone-Overfitting-Deflated-Sharpe-and-the-Holdout/

---

*Educational material. Nothing here is a recommendation to buy, sell or hold any security; backtests are hypothetical. Text CC BY 4.0, code MIT: see [LICENSE](../LICENSE) and [LICENSE-CODE](../LICENSE-CODE).*
