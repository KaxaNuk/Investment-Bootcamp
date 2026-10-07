# Changelog

## 0.2.0 (2026-10-07)

**Every session now points back to the pillar sessions behind it, and every deck has an editable
source in `design/`: change the source and rebuild, never the bundled HTML.**

### Added

- **A "Reinforce in the pillars" slide in every deck, after its to-do.**
  - It lists the Coding Foundations, Financial Markets and Mathematical Finance sessions behind the
    session.
  - Each entry says what to revisit there, is marked required, helpful or go further, and links to
    the session on GitHub.
  - "Go further" closes the eight links the pillars made to the Bootcamp with no link back.
- **A section of the same name in every session README, S00 to S06.**
- **`design/pillars.js`**, the one map both come from.
- PDFs of the S04, S05 and S06 decks, printed like the others: one page per slide, with clickable
  pillar links.
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
- **S05 deck.**
  - Names Backtest Engine 0.66.0 and Attribution Analysis 0.2.0 beside every worked-example figure,
    and labels the hand-taken differences "derived".
  - Calls the Brinson total "active return" (the library's alpha column).
  - Prices the README's run list: at most 10 of the demo's 20 backtests, with sub-periods
    2006-2011, 2012-2019 and 2020-2024 and none past 2024.
  - Makes the counterfactual arms and the holdout run homework inside the demo window.
  - Marks the factor layer "not assessed" on the public path.
  - Every paste box now says "your assistant".
- **S06 deck.**
  - Its cover says "Final Strategy Prep & Presentation".
  - The gate reads met, not met or not assessed, with criterion 2 "not assessed" on the public path.
  - The deflated Sharpe is computed with the AI off and labelled derived.
  - Criterion 3 rests on the sub-periods, the cost rows and the timing shift, with a grid only as a
    labelled teaching computation.
  - No new engine runs are asked for, paper trading is after the course, and the stop and to-do
    follow the README: the holdout record, `CLEAN_CLONE.log` and a tag.
- **Documents.**
  - The S01, S02 and S03 PDFs are reprinted from the cleaned decks.
  - Each session's "Deck" section lists both files and what a rewrite still adds, in place of "the
    deck predates this syllabus".
  - `README.md`, `SYLLABUS.md` and `PROGRAM.md` say the same and point to the new sections.

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
