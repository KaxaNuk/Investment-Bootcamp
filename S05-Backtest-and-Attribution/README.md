# S05 · Backtest and Attribution

**Investment Bootcamp** · Module B2: From Book to Verdict · About 2 hours in person, or a written walkthrough and an optional narrated deck self-paced · Status: planned

## First artefact

With the AI off, before the first run: your predicted cost drag, and the order you expect for the
rule, the control and SPY, pushed as a dated `JOURNAL_1.md` entry.

## You will be able to

- Set `cash_reserve_percentage`, then price the rule, the control and the alternative on the
  Backtest Engine with stated costs (commission per share in dollars, slippage in basis points).
  Quote CAGR, volatility, Sharpe, drawdown and turnover only from the engine, each run logged in
  `run_manifest.csv`.
- Re-price the rule at two cost levels and in the sub-periods the blueprint declared, and explain
  from the outputs why the CAGR of a truncated window is not comparable.
- Run a Brinson-Fachler attribution per sleeve, name the effect that carried the active return, and
  record which sector scheme the Lab used.
- Fill `FINDINGS_1.md` with `experiment-lifecycle` so every figure traces to `engine_summary.csv`
  or the manifest, any Ken French regression is labelled a diagnostic, and the factor layer reads
  "not assessed".

## Before this session

- **Required:** [FM S07] (costs with units, commission on unadjusted shares); [FM S12] (reading
  engine metrics and Brinson-Fachler); [MF S01] (annualisation, Sharpe, the CAGR of a short
  window); [Bootcamp S04] and its homework.
- **Helpful:** [CF S10] (guarded imports of licensed libraries); [FM S02]; [FM S10] (beta);
  [FM S11] (the factor layer); [MF S02] (tails, VaR, CVaR); [MF S06] (regression, for the Ken
  French diagnostic).

## Lab

- **The budget:** at most 10 of the demo's 20 backtests, each a trial. The rule; the control (for
  claim A, also the Brinson-Fachler benchmark); the alternative; a named benchmark when the control
  is not one (60/40 for claim B); 2 cost rows; 3 sub-periods; 1 spare.
- **The sub-periods**, as the blueprint declared them: for the stocks 2006-2011, 2012-2019 and
  2020-2024; for claim B, from about 2008.
- **The attribution:** by sector against TU22-EW for the stock sleeve, or by asset class (equity,
  duration, cash, real assets, dollar) against 60/40 for the ETF sleeve.
- **Homework, S05 to S06, inside the demo window:** push your holdout prediction, then price at
  most 5 more books: a one-day timing shift, up to 3 random-draw books, and the single holdout run,
  after you commit the record that opens the holdout. Record them in `FINDINGS_1.md` before S06.

**On disk when you leave:** `run_manifest.csv`, `engine_summary.csv`, notebook sections 4 and 5,
`FINDINGS_1.md` and `TRIALS.csv`. Raw per-asset outputs stay ignored by git.

## Product and data

The Lab demo: the Backtest Engine and Attribution Analysis (Brinson-Fachler), about 10 of its 20
portfolio files. Skills: `backtest-engine-runs`, `attribution-analysis-runs`,
`experiment-lifecycle`. Without a demo account: reference engine outputs from KaxaNuk for claims A
and B, and items that need your own book priced read "not assessed". The factor layer is not part
of the public path.

## AI mode

- **AI off:** predict the order of the rule, the control and SPY, then run. Find the seeded
  errors: a run on a truncated window, and a commission in cents read as dollars.
- **AI on:** a spec problem: you write the run list. Review the agent's `FINDINGS_1.md` draft
  against the KaxaNuk review checklist, striking any number without an engine file.

## Readings

- KaxaNuk (2026). *Backtest Engine documentation*. Methodology. Open access:
  https://kaxanuk-backtest-engine.readthedocs-hosted.com/en/latest/methodology/index.html
- KaxaNuk (2026). *Attribution Analysis documentation*. Methodology: 'Brinson-Fachler'. Open access:
  https://kaxanuk-attribution-analysis.readthedocs-hosted.com/en/latest/methodology/index.html
- Paleologo (2025). *The Elements of Quantitative Investing*. Wiley. Chapter: 'Ex-Post Performance
  Attribution'.
- Novy-Marx and Velikov (2016). *A Taxonomy of Anomalies and Their Trading Costs*. Review of
  Financial Studies 29(1). Open access: NBER WP 20721

## Prepares for

- [Bootcamp S06]

## Reinforce in the pillars

The pillar sessions behind this one, by pillar. Go back to a required session first, and to any
session whose part you could not do with the AI off; the deck shows the same map after its to-do.

- **Coding Foundations.** Helpful: [CF S10] guarded imports of licensed libraries. Go further:
  [CF S11] reviewing the agent’s draft against the checklist.
- **Financial Markets.** Required: [FM S07] costs with units, commission on unadjusted shares;
  [FM S12] engine metrics and Brinson-Fachler. Helpful: [FM S02] total returns and the unadjusted
  price; [FM S10] beta; [FM S11] the factor layer. Go further: [FM S09] setting the cash reserve
  before the first run.
- **Mathematical Finance.** Required: [MF S01] annualisation, Sharpe, the CAGR of a short window.
  Helpful: [MF S02] tails, VaR, CVaR; [MF S06] regression, for the Ken French diagnostic. Go
  further: [MF S08] reading a factor layer.

## Deck

- [S05 Backtest and Attribution.html](S05%20Backtest%20and%20Attribution.html)

The deck predates this syllabus and will be rewritten to match it.

[Bootcamp S04]: ../S04-Portfolio-Construction/
[Bootcamp S06]: ../S06-Final-Strategy-Prep-and-Presentation/
[CF S10]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S10-Architecture-of-a-KaxaNuk-Library/
[CF S11]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S11-House-Rules-and-Code-Review/
[FM S02]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S02-Prices-Total-Returns-and-Time-Value/
[FM S07]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S07-Liquidity-Trading-Costs-and-Capacity/
[FM S09]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S09-Risk-Diversification-and-the-Long-Only-Book/
[FM S10]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S10-CAPM-Beta-and-the-Market/
[FM S11]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S11-Factor-Models-Risk-Factors-and-Return-Signals/
[FM S12]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S12-Capstone-Performance-Attribution-and-Track-Records/
[MF S01]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S01-Return-Arithmetic/
[MF S02]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S02-Distributions-Tails-and-Drawdowns/
[MF S06]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S06-Regression-and-Its-Failures/
[MF S08]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S08-Cross-Sectional-Signals-IC-and-Fama-MacBeth/

---

*Educational material. Nothing here is a recommendation to buy, sell or hold any security; backtests are hypothetical. Text CC BY 4.0, code MIT: see [LICENSE](../LICENSE) and [LICENSE-CODE](../LICENSE-CODE).*
