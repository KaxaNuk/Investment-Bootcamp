# S04 · Portfolio Construction: Blueprint Before the Rule

**Investment Bootcamp** · Module B2: From Book to Verdict · About 2 hours in person, or a written walkthrough and an optional narrated deck self-paced · Status: planned

## First artefact

`BLUEPRINT_1.md`, drafted as homework with `/blueprint 1` after S03; it needs only S03's
`RESULTS.md`. In the session you answer the critic and push it before the rule cell exists. The
push record must show the blueprint first.

## You will be able to

- Answer the blueprint critic and push `BLUEPRINT_1.md` before the rule: predictions that cite a
  note or an analyzer measurement, or are counted leads; a control that differs from the rule in one
  thing; a falsifier and a kill switch; a statistics section; sub-periods declared from the first
  valid book date; a budget of at most 10 backtests in S05 and 5 more as homework; and the single
  holdout test.
- Write the rule cell (who, how much, when) on the prior close for an equal-weight book with SHY as
  priced cash, and pass the invariants and a Verify check built on your [CF S08] work or the
  starter kit.
- Catch a seeded book that passes all five invariants but holds only names alive at the end of the
  sample.
- Activate the demo, rebuild the equal-weight answer key in Lab Portfolio Construction, and log
  each local-versus-Lab difference (provider, lag, rebalance dates) as a dated `JOURNAL_1.md` entry.

## Before this session

- **Required:** [CF S08] (weight files, invariants, Verify); [FM S09] (long-only mechanics, two
  kinds of cash, effective N); [MF S12] (the trial budget and the statistics section; the starter
  kit's statistics section if you skipped it); [Bootcamp S03].
- **Helpful:** [CF S06]; [CF S09] (spec before code); [FM S03] (SHY as priced cash); [FM S07]
  (turnover); [MF S05] (covariance, estimation error); [MF S09] (the clustering behind HRP);
  [MF S10] (sizing methods; the starter kit's `sizing.py` if you skipped it).

## Lab

- **The rule and the checks:** the rule cell, the five invariants and Verify, then the seeded
  survivors-only book.
- **The answer key:** activate the demo now, so its 14 days cover S04 to S06. For claim A, rebuild
  TU22-EW from a Lab universe file of the 22 stocks only; for claim B, the unfiltered ETF sleeve.
  Lab Portfolio Construction is used for equal weight only.
- **Homework, S04 to S05:** size one alternative (inverse volatility, risk parity or HRP) in code
  on the names the rule selected, with your [MF S10] `sizing.py` or the starter kit's, and log it
  as a trial. Watch for a covariance window that includes the holding month. Then read two of the
  blueprint's leads into `BIBLIOGRAPHY.md` with `read` (part F of the order of work).

**On disk when you leave:** `BLUEPRINT_1.md`; `experiment_1.ipynb` sections 0 to 3 and 2.1; weight
files for the rule, the control and the alternative; `JOURNAL_1.md` entries; `TRIALS.csv` rows.

## Product and data

The equal-weight book is free, on the KaxaNuk Strategy Template. The KaxaNuk Researcher:
`blueprint` with its critic, `experiment-lifecycle`, `portfolio-construction-runs`. The Lab demo:
Portfolio Construction for the answer key, a few of its 50 runs; the stock sleeve uses 25 of the
demo's 30 market files, the ETF sleeve 7. Without a demo account, KaxaNuk provides the answer key
as a reference output.

## AI mode

- **AI off:** explain each prediction's falsifier aloud, in plain English; find the seeded
  survivors-only book.
- **AI on:** `/blueprint` with its critic. Tests first: your invariant tests are frozen, the agent
  writes the rule cell and may not edit them. Review the diff against the KaxaNuk review checklist.

## Readings

- Grinold and Kahn (2000). *Active Portfolio Management*. 2nd ed., McGraw-Hill. Chapter 14:
  'Portfolio Construction'.
- Paleologo (2021). *Advanced Portfolio Management*. Wiley. Chapter: 'Use Effective Heuristics for
  Alpha Sizing'.
- Lopez de Prado (2016). *Building Diversified Portfolios that Outperform Out-of-Sample*. Journal
  of Portfolio Management 42(4). Open access: SSRN 2708678
- DeMiguel, Garlappi and Uppal (2009). *Optimal Versus Naive Diversification: How Inefficient is
  the 1/N Portfolio Strategy?* Review of Financial Studies 22(5).

## Prepares for

- [Bootcamp S05]

## Reinforce in the pillars

The pillar sessions behind this one, by pillar. Go back to a required session first, and to any
session whose part you could not do with the AI off; the deck shows the same map after its to-do.

- **Coding Foundations.** Required: [CF S08] weight files, the invariants, Verify. Helpful: [CF S06]
  the prior close: `index < date`; [CF S09] the spec before the code. Go further: [CF S11] reviewing
  the diff against the checklist; [CF S12] `book_check` becomes the Verify cell.
- **Financial Markets.** Required: [FM S09] long-only mechanics, two kinds of cash, effective N.
  Helpful: [FM S03] SHY as priced cash; [FM S07] turnover. Go further: [FM S06] TU22-EW as the
  control book.
- **Mathematical Finance.** Required: [MF S12] the trial budget and the statistics section. Helpful:
  [MF S05] covariance and estimation error; [MF S09] the clustering behind HRP; [MF S10] sizing
  methods and `sizing.py`.

## Deck

- [S04 Portfolio Construction.html](S04%20Portfolio%20Construction.html)
- [S04 Portfolio Construction.pdf](S04%20Portfolio%20Construction.pdf)

Cleaned and aligned with this syllabus on 2026-10-07, and built from `design/s04_slides.html`;
`design/check.js` lints it. A rewrite still adds the equal-weight TU22-EW answer key and the seeded
survivors-only book, and the AI-off and AI-on blocks of each session.

[Bootcamp S03]: ../S03-Feature-Engineering/
[Bootcamp S05]: ../S05-Backtest-and-Attribution/
[CF S06]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S06-Time-Without-Look-Ahead/
[CF S08]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S08-Weight-Files-and-Invariants/
[CF S09]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S09-Design-Before-You-Prompt/
[CF S11]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S11-House-Rules-and-Code-Review/
[CF S12]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S12-Capstone-Ship-a-Tested-Release/
[FM S03]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S03-Rates-Bonds-and-the-Yield-Curve/
[FM S06]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S06-Indices-Benchmarks-ETFs-and-Survivorship/
[FM S07]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S07-Liquidity-Trading-Costs-and-Capacity/
[FM S09]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S09-Risk-Diversification-and-the-Long-Only-Book/
[MF S05]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S05-Linear-Algebra-and-Covariance/
[MF S09]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S09-PCA-Clusters-and-Regimes/
[MF S10]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S10-Portfolio-Optimisation-and-Estimation-Error/
[MF S12]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S12-Capstone-Overfitting-Deflated-Sharpe-and-the-Holdout/

---

*Educational material. Nothing here is a recommendation to buy, sell or hold any security; backtests are hypothetical. Text CC BY 4.0, code MIT: see [LICENSE](../LICENSE) and [LICENSE-CODE](../LICENSE-CODE).*
