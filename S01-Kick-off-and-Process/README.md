# S01 · Kick-off and Process

**Investment Bootcamp** · Module B1: From Idea to Evidence · About 2 hours in person, or a written walkthrough and an optional narrated deck self-paced · Status: planned

## First artefact

`example_prediction.md`, with the AI off: your prediction of the worked example's verdict, kept or
rejected and why, written before you open its files.

## You will be able to

- Place any task on the eight steps and on parts A to H of the order of work, name the file each
  part writes, and say which steps run free and which on the Lab demo. Step 8, production, is
  outside this course and outside the repository.
- Read the worked example's `OBJECTIVE.md`, `RESULTS.md`, `BLUEPRINT_1.md`, `JOURNAL_1.md` and
  `FINDINGS_1.md` without running anything, and state its claim, its control and why its kill
  switch tripped.
- Create a strategy with `init-strategy` and write the first pass of `OBJECTIVE.md` with
  `/objective`, each claim untested and naming the question that would settle it.
- Append the benchmark entry to `JOURNAL_1.md` before any result, drawn from your [FM S06]
  `BENCHMARK.md` or [FM S12] memo, with the trial count at zero.

## Before this session

- **Required:** [CF S01] (git, a clean clone, uv and its lock file, a `.env` never printed);
  [CF S04] (the KaxaNuk Researcher, skills and commands, plan, go, review, commit);
  [Bootcamp S00] and the route it gave you.
- **Helpful:** [FM S01] (the security master, dated and current sector); [FM S06] (the benchmark
  chosen first); [FM S12] and [MF S01] (reading the worked example's CAGR and Sharpe).

## Lab

- `init-example` copies the worked example, liquid-golden-cross. You read it; you do not run it,
  because it needs an FMP key, hours of download and licensed data files.
- `init-strategy <name>` creates your strategy repository. `/objective` writes the first pass of
  `OBJECTIVE.md`, and `next` names the part of the order of work that comes next.
- No claim of your own yet? Take a default. **Claim A:** the running case, 12-1 momentum, on the 22
  KN-TU30 stocks. **Claim B:** a 200-day trend filter on the ETF sleeve, with SHY as cash.
- **Homework, S01 to S02:** read at least one open-access source per claim into `Bibliotheca/` with
  `read` (part B of the order of work).

**On disk when you leave:** your strategy repository with `OBJECTIVE.md` and `JOURNAL_1.md` pushed,
and `example_prediction.md`.

## Product and data

Free. The KaxaNuk Researcher (`init-example`, `init-strategy`, `objective`, `next`, `read`,
`experiment-lifecycle`); the KaxaNuk Strategy Template; the KN-TU30 seed.

## AI mode

- **AI off:** predict the worked example's verdict before reading it; explain in plain English why
  its control differs from its rule in exactly one thing.
- **AI on:** `/objective` under plan, go, review the diff, commit. Review the diff against the
  KaxaNuk review checklist, striking any evidence you did not supply and any advice language. Then
  reflect on your prompts: which words in `OBJECTIVE.md` are yours?

## Readings

- Arnott, Harvey and Markowitz (2019). *A Backtesting Protocol in the Era of Machine Learning*.
  Journal of Financial Data Science 1(1). Open access: SSRN 3275654
- Paleologo (2021). *Advanced Portfolio Management*. Wiley. Chapter: 'The Problem: From Ideas to
  Profit'.

## Prepares for

- [Bootcamp S02], [Bootcamp S03]

## Deck

- [S01 Kick-off and Process.html](S01%20Kick-off%20and%20Process.html)
- [S01 Kick-off and Process.pdf](S01%20Kick-off%20and%20Process.pdf)

The deck predates this syllabus and will be rewritten to match it.

[Bootcamp S00]: ../S00-Onboarding-and-Self-Check/
[Bootcamp S02]: ../S02-Investment-Research/
[Bootcamp S03]: ../S03-Feature-Engineering/
[CF S01]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S01-Terminal-Environment-and-Git/
[CF S04]: https://github.com/KaxaNuk/Coding-Foundations/tree/main/S04-The-Agent-Loop/
[FM S01]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S01-Ecosystem-and-Security-Master/
[FM S06]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S06-Indices-Benchmarks-ETFs-and-Survivorship/
[FM S12]: https://github.com/KaxaNuk/Financial-Markets/tree/main/S12-Capstone-Performance-Attribution-and-Track-Records/
[MF S01]: https://github.com/KaxaNuk/Mathematical-Finance/tree/main/S01-Return-Arithmetic/

---

*Educational material. Nothing here is a recommendation to buy, sell or hold any security; backtests are hypothetical. Text CC BY 4.0, code MIT: see [LICENSE](../LICENSE) and [LICENSE-CODE](../LICENSE-CODE).*
