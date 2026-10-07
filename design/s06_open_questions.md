
---

## Open questions

1. **Factor files (from S05's open question 4).** Without the Analytics Factory factor files students reach S06 with the first cut only, and gate criterion 2 reads not met (slide 2's notes say so). Settle it before S05.
2. **Presentation day: date and format.** Presentations are a separate day after S06 (decided 2026-10-07). Slides 23 and 25 say *presentation day* with no date; give the date, the minutes per team and who judges, and they go on the To do and the closing panel. The old deck's challenge repository, `github.com/KN-Hack/Research-Challenge-2026`, now returns 404, so its rules could not be read.
3. **Scorecard (slide 19).** The old template is kept exactly, with no row for return (decided 2026-10-07). Still to confirm: the file under each row (for example *Scientific process → git log*, *Signal construction → c_\* columns*), and whether students get the scoring sheet as a handout; the old one was an image in the PDF and is not in this repository.
4. **Projector check.** The two new layouts, the gate table (slide 13) and the 3 × 3 scorecard (slide 19), were checked in a browser only.

## Resolved

- **Aligned with S05** (2026-10-07). Slide 2 is S05's to-do, chips included; slide 6 asks for the per-prediction verdicts S05 leaves for today; slides 8–10 read what S05 priced (sub-periods, the grid, two cost rows, K random draws) and price nothing new.
- **Performance is not scored.** The 3 × 3 scorecard is the whole rubric; slide 19's *none for return* stands, and the old deck's judging criteria list stays off the slides.
- **The outline (slide 21) stays in chat.** Nothing is written into the strategy repository; the template has no file for a presentation.
- **Students write the gate's *Current status* by hand (slide 15).** `paper-trading-gate` lays out the five rows and writes nothing.
- **Worked gate (slide 13).** Every figure matches `examples/liquid-golden-cross/Paper_Trading/BITACORA.md` in KaxaNuk-Researcher 0.33.0, the installed and latest release (commit 308ce8f). Re-check the evidence lines and the notes' numbers after any later release.
- **Trial counts (slide 9).** 31 · 43 · 54 · 68 are cumulative: the example's `RESULTS.md` publishes each experiment's count after the one before it.
- **Reading list (slide 24).** Harvey & Liu, *Backtesting*, *Journal of Portfolio Management* 42(1), 2015; Bailey, Borwein, López de Prado & Zhu, *Pseudo-Mathematics and Financial Charlatanism*, *Notices of the AMS* 61(5), 2014; *The Probability of Backtest Overfitting*, *Journal of Computational Finance* 20(4), 2017. No overlap with S05's list, which leaves the overfitting papers to S06.
- **The six questions (slide 20)** map onto the template's `AGENTS.md`: survivorship, overfitting and costs are lies 1, 3 and 4; the control, attribution and pre-registration are items 9, 5 and 10 of the bar a new signal must clear.
- **The `/challenge` Codex line.** `~/.apm/apm_modules/KaxaNuk/KaxaNuk-Researcher/.apm/prompts/challenge.prompt.md` exists on a machine with the package installed.
- **Renderer.** `node design/build_s06.js` renders the deck and this copy from `design/s06_slides.js`, reusing the S04 bundle's fonts, logo and deck engine; these questions live in `design/s06_open_questions.md`.
