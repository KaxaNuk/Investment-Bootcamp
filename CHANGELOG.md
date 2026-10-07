# Changelog

## 0.2.0 (2026-10-07)

**Every deck now has an editable source in `design/`: change the source and rebuild, never the
bundled HTML.**

### Added

- `design/deck.js`, which extracts the slides of a bundled deck into `design/sNN_slides.html` and
  bundles them back, renumbering the slides. S01 to S04 had no source; S05 and S06 keep theirs
  (`s05_content.js`, `s06_slides.js`).
- `design/check.js`, a lint of the six decks against `AGENTS.md` and the syllabus: banned words,
  "alpha" outside a regression intercept, retired files and folders, placeholders, and slide
  numbers.

### Changed

- **S01 deck.**
  - No longer names an internal fund: step 8 is outside the course and the repository.
  - Promises a correct test of an idea, not a funded strategy.
  - Maps seven sessions, S00 to S06, with the syllabus outcomes.
  - The tools and the Data Curator install are a recap of S00, in uv on Python 3.13 with the
    current `init excel`.
  - The homework is the README's: one source per claim, the objective and the benchmark entry
    pushed, and `Config/.env` never committed.
- **S02 deck.**
  - Keeps "alpha" for Jensen's intercept only.
  - Shows its 21 unattributed quotations as takeaways.
  - Marks the history of research as Financial Markets S08's pre-reading.
  - Uses the README's seven questions and a kill switch with a comparator.
  - Corrects five citations: the Dow editorials (dropped), Damodaran 1996, Khandani and Lo 2011,
    and the full titles of McLean and Pontiff and of Jensen, Kelly and Pedersen.
- **S03 deck.** Is now the Feature Lab:
  - "Alpha signals" are return signals.
  - The researcher and strategy slides are recaps of S00 and S01, with the current install (APM
    0.29.0, any assistant), interview, home folders and commands.
  - The order of work is lettered A to H.
  - The data is pre-work on KN-TU30 to 2024-12-31, with Yahoo and no key.
  - The stop and the to-do follow the README: the screen counted, the blueprint drafted, the demo
    not yet activated.
- **S04 deck.** Is now Blueprint Before the Rule:
  - The opening mirrors S03's to-do.
  - The benchmark entry dates from S01.
  - The blueprint is drafted as homework and pushed alone before the rule, with its statistics
    section, trial budget, sub-periods and holdout test.
  - The ETF exercise names the KN-TU30 sleeve instead of placeholders.
  - The alternative sizing is homework and a trial, and the close names S05's outcomes.
  - The momentum leads carry their years.

### Fixed

- Every deck's browser tab showed nothing or "Bundled Page"; it now shows the session name.
- `design/build_s06.js` stopped with an error on a clean clone, because it read a gitignored
  authoring note; it now skips the note when it is absent.

## 0.1.0 (2026-10-07)

**Each session now lives in its own folder, `S00-Onboarding-and-Self-Check/` to
`S06-Final-Strategy-Prep-and-Presentation/`; links to the decks' old paths at the repository root
no longer work.**

### Added

- `S00 Onboarding and Self-Check`, a new first session: setup checks, a self-check taken with the AI
  off that routes each learner to the pillar sessions they need, and a researcher home.
- `README.md` with the objective, `SYLLABUS.md` with the seven sessions and their prerequisites in
  the three pillars, and `PROGRAM.md`, the guide to the whole program.
- A `README.md` in every session folder with its outcomes, lab, AI mode and readings.
- `AGENTS.md` and `CLAUDE.md` with the rules for writing material here.
- `LICENSE` (CC BY 4.0, for text) and `LICENSE-CODE` (MIT, for code).
- `CHANGELOG.md`.

### Changed

- The decks moved into their session folders with their file names unchanged;
  `design/build_s06.js` and `design/render.js` point at the new paths.
- The redesigned sessions are described in `SYLLABUS.md`: S02 becomes a hypothesis workshop, S03 a
  feature lab, and the history of investment research moves to Financial Markets S08 as
  pre-reading. The decks are rewritten later.

### Removed

- The IDE settings (`.idea/`) and the authoring notes (`design/* - copy.md`,
  `design/s06_open_questions.md`) from the tracked tree. They stay on the author's disk and are now
  ignored.
