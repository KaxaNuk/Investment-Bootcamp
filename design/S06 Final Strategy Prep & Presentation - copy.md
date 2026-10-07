# S06 — Final Strategy Prep & Presentation · slide copy

The copy for the S06 deck, 26 slides, laid out in `S06 Final Strategy Prep & Presentation.html`. It adapts the old session 05 deck (Final Strategy Prep & Presentation: the presentation challenge, and how to score a strategy, with its 3 × 3 scoring template) to the KaxaNuk Researcher's step 7, and was checked against the `challenge` prompt, the `paper-trading-gate` skill, the strategy template's `AGENTS.md`, `FINDINGS_N.md` and `RESULTS.md`, and the worked example's `Paper_Trading/BITACORA.md`. On screen each slide carries about 60 words; the detail is in the speaker notes. Each slide's on-screen word count follows its kicker.


---

## Opening

### 01 · FINAL STRATEGY & PRESENTATION

*cover* · kicker: **INVESTMENT BOOTCAMP** · 32 words

Your run, challenged by its own blueprint, put to the gate, then defended in ten minutes.

_Layout:_ Large numeral: 06. CONTENTS: 01 CHALLENGE YOUR OWN RUN · 02 TRY TO BREAK IT · 03 THE GATE · 04 DEFEND IT


<details><summary>Speaker notes</summary>

Session 06, the last one in the room: today nothing new is built. You challenge the run you priced in session 05 against the blueprint you committed in session 04, you try to break it, you put it to the gate, and you learn to defend it. Two rules for the day. Every number you say comes from FINDINGS_1.md or RESULTS.md, with its file. And a no is a result: the worked example says no four times, and it is the best thing in it.

</details>

### 02 · WHO PRICED THEM.

*cards* · kicker: **SESSION 05 · HOMEWORK** · 52 words

Show the file, not the curve.

- **01 YOUR BOOK, NET**: Priced by the engine, costs on. `FINDINGS_1.md`
- **02 YOUR CONTROL**: One ingredient out, same dates.
- **03 BOTH LAYERS**: Brinson-Fachler, then the factor model.
- **04 YOUR COUNT**: Every variant you ranked.

**THE RULE TODAY** — A number not in `FINDINGS_1.md` is not in the room.

<details><summary>Speaker notes</summary>

Hands up, card by card, with the file open. The book row and the control row must sit on the same rebalance dates; a control that chose its own dates differs in two things, and the gap is two effects read as one. Attribution: who ran both layers, and who ran the third pass, Brinson-Fachler again on the residual? Almost nobody; neither did the example, and the gate will say so. Last: who can say their trial count without looking? If you cannot, it is not published yet, and that is the first thing you fix today.

</details>

### 03 · FROM “IT WORKS” TO “WE TRUST IT.”

*statement* · kicker: **THIS SESSION** · 32 words

Title: FROM “IT WORKS” TO “WE TRUST IT.”

Challenge the run, try to break it, put it to the gate, then defend it.

- **1 BIBLIOTHECA**: Sessions 02–03
- **2 UNIVERSE**: Session 03
- **3 DATA**: Session 03
- **4 PORTFOLIO**: Session 04
- **5 BACKTEST**: Session 05
- **6 ATTRIBUTION**: Session 05
- **7 PAPER TRADING**: The gate _[TODAY]_
- **8 PRODUCTION**: Outside the repo

**NOTICE** — Nothing graduates today. A signature does, after five rows.

<details><summary>Speaker notes</summary>

The question of the day: how do you know this actually works? Not visually, not because the chart looks good, but because it survives structured evaluation. Step 7 has two halves: the gate, which we run today, and the paper run, which only a book that passes the gate gets. Step 8 never enters the repository. If your FINDINGS_1.md is still empty, pair with a neighbour whose is not: today runs on findings.

</details>


---

## 01 CHALLENGE YOUR OWN RUN

### 04 · CHALLENGE YOUR OWN RUN

*divider* · kicker: **SECTION 01** · 21 words

the blueprint is fixed · the findings answer to it · the git log keeps the order


<details><summary>Speaker notes</summary>

Section one turns the blueprint against its own run. You wrote predictions you were willing to be wrong about; now we check whether the run treated them that way. The blueprint never changes: a prediction worded better after its test is not a prediction.

</details>

### 05 · THE BLUEPRINT JUDGES THE RUN.

*cards* · kicker: **CHALLENGE · THE CHECKS** · 66 words

A prediction is something you were willing to be wrong about.

- **01 VERDICT VS FALSIFIER**: Either limb fires: falsified.
- **02 THE TALLY**: Count the rows yourself.
- **03 THE RUN VS THE PLAN**: Window, universe, costs. Disclosed, or a finding.
- **04 THE ORDER**: Notes before the blueprint, the blueprint before the rule. `git log`

**THE SOFT WORD** — “Mixed” where a limb fired is a falsification, renamed.

<details><summary>Speaker notes</summary>

Four of challenge’s ten checks, the four you can do by hand. A falsifier with two limbs fires when either limb fires; split or mixed in its place is the single most useful thing to catch. Count the verdict rows and compare them with the sentence that sums them up. A deviation from the frozen window, universe or costs is fine when it is in the caveats or the journal, and a finding when it is nowhere. The order lives only in git: a blueprint committed with its rule, or after it, cannot be told from one written afterwards, and a note read after the blueprint cannot have informed it.

</details>

### 06 · LET THE RESEARCHER DISAGREE.

*live* · kicker: **LIVE · THE CHALLENGE** · 66 words

`challenge` reads your files and reports in chat.

**PASTE THIS INTO CLAUDE OR CODEX**

```text
/challenge 1
Codex: follow ~/.apm/apm_modules/KaxaNuk/KaxaNuk-Researcher/.apm/prompts/challenge.prompt.md for experiment 1
```

Behind the line: it reads `BLUEPRINT_1.md`, `FINDINGS_1.md`, `JOURNAL_1.md`, `RESULTS.md`, `OBJECTIVE.md` and every cited note, in that order.

- **01 IT WRITES**: One `JOURNAL_1.md` entry, on your go.
- **02 IT NEVER**: Edits your files, computes a number, declares graduation.
- **03 YOU FIX**: The findings, from a re-run. Never a reword.

**THEN** — A falsified claim moves in `OBJECTIVE.md`, through `objective`.

<details><summary>Speaker notes</summary>

Run it in your strategy folder, researcher added; it refuses in liquid-golden-cross, and it refuses while FINDINGS_1.md reports nothing, because challenging a run in progress invites findings written to match. Read the report out loud to your neighbour: what held, what failed and by which falsifier, what the findings do not say. It also checks the trial count, the notes behind each prediction, and whether two published numbers reconcile; on a disagreement it asks for a re-run and never supplies the value. It compares the package version you challenge with against the one that drafted the blueprint: a mismatch is disclosed, not a failure. Say yes to the journal entry; FINDINGS_1.md and RESULTS.md are yours to correct.

</details>


---

## 02 TRY TO BREAK IT

### 07 · TRY TO BREAK IT

*divider* · kicker: **SECTION 02** · 19 words

curves, not cells · the count beside the winner · net, or not at all


<details><summary>Speaker notes</summary>

Section two: robustness is survival. A real strategy survives parameter changes, different regimes and years it was not found on. If small changes break it, it is not a strategy. Three tests, each one a row of the gate.

</details>

### 08 · A CURVE, NOT A CELL.

*cards* · kicker: **ROBUSTNESS · PERTURBATION** · 69 words

Move what the blueprint declared. Read the shape.

- **01 THE GRID**: The settings it named; the cells that keep the sign. `12 of 15`
- **02 SUB-PERIODS**: Ahead of the control in how many of three?
- **03 BOTH MEASURES**: Sharpe and CAGR, against the control.
- **04 A WIPED COPY**: Same figures from a clean clone.

**THE TEST** — A setting that carries the result is a setting, not a strategy.

<details><summary>Speaker notes</summary>

The grid is the one your blueprint declared, not one you choose now: the example’s Experiment 1 asked for twelve cells of fifteen to keep the sign of its Sharpe margin, and got twelve. A parameter degrading monotonically across three settings is information; a variant beating its control by 0.001 Sharpe is not. Read every cell against the control on both Sharpe and CAGR: a Sharpe edge with a CAGR deficit is the example’s exact failure. Never choose a parameter on the metric it is judged by. Last, wipe the working copy and re-run: the example did it for every experiment and printed the same figures.

</details>

### 09 · PUBLISH N.

*cards* · kicker: **ROBUSTNESS · THE TRIAL COUNT** · 74 words

The best Sharpe of N trials is the largest of N draws.

- **01 WHAT COUNTS**: Every variant ranked, every feature screened.
- **02 EXCLUDED, BY NAME**: A dropped run keeps its name and its reason. `RESULTS.md`
- **03 A RESCUE IS A TRIAL**: A no-rescue lever moved after the result: a new experiment.
- **04 DEFLATED, OR SAY SO**: Publishing N is the minimum.

**THE EXAMPLE** — 31 · 43 · 54 · 68: liquid-golden-cross’s count, published at each experiment.

<details><summary>Speaker notes</summary>

A reader cannot discount a best-of-N result without knowing N, so the count goes in FINDINGS_1.md under The trial count, and RESULTS.md compiles it; one in RESULTS.md but not in the findings is a summary leading its source. Your blueprint listed changes that may not rescue the experiment, a holding count, a trigger, a window: moved after the result, each is a new experiment and a trial. A run that cannot be believed is excluded by name with its reason, never quietly dropped. The deflated Sharpe is not computed by the stack, so the sign-off says whether you computed it; the example never did, and says so. The example’s count is cumulative across its four experiments.

</details>

### 10 · NET, OR NOT AT ALL.

*cards* · kicker: **ROBUSTNESS · COSTS AND CAPACITY** · 63 words

Session 05 priced the costs. Today you state them.

- **01 TWO ROWS**: The blueprint’s commission, and a realistic one.
- **02 TURNOVER**: Times the book a year, one-way per rebalance.
- **03 CAPACITY**: The largest book a trade’s participation allows. `1% · 5% of 63-day value`
- **04 NOT MODELLED**: Market impact, borrow. Said out loud.

**CAPACITY NOT MODELLED** — is not met. Not “probably fine.”

<details><summary>Speaker notes</summary>

Results are accepted net, or not at all: commission on the unadjusted price, integer shares, a cash reserve. The example reports its blueprint’s commission setting and a realistic one side by side, with 5 basis points of slippage. Turnover first, because it tells the judge how much the costs matter: the example’s Experiment 1 turns over 1.99 times the book a year. Capacity is stated from the book as the largest book at which a trade takes no more than 1% or 5% of the name’s 63-day average traded value: a bound on participation, not a model of market impact. On a long/short book, borrow cost is a headline caveat, not a footnote.

</details>


---

## 03 THE GATE

### 11 · THE GATE

*divider* · kicker: **SECTION 03** · 14 words

five criteria, all of them · the blocking items are the content


<details><summary>Speaker notes</summary>

Section three. Paper_Trading/BITACORA.md is the gate, not a log: a contract that says what graduation means and what has to be true first. Strong backtest results are necessary and not sufficient.

</details>

### 12 · FIVE ROWS. ALL OF THEM.

*cards* · kicker: **PAPER TRADING · THE GATE** · 65 words

Evidenced from `FINDINGS_N.md` and `RESULTS.md`, or not met.

- **01 BEATS BOTH**: Benchmarks and control, risk-adjusted, same window.
- **02 ALPHA, BOTH LAYERS**: Selection, a residual, the third pass.
- **03 SURVIVES**: Perturbation passes; the count is published.
- **04 NET AND SIZED**: Costs and capacity, stated.
- **05 SIGN-OFF**: A person’s name and a date.

**THE TRAP** — A pass on Sharpe alone, while the control earns more a year.

<details><summary>Speaker notes</summary>

Read each row and its usual failure. One: every benchmark and the control, on the rule’s own rebalance dates; the single-metric pass is what it exists to catch. Two: selection in the Brinson-Fachler cut, a residual the factor model cannot explain, and a selection story that survives the third pass; expect a pass with a qualification. Three: a sweep read as a curve, and the count beside the winner. Four: costs modelled and capacity stated; capacity not modelled is not met. Five is a person’s signature, and it is never sought before one to four are evidenced.

</details>

### 13 · THE ANSWER IS NO.

*gate* · kicker: **WORKED GATE · LIQUID-GOLDEN-CROSS, EXPERIMENT 1** · 79 words

Its second design, row by row, from `FINDINGS_1.md`.

| # | Criterion | Verdict | Evidence |
| --- | --- | --- | --- |
| 1 | Beats both | **FAILS** | Sharpe ahead; 0.86 points a year behind its control. |
| 2 | Alpha, both layers | **PARTLY** | The control keeps more residual. Third pass not run. |
| 3 | Survives | **PASSES** | 12 of 15 cells. Count: 31. Not deflated. |
| 4 | Net and sized | **MET** | Two commission rows; capacity as a participation bound. |
| 5 | Sign-off | **NOT SOUGHT** | One and two block it. |

**FOUR EXPERIMENTS** — Four noes. Each kill switch fired before the gate did.

<details><summary>Speaker notes</summary>

This is the example’s BITACORA.md, Experiment 1’s second design. Row one: Sharpe 0.8057 beats the index’s 0.7699 and the control’s 0.7748, but the rule earns 0.86 points a year less than its control, where its blueprint required 0.5 more. Row two: the factor model leaves 36.19 of 160.02 points unexplained, but the control keeps 40.99 without the cross, so the signal subtracts idiosyncratic return. Row three passes on its own rule, at a Sharpe margin of +0.031 with a CAGR margin below zero. Experiments 2, 3 and 4 failed too; 4 came closest, short by one margin, 0.0084 where 0.03 was required.

</details>

### 14 · PAPER IS NOT A PRIZE.

*cards* · kicker: **IF IT PASSES · THE FREEZE** · 64 words

After the signature, the rule stops moving.

- **01 PROMOTED, NOT COPIED**: Paper_Trading_N mirrors Experiment_N. `promote.py N`
- **02 FROZEN ONCE**: Every file hashed, never refrozen. `FREEZE.json`
- **03 REGISTERED FIRST**: Bands, kill switch, review dates, before day one. `BITACORA.md`
- **04 RE-FITS NOTHING**: Read for behaviour, never a good month. `daily_update.py`

**THE EXCEPTION** — The example tracks Experiment 4 on paper: a candidate, by name, never graduated.

<details><summary>Speaker notes</summary>

For the book that passes, the order is fixed: sign-off, then the rule written into paper_trading_N.py and committed, then promote.py N on a clean tree, which copies every file the book needs and writes FREEZE.json with the commit, the date and every hash. A new freeze is a new book with its own number. daily_update.py runs after the close and re-fits nothing: a run that tunes anything is a backtest wearing a costume. Months on paper cannot show skill; the record is read for turnover, holdings, exposure and costs against the bands. A strategy’s first graduation is its 1.0.0, reproduced from a clean clone.

</details>

### 15 · RUN THE GATE ON YOURS.

*live* · kicker: **LIVE · THE GATE** · 74 words

Five rows, evidenced or not met. You write the verdict.

**PASTE THIS INTO CLAUDE OR CODEX**

```text
Using paper-trading-gate, lay out the five criteria for Experiment 1 against FINDINGS_1.md and RESULTS.md: each evidenced, with the number quoted and its file, or not met. Write nothing.
```

Behind the line: the skill never declares graduation, never computes a number, and leaves `BITACORA.md` to you.

- **01 YOU WRITE**: Current status: which rows block, and why. `BITACORA.md`
- **02 THE NUMBERS**: Quoted from the findings. A missing one is a re-run.
- **03 THE VERSION**: A first graduation is 1.0.0, from a clean clone.

**THEN** — Commit the status. A no is a result.

<details><summary>Speaker notes</summary>

One line in the box, so it reads the same in Claude and in Codex. Then open Paper_Trading/BITACORA.md and replace Nothing has graduated, nothing has been tested with your own section: which experiment, which variant, which criteria it clears, and above all which it does not and why. The example’s verdict table is the shape to copy: criterion, verdict, evidence. If a row cannot be evidenced from FINDINGS_1.md or RESULTS.md, write not met, not probably. Nobody in this room signs row five today.

</details>


---

## 04 DEFEND IT

### 16 · DEFEND IT

*divider* · kicker: **SECTION 04** · 14 words

performance without explanation is no conviction · nine rows, none for return


<details><summary>Speaker notes</summary>

Section four. Good research is not enough: most teams fail not because the idea is bad but because the process is unclear, the assumptions hidden and the results unexplained. A strategy must be understandable, defensible and reproducible, and you have ten minutes to show all three.

</details>

### 17 · THE CURVE IS NOT THE PITCH.

*cards* · kicker: **THE PITCH · THE COMMON MISTAKE** · 62 words

“Look, it works” convinces nobody who has seen a backtest.

- **01 MECHANISM**: Why the return should exist, in a sentence.
- **02 ASSUMPTIONS**: Lag, costs, universe, exits: on the slide.
- **03 RISKS**: What kills it, and the line you wrote first.
- **04 DRIVERS**: Factor or selection: both layers.

**THE LINE** — If you don’t decompose returns, you don’t know what you own.

<details><summary>Speaker notes</summary>

The most common mistake is showing only performance. Backtests do not fail loudly, they fail silently, and small changes make huge differences, so the judge’s first question is about the plumbing, not the curve. Prefer the feature anyone can explain in a sentence. Your kill switch belongs on a slide, because you wrote it before the run. And the drivers are what attribution gave you: allocators are not buying returns, they are buying proof you know where the returns come from.

</details>

### 18 · FIVE QUESTIONS. TEN MINUTES.

*cards* · kicker: **THE PITCH · THE STRUCTURE** · 65 words

One question a slide, each answered from a file.

- **01 WHAT, AND WHY**: The claim and its source of return. `OBJECTIVE.md`
- **02 HOW TESTED**: Universe, data, the analyzer’s numbers. `RESULTS.md`
- **03 HOW IT ALLOCATES**: Selection, sizing, timing, control. `BLUEPRINT_1.md`
- **04 DID IT WORK**: Net, against index and control. `FINDINGS_1.md`
- **05 WHY**: Both layers, then the gate. `BITACORA.md`

**OPEN WITH** — The project in three sentences, from `RESULTS.md`.

<details><summary>Speaker notes</summary>

Same five questions as the old challenge deck, now each tied to the file that answers it. RESULTS.md opens with The project in three sentences: does the book work, with its headline numbers; what attribution says about where the return comes from; which lever earned its place and which was rejected. Slide four shows the control row beside the benchmark row, never the book alone. Slide five ends on the gate table, blocking rows included. Two minutes a question, and questions after.

</details>

### 19 · NINE ROWS. NONE FOR RETURN.

*matrix* · kicker: **THE SCORECARD · 3 × 3** · 74 words

Each row 0, 33, 66 or 100. Equal weight: 11.1% each.

- **STRATEGY DEFINITION** (33.3%): Hypothesis & source of returns → `OBJECTIVE.md` · Research foundation → `Bibliotheca/` · Scientific process → `git log`
- **FEATURE ENGINEERING** (33.3%): Data quality & integrity → `Universe/` · Feature design & relevance → `the analyzer` · Signal construction → `c_* columns`
- **STRATEGY DESIGN** (33.3%): Portfolio construction logic → `BLUEPRINT_1.md` · Backtesting & robustness → `FINDINGS_1.md` · Attribution & understanding → `both layers`

**100 MEANS** — The evidence is a file a judge can open.

<details><summary>Speaker notes</summary>

The scorecard is the old challenge template, unchanged: three dimensions, three rows each, equal weight, scored 0, 33, 66 or 100. 0 is not there, 33 is basic or with major gaps, 66 is clear and reasonable, 100 is rigorous, reproducible and documented. There is no row for performance: a book that loses to its control can score 100 on backtesting and robustness if the loss is measured, counted and explained. Under each row is the file a judge opens to check it. The edge is not in the style, it is in the process, and this is how the process is scored.

</details>

### 20 · ASK IT BEFORE THEY DO.

*cards* · kicker: **LIVE · IN PAIRS** · 76 words

Six questions every judge asks. Two minutes each, then swap.

- **01 WHAT IS YOUR CONTROL?**: One ingredient out, same dates.
- **02 HOW MANY DID YOU TRY?**: N, beside the winner.
- **03 NET OF WHAT?**: Commission, slippage, two rows.
- **04 WHICH FACTOR IS IT?**: The residual, after both layers.
- **05 WHO IS MISSING?**: The delisted, kept in the universe.
- **06 WHAT WOULD KILL IT?**: The kill switch, written first.

**THE STANDARD** — Answer with a file, not a feeling.

<details><summary>Speaker notes</summary>

Pair up with someone outside your strategy; one asks, one answers, then swap. Each question maps to one of the five ways a backtest lies or to the bar a new signal must clear: control, overfitting, costs, attribution, survivorship, pre-registration. The asker scores the answer 0, 33, 66 or 100 against the scorecard row it belongs to. If the answer is I would have to check, write the file down: that is your homework list. Can you defend your strategy under questioning? That is the whole presentation.

</details>

### 21 · OUTLINE IT FROM YOUR FILES.

*live* · kicker: **LIVE · WITH THE RESEARCHER** · 66 words

Your deck, drafted in chat. The numbers stay quoted.

**PASTE THIS INTO CLAUDE OR CODEX**

```text
From OBJECTIVE.md, BLUEPRINT_1.md, FINDINGS_1.md, RESULTS.md and Paper_Trading/BITACORA.md, outline a ten-minute presentation in chat: one slide per question, each number quoted with its file. Compute none.
```

Behind the line: an outline, not a file in the repository. Your slides live outside it.

- **01 THE NUMBERS**: Quoted, with their file. None computed.
- **02 THE CHARTS**: From the engine’s report. Never committed.
- **03 THE NO**: A falsified prediction gets its own slide.

**THEN** — Score yourself on the nine rows, before a judge does.

<details><summary>Speaker notes</summary>

The outline is a draft for you to rewrite in your own words; the researcher writes nothing in the repository for this. Check every number it quotes against the file it names: a number with no file is one to delete, not one to keep. Charts come from the engine’s Excel report or your notebook, and never enter git: no charts, workbooks or PDFs are committed. Report the rejected result as loudly as the promising one: a falsified prediction stops the next person repeating it, and judges trust a deck that says no to itself.

</details>

### 22 · STOP HERE, ON PURPOSE.

*stop* · kicker: **YOUR TURN · THE STOP** · 113 words

Left: on disk before you leave. Right: not done, on purpose.

- **ON DISK WHEN YOU LEAVE**: A `JOURNAL_1.md` entry — the challenge, on your go; `FINDINGS_1.md` — corrected by you, from a re-run; The trial count — in the findings, compiled in `RESULTS.md`; `OBJECTIVE.md` — each tested claim’s status moved; `BITACORA.md` — Current status: the blocking rows; `RESULTS.md` — the project in three sentences; Your outline — five questions, every number sourced
- **NOT TODAY**: Graduation — a signature, after five rows; A freeze — only after the signature; Experiment 2 — from What is open, ranked; Production — outside the repo

**WHY WE STOP** — A strategy that says no to itself, in writing, is one a judge can trust.

<details><summary>Speaker notes</summary>

Before you leave, everything on the left exists on your machine and is committed. FINDINGS_1.md is corrected only where the challenge found a real discrepancy, and only from a re-run: never reword a verdict. If your book failed its kill switch, the gate section says so and nothing is frozen. Your next experiment starts from What is open, ranked, in FINDINGS_1.md and RESULTS.md, with its own blueprint, not from today’s mood.

</details>


---

## Close

### 23 · TO DO.

*cards* · kicker: **BEFORE PRESENTATION DAY** · 54 words

Ten minutes, from a clean clone.

- **01 YOUR DECK**: Five questions, ten minutes.
- **02 YOUR SCORECARD**: Nine rows, scored, each with its file.
- **03 A CLEAN CLONE**: Every figure, reproduced. `git clone`
- **04 YOUR NEXT BLUEPRINT**: One lead, from What is open. `BLUEPRINT_2.md`

**BRING** — Your laptop, the repository, and the hash of the commit you present.

<details><summary>Speaker notes</summary>

Clone your repository into a new folder, set up Config/.env, and re-run from the Curator to FINDINGS_1.md: if a figure moves, find out why before you present, and record it in JOURNAL_1.md. Score yourself honestly on the nine rows; the judges will compare. Your next blueprint is drafted, not run: /blueprint 2 once its benchmark entry exists. Present from the commit whose hash you bring, so every number on your slides can be found again.

</details>

### 24 · THE READING LIST.

*refs* · kicker: **REFERENCES · SESSION 06** · 39 words

Six leads, none read yet. Read two; start with Harvey & Liu: a haircut for every Sharpe you present.

- **THE COUNT · WHY THE BEST OF N LIES**: 2000 WHITE, A Reality Check for Data Snooping _[the trial count]_ · 2014 BAILEY & LÓPEZ DE PRADO, The Deflated Sharpe Ratio: Correcting for Selection Bias, Backtest Overfitting, and Non-Normality _[the deflated figure]_ · 2015 HARVEY & LIU, Backtesting _[the haircut]_
- **THE PROOF · WHAT A BACKTEST CAN CARRY**: 2002 LO, The Statistics of Sharpe Ratios · 2014 BAILEY, BORWEIN, LÓPEZ DE PRADO & ZHU, Pseudo-Mathematics and Financial Charlatanism · 2017 BAILEY, BORWEIN, LÓPEZ DE PRADO & ZHU, The Probability of Backtest Overfitting

**ALREADY ON YOUR LIST** — Arnott, Harvey & Markowitz, session 03: the protocol you have now run once.

<details><summary>Speaker notes</summary>

Same rule as every week: read two, compile them, cite them. Harvey and Liu give you the haircut to apply to a Sharpe ratio found after many trials; Bailey and López de Prado give the deflated figure the gate asks whether you computed. White’s reality check is the test behind Sullivan, Timmermann and White, already in the example’s Bibliotheca. The Probability of Backtest Overfitting circulated as a working paper years before its 2017 journal year: cite 2017. If your count is large, one of these papers is the slide a judge will ask for.

</details>

### 25 · NOW DEFEND IT.

*closing* · kicker: **INVESTMENT BOOTCAMP** · 13 words

The gate says what blocks it. The pitch says why.

- **THE GATE**: The blocking rows, in writing. `BITACORA.md`
- **THE PITCH**: Every number with its file. `Five questions · nine rows`
- **BRING**: A clean clone and a commit hash.

_Layout:_ Right panel: NEXT / PRESENTATION DAY / TOPIC / YOUR STRATEGY, DEFENDED / YOU LEAVE WITH / A SCORE ON NINE ROWS, AND YOUR NEXT BLUEPRINT.

<details><summary>Speaker notes</summary>

Every serious investment process is discretionary at design and systematic at scale: you designed the idea, the process tested it. The future of investing is not choosing a side between quant and fundamental; it is building systems where ideas are tested, results are understood and decisions are made with discipline. On presentation day you show the run, the challenge and the gate, and a no defended well scores higher than a yes nobody can explain. Bring a clean clone and the hash of the commit you present.

</details>

### 26 · DISCLAIMERS

*disclaimer* · kicker: **DISCLAIMERS** · 0 words

The content of this document is strictly informative and does not constitute an offer or recommendation of KaxaNuk S.C. to buy, sell or subscribe any kind of securities, or to perform specific transactions. KaxaNuk S.C. is not responsible for the interpretation given to the information and/or content of this document. KaxaNuk S.C. does not accept and will not accept any liability for losses or damages resulting from investment decisions that would have been based on this document. The persons responsible for the preparation of this content certify that the opinions stated reflect their own point of view and do not represent the view of KaxaNuk S.C. nor of its officials. This document is based on publicly available information which is considered reliable, however KaxaNuk S.C. makes no warranty regarding its accuracy or completeness.

_Layout:_ Footer: SESSION 06 · FINAL STRATEGY PREP & PRESENTATION

<details><summary>Speaker notes</summary>

The same disclaimer as every session. Every number today came from your files or the example’s, quoted with its source.

</details>


---

## Open questions

1. **Session 05 is not on disk yet.** S04 hands the backtest, costs and attribution to S05, *Backtest & Attribution*, and this deck assumes S05 ends with `FINDINGS_1.md` filled: the book priced net against the benchmark and the control on the same dates, both attribution layers, and the trial count (slide 2's four cards). Once S05's to-do slide exists, make slide 2 match it word for word, and move anything S05 already teaches out of slides 8–10 (perturbation, trial count, costs and capacity), which here are framed as *stating* what S05 priced.
2. **Is S06 the last session, and when is presentation day?** Slides 23 and 25 point to a *presentation day* after this session, with no date: the old deck closed on *Let's code! Research Evaluation Framework* and the KN Hack Research Challenge 2026 repository (github.com/KN-Hack/Research-Challenge-2026), which this deck no longer names. Give the date and the format (minutes per team, who judges), or say whether presentations happen inside S06 itself; then the To do and the closing panel change.
3. **The scorecard (slide 19)** keeps the old template exactly: three dimensions, nine rows at 11.11%, scores 0/33/66/100. The file under each row is new; confirm the pairing (for example *Scientific process → git log*, *Signal construction → c_\* columns*). Should students get the scoring workbook itself as a handout? The old one was an image in the PDF; it is not in this repository.
4. **The old deck's judging criteria** (Innovation, Risk management, Technical rigor, Clarity, Practicality, Performance, Robustness) are not on any slide: the scorecard replaces them, and slide 19 says there is no row for return. If the challenge judges still score Performance, that line is wrong and needs saying.
5. **Slide 21's outline** is drafted in chat, not written into the repository, because the strategy template has no file for a presentation and *Do not put logic in a file that cannot be traced to a stage*. If you would rather students keep it, name a home (for example `Presentation/OUTLINE.md`) and check the template's `.gitignore` and AGENTS.md allow it.
6. **Slide 15's prompt** asks `paper-trading-gate` to write nothing, and students edit `BITACORA.md`'s *Current status* by hand. Rehearse it: the skill may offer to write the section. The worked example's sections were written by the owner with the assistant; confirm that students may let the assistant write the status on their go, or keep it by hand.
7. **Worked gate (slide 13)** uses liquid-golden-cross's Experiment 1 second design, from `examples/liquid-golden-cross/Paper_Trading/BITACORA.md` in KaxaNuk-Researcher 0.33.0 (checked 2026-10-07). If the example's figures move in a later release, re-check the five evidence lines and the notes' numbers (0.8057, 0.7699, 0.7748, 0.86, 36.19 of 160.02, 40.99, 12 of 15, 31, 1.99, 0.0084 and 0.03).
8. **Trial counts on slide 9** (31 · 43 · 54 · 68) are the cumulative counts the example publishes at Experiments 1–4. Confirm *cumulative* is how you want them read, or show only Experiment 1's 31.
9. **Reading list (slide 24)**: six new leads, none in any session's list so far. Harvey & Liu's *Backtesting* is *Journal of Portfolio Management* 42(1), 2015; Bailey et al.'s *Pseudo-Mathematics and Financial Charlatanism* is *Notices of the AMS* 61(5), 2014 (subtitle cut on screen: *The Effects of Backtest Overfitting on Out-of-Sample Performance*); *The Probability of Backtest Overfitting* is *Journal of Computational Finance*, 2017. Confirm, or swap for whatever S05's list already holds on attribution.
10. **The six questions on slide 20** map loosely onto the five lies and the bar (control, overfitting, costs, attribution, survivorship, pre-registration). Confirm the answers on the cards are the ones you want students to give.
11. **Renderer.** This deck is rendered by `design/build_s06.js` (copy in `design/s06_slides.js`, these questions in `design/s06_open_questions.md`) from the S04 bundle (its fonts, logo and deck engine kept, its sections swapped), not by `build_s04.js`. Card, divider, live, stop, references and closing layouts copy S04's markup; two layouts are new: the gate table (slide 13) and the 3 × 3 scorecard (slide 19). Check both on the projector.
12. **The `/challenge` Codex line** follows S04's pattern for `/blueprint` (`~/.apm/apm_modules/KaxaNuk/KaxaNuk-Researcher/.apm/prompts/challenge.prompt.md`). Check the path on a student's machine.
