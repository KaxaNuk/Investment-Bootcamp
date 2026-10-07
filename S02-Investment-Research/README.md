# S02 · Investment Research: the Hypothesis Workshop

**Investment Bootcamp** · Module B1: From Idea to Evidence · About 2 hours in person, or a written walkthrough and an optional narrated deck self-paced · Status: planned

## First artefact

Your five-part hypothesis, written by hand with the AI off and pushed before the session's work:
the claim, the source of the edge, who is on the other side, the test, and a kill switch that names
its comparator.

## You will be able to

- Write a five-part hypothesis by hand and answer the seven questions before any backtest.
- Rewrite each claim's evidence with the second pass of `/objective`, from the notes you read as
  homework, leaving every unsupported line as a lead.
- Find three design flaws in a seeded case: full-sample z-scores, CPI and other macro data used
  before their release dates, and thresholds tuned in sample.
- Answer an AI investment committee, and log each objection you could not answer as a lead in
  `JOURNAL_1.md`.

## Before this session

- **Required:** [CF S04] (the agent loop: plan, go, review, commit); [Bootcamp S01] and its
  homework, a note for each claim.
- **Helpful:** [FM S02] (CPI release dates); [FM S03] (duration, for the seeded case); [FM S08]
  (efficiency, decay, fabricated citations; its pre-reading is the history of investment research
  in six acts); [FM S11] (risk factor or return signal); [MF S04] (t-statistics, p-values, multiple
  comparisons); [MF S06] (reading a regression table).

## Lab

- **The seven questions**, before any backtest:
  1. Why does this edge exist?
  2. Who is on the other side, and why do they keep losing?
  3. Is it a risk premium or a mispricing, and which one is the claim about?
  4. How many independent bets a year does it give?
  5. Does it survive costs, and how much capital can it hold?
  6. When does it fail, and for how long?
  7. How many ideas were tried before this one?

  If the seven answers do not fit in one paragraph, it is not a hypothesis yet.
- **The second pass of `/objective`:** each claim's evidence rewritten from your notes. Every line a
  note does not support stays a lead.
- **The seeded case:** a rule that tilts bond duration on macro data, with three flaws to find.
- **The committee:** an AI investment committee questions your claims.
- Each reading names its open-access version where one exists: SSRN, NBER, arXiv or the journal.

**On disk when you leave:** `Bibliotheca/` notes and `BIBLIOGRAPHY.md` rows (homework), the second
pass of `OBJECTIVE.md`, and the `JOURNAL_1.md` entry with the committee's objections.

## Product and data

Free. The KaxaNuk Researcher (`read` with its reading map, `query`, `objective`); open-access
papers; Ken French data, optional.

## AI mode

- **AI off:** explain in plain English: the hypothesis and the seven questions. Find the seeded
  flaws in the duration case.
- **AI on:** `/objective` under plan and go, then review the diff against the KaxaNuk review
  checklist so every evidence line resolves to a note. Role-play: an AI investment committee.

## Readings

- Grossman and Stiglitz (1980). *On the Impossibility of Informationally Efficient Markets*.
  American Economic Review 70(3).
- Khandani and Lo (2008). *What Happened To The Quants In August 2007?* Working paper, published in
  the Journal of Financial Markets 14(1) in 2011. Open access: SSRN 1288988
- Harvey, Liu and Zhu (2016). *... and the Cross-Section of Expected Returns*. Review of Financial
  Studies 29(1). Open access: SSRN 2249314
- Jensen, Kelly and Pedersen (2023). *Is There a Replication Crisis in Finance?* Journal of Finance
  78(5). Open access: the published article, CC BY

## Prepares for

- [Bootcamp S03], [Bootcamp S04]

## Reinforce in the pillars

The pillar sessions behind this one, by pillar. Go back to a required session first, and to any
session whose part you could not do with the AI off; the deck shows the same map after its to-do.

- **Coding Foundations.** Required: [CF S04] the agent loop: plan, go, review, commit.
- **Financial Markets.** Helpful: [FM S02] CPI release dates; [FM S03] duration, for the seeded
  case; [FM S08] efficiency, decay, fabricated citations; the history in six acts; [FM S11] a risk
  factor or a return signal.
- **Mathematical Finance.** Helpful: [MF S04] t-statistics, p-values, multiple comparisons; [MF S06]
  reading a regression table.

## Deck

- [S02 Investment Research.html](S02%20Investment%20Research.html)
- [S02 Investment Research.pdf](S02%20Investment%20Research.pdf)

Cleaned and aligned with this syllabus on 2026-10-07, and built from `design/s02_slides.html`;
`design/check.js` lints it. A rewrite still adds the seeded duration-tilt case and the AI investment
committee, and the AI-off and AI-on blocks of each session.

[Bootcamp S01]: ../S01-Kick-off-and-Process/
[Bootcamp S03]: ../S03-Feature-Engineering/
[Bootcamp S04]: ../S04-Portfolio-Construction/
[CF S04]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S04-The-Agent-Loop/
[FM S02]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S02-Prices-Total-Returns-and-Time-Value/
[FM S03]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S03-Rates-Bonds-and-the-Yield-Curve/
[FM S08]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S08-Efficiency-Anomalies-and-Decay/
[FM S11]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S11-Factor-Models-Risk-Factors-and-Return-Signals/
[MF S04]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S04-Estimation-Inference-and-Multiple-Comparisons/
[MF S06]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S06-Regression-and-Its-Failures/

---

*Educational material. Nothing here is a recommendation to buy, sell or hold any security; backtests are hypothetical. Text CC BY 4.0, code MIT: see [LICENSE](../LICENSE) and [LICENSE-CODE](../LICENSE-CODE).*
