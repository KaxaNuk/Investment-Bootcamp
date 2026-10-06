# S04 — Portfolio Construction · slide copy

The copy for the S04 deck, 24 slides, laid out in `S04 Portfolio Construction.html`. It was fact-checked against the Investment Lab, Portfolio Construction, Backtest Engine and KaxaNuk-Researcher sources. On screen each slide carries about 60 words; the detail is in the speaker notes. [BRACKETS] are placeholders still to fill.


---

## Opening

### 01 · PORTFOLIO CONSTRUCTION

*cover* · kicker: **INVESTMENT BOOTCAMP**

Your signals become books: a blueprint first, one book in the Lab, the same book in code, then yours.

_Layout:_ Large numeral: 04. CONTENTS (word for word the four divider titles): 01 THE BLUEPRINT, BEFORE THE RULE · 02 SELECTION, SIZING, TIMING · 03 THE LAB, LIVE · 04 IN CODE — THEN STOP

<details><summary>Speaker notes</summary>

Session 04: today your signals become books. Two rules for the day. The blueprint is committed before the rule cell holds code. And no performance number — a book's return, volatility or Sharpe — is read, written down or acted on until session 05; your Analyzer measurements describe the data, not a book, so your blueprint may cite them. The Lab's file is the answer key; your book's file is what session 05 prices.

</details>

### 02 · WHO BROUGHT THEM.

*recap* · kicker: **SESSION 03 · HOMEWORK**

Show the file, not the memory.

- **01 THE EXAMPLE, RUN**: Curator to Analyzer. `init-example`
- **02 YOUR CLAIMS**: Numbered, each with what kills it. `OBJECTIVE.md`
- **03 YOUR BENCHMARK**: One sentence, and why that one.
- **04 YOUR SIGNALS**: Two or three, each serving a claim.

**WHY THE FILE** — No benchmark, nothing to beat. No signal, nothing to size.

<details><summary>Speaker notes</summary>

Hands up, card by card; the last two with the file open. The benchmark goes in a dated JOURNAL_1.md entry; a BRAINSTORMING_1.md entry still counts: the blueprint command reads either. Then three questions out loud, each landing in BLUEPRINT_1.md: which signal goes first, and which claim it serves; what result would make you drop it, not tune it — your kill switch; which of the six lies it is most exposed to — your first Key risk. Your other signals each become a later experiment, from its own blueprint: today, one rule. Last: who ran the Analyzer on their own signals? Those numbers sit in RESULTS.md under Before any experiment.

</details>

### 03 · SIGNALS IN. WEIGHTS OUT.

*statement* · kicker: **THIS SESSION**

Blueprint first. One book in the Lab, the replica in code, then your book.

- **1 BIBLIOTHECA**: Sessions 02–03
- **2 UNIVERSE**: Session 03
- **3 DATA**: Session 03
- **4 PORTFOLIO**: How much, how often _[TODAY]_
- **5 BACKTEST**: Session 05
- **6 ATTRIBUTION**: Session 05
- **7 PAPER TRADING**: Before real money
- **8 PRODUCTION**: Outside the repo

**NOTICE** — The backtest moved to session 05. Today books are built, not judged.

_Layout:_ The eight steps as a strip under the deck, step 4 in ink with its TODAY tag. No definition line and no order-of-work strip.

<details><summary>Speaker notes</summary>

The question of the day: how do signals become portfolios? Two terms we use all day: the Lab is the platform, Portfolio → Construction; code is your strategy's own Python, calling the library only where a book needs it. Your first rule, built by that code, is written to Experiments/Experiment_1/Portfolio/portfolio_weights.csv. If your own Refinery and Analyzer have not run, your signal enters today's blueprint as a lead, which is allowed; run them before your next blueprint.

</details>


---

## 01 THE BLUEPRINT, BEFORE THE RULE

### 04 · THE BLUEPRINT, BEFORE THE RULE

*divider* · kicker: **SECTION 01**

the bar, named first · the protocol, written before the test

_Layout:_ Title has no period, as on the S03 dividers.

<details><summary>Speaker notes</summary>

Section one is the only part of today you cannot do after the fact. Session 02 promised you the backtest protocol, written before the test: its core is BLUEPRINT_1.md, the rest is the bar in your AGENTS.md. Benchmark first, then the blueprint against it.

</details>

### 05 · NAME THE BAR. THEN CLEAR IT.

*cards* · kicker: **THE BENCHMARK · FIRST**

A JOURNAL_1.md entry, before the blueprint.

- **01 WHAT “BEAT” MEANS**: Index, ETF or equal-weight book of your universe.
- **02 YOUR MARKET**: Same market: the gap measures the rule.
- **03 PRICED AS**: Index or ETF: prices. Equal weight: weights.
- **04 EXPERIMENT 1**: Plus its control.

**CORRECTION** — Not the benchmark: Experiment 1 is your first rule, measured against one.

<details><summary>Speaker notes</summary>

Last week's homework comes first, because the blueprint reads it to write its success criteria: set the bar before you look. No class default: your benchmark is transparent, liquid and stable, not clever. Say the correction once: session 03 said Experiment 1 is the benchmark; it is your first rule tested against one, with its control — the same rule, one ingredient removed, on the same rebalance dates. Beating the benchmark says the book worked; only beating the control says the ingredient did. A desk index arrives as files, through KN_ANALYTICS_PATH in Config/.env or dropped unchanged into Data/Curator/Benchmarks/. In session 05 we read the gap.

</details>

### 06 · WRITE IT BEFORE YOU BUILD IT.

*live* · kicker: **LIVE · THE BLUEPRINT**

BLUEPRINT_1.md: the hypothesis, fixed once written.

- **01 WHAT IT PINS DOWN**: Thesis, rules, control, predictions, kill switch.
- **02 EVERY PREDICTION CITES**: A note or a measurement. Else, a lead.
- **03 READ COLD**: In Claude Code, blueprint-critic reads it cold, writes nothing.

**PASTE THIS INTO CLAUDE OR CODEX**

```text
/blueprint 1
Codex: follow ~/.apm/apm_modules/KaxaNuk/KaxaNuk-Researcher/.apm/prompts/blueprint.prompt.md for experiment 1
```

Behind the line: it reads your claims, Bibliotheca/ and RESULTS.md, then writes BLUEPRINT_1.md on your go.

**THEN** — Commit it alone, before the rule.

_Layout:_ The box has two lines, the Claude Code command and the Codex line, because Codex gets only the skills and runs a command by naming its prompt file.

<details><summary>Speaker notes</summary>

Run it in your strategy folder, researcher added, once the benchmark entry exists; it refuses in liquid-golden-cross. No claims or an empty universe? Pair with a neighbour; write yours tonight. It asks seven questions (skip any you cannot answer) and for a kill switch; give none, it drafts one for you to confirm. Codex has no subagent: the command reviews its own draft. In Rules, Sizing may switch every constraint off: a cap is a lever a later experiment earns. Lag: a day at least, since neither the engine nor the Lab adds one. Cash: the priced instrument, and where a cap's leftover goes. Then record its leads in BIBLIOGRAPHY.md.

</details>


---

## 02 SELECTION, SIZING, TIMING

### 07 · SELECTION, SIZING, TIMING

*divider* · kicker: **SECTION 02**

Signals identify opportunities. Portfolio construction translates them into capital allocation.

_Layout:_ Title has no period. The deck is KaxaNuk's own line, unattributed, checked word for word against the old deck.

<details><summary>Speaker notes</summary>

A signal is not a portfolio: you cannot judge one until a sizing rule and a rebalance rule turn it into weights. Four questions only a book answers, none needing a return: how concentrated — a long list of names can still be three positions; how often it trades — a cost question, not an alpha one; how liquid — today, whether every buy has a fill price that day; how its shape changes — invested share, drift, and where the money goes when few names qualify. Turnover, invested share and drift come from section 3 of the experiment notebook; the fill-price check is one of the five checks.

</details>

### 08 · WHO, HOW MUCH, WHEN.

*cards* · kicker: **PORTFOLIO · THE FRAME**

Kept apart, so each can carry a signal of its own.

- **01 SELECTION**: Point in time, delisted included. Unknown is not no.
- **02 SIZING**: What share each gets. Lag it like the signal.
- **03 TIMING**: Calendar, event or regime. Every rebalance is a trade.

**THE TRAP** — Look-ahead. Date t's book uses t-1's data: one day, at least.

<details><summary>Speaker notes</summary>

The library's three stages never import each other and leave what was known on the day to you, so in code the order is fixed: lag the signal and the sizing column, choose the dates, then size. Never select on current_*: survivorship with a respectable column name. On an unknown, the library excludes it by default, the Lab drops warm-up blanks and counts anything above 0.5 as eligible: your code states what it does. A fundamental waits for its availability date. A name that stops trading must leave; who sells it is a setting: the engine's default fails the run; liquid-golden-cross sells at the last price, its one deliberate look-ahead.

</details>

### 09 · SIX IN THE LAB. FOURTEEN IN THE LIBRARY.

*cards* · kicker: **SIZING · THE MENU**

- **01 NOTHING TO ESTIMATE**: equal_weight · metric_weight (Lab) · feature_weighting · kn_index
- **02 RISK-BASED**: inverse_volatility · risk_parity · hrp · herc · max_diversification
- **03 MEAN-VARIANCE, TAIL**: mean_variance · constrained_mean_variance · black_litterman · nco · cvar · cdar
- **04 DECLARE FIRST**: Window, estimator, linkage: declared, not tuned. `blank: 252 · sample · single`

**THE BASELINE** — Equal weight first. Anything else justifies itself on the book.

_Layout:_ Set the six Lab methods (equal_weight, metric_weight, inverse_volatility, risk_parity, hrp, max_diversification) in ink and the rest grey; metric_weight carries the Lab mark. The chip on card 04 shows the defaults used when the fields are left blank.

<details><summary>Speaker notes</summary>

The builder's header says 5 of 14 Portfolio-Construction methods plus 1 platform method: metric_weight is the platform one, the only Lab method that selects and caps. The groups are ours, sorted by what each method needs from you. Declare in the blueprint before you construct, never tune afterwards: forty windows tried with one reported is an undeclared sweep. History ends the day before the rebalance: the Lab cuts it there, the library's run_pipeline does not, so in code write returns.index < date, never .loc[:date], one allocator per date. The Lab's risk methods read the unadjusted close when the file has it, so a split shows up as a one-day crash.

</details>

### 10 · A CAP FREES WEIGHT. SAY WHO GETS IT.

*cards* · kicker: **LIMITS · CAP AND FILE**

Your Cash line picks one.

- **01 REDISTRIBUTE**: Over names with room: Lab, Weights.cap.
- **02 OR HOLD AS CASH**: Trim to a cash row (the example's: SHY).
- **03 THE SUM**: 1 per date, cash included.
- **04 THE DATE**: Dated t, filled at t: the engine adds no lag.

**WHERE IT GOES** — Experiments/Experiment_1/Portfolio/portfolio_weights.csv — gitignored. Commit the code.

<details><summary>Speaker notes</summary>

Your book has a cap only if its Sizing line names one; in the Lab only metric_weight has a maximum weight. The Lab, like the library's Weights.cap, spreads the excess until the book is fully invested; liquid-golden-cross trims and holds it as cash, and the skill will not redistribute unless the blueprint names that lever. The replica redistributes, to match the Lab; your book does what its Cash line says. The file: Ticker in the first column, one column per date, tickers named as in the market data, no empty cells, each date one the market data holds. The control and the replica each get a name of their own.

</details>


---

## 03 THE LAB, LIVE

### 11 · THE LAB, LIVE

*divider* · kicker: **SECTION 03**

Liquidity-Weighted Trend · six fields · one weights.csv · read the book, not the curve

_Layout:_ Title has no period.

<details><summary>Speaker notes</summary>

Section three moves to the Lab. We build one worked book together, field by field, then read the weights, not a curve. It is a teaching book, not your strategy; in section 04 you rebuild it in code until the two files agree.

</details>

### 12 · TREND PICKS. LIQUIDITY WEIGHS.

*rulecard* · kicker: **WORKED BOOK · LIQUIDITY-WEIGHTED TREND**

Claim: sustained uptrend plus deep liquidity beats your benchmark.

- **01 SELECTION**: Signal 1, top 35 by traded value.
- **02 SIZING**: Cap 20%, excess spread.
- **03 TIMING**: On change, checked daily.
- **04 FEWER THAN 35**: Fewer names, fully invested.
- **05 NO LAG**: Same-day fill: look-ahead, on purpose.

**BACKGROUND · LEADS** — Jegadeesh & Titman · Moskowitz, Ooi & Pedersen · Daniel, Hirshleifer & Subrahmanyam · Frazzini, Israel & Moskowitz

<details><summary>Speaker notes</summary>

This is session 02's anatomy example with two changes: it filters on trend instead of ranking, and trades when the 35 change, not monthly. Three Lab behaviours, out loud. Below five names a 20% cap cannot fill the book, so the date is skipped and the old book stays, names whose signal is now 0 included; in the 200-day warm-up no name is eligible, so the book starts later. A delisting never fires a trade: the Lab carries each name's last signal forward, which fails check five. And it reads day t's signal for a day-t fill: look-ahead. Daniel & Moskowitz, one of session 02's ten, argues against the claim.

</details>

### 13 · SIX FIELDS. ONE RULE.

*live* · kicker: **LIVE · IN THE LAB**

Portfolio → Construction → Metric Weight (cap / value-traded).

- **01 WEIGHT BY METRIC**: Sizing. Change the default. `c_daily_traded_value_sma_63d`
- **02 ELIGIBILITY SIGNAL (0/1)**: Selection. `c_sma_50d_200d_signal`
- **03 TOP N BY METRIC**: Selection. `35`
- **04 MAXIMUM WEIGHT PER ASSET**: Sizing. `0.2`
- **05 REBALANCE FREQUENCY**: Timing. `daily`
- **06 REBALANCE TRIGGER**: Timing. `on_top_n_change`

**THE TRAP** — Frequency left at Select… means none: look-ahead.

_Layout:_ Cards 05 and 06 follow the form's order: Rebalance frequency first, Rebalance trigger last.

<details><summary>Speaker notes</summary>

Read each field aloud beside its rule line; a maximum weight of 0.2 is the 20% cap. Load your universe first: Investable_Universe.csv copied into the portfolio/ folder of the Lab's experiment folder, main_identifier renamed Ticker. Keep that folder outside your repository: your .gitignore covers nothing the Lab writes there. Type your ten years into the Window by hand: the builder snaps it. Include c_sma_50d_200d_signal in the download. The picker preselects c_daily_traded_value: change it to the 3-month average; a single day's traded value reshuffles the top 35 far more often. A trigger left at Select… means schedule. Construct on My computer, then wait for the rebalance count under the weights.

</details>

### 14 · READ THE BOOK, NOT THE CURVE.

*cards* · kicker: **THE LAB · READING THE BOOK**

Open portfolio/<job>/weights.csv: one column per rebalance.

- **01 NAMES HELD**: Non-zero cells per column: regimes.
- **02 LARGEST WEIGHT**: The top cell, and how many at 20%.
- **03 HOW OFTEN IT CHANGES**: Rebalance count, names in plus out.

**COVER THE TOP ROW** — Exp. return, Volatility, Sharpe: trailing, in-sample. Hindsight, not a test.

<details><summary>Speaker notes</summary>

Metric Weight gets no risk panel: weights.csv is the Lab's book, not yet the engine's portfolio_weights.csv. Under 35 names is mostly the trend filter; a name also drops out while its traded-value average is missing or warming up. Check no name is still weighted after its last price. The tiles score the last book on up to a year of returns, names lacking returns counted as zero; leave Send to backtest alone. Your signal in the Lab is optional, only as a 0/1 c_* column read from the Lab's data_curator/ folder, not your Data/Curator/Time_Series/: curate it in the Lab or copy the files there. An r_* rank never reaches it.

</details>


---

## 04 IN CODE — THEN STOP

### 15 · IN CODE — THEN STOP

*divider* · kicker: **SECTION 04**

the Lab as answer key · the replica, then your book · same assets, different books · stop before the engine

_Layout:_ Title has no period.

<details><summary>Speaker notes</summary>

Section four is the payoff. Take the Lab's weights.csv, every rebalance date, from portfolio/<job>/ on your computer (Open on your computer), or from the Vault for a cloud build (View in Vault). Not the CSV button on the weights card: that one exports only the last rebalance.

</details>

### 16 · THE LAB IS THE ANSWER KEY.

*cards* · kicker: **LAB TO CODE · THE DIFF**

Match its arithmetic, not its timing.

- **01 THE REPLICA**: The worked book, in code.
- **02 THE SIGNAL FIRST**: Before any weight.
- **03 THE WEIGHTS**: Within a millionth, cash row dropped.
- **04 YOUR BOOK**: Lagged. Then the five checks.

**THE TEST** — A difference you cannot name is a bug. One you can is a journal entry.

<details><summary>Speaker notes</summary>

The replica copies the Lab exactly: the same-day read, the spread cap, and an unfillable date skipped, the old book carried; with Weights.cap, catch its error there and keep the last book. Once line 1 on the next slide has run, diff in order: the signal, from the same start date or after both warm-ups; the dates, comparing the held top N, not the eligible list; the weights, never-held tickers dropped too, not to the sixth decimal, because liquid-golden-cross's writer floors at six. Traded value enters ranking, weights and timing: check each use separately. Your book's fallback (SPY, cash or a minimum count) is decided in the blueprint.

</details>

### 17 · SAME RULE. YOUR CODE.

*live* · kicker: **LIVE · WITH THE RESEARCHER**

Save the Lab's weights.csv as Experiment_1/lab_weights.csv. Then paste.

- **01 THE COLUMN**: c_*: one security's own history. Keep the Lab's names: the diff needs them.

**PASTE THIS INTO CLAUDE OR CODEX**

```text
1 · Using data-curator-custom-calculations, add c_sma_50d, c_sma_200d and c_sma_50d_200d_signal, the Lab's names: simple averages of m_close_dividend_and_split_adjusted; 1.0 if the 50 is above the 200, else 0.0; null until both exist. Re-run the Curator.
2 · Using portfolio-construction-runs, in lab_replica.ipynb, rebuild lab_weights.csv in code as Portfolio/lab_replica_weights.csv: no lag, cap spread as the Lab does. Then, in experiment_1.ipynb, BLUEPRINT_1.md's rule, as written.
```

Behind the line: code written fresh in Data/Curator/ and Experiments/ — shaped like the example's, never copied.

_Layout:_ Two numbered lines in the box, as the two lines on slide 6. lab_replica.ipynb sits beside experiment_1.ipynb in Experiments/Experiment_1/, so section 2 of experiment_1.ipynb holds only BLUEPRINT_1.md's rule.

<details><summary>Speaker notes</summary>

No blueprint yet? Build outside your strategy and commit nothing into Experiment_1 until it is committed. lab_weights.csv stays out of Portfolio/, which git ignores: nothing rebuilds it, so commit it and record the Lab job in JOURNAL_1.md. Start line 1 now; it also adds c_daily_traded_value_sma_63d to Data/curator.py's output columns, which re-downloads ten years of your whole universe: let it run while we talk. If the skill offers c_simple_moving_average_50d or r_*, keep the Lab's names and fixed windows. The replica goes in lab_replica.ipynb: once section 2 of experiment_1.ipynb holds a rule, /blueprint refuses. If portfolio-construction-runs refuses, say: reconciliation copy, never for the engine. The weigher is a few lines by hand.

</details>

### 18 · SAME ASSETS. DIFFERENT BOOKS.

*live* · kicker: **PLAY · SIZING IN CODE**

[ETF EXAMPLE NAME]: an asset-allocation book of [N] ETFs.

- **01 WHY ETFS**: Sizing is the only decision.
- **02 DECLARE FIRST**: Window, estimator, linkage, calendar. Same for all.
- **03 READ**: Effective positions, by capital and by risk. Never a return.

**PASTE THIS INTO CLAUDE OR CODEX**

```text
[COMMAND THAT OPENS THE ETF EXAMPLE]
Using portfolio-construction-runs, size [ETF TICKERS] on [REBALANCE SCHEDULE] with equal_weight, inverse_volatility, risk_parity, hrp and max_diversification: build_allocator per date, long-only, one weight file each.
```

**ASK** — Which sizing states the claim? In your strategy, five methods would be five trials.

_Layout:_ PLACEHOLDERS in brackets until the ETF worked example ships: [ETF EXAMPLE NAME], [N], [COMMAND THAT OPENS THE ETF EXAMPLE], [ETF TICKERS], [REBALANCE SCHEDULE]; in the notes, [NOTEBOOK]. No 'behind the line' text on this slide. Budget the visible words for the ticker list when it is filled.

<details><summary>Speaker notes</summary>

In the Lab every method but metric_weight ignores the eligibility signal and the top N, and the risk methods need more trailing returns than names, so on hundreds of names they fail or size names you never selected. A handful of ETFs has neither problem. [ETF EXAMPLE NAME] is being built as that book, in [NOTEBOOK]. It needs the library: KAXANUK_INDEX_KEY to install, and the [clustering] extra, or hrp fails. Pin long_only on max_diversification, because the library's default allows negative weights. Equal weight is the baseline; choose on concentration and turnover. Here it is practice; in your strategy, journal each trial, with the count in FINDINGS_N.md.

</details>

### 19 · FIVE CHECKS. EVERY BOOK.

*cards* · kicker: **BEFORE THE ENGINE · CHECKS**

- **01 FULLY INVESTED, AT MOST**: Above 1: refused.
- **02 NO NEGATIVE WEIGHTS**: Unpinned shorts.
- **03 SIGNAL ON THE PRIOR CLOSE**: Unlagged eligibility.
- **04 A FILL PRICE EXISTS**: Bought before listing.
- **05 NOTHING HELD PAST THE END**: Delisted, still held.

**ASK** — /query which of the six lies does my book risk, and what did we read about it?

<details><summary>Speaker notes</summary>

The portfolio-construction-runs skill calls these invariants; they run in notebook section 2.1 over every book: the replica, your book, each ETF book and your control. Check the sign yourself: in a file summing to 1, a short lifts gross above 1, and the engine's gross-exposure error hides the real mistake. On three, check the signal, not the eligibility built from it; the replica fails three on purpose, your book must pass. Five traps no check catches: a leaking cap, checked against your Cash line; survivors only; look-ahead in the covariance; uncosted turnover; and error maximised, an optimiser betting hardest where its estimates are worst: Michaud's term, on today's reading list.

</details>

### 20 · STOP HERE, ON PURPOSE.

*stop* · kicker: **YOUR TURN · THE STOP**

Left: on disk before you leave. Right: not done, on purpose.

- **ON DISK WHEN YOU LEAVE**: BLUEPRINT_1.md — committed alone, before the rule; BIBLIOGRAPHY.md — the blueprint's leads, recorded; custom_calculations.py, curator.py — the Lab's signal, a c_* column; lab_weights.csv, lab_replica.ipynb — the answer key and the replica; portfolio_construction.py, backtest_engine.py, experiment_1.ipynb — committed; Portfolio/portfolio_weights.csv — your book, lagged, five checks passed; A JOURNAL_1.md entry — every difference named
- **NOT TODAY**: Your control — homework; Costs and capacity — session 05; The backtest — session 05. Today you wrote its protocol.; Attribution — session 05

**WHY WE STOP** — A replica that agrees, and a book whose every difference has a name, beat a curve you cannot explain.

_Layout:_ Two-column layout as S03 slide 20: left list ON DISK WHEN YOU LEAVE, right list NOT TODAY, closing sentence under the right column. Paths on the left sit under Experiments/Experiment_1/, except custom_calculations.py (Data/Curator/), curator.py (Data/), the two modules portfolio_construction.py and backtest_engine.py (Experiments/) and BIBLIOGRAPHY.md (Bibliotheca/).

<details><summary>Speaker notes</summary>

Before you leave, everything on the left exists on your machine. Weight files are gitignored because the notebooks rebuild them, and the replica's file, Portfolio/lab_replica_weights.csv, is never the one session 05 prices. Commit both notebooks with outputs stripped. The first real number comes from the engine in session 05, and the costs arrive with it.

</details>


---

## Close

### 21 · TO DO.

*todo* · kicker: **BEFORE SESSION 05 · BACKTEST & ATTRIBUTION**

Commit the code, never Portfolio/.

- **01 YOUR CONTROL**: Same rule, one ingredient out. `Portfolio/`
- **02 TWO LEADS, READ**: DeMiguel, Garlappi & Uppal first. `Bibliotheca/`
- **03 YOUR RECONCILIATION**: Finish it, if today left it open. `JOURNAL_1.md`
- **04 YOUR ALTERNATIVE**: Same names, another sizing.

**BEFORE YOU ARRIVE** — Install the engine and Attribution Analysis. KNBE_API_KEY_KAXANUK, KNAA_API_KEY_KAXANUK in Config/.env. From now on, uv sync --inexact.

<details><summary>Speaker notes</summary>

Your control is the line BLUEPRINT_1.md already wrote, under its own name beside portfolio_weights.csv, through the five checks. An equal-weight benchmark gets its weight file now too. The alternative: equal weight if your book is not, inverse_volatility if it is. The backtest-engine-runs and attribution-analysis-runs skills have the install lines; the Portfolio Construction library installs with KAXANUK_INDEX_KEY, and KNPC_API_KEY_KAXANUK is checked only by run_pipeline, which the per-date weigher never calls. A bare uv sync removes every package installed by hand. Your books sum to exactly 1 and commissions come out of cash, so they stop at the first rebalance: in session 05 you set a cash reserve before the first run.

</details>

### 22 · THE READING LIST.

*refs* · kicker: **REFERENCES · SESSION 04**

Six leads, none read yet. Read two; start with DeMiguel, Garlappi & Uppal: the case for equal weight as the sizing to beat.

- **1952 MARKOWITZ**: Portfolio Selection
- **1989 MICHAUD**: The Markowitz Optimization Enigma: Is “Optimized” Optimal?
- **2009 DEMIGUEL, GARLAPPI & UPPAL**: Optimal Versus Naive Diversification: How Inefficient Is the 1/N Portfolio Strategy? _[equal_weight]_
- **2008 CHOUEIFATY & COIGNARD**: Toward Maximum Diversification _[max_diversification]_
- **2010 MAILLARD, RONCALLI & TEÏLETCHE**: The Properties of Equally Weighted Risk Contribution Portfolios _[risk_parity]_
- **2016 LÓPEZ DE PRADO**: Building Diversified Portfolios that Outperform Out of Sample _[hrp]_

**ALREADY ON YOUR LIST** — Grinold & Kahn · Paleologo, both books, from sessions 02 and 03: their portfolio-construction chapters.

_Layout:_ Two themed groups, laid out as S03 slide 27. Group 1 header: THE PROBLEM · WHY OPTIMISED IS NOT OPTIMAL (cards 1952, 1989, 2009). Group 2 header: THE ALTERNATIVES · SIZING WITHOUT A RETURN FORECAST (cards 2008, 2010, 2016). Each entry: AUTHORS in caps, then year + title; the tag is the method the paper sits behind, set small in mono (none for Markowitz or Michaud). No years printed for the books. Check the font renders Ï.

<details><summary>Speaker notes</summary>

Same rule as last week: read two, compile them, cite them. Markowitz, DeMiguel and López de Prado are already leads in Part 3 of your BIBLIOGRAPHY.md, marked No note yet. López de Prado's paper circulated as a 2015 working paper: cite the 2016 journal year. In the books, read Grinold & Kahn's Portfolio Construction, Paleologo's Use Effective Heuristics for Alpha Sizing, in Advanced Portfolio Management, and, in The Elements of Quantitative Investing, Portfolio Management: The Basics and Beyond Simple Mean-Variance. If equal weight is hard to beat out of sample, every other sizing in your blueprint has to say why it should beat it.

</details>

### 23 · NOW BUILD IT TWICE.

*closing* · kicker: **INVESTMENT BOOTCAMP**

Once in the Lab, to see it. Once in code, to keep it.

- **THE LAB**: Answer key: arithmetic, not timing. `Portfolio → Construction`
- **THE CODE**: Your book, lagged. `lab_replica.ipynb, then experiment_1.ipynb`
- **BRING**: Weight files, blueprint commit hashes.

**QUESTIONS** — research@kaxanuk.mx

_Layout:_ Right panel, as S03 slide 28: NEXT / SESSION 05 / TOPIC / BACKTEST & ATTRIBUTION / YOU LEAVE WITH / A PERFORMANCE CURVE, AND HOW MUCH OF IT IS REALLY ALPHA.

<details><summary>Speaker notes</summary>

A book you cannot rebuild is not finished. A book sent straight from the Lab to the engine is same-day look-ahead; the replica proves your code, and your book has the five checks in place of an answer key. A backtest is only as good as its assumptions: of eight, four are already yours — point-in-time data and survivorship, the lag and the rebalance rule — and session 05 prices the rest: execution price, transaction costs, capacity, capital path. Bring every weight file on your laptop and the hashes of your blueprint commits, because session 05 starts by pricing them.

</details>

### 24 · DISCLAIMERS

*disclaimer* · kicker: **DISCLAIMERS**

The content of this document is strictly informative and does not constitute an offer or recommendation of KaxaNuk S.C. to buy, sell or subscribe any kind of securities, or to perform specific transactions. KaxaNuk S.C. is not responsible for the interpretation given to the information and/or content of this document. KaxaNuk S.C. does not accept and will not accept any liability for losses or damages resulting from investment decisions that would have been based on this document. The persons responsible for the preparation of this content certify that the opinions stated reflect their own point of view and do not represent the view of KaxaNuk S.C. nor of its officials. This document is based on publicly available information which is considered reliable, however KaxaNuk S.C. makes no warranty regarding its accuracy or completeness.

_Layout:_ Footer: SESSION 04 · PORTFOLIO CONSTRUCTION

<details><summary>Speaker notes</summary>

The same disclaimer as every session. No performance number came from us today.

</details>


---

## Open questions

1. ETF example (slide 18): none exists on disk yet. D:/Lab/KaxaNuk-Researcher/examples holds only liquid-golden-cross (checked 2026-10-04). Fill [ETF EXAMPLE NAME], [N], [ETF TICKERS], [NOTEBOOK], [COMMAND THAT OPENS THE ETF EXAMPLE] and [REBALANCE SCHEDULE] once it ships. Also say whether it replaces liquid-golden-cross: slides 2, 5, 6, 8, 10, 12, 16 and 17 name liquid-golden-cross or cite its r_trend_50_200, lag_eligibility, select_rebalance_dates, weigh, write_weight_file and SHY.
2. Replica names: I chose Experiments/Experiment_1/lab_replica.ipynb and Portfolio/lab_replica_weights.csv, so section 2 of experiment_1.ipynb stays the blueprint's rule (slides 16, 17, 20, 23). Confirm these names, or give others. Also confirm that lab_weights.csv and the reconciliation entry belong in Experiment_1/JOURNAL_1.md, even though the worked book is a teaching book.
3. Library access: the ETF play (build_allocator) and Weights.cap need the Portfolio Construction library, which installs only with KAXANUK_INDEX_KEY, and hrp also needs the [clustering] extra (scipy). Do students get the key? Without it, only equal_weight and the hand-written metric_weight run. The install note now lives on slide 21's notes.
4. Rehearse slide 17's prompt. Possible pushback: the Curator skill may send a 50/200 window to the Refinery as r_*; its naming rule 2 may rename c_sma_* to c_simple_moving_average_*; portfolio-construction-runs may refuse an unlagged, cap-spread replica; AGENTS.md's 'never build on the example' may also come up. The notes give students an answer for each. If that is not enough, the skills need a 'reconciliation copy of a Lab file' exception. Line 2 now names both notebooks; check that the assistant writes the replica and your book into the right ones.
5. Curator re-download in class: adding the signal column changes every file's header and re-fetches ten years of the whole universe against the provider's quota. Is starting line 1 early enough, or should students add the column before the session?
6. Lab experiment folder: slide 13's notes say to keep it outside the strategy repository, because the Lab writes .kaxanuk/ plus data_curator/, portfolio/, backtest/ and attribution/ there, and the template's .gitignore covers none of them. Confirm students can choose that folder, or add these paths to the template .gitignore.
7. Equal-weight universe benchmark: slide 21's notes tell those students to build its weight file as homework with the same code. Confirm, or say that session 05 builds it.
8. Desk files: a student who picks the KN US Equity Benchmark needs its files through KN_ANALYTICS_PATH or Data/Curator/Benchmarks/. Do the files reach every laptop that needs them?
9. Upstream fixes before the session: portfolio-construction-runs SKILL.md (written for 1.28.0: install from a clone, 'no licence'); backtest-engine-runs SKILL.md:67 (calls KNPC_API_KEY_KAXANUK stale); Config/.env.template (no KNPC_ line); the liquid-golden-cross select_rebalance_dates docstring ('three names out of thirty is ten percent' does not match its code); Backtest Engine README row 11 ('1 is long-only', while shorts pass under gross 1); the Lab SMA docstrings (old names c_50_sma, c_200_sma, c_sma_signal). Lab behaviours the deck works around, if you would rather fix them: the universe loader rejects the template's main_identifier header; delisted names are carried forward; the static book is dated at the first common day; the Window snaps to five tickers; c_daily_traded_value (close × volume) is preselected; the 'Computed in the cloud' badge is hard-coded.
10. Session 05 carry-over: every book written today sums to exactly 1, so S05 must set cash_reserve_percentage before the first run, or the engine stops with 'Cash error' at the first rebalance.
11. Renderer (build_s04.js): the pull-quote hook is keyed on s.n === 9. Slide 9's new extra has no curly quotes, so the hook stays silent, but drop it anyway. tplSteps is no longer used. Slides 9 and 19 now have no deck; titleRow skips a missing deck, but check the spacing. Slide 9's extra asks for the six Lab methods in ink and the rest grey; until the renderer does that, the on-screen '(Lab)' mark carries it.
12. Slide 19: the cards no longer pair each check with one of the six lies. Only check 03 names its lie, in the notes (look-ahead). The leaking cap is now a trap checked against the blueprint's Cash line, not by a check. The /query callout still says 'the six lies', meaning S03's six (look-ahead, survivorship, selection on current_*, undeclared sweeps, uncosted turnover, borrowed alpha), not old S04 slide 27's portfolio six. Confirm that reading, or give the pairing you want.
13. Speaker-note length: the audit asked to split merged-slide notes into sentences of 30 words or fewer. That would take 8 to 10 sentences on 8, 9, 12, 16 and 17, which breaks the 2-6 sentence rule. I cut cross-slide repeats instead and kept 6 sentences, so some sentences still run 75 to 115 words. Raise the cap for merged slides, or accept them as they are?
14. Slides slightly over 60 visible words: 3, 10 and 21 at 63; 5, 12 and 16 at 62; 8 at 61. Each holds an approved fixed element (8 step cards, the weight-file path, the env-var callout, the correction, the papers callout, THE TEST). Accept, or name what to drop.
15. These S03 side notes are now gone from screen and notes alike: the brainstorm command and BRAINSTORMING_N.md retired; the blueprint file going into the strategy rather than Projects/; BIBLIOGRAPHY.md shipping with leads, not empty; Config/.env holding more than the FMP key. Slide 2's notes still say an existing BRAINSTORMING_1.md benchmark is read, and slide 21's notes still give the uv sync --inexact and Config/.env keys as plain instructions. Confirm none of the removed corrections needs saying in class.
16. The A–H order-of-work letters are gone, so the deck never names F. The `next` skill names F after the blueprint, and slide 6's notes tell students to record the blueprint's leads in BIBLIOGRAPHY.md without the letter. Is that enough if a student runs `next` and sees 'F'?
