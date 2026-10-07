# S03 · Feature Engineering: the Feature Lab

**Investment Bootcamp** · Module B1: From Idea to Evidence · About 2 hours in person, or a written walkthrough and an optional narrated deck self-paced · Status: planned

## First artefact

The keep threshold (the IC and ICIR a feature must reach) and the predicted sign of its IC,
written in `JOURNAL_1.md` with the AI off and pushed before the analyzer runs.

## You will be able to

- Seed `Universe/Investable_Universe.csv` from KN-TU30 for the sleeve you trade, log replacements
  in the tracked `Universe/Selection_Log.csv`, and state the date from which the universe is usable.
- Port your tested `c_*` feature (your [CF S12] candidate, the running case or one from the menu)
  into `Data/Curator/custom_calculations.py`, adding tests only for anything new, and run the
  starter refinery to get per-date `r_*` ranks and MAD-clipped z-scores.
- Run the starter analyzer and read coverage, diversification, rank identity, IC and ICIR (IC
  information ratio) on the eligible pool and the panel at two horizons, separation and the
  look-ahead audit.
- Decide keep or drop, record the measurements in `RESULTS.md` under "Before any experiment", count
  every feature screened, and show which number a seeded same-day look-ahead inflated.

## Before this session

- **Required:** [CF S05] (Jupyter, modules, stripped outputs, `DatetimeIndex`); [CF S06] (shift,
  rolling windows, warm-up nulls, `index < date`, per-date groupby); [CF S07] (`c_*` features with
  `DataColumn`); [FM S06] (survivorship, point-in-time membership); [MF S08] (MAD z-scores, ranks,
  IC, ICIR, the fundamental law); [Bootcamp S02].
- **Helpful:** [FM S01]; [FM S02] (adjusted and unadjusted prices); [FM S05] (only for a
  fundamentals feature); [FM S07] (the traded-value proxy); [MF S07] (look-ahead as causality);
  [FM S09] and [MF S05] (correlation, for the diversification check).

## Lab

- **Pre-work, in this order:** seed `Investable_Universe.csv` with the `universe-point-in-time`
  skill; run the starter curator to 2024-12-31, the end of the Bootcamp's in-sample period; run
  `universe.ipynb`.
- **In session:** port the feature, run the refinery, write the threshold, run the analyzer,
  decide, then find the seeded leak. No book and no performance number.
- **Platform door:** the starter kit runs unchanged, the feature comes from the tested menu, and
  your tests are tables.

**On disk when you leave:** the universe files and `Universe/Selection_Log.csv`;
`Data/Curator/custom_calculations.py` with tests; a summary of the analyzer outputs; the "Before
any experiment" section of `RESULTS.md`; the `JOURNAL_1.md` entries and `TRIALS.csv` rows.

## Product and data

Free. The Data Curator with its Yahoo Finance extension. The starter curator, refinery and analyzer
(planned; adapted from the worked example, MIT), with liquidity from `c_traded_value_close_proxy`
(split-adjusted close times split-adjusted volume, since the free data have no VWAP), and beta and
residual volatility to SPY as `r_*` columns. Skills: `universe-point-in-time`,
`data-curator-custom-calculations`, `data-analyzer-runs`.

## AI mode

- **AI off:** predict the IC sign, then run; compute one date's IC by hand, a teaching computation;
  find the seeded same-day look-ahead.
- **AI on:** tests first for anything new; the agent ports the feature with the
  `data-curator-custom-calculations` skill and may not edit your tests. Review the refinery diff
  against the KaxaNuk review checklist, looking for pooled ranks.

## Readings

- Grinold and Kahn (2000). *Active Portfolio Management*. 2nd ed., McGraw-Hill. Chapter 12:
  'Information Analysis'; Chapter 13: 'The Information Horizon'.
- Jansen (2020). *Machine Learning for Algorithmic Trading*. 2nd ed., Packt. Chapter 4: 'Financial
  Feature Engineering'.
- KaxaNuk (2026). *Data Curator*. README, v0.50.0. Open access:
  https://github.com/KaxaNuk/Data-Curator

## Prepares for

- [Bootcamp S04], [Bootcamp S06]

## Reinforce in the pillars

The pillar sessions behind this one, by pillar. Go back to a required session first, and to any
session whose part you could not do with the AI off; the deck shows the same map after its to-do.

- **Coding Foundations.** Required: [CF S05] Jupyter, modules, stripped outputs, `DatetimeIndex`;
  [CF S06] shift, warm-up nulls, `index < date`, per-date ranks; [CF S07] `c_*` features with
  `DataColumn`. Go further: [CF S03] tests as tables, the platform door; [CF S12] your tested `c_*`
  candidate.
- **Financial Markets.** Required: [FM S06] survivorship, point-in-time membership. Helpful:
  [FM S01] the security master; [FM S02] adjusted and unadjusted prices; [FM S05] only for a
  fundamentals feature; [FM S07] the traded-value proxy; [FM S09] correlation, for the
  diversification check. Go further: [FM S11] classifying your candidate feature.
- **Mathematical Finance.** Required: [MF S08] MAD z-scores, ranks, IC, ICIR, the fundamental law.
  Helpful: [MF S05] correlation, for the diversification check; [MF S07] look-ahead as causality. Go
  further: [MF S11] a machine-learning feature, without leakage.

## Deck

- [S03 Feature Engineering.html](S03%20Feature%20Engineering.html)
- [S03 Feature Engineering.pdf](S03%20Feature%20Engineering.pdf)

Cleaned and aligned with this syllabus on 2026-10-07, and built from `design/s03_slides.html`;
`design/check.js` lints it. A rewrite still adds the KN-TU30 seed, the IC and ICIR run on your own
feature, and the seeded same-day leak, and the AI-off and AI-on blocks of each session.

[Bootcamp S02]: ../S02-Investment-Research/
[Bootcamp S04]: ../S04-Portfolio-Construction/
[Bootcamp S06]: ../S06-Final-Strategy-Prep-and-Presentation/
[CF S03]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S03-Functions-Types-and-Tests/
[CF S05]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S05-NumPy-pandas-and-Notebooks/
[CF S06]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S06-Time-Without-Look-Ahead/
[CF S07]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S07-Features-as-Data-Curator-Functions/
[CF S12]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S12-Capstone-Ship-a-Tested-Release/
[FM S01]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S01-Ecosystem-and-Security-Master/
[FM S02]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S02-Prices-Total-Returns-and-Time-Value/
[FM S05]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S05-Statements-Valuation-and-the-Three-Dates/
[FM S06]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S06-Indices-Benchmarks-ETFs-and-Survivorship/
[FM S07]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S07-Liquidity-Trading-Costs-and-Capacity/
[FM S09]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S09-Risk-Diversification-and-the-Long-Only-Book/
[FM S11]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S11-Factor-Models-Risk-Factors-and-Return-Signals/
[MF S05]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S05-Linear-Algebra-and-Covariance/
[MF S07]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S07-Time-Series-and-Trend-Signals/
[MF S08]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S08-Cross-Sectional-Signals-IC-and-Fama-MacBeth/
[MF S11]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S11-Supervised-Learning-Without-Leakage/

---

*Educational material. Nothing here is a recommendation to buy, sell or hold any security; backtests are hypothetical. Text CC BY 4.0, code MIT: see [LICENSE](../LICENSE) and [LICENSE-CODE](../LICENSE-CODE).*
