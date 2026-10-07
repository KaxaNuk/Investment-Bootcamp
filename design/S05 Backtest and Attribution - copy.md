# S05 — Backtest & Attribution · slide copy

The copy for the S05 deck, 28 slides, laid out in `S05 Backtest and Attribution.html` in the S04 design. It was checked against the Backtest Engine (0.66.0) and Attribution Analysis (0.2.0) skills, the Investment Lab's backtest and attribution screens, and the worked example's FINDINGS_1.md, and it hands off to the S06 deck: S05 produces the four things S06's opening slide asks for and leaves the challenge, the robustness reading and the gate to S06.


---

## Opening

### 01 · BACKTEST & ATTRIBUTION

*cover* · kicker: **INVESTMENT BOOTCAMP**

Your books meet the engine: priced net, checked before believed, then taken apart until the alpha has a name.

_Layout:_ Large numeral: 05. CONTENTS: 01 THE ENGINE, NET · 02 READ IT BEFORE YOU BELIEVE IT · 03 ATTRIBUTION, THREE CUTS · 04 WHO EARNED IT — THEN WRITE IT


<details><summary>Speaker notes</summary>

Session 05: the first performance numbers of the bootcamp. Today you get them and take them apart; session 06 tries to break them. Two rules for the day. Every number comes from the engine or the attribution library, never from a spreadsheet or from memory. And nothing in BLUEPRINT_1.md changes after you see a result: a rule changed after the result is a new experiment, with a new blueprint, and it counts as a trial. The question of the day is the old one: how do we know a strategy actually works?

</details>

### 02 · WHO BROUGHT THEM.

*cards* · kicker: **SESSION 04 · HOMEWORK**

Every weight file, and the blueprint’s commit hash.

- **01 YOUR BOOK, YOUR CONTROL**: Lagged, five checks passed. `Portfolio/`
- **02 YOUR ALTERNATIVE**: Same names, another sizing.
- **03 TWO LEADS, READ**: DeMiguel, Garlappi & Uppal first. `Bibliotheca/`
- **04 BOTH LIBRARIES**: Engine and Attribution, installed. `uv pip list`

**WHY THE HASH** — The blueprint predates the result, or it is not a protocol.

<details><summary>Speaker notes</summary>

Hands up, card by card, with the file open. The hash: git log --oneline on BLUEPRINT_1.md must show a commit older than the rule cell's. The control is the one that matters today: beating the benchmark says the book worked; only beating the control says the ingredient did. Check the install now: uv pip list | grep -i kaxanuk should show both packages; if one vanished, a bare uv sync removed it, and the install line from the welcome email is the fix. Keys in Config/.env: KNBE_API_KEY_KAXANUK and KNAA_API_KEY_KAXANUK, never printed.

</details>

### 03 · WEIGHTS IN. FINDINGS OUT.

*statement* · kicker: **THIS SESSION**

Price every book net, check the run, take it apart, ask who earned the residual, write it down.

- **1 BIBLIOTHECA**: Sessions 02–03
- **2 UNIVERSE**: Session 03
- **3 DATA**: Session 03
- **4 PORTFOLIO**: Session 04
- **5 BACKTEST**: Net, verified _[TODAY]_
- **6 ATTRIBUTION**: Three cuts _[TODAY]_
- **7 PAPER TRADING**: The gate · Session 06
- **8 PRODUCTION**: Outside the repo

**THE RULE** — Every number today comes from the engine or the library. None from memory.

<details><summary>Speaker notes</summary>

Steps 5 and 6 today; the gate to step 7 is session 06, and it reads only what you write in FINDINGS_1.md today. Same split as session 04: the Lab to see it, code to keep it. The Lab prices a book and runs the first cut of attribution; the factor model and the counterfactuals run only in code. In the Lab you price last session's Lab book, which reads day t's signal for a day-t fill, so its curve is a lesson in the screen, never a result. The number that counts is your book's, from experiment_1.ipynb.

</details>


---

## 01 THE ENGINE, NET

### 04 · THE ENGINE, NET

*divider* · kicker: **SECTION 01**

eight assumptions · one engine · costs on, or no number


<details><summary>Speaker notes</summary>

A backtest looks precise; it rarely is. It is controlled experimentation, not optimistic simulation, and it is only as good as its assumptions. There is deliberately one engine: a second, lighter simulator that disagreed would only let you pick the number you liked.

</details>

### 05 · FOUR MORE, PRICED TODAY.

*cards* · kicker: **BACKTEST · THE ASSUMPTIONS**

Point in time, survivorship, the lag, the rebalance rule: yours since session 04.

- **01 EXECUTION PRICE**: Fill on VWAP, mark on the adjusted close.
- **02 TRANSACTION COSTS**: Commission per share, plus slippage.
- **03 CAPACITY**: Spread and impact: can your capital trade it?
- **04 CAPITAL PATH**: Cash pays commission. Commission needs cash.

**NET OR NOTHING** — On a high-turnover book, real costs can eat a third of the edge.

<details><summary>Speaker notes</summary>

Session 04's close named eight assumptions and said four were already yours; these are the other four. The worked example fills on the dividend-and-split-adjusted VWAP and marks on the adjusted close, but commission is charged on the unadjusted price, because that is the price paid. Results are accepted net or not at all; the cost and slippage models are constructor arguments so that somebody decides them. A name missing from the market data on a rebalance date cannot be filled: reconcile tickers against the market-data folder before the run and report the difference by name.

</details>

### 06 · SIX FIELDS. ONE SIMULATION.

*cards* · kicker: **LIVE · IN THE LAB**

Backtest → Parameters → New Backtest. Then Simulate.

- **01 PORTFOLIO**: Your session 04 Lab job. `Portfolio job #N`
- **02 BENCHMARKS**: At least one. The first is primary. `your JOURNAL_1 pick`
- **03 CASH RESERVE (%)**: Default 1. Pays the commission. `2`
- **04 COMMISSION (¢ PER SHARE)**: Read the unit twice. `0.005`
- **05 EXECUTION REALISM**: Cost preset, from Curator data. `Spread + impact`
- **06 DELISTING**: Price data ends early. `Sell at the last available price`

**THE TRAP** — Labelled ¢, charged in $: the default 0.05 is five cents a share.

<details><summary>Speaker notes</summary>

Send to backtest on the Construction page only opens this form with the job preselected; nothing runs until Simulate. Run on My computer inside your Lab experiment: inputs come from that folder and results land in backtest/<date - name (job)>/, with daily_weights.parquet beside the Excel report. The commission field says cents per share, but the engine charges the number in dollars a share, so 0.005 is half a cent. The Lab sets delisting to sell at the last price and rebalance to the next trading day; the engine's own defaults are fail and exact. Read the tiles, then remember this book has no lag: hindsight with a price on it.

</details>

### 07 · SAME ENGINE. YOUR BOOKS.

*live* · kicker: **LIVE · WITH THE RESEARCHER**

Section 4 of `experiment_1.ipynb`: every book, one window, net.

**PASTE THIS INTO CLAUDE OR CODEX**

```text
1 · Using backtest-engine-runs, in section 4 of experiment_1.ipynb, price portfolio_weights.csv, the control and the alternative over one window, net: a 2% cash reserve, a per-share commission, slippage in basis points, BLUEPRINT_1.md’s benchmark.
2 · Then section 8, Verify: every run valued to the end of the window it was asked for.
```

Behind the line: `Experiments/backtest_engine.py` writes, runs, reads back and aligns. Results land in `Backtest/`, never committed.

- **01 ONE WINDOW**: Every arm: same dates, same costs.
- **02 THE BENCHMARK**: The blueprint’s, not today’s.
- **03 DAILY_WEIGHTS**: Saved: attribution reads it.

<details><summary>Speaker notes</summary>

This is the only number that counts today. The module is the seam: write_weight_file puts the residual in the cash proxy and refuses a column that does not sum to 1; build_configuration, run_backtest, read_daily_weights and align_variants do the rest. The worked example fills on c_vwap_dividend_and_split_adjusted, prices cash as SHY and sells a delisted name at its last price, its one deliberate day of hindsight. Daily_Weights is the book as the engine actually held it, drift included, and it is what step 6 reads. Guard the import: a clone without a licence still runs everything else and says step 5 was skipped.

</details>

### 08 · THE BOOK SUMS TO ONE. WHO PAYS?

*cards* · kicker: **THE ENGINE · TWO TRAPS**

Both pass session 04’s five checks.

- **01 NO CASH, NO COMMISSION**: Weights sum to 1: nothing left to pay. `Cash error on <date>`
- **02 SET A RESERVE**: A fraction. The example needed 0.02. `cash_reserve_percentage`
- **03 READ THE UNIT**: Named cents, charged in dollars a share. `commission_cents`
- **04 CHECK IT ONCE**: Commissions over shares traded. `orders_df`

**THE CURE** — Price one run, divide `Total_commissions` by shares traded, journal the rate.

<details><summary>Speaker notes</summary>

Session 04 promised this: every book you wrote sums to exactly 1, and commission comes out of cash, so with no reserve the engine prints one Cash error line and stops valuing. It still reports success. The worked example needed 0.02; its long window still truncated at 0.5% and at 1%. The commission field is rejected outside 0 to 0.10, and the worked example's blueprint froze 0.1 as a tenth of a cent when the engine charged ten cents a share; its realistic variant is 0.005. A gap in a held name's prices is refused on the first rebalance inside the gap: the cure is in the rule, selling at t−1, not in the engine.

</details>


---

## 02 READ IT BEFORE YOU BELIEVE IT

### 09 · READ IT BEFORE YOU BELIEVE IT

*divider* · kicker: **SECTION 02**

a short run looks better · one window is an anecdote · the control decides


<details><summary>Speaker notes</summary>

A simulation is only as credible as the process behind it, and every shortcut in construction becomes an error in evaluation. Before reading a single metric, check that the run is whole; then check that it survives a different window; then read it against the control, not the index.

</details>

### 10 · THE SHORTER RUN LOOKED BETTER.

*table* · kicker: **BACKTEST · THE TRUNCATED RUN**

One book, run twice. Reserve 0, then a reserve. Engine 0.66.0.

|  | Truncated | Complete |
| --- | ---: | ---: |
| `success` / `error` | True / None | True / None |
| Days valued | 522 | 1,305 |
| CAGR | 23.6% | 14.2% |
| A field naming the stub | none | — |
| Excel report written | yes | yes |

**THE CHECK** — `end_date` and `years` against the window you asked for. Before any metric.

<details><summary>Speaker notes</summary>

Both runs succeeded, both wrote a report, and the short one annualised over its stub, so its CAGR is the higher of the two. Nothing in the result says it stopped; in the Lab no banner says so either. data['end_date'] and data['years'] describe what the engine valued, not what you configured. That is why section 8, Verify, raises rather than prints: it counts each run's valued days against the window's trading days, never against a fixed floor. A truncated variant is excluded by name, with its reason, never quietly dropped.

</details>

### 11 · EVERY ROW, PRICED TODAY.

*cards* · kicker: **BACKTEST · THE RUNS**

One window is one anecdote. Price what the blueprint declared.

- **01 RULE AND CONTROL**: Same dates, one ingredient apart. `Experiment_1`
- **02 TWO COST ROWS**: The blueprint’s commission, and a realistic one. `0.1 · 0.005`
- **03 SUB-PERIODS**: The windows the blueprint fixed. `2017–19 · 2020–22 · 2023–26`
- **04 THE GRID**: The perturbations it declared. No others. `15 cells`

**COUNT AS YOU GO** — Every variant you rank is a trial. Session 06 reads the count.

<details><summary>Speaker notes</summary>

Chips are the worked example's: 45 engine runs in all, priced in section 4 before a single row was read. The control must sit on the rule's rebalance dates; a control that chose its own dates differs in two things, and the gap is two effects read as one. Sub-periods and the grid are priced today and judged in session 06; everything after the blueprint's window end stays held out, untouched. A run you exclude keeps its name and its reason in a JOURNAL_1.md entry. Overfitting and data snooping are the two lies no check catches; only the count does, so keep it from the first run.

</details>

### 12 · IT BEAT THE INDEX. AND FAILED.

*table* · kicker: **WORKED EXAMPLE · LIQUID-GOLDEN-CROSS**

Net, 2017-01-03 to 2026-06-01. KN600 is the index.

| Arm | CAGR | Vol | Sharpe | Max DD |
| --- | ---: | ---: | ---: | ---: |
| The rule | 17.87% | 22.18% | 0.8057 | −32.20% |
| The control | 18.73% | 24.17% | 0.7748 | −41.83% |
| Diagnostic arm | 19.52% | 22.25% | 0.8773 | −32.36% |
| The rule, realistic costs | 18.36% | 22.17% | 0.8280 | −32.15% |
| KN600 | 14.63% | 19.01% | 0.7699 | −33.75% |

**KILL SWITCH** — Ahead of its control on both measures in one sub-period of three. It trips.

<details><summary>Speaker notes</summary>

Read the rule against the control, the row that differs from it in one ingredient. The blueprint asked for at least 0.03 of Sharpe and half a point of CAGR; it got +0.031 of Sharpe and −0.86 points of CAGR, and a drawdown nine points shallower. Against KN600 it wins on both: the book worked, the ingredient did not clearly earn its place. The kill switch wanted both measures ahead in two of three sub-periods; only 2020–22 delivered. A failed prediction, written up, is a result: this is the example's FINDINGS_1.md, not a disaster.

</details>


---

## 03 ATTRIBUTION, THREE CUTS

### 13 · ATTRIBUTION, THREE CUTS

*divider* · kicker: **SECTION 03**

Every return has a reason. Where is yours coming from?


<details><summary>Speaker notes</summary>

Performance without decomposition is incomplete. Even a strong result leaves the questions open: is it market beta, a sector tilt, a known factor, an exposure you never meant, or the idea? Without attribution conviction is misplaced, risk is misunderstood, and capital allocation becomes fragile.

</details>

### 14 · THREE CUTS, ONE BOOK.

*cards* · kicker: **ATTRIBUTION · THE FRAME**

Each cut asks a different question of the same daily weights.

- **01 FIRST CUT**: Brinson-Fachler: allocation, selection, interaction. `BrinstonFachlerArrowAttribution`
- **02 SECOND LAYER**: Factor model: which premia paid, and what is left. `KNFMArrowAttribution`
- **03 THIRD PASS**: Brinson-Fachler on the residual. `built in the notebook`

**THE LIBRARY’S WAY** — Per asset, per date: allocation is a sector bet only if you grouped first.

<details><summary>Speaker notes</summary>

The first cut asks which lever moved: the groups you lean into, or the names inside them. The second asks how much is a factor fund wearing your strategy's name. The third asks whether the selection story survives once the factor exposure is stripped. The library computes the effects per asset and per date: alpha is w_p·r minus w_b·r, allocation is (w_p − w_b)·r_b, selection is alpha·w_p, interaction the remainder. The class names are the library's, Brinston included: do not fix them. The Lab's Attribution page runs the first cut only.

</details>

### 15 · EVERY RETURN HAS A REASON.

*cards* · kicker: **THE KN US FACTOR MODEL**

Exposures per stock, per date: a cross-sectional, Fama-MacBeth model.

- **01 MARKET**: The index’s own move. `f_market`
- **02 STYLE · 5**: Beta, size, value, residual volatility, momentum. `f_beta … f_value`
- **03 INDUSTRY · 11**: The GICS sectors. `f_<GICS sector>`
- **04 IDIOSYNCRATIC**: What no factor explains. `idio_returns`

**SESSION 03, AGAIN** — The same features, now explaining returns instead of predicting them.

<details><summary>Speaker notes</summary>

Built on the benchmark's universe; instead of Fama-French long-short portfolios it estimates each stock's exposure to each factor on each date, and a book's exposure is its holdings' exposures, weighted. Its momentum is relative, CAPM alpha and relative strength, which matters in section 4. The files come from the Analytics Factory, through KN_ANALYTICS_PATH or dropped unchanged in Data/Curator/Factors/; the Lab ships none. The file name is the factor name, every file in the folder is read as one, and a held name missing from a file lowers coverage instead of raising. Record how many files, which names, and the coverage line: numbers are comparable only on an identical factor set.

</details>

### 16 · WIDEN THE BOOK, OR ALPHA LIES.

*table* · kicker: **ATTRIBUTION · THE TRAP**

A book of 8 names inside a 788-name index. Library 0.2.0.

| First cut | Book only | Widened |
| --- | ---: | ---: |
| Benchmark return, as a share of the index’s | 6.0% | 98.9% |
| Alpha | +0.8845 | +0.1735 |
| Interaction | +0.7415 | +0.0399 |
| Portfolio return | +0.9305 | +0.9305 |

**THE RULE** — Every constituent in the weight file: zero where not held, each with a price series.

<details><summary>Speaker notes</summary>

The first cut computes the benchmark's return only from the names in your portfolio file, so a benchmark weight on a name you never held has no return and silently drops out. Unwidened, the benchmark was the 7% of the index the book owned, alpha came out five times too large, and nearly all of it was filed under interaction, the effect least likely to be questioned. The book's own return did not move. Check before reading any row: the first cut's benchmark_returns against the index's own return over the same window.

</details>

### 17 · TAKE IT APART, IN CODE.

*live* · kicker: **LIVE · WITH THE RESEARCHER**

Section 5 of `experiment_1.ipynb`: two layers, every arm.

**PASTE THIS INTO CLAUDE OR CODEX**

```text
1 · Using attribution-analysis-runs, in section 5 of experiment_1.ipynb, read each run’s Daily_Weights, widen it to every benchmark constituent at zero, then run Brinson-Fachler and the factor model.
2 · Beside every number: the coverage line, the factor files, the common window.
```

Behind the line: `Experiments/attribution_analysis.py` shapes the four inputs. `main()` writes no files: the tables come from the objects.

- **01 DAILY, NOT REBALANCE**: The library rejects the weight file.
- **02 SAME PRICE BASIS**: The adjusted close the engine marked on.
- **03 COVERAGE, ALWAYS**: No factor split without it.

<details><summary>Speaker notes</summary>

The library wants 240 to 260 rows a year, so the rebalance-only file is refused; that is it being right. The first header must be date_column, not date, whatever the docs say. Read .df and .brinston_fach_indexes from the first cut, .portfolio_attribution_ts and cummulative_pct_decomp() from the factor model; the residual has three spellings, so say which one a number came from. Call matplotlib.use('Agg') first, or the run blocks on a window, and never launch the dashboard from a notebook. The common date range is an output: state it beside the backtest window. Nothing in Attribution/ is committed.

</details>

### 18 · MOSTLY MARKET. THEN MOMENTUM.

*table* · kicker: **WORKED EXAMPLE · THE TWO LAYERS**

The rule, 2017-01-04 to 2026-06-01: 160.02 points of excess.

| Factor model | Points |
| --- | ---: |
| Market | 87.39 |
| Momentum | 15.44 |
| Beta · Size · Residual volatility | 7.60 · 6.86 · 5.82 |
| Value | 0.71 |
| Eleven sectors | 0.00 each |
| Idiosyncratic | 36.19 |

**FIRST CUT** — Alpha +52.14 = allocation +0.11, selection +12.26, interaction +39.78.

<details><summary>Speaker notes</summary>

About three quarters of the excess is factors, most of it market, and 36 points are left for the idea. Two caveats travel with these numbers. Coverage: 686 of 1,399 identifiers priced. And the sector rows read zero because the sector files were empty, a gap in the inputs, not a finding. Interaction carries most of the first-cut alpha, which is why the widening check comes first. The third pass has not been run; the findings say so, and an arm not run is reported as not run.

</details>


---

## 04 WHO EARNED IT — THEN WRITE IT

### 19 · WHO EARNED IT — THEN WRITE IT

*divider* · kicker: **SECTION 04**

one thing removed, each time · the model’s blind spot · the findings · then stop


<details><summary>Speaker notes</summary>

The factor split says how much is idiosyncratic; it does not say what the idiosyncratic part is made of. That takes counterfactual books, never a formula: Paleologo's method, chapter 8 of Advanced Portfolio Management. Then every number goes into FINDINGS_1.md, and we stop: the judging is session 06.

</details>

### 20 · ONE THING REMOVED, EACH TIME.

*live* · kicker: **ALPHA DECOMPOSITION · COUNTERFACTUALS**

Each is a weight file the engine prices: same window, same costs.

**PASTE THIS INTO CLAUDE OR CODEX**

```text
Using alpha-decomposition, in section 6 of experiment_1.ipynb, price the arms BLUEPRINT_1.md names: equal weight within each date, K random draws from the eligible pool at the same sizes, and the control. Publish K.
```

- **01 SIZING**: Same names, equal weight.
- **02 SELECTION**: Random names, same sizes. Percentile.
- **03 TIMING**: Entries shifted 5 or 21 days.
- **04 THE FILTER**: Signal off: your control.

<details><summary>Speaker notes</summary>

The Sharpe gap between the real book and each arm is that one thing's contribution. Drop economically insignificant positions from every book first, or slivers nobody bet on dominate. K is a trial count: publish it and the percentile, never the best draw. If your book is already equal weight, sizing skill is zero by construction: report it as zero. The arms overlap, so they are three questions, not a partition. And never tune the rule against them: a rule changed to beat its counterfactual is a new experiment.

</details>

### 21 · THE MODEL CANNOT SEE A TREND.

*cards* · kicker: **WHEN THE MODEL IS BLIND**

Factor momentum ranks names against each other. A trend rule compares a name with its own past.

- **01 RELATIVE**: Momentum: this name against its peers.
- **02 ABSOLUTE**: Trend, breakout, regime: against itself.
- **03 THE TEST**: Same book, signal off. Price both.

**A FINDING, NOT A FAILURE** — If the pillar says momentum and means trend, rename it in `OBJECTIVE.md`.

<details><summary>Speaker notes</summary>

A threshold signal, a moving-average cross, a breakout, a drawdown gate, can beat every benchmark while the model credits almost nothing to the factor its thesis is named after. Do not conclude the signal is weak; conclude the model cannot see it, and run the exclusion-filter test. Same ranking, same count, same weights, same trigger, only the signal's condition dropped: that is your control. If the two books are close, the honest name for the strategy is top-N by the sizing column, and the claim goes into OBJECTIVE.md as falsified.

</details>

### 22 · THE CROSS COSTS IDIOSYNCRATIC RETURN.

*table* · kicker: **WORKED EXAMPLE · THE ARMS**

Idiosyncratic points, factor model, same window.

| Arm | Idiosyncratic points |
| --- | ---: |
| The rule | 36.19 |
| The control · golden cross off | 40.99 |
| Diagnostic arm | 50.02 |
| Random books · 5 draws, same sizes | −11.78 to 35.31 |
| Random books · mean | 22.4 |

**READING** — The liquidity ranking beats random names. The cross in the name subtracts.

<details><summary>Speaker notes</summary>

Read the arms before crediting the signal in the strategy's name. The rule keeps less idiosyncratic return than its own control, so the golden cross costs some; the random draws land well below the rule, so the ranking earns most of it. The findings read the cross as trading beta for momentum, and its small Sharpe edge as timing, which no shifted-entry arm has priced yet. Five draws is a small K: say so beside the percentile. An arm you did not run is reported as not run, never inferred.

</details>

### 23 · WRITE IT SO IT CAN BE CHALLENGED.

*live* · kicker: **LIVE · WITH THE RESEARCHER**

`FINDINGS_1.md`, from the notebook’s outputs. Session 06 reads nothing else.

**PASTE THIS INTO CLAUDE OR CODEX**

```text
Using experiment-lifecycle, fill FINDINGS_1.md from experiment_1.ipynb’s outputs: the book and its control, net, both cost rows, both attribution layers with coverage and window, the arms, every excluded run by name, the trial count. Quote every number; compute none.
```

Behind the line: the findings follow the template’s sections, and `RESULTS.md` is compiled from them, never written by hand.

- **01 THE BOOK, PRICED**: Every row on one window, net.
- **02 BOTH LAYERS**: Each number with its coverage.
- **03 THE COUNT**: Every variant you ranked.

**THE BLUEPRINT** — Untouched. Session 06 sets the findings against it.

<details><summary>Speaker notes</summary>

The template's FINDINGS_1.md has its sections already: status, the predictions evaluated, the book priced by the engine, what the benchmark is structurally, the trial count, attribution, what is open, caveats. Fill the numbers today; the verdict on each prediction can wait for the challenge in session 06, but the evidence cannot. It is rewritten when a result changes, never appended to; the journal is the append-only file. If a number is not in FINDINGS_1.md it does not exist next week: session 06's rule is that a number not in the file is not in the room.

</details>

### 24 · STOP HERE, ON PURPOSE.

*stop* · kicker: **YOUR TURN · THE STOP**

Left: on disk before you leave. Right: not done, on purpose.

- **ON DISK WHEN YOU LEAVE**: `Backtest/` — every row priced net, one window; Section 8, Verify — every run valued to the end; `Attribution/` — two layers, coverage logged; The arms — equal weight, K random draws, the control; `FINDINGS_1.md` — every number, quoted from a run; `RESULTS.md` — compiled from the findings; A `JOURNAL_1.md` entry — each excluded run, by name
- **NOT TODAY**: The third pass — homework, if you can; The challenge — session 06; The gate — session 06; Experiment 2 — a new blueprint first

**WHY WE STOP** — A rule changed after the result is a new experiment, with a new blueprint.

<details><summary>Speaker notes</summary>

Before you leave, everything on the left exists. Backtest/ and Attribution/ are gitignored: the numbers reach FINDINGS_1.md, and the notebook, outputs stripped, is the method. Commit the notebook and the documents. The temptation now is to fix the rule; resist it. Session 06 challenges this run against the blueprint you committed in session 04, and a rule that moved in between has nothing left to be challenged against.

</details>


---

## Close

### 25 · TO DO.

*cards* · kicker: **BEFORE SESSION 06 · FINAL STRATEGY & PRESENTATION**

Commit the method and the documents, never `Backtest/`.

- **01 YOUR BOOK, NET**: Priced by the engine, costs on. `FINDINGS_1.md`
- **02 YOUR CONTROL**: One ingredient out, same dates. `Portfolio/`
- **03 BOTH LAYERS**: Brinson-Fachler, then the factor model. `Attribution/`
- **04 YOUR COUNT**: Every variant you ranked. `RESULTS.md`

**IF YOU CAN** — The third pass: Brinson-Fachler on the residual. Almost nobody does; the gate asks.

<details><summary>Speaker notes</summary>

These four cards are session 06's opening slide, word for word: it starts with hands up and the file open. The third pass: build the residual series from the factor model's output and run the first cut on it in the notebook, saying in FINDINGS_1.md that it was done that way. If your trend rule was blind to the model, the exclusion-filter result goes in the findings in those terms. Read two of the leads, and say your trial count without looking.

</details>

### 26 · THE READING LIST.

*refs* · kicker: **REFERENCES · SESSION 05**

Six leads. Read two; start with Brinson & Fachler: the first cut, from its source.


**THE ATTRIBUTION · WHERE IT CAME FROM**

- **1973 FAMA & MACBETH**: Risk, Return, and Equilibrium: Empirical Tests _[the factor model]_
- **1985 BRINSON & FACHLER**: Measuring Non-U.S. Equity Portfolio Performance _[the first cut]_
- **1986 BRINSON, HOOD & BEEBOWER**: Determinants of Portfolio Performance

**THE FACTORS AND THE COSTS · WHAT ELSE IT COULD BE**

- **1993 FAMA & FRENCH**: Common Risk Factors in the Returns on Stocks and Bonds
- **1997 CARHART**: On Persistence in Mutual Fund Performance _[f_momentum]_
- **2016 NOVY-MARX & VELIKOV**: A Taxonomy of Anomalies and Their Trading Costs _[net, or nothing]_

**ALREADY ON YOUR LIST** — Paleologo, Advanced Portfolio Management: the chapter behind section 6’s counterfactuals.

<details><summary>Speaker notes</summary>

Same rule as every week: read two, compile them, cite them. The first group is where today's tools come from: Fama-MacBeth's cross-sectional regressions behind the factor model, and Brinson's allocation-and-selection split behind the first cut. The second asks what else your return could be: the factors a referee will name first, momentum among them, and what trading costs do to an anomaly on paper. The overfitting papers, the deflated Sharpe among them, are session 06's list. Paleologo's chapter 8 is the method the alpha-decomposition skill follows; write its note before citing it in FINDINGS_1.md.

</details>

### 27 · NOW TAKE IT APART.

*closing* · kicker: **INVESTMENT BOOTCAMP**

A curve says what happened. Attribution says why. The arms say who.

- **THE ENGINE**: Net, verified, one window. `Backtest/`
- **THE LIBRARY**: Three cuts, coverage stated. `Attribution/`
- **BRING**: FINDINGS_1.md, your trial count.

_Layout:_ Right panel: NEXT / SESSION 06 / TOPIC / FINAL STRATEGY & PRESENTATION / YOU LEAVE WITH / YOUR RUN, CHALLENGED, GATED AND DEFENDED.

<details><summary>Speaker notes</summary>

A book that beats its benchmark has been observed, not understood. Today you priced it net, proved the run was whole, read it against its control, took it apart three ways and asked who earned the residual. Most first experiments do not graduate, the worked example among them, and the ones that fail honestly are the ones that teach. Bring FINDINGS_1.md and your trial count: session 06 challenges the run, tries to break it, puts it to the gate, and has you defend it in ten minutes.

</details>

### 28 · DISCLAIMERS

*disclaimer* · kicker: **DISCLAIMERS**

The content of this document is strictly informative and does not constitute an offer or recommendation of KaxaNuk S.C. to buy, sell or subscribe any kind of securities, or to perform specific transactions. KaxaNuk S.C. is not responsible for the interpretation given to the information and/or content of this document. KaxaNuk S.C. does not accept and will not accept any liability for losses or damages resulting from investment decisions that would have been based on this document. The persons responsible for the preparation of this content certify that the opinions stated reflect their own point of view and do not represent the view of KaxaNuk S.C. nor of its officials. This document is based on publicly available information which is considered reliable, however KaxaNuk S.C. makes no warranty regarding its accuracy or completeness.

_Layout:_ Footer: SESSION 05 · BACKTEST & ATTRIBUTION

<details><summary>Speaker notes</summary>

The same disclaimer as every session. Every performance number shown today came from the engine, and none of it is a recommendation.

</details>


---

## Open questions

1. Worked-example numbers: slides 11, 12, 18 and 22 quote `examples/liquid-golden-cross/Experiments/Experiment_1/FINDINGS_1.md` (second design run, 2026-09-23). The `alpha-decomposition` skill's section 5 still quotes an earlier run (rule CAGR 17.85%, Sharpe 0.861, idiosyncratic 45.52). The deck follows FINDINGS_1.md; the skill needs updating upstream.
2. "Diagnostic arm" (slides 12, 22): the deck names it without explaining it, because I did not confirm what it removes. Give it a one-line definition for the notes, or drop the row.
3. Commission units (slides 6, 8): the Lab labels the field "¢ per share" and defaults to 0.05; the engine charges the number in dollars a share. The worked example's notebook comment says 0.1 is ten cents a share, its BLUEPRINT_1.md says about eight cents, and the `backtest-engine-runs` skill measured about $0.083. Slide 8 says "charged in dollars a share" and the notes say ten cents. Confirm which figure to say out loud, and whether the Lab label should be fixed.
4. Factor-model files (slides 15, 17): the Lab ships none and its Attribution page runs Brinson-Fachler only, so the second layer needs the Analytics Factory files through `KN_ANALYTICS_PATH` or `Data/Curator/Factors/`. Do they reach every laptop before the session? Without them, students get the first cut only, and S06's "both layers" card fails.
5. The worked example's sector factor files are empty (slide 18 notes say so). Is that a known Factory gap to mention, or will it be fixed before the session?
6. Slide 6 prices the S04 Lab book, which has no lag. The notes frame it as a lesson in the screen, never a result. Confirm that is how you want the Lab half used, or point the Lab at a different book.
7. Slide 23 asks the `experiment-lifecycle` skill to fill FINDINGS_1.md from the notebook's outputs. Rehearse it: the skill may want the verdict per prediction, which the deck leaves for S06's challenge.
8. Overlap with S06: robustness (perturbation, sub-periods, trial count), the challenge, the gate and the overfitting papers were moved out of S05 because S06 slides 5–15 and 24 cover them. S05 slide 11 only *prices* the sub-periods and the grid. S05's to-do (slide 25) repeats S06's opening four cards word for word on purpose.
9. Truncation rule: the `backtest-engine-runs` skill describes a 99%-of-days rule; the worked example's `describe_window` flags runs more than 7 days short. Slide 10's notes name neither threshold. Pick one if you want it said.
10. Reading list (slide 26): titles are from memory, not checked against the sources. Check them before class, especially Novy-Marx & Velikov (2016) and Brinson & Fachler (1985).
11. Length: 28 slides against S04's 24. The likeliest cuts are slide 5 (assumptions) or slide 21 (the blind-model slide, which could fold into slide 22's notes).
12. Renderer: `design/render.js` builds the deck from `design/s05_content.js` and S04's bundled shell (fonts, logo, deck-stage). Edit the content file and re-run: `node design/render.js design/s05_content.js "S04 Portfolio Construction.html" "S05 Backtest and Attribution.html"`.
