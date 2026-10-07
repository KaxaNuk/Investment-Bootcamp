# S00 · Onboarding and Self-Check

**Investment Bootcamp** · Module B0: Onboarding · About 2 hours in person, or a written walkthrough and an optional narrated deck self-paced · Status: planned

## First artefact

The doctor report, with the AI off: each tool's version, and each key shown as set or missing,
never its value. Save it now and commit it once git works.

## You will be able to

- Run the doctor checklist: copy-paste version commands for git, uv, Python 3.13, your assistant's
  command-line tool, APM 0.29.0, the KaxaNuk Researcher and the Data Curator with Yahoo.
- Take the 33-item self-check with no assistant and no web, and commit the `ROUTE.md` it prints:
  the pillar sessions, hard and soft, to finish before each Bootcamp session.
- Create `kn-workbench` (if [CF S01] has not) and a researcher home with `init-researcher` and its
  interview, once the doctor is green and [CF S04] is done or tested out, and commit both.
- Download one quarter of SPY as a smoke test, and state the holdout rule: the Bootcamp treats 2024
  as in-sample and keeps only 2025 to its freeze date sealed.

## Before this session

- **Required:** Nothing; this is where the program starts. A red doctor item routes you to
  [CF S01] (git, uv, Python, the assistant) or [CF S04] (APM, the KaxaNuk Researcher).
- **Helpful:** Nothing.

## Lab

- **Part 1, the doctor.** A plain checklist. Each red item names the session that fixes it.
- **Part 2, the self-check.** A static page or a one-click Codespace with 33 items, one for each
  pillar session the Bootcamp needs, 11 per pillar. A script scores it, never a language model.
  Some examples: predict which test fails on a loop with a gap ([CF S03]); `.loc[:date]` against
  `index < date`, and pooled ranks ([CF S06]); an adjusted price after a reverse split ([FM S02]);
  survivorship and the choice of benchmark ([FM S06]); the CAGR of a short window ([MF S01]); IC,
  ICIR and breadth ([MF S08]); the best of N and the deflated Sharpe ([MF S12]). Missing one item
  routes you to that session; missing two or more in a module routes the whole module.
- **Part 3, the setup**, once the doctor is green and CF S04 is done or tested out: install, create
  your homes, run the smoke download. Platform-door learners add a 30-minute drill on writing tests
  as tables.
- **The demo account.** Request a [lab.kaxanuk.mx](https://lab.kaxanuk.mx) demo account now, but do
  not activate it. Its 14 days start in [Bootcamp S04] and must cover S04 to S06.

**On disk when you leave:** the doctor report, `ROUTE.md`, `kn-workbench`, a researcher home, and
the smoke download of SPY.

## Product and data

Free. The KaxaNuk Researcher (`init-researcher`, `interview`, `next`), installed with APM 0.29.0;
the Data Curator with its Yahoo Finance extension (no key); the doctor checklist and the self-check
page. Your AI assistant is your own cost.

## AI mode

- **AI off:** the whole self-check, closed book: predict, then run; explain in plain English. It
  must measure you, not the agent.
- **AI on:** Part 3 only, after CF S04. The assistant runs the install while you read and approve
  each command against the KaxaNuk review checklist. Then reflect on your prompts: note one thing it
  did that you did not ask for.

## Readings

- KaxaNuk (2026). *KaxaNuk Researcher*. README. Open access:
  https://github.com/KaxaNuk/KaxaNuk-Researcher
- Kestin, Miller, Klales, Milbourne and Ponti (2025). *AI tutoring outperforms in-class active
  learning: an RCT introducing a novel research-based design in an authentic educational setting*.
  Scientific Reports 15. Open access: https://doi.org/10.1038/s41598-025-97652-6

## Prepares for

- [CF S01], [CF S04], [FM S01], [MF S01]
- [Bootcamp S01]

## Deck

None yet. S00 is new in this edition.

[Bootcamp S01]: ../S01-Kick-off-and-Process/
[Bootcamp S04]: ../S04-Portfolio-Construction/
[CF S01]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S01-Terminal-Environment-and-Git/
[CF S03]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S03-Functions-Types-and-Tests/
[CF S04]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S04-The-Agent-Loop/
[CF S06]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S06-Time-Without-Look-Ahead/
[FM S01]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S01-Ecosystem-and-Security-Master/
[FM S02]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S02-Prices-Total-Returns-and-Time-Value/
[FM S06]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S06-Indices-Benchmarks-ETFs-and-Survivorship/
[MF S01]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S01-Return-Arithmetic/
[MF S08]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S08-Cross-Sectional-Signals-IC-and-Fama-MacBeth/
[MF S12]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S12-Capstone-Overfitting-Deflated-Sharpe-and-the-Holdout/

---

*Educational material. Nothing here is a recommendation to buy, sell or hold any security; backtests are hypothetical. Text CC BY 4.0, code MIT: see [LICENSE](../LICENSE) and [LICENSE-CODE](../LICENSE-CODE).*
