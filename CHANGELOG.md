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
