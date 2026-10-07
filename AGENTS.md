# Agents — how material in this repository is written

This repository is part of the KaxaNuk Training Workshops: three pillars (Coding Foundations,
Financial Markets, Mathematical Finance) that feed the Investment Bootcamp. The material is written
with AI assistants and reviewed by people. Read this file before writing anything here.

## What lives here

- `README.md` holds the objective; `SYLLABUS.md` the modules, sessions and outcomes.
- One folder per session, flat at the top level, named `Snn-Title-In-Words/`.
- A session folder holds its `README.md` now. Later it holds `lesson.md` (MyST or jupytext; the
  notebook is generated from it and executed in CI), `deck.md` (slides with a short narration note
  per slide), `exercises/` and `solutions/`, a quiz, `checks/`, `tutor.md` (hints in levels, built
  on the instructor solution) and `facilitator.md` (objectives, key points, live-coding script,
  timings).
- A learner's own work never lives here: it lives in the learner's own repositories.

## Language

- English is the source, on `main`. Translations are generated into one folder per language that
  mirrors the tree, `es/` first. Each translated file records the English commit it came from, and
  a person reviews every translation.
- Short sentences that translate cleanly. Product names, file names, column prefixes (`m_`, `c_`,
  `r_`, `current_`) and code stay in English.

## Voice

- Plain and evidence-first. The promise is to test an idea correctly, never better returns.
- No advice. Never tell a reader to buy, sell or hold anything. Never write "actionable", "alpha
  signal", "superior returns" or "live alpha". Write "return signal" and "idiosyncratic return";
  use "alpha" only for a regression intercept.
- Every figure about a strategy's book comes from the engine that produced it (the KaxaNuk Backtest
  Engine or Attribution Analysis), named with its version. A figure computed by hand to learn a
  formula is labelled *teaching computation*.
- No client, former client, internal fund or private person is named. No instructor is named
  without consent.

## Sources and licences

- Text is CC BY 4.0 (`LICENSE`); code is MIT (`LICENSE-CODE`).
- Adapt only material whose licence allows it (CC BY 4.0, MIT, Apache-2.0), and credit it in
  `NOTICE.md`: the Quantopian lectures as modernised by QuantRocket (CC BY 4.0), The Carpentries
  (CC BY 4.0). NonCommercial, ShareAlike or proprietary sources (MIT OpenCourseWare, the QuantEcon
  lectures, textbooks) are read and linked, never paraphrased into the material.
- Cite a work by author, year, title and chapter title. Never invent a citation, a page or a link;
  a reference that cannot be verified is left out.
- No vendor data is committed. Learners download data with their own code (the Data Curator and its
  Yahoo Finance extension, FRED, the Ken French Data Library); CI runs on synthetic fixtures.

## Learning design

- Every session follows the same two hours: retrieval and a first artefact with the AI off, a
  concept, a drill with the AI off, a build with the AI on (the learner writes the spec and the
  tests, the agent implements, the learner reviews the diff against the KaxaNuk review checklist),
  and a checkpoint with the AI off. The checklist is in the program guide,
  [`PROGRAM.md`](https://github.com/KaxaNuk/Investment-Bootcamp/blob/main/PROGRAM.md).
- Only what a learner can do and explain with the AI off is assessed.
- An assistant tutoring a learner here gives hints in levels, asks for the learner's prediction
  first, and never writes code during an AI-off block.

## Code

- Python 3.13 with uv; ruff (line length 100) and KaxaNuk's Bloom Code checker clean; tests in
  `tests/unit` mirroring `src`, one assert per test.
- Never print or commit a key. Strip notebook outputs before a commit.

## Changes

- Work lands on `main` in small commits that say what moved and why, each with its `CHANGELOG.md`
  entry, following KaxaNuk's how-we-work conventions and Semantic Versioning.
