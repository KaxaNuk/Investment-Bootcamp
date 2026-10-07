// S05 — Backtest & Attribution · slide content. Rendered by render.js in the S04 design.
module.exports = {
  thumb: 'S05',
  title: 'S05 · Backtest and Attribution',
  slides: [
    // ───────────── Opening
    {
      kind: 'cover', session: '05', line1: 'Backtest &', line2: 'Attribution', size1: 141, size2: 124,
      deck: 'Your books meet the engine: priced net, checked before believed, then taken apart until the idiosyncratic return has a name.',
      contents: ['THE ENGINE, NET', 'READ IT BEFORE YOU BELIEVE IT', 'ATTRIBUTION, THREE CUTS', 'WHO EARNED IT — THEN WRITE IT'],
      notes: "Session 05: the first performance numbers of the bootcamp. Today you get them and take them apart; session 06 tries to break them. Two rules for the day. Every number comes from the engine or the attribution library, never from a spreadsheet or from memory. And nothing in BLUEPRINT_1.md changes after you see a result: a rule changed after the result is a new experiment, with a new blueprint, and it counts as a trial. The question of the day is the old one: how do we know a strategy actually works?",
    },
    {
      kind: 'cards', kicker: 'SESSION 04 · HOMEWORK', title: 'WHO BROUGHT THEM.', label: 'Who brought them',
      deck: 'Every weight file, and the blueprint’s commit hash.',
      cards: [
        { h: 'YOUR CONTROL', b: 'Same rule, one ingredient out.', chip: 'Portfolio/' },
        { h: 'TWO LEADS, READ', b: 'DeMiguel, Garlappi & Uppal first.', chip: 'Bibliotheca/' },
        { h: 'YOUR RECONCILIATION', b: 'Every difference named.', chip: 'JOURNAL_1.md' },
        { h: 'YOUR ALTERNATIVE', b: 'Same names, another sizing: a trial.', chip: 'TRIALS.csv' },
      ],
      calloutLabel: 'WHY THE HASH', callout: 'The blueprint predates the result, or it is not a protocol.',
      notes: "Session 04's to-do, card for card, with the file open. Then, with the AI off, push your first artefact: the cost drag you predict, and the order you expect for the rule, the control and SPY, as a dated JOURNAL_1.md entry. The hash: git log --oneline on BLUEPRINT_1.md must show a commit older than the rule cell's. The control is the one that matters today: beating the benchmark says the book worked; only beating the control says the ingredient did. Check the install now: uv pip list | grep -i kaxanuk should show both packages; if one vanished, a bare uv sync removed it, and the install line from the welcome email is the fix. Keys in Config/.env: KNBE_API_KEY_KAXANUK and KNAA_API_KEY_KAXANUK, never printed.",
    },
    {
      kind: 'statement', kicker: 'THIS SESSION', label: 'This session', title: 'WEIGHTS IN.| FINDINGS OUT.',
      deck: 'Price every book net, check the run, take it apart, ask who earned the residual, write it down.',
      steps: [
        { h: 'BIBLIOTHECA', b: 'Sessions 02–03' },
        { h: 'UNIVERSE', b: 'Session 03' },
        { h: 'DATA', b: 'Session 03' },
        { h: 'PORTFOLIO', b: 'Session 04' },
        { h: 'BACKTEST', b: 'Net, verified', today: true },
        { h: 'ATTRIBUTION', b: 'Three cuts', today: true },
        { h: 'PAPER TRADING', b: 'The gate · Session 06' },
        { h: 'PRODUCTION', b: 'Outside the repo' },
      ],
      calloutLabel: 'THE RULE', callout: 'Every number today comes from the engine or the library. None from memory.',
      notes: "Steps 5 and 6 today; the gate to step 7 is session 06, and it reads only what you write in FINDINGS_1.md today. Same split as session 04: the Lab to see it, code to keep it. The Lab prices a book and runs the first cut of attribution; the factor model and the counterfactuals run only in code. In the Lab you price last session's Lab book, which reads day t's signal for a day-t fill, so its curve is a lesson in the screen, never a result. The number that counts is your book's, from experiment_1.ipynb.",
    },

    // ───────────── 01 THE ENGINE, NET
    {
      kind: 'divider', kicker: 'SECTION 01', title: 'THE ENGINE, NET',
      deck: 'eight assumptions · one engine · costs on, or no number',
      notes: "A backtest looks precise; it rarely is. It is controlled experimentation, not optimistic simulation, and it is only as good as its assumptions. There is deliberately one engine: a second, lighter simulator that disagreed would only let you pick the number you liked.",
    },
    {
      kind: 'cards', kicker: 'BACKTEST · THE ASSUMPTIONS', title: 'FOUR MORE, PRICED TODAY.', label: 'Four more, priced today',
      deck: 'Point in time, survivorship, the lag, the rebalance rule: yours since session 04.',
      cards: [
        { h: 'EXECUTION PRICE', b: 'Fill on VWAP, mark on the adjusted close.' },
        { h: 'TRANSACTION COSTS', b: 'Commission per share, plus slippage.' },
        { h: 'CAPACITY', b: 'Spread and impact: can your capital trade it?' },
        { h: 'CAPITAL PATH', b: 'Cash pays commission. Commission needs cash.' },
      ],
      calloutLabel: 'NET OR NOTHING', callout: 'On a high-turnover book, costs decide whether the edge survives.',
      notes: "Session 04's close named eight assumptions and said four were already yours; these are the other four. The worked example fills on the dividend-and-split-adjusted VWAP and marks on the adjusted close, but commission is charged on the unadjusted price, because that is the price paid. Results are accepted net or not at all; the cost and slippage models are constructor arguments so that somebody decides them. A name missing from the market data on a rebalance date cannot be filled: reconcile tickers against the market-data folder before the run and report the difference by name.",
    },
    {
      kind: 'cards', dark: true, kicker: 'LIVE · IN THE LAB', title: 'SIX FIELDS. ONE SIMULATION.', label: 'Six fields. One simulation',
      deck: 'Backtest → Parameters → New Backtest. Then Simulate.', deckWidth: 620,
      cols: 3, rows: 2, size: 'md', hl: -1, bodySize: 26, headSize: 29,
      cards: [
        { h: 'PORTFOLIO', b: 'Your session 04 Lab job.', chip: 'Portfolio job #N', chipSize: 30 },
        { h: 'BENCHMARKS', b: 'At least one. The first is primary.', chip: 'your JOURNAL_1 pick', chipSize: 30 },
        { h: 'CASH RESERVE (%)', b: 'Default 1. Pays the commission.', chip: '2', chipSize: 34 },
        { h: 'COMMISSION (¢ PER SHARE)', b: 'Read the unit twice.', chip: '0.005', chipSize: 34 },
        { h: 'EXECUTION REALISM', b: 'Cost preset, from Curator data.', chip: 'Spread + impact', chipSize: 30 },
        { h: 'DELISTING', b: 'Price data ends early.', chip: 'Sell at the last available price', chipSize: 26 },
      ],
      calloutLabel: 'THE TRAP', callout: 'Labelled ¢, charged in $: the default 0.05 is five cents a share.',
      notes: "Send to backtest on the Construction page only opens this form with the job preselected; nothing runs until Simulate. Run on My computer inside your Lab experiment: inputs come from that folder and results land in backtest/<date - name (job)>/, with daily_weights.parquet beside the Excel report. The commission field says cents per share, but the engine charges the number in dollars a share, so 0.005 is half a cent. The Lab sets delisting to sell at the last price and rebalance to the next trading day; the engine's own defaults are fail and exact. Read the tiles, then remember this book has no lag: hindsight with a price on it.",
    },
    {
      kind: 'cards', dark: true, kicker: 'LIVE · WITH THE RESEARCHER', title: 'SAME ENGINE. YOUR BOOKS.', label: 'Same engine. Your books',
      deck: 'Section 4 of `experiment_1.ipynb`: every book, one window, net.', deckWidth: 620,
      paste: [
        '1 · Using backtest-engine-runs, in section 4 of experiment_1.ipynb, price portfolio_weights.csv, the control and the alternative over one window, net: a 2% cash reserve, a per-share commission, slippage in basis points, BLUEPRINT_1.md’s benchmark.',
        '2 · Then section 8, Verify: every run valued to the end of the window it was asked for.',
      ],
      pasteSize: 24,
      behind: 'Behind the line: `Experiments/backtest_engine.py` writes, runs, reads back and aligns. Results land in `Backtest/`, never committed.',
      cards: [
        { h: 'ONE WINDOW', b: 'Every arm: same dates, same costs.' },
        { h: 'THE BENCHMARK', b: 'The blueprint’s, not today’s.' },
        { h: 'DAILY_WEIGHTS', b: 'Saved: attribution reads it.' },
      ],
      notes: "This is the only number that counts today. The module is the seam: write_weight_file puts the residual in the cash proxy and refuses a column that does not sum to 1; build_configuration, run_backtest, read_daily_weights and align_variants do the rest. The worked example fills on c_vwap_dividend_and_split_adjusted, prices cash as SHY and sells a delisted name at its last price, its one deliberate day of hindsight. Daily_Weights is the book as the engine actually held it, drift included, and it is what step 6 reads. Guard the import: a clone without a licence still runs everything else and says step 5 was skipped.",
    },
    {
      kind: 'cards', kicker: 'THE ENGINE · TWO TRAPS', title: 'THE BOOK SUMS TO ONE. WHO PAYS?', label: 'Who pays',
      deck: 'Both pass session 04’s five checks.',
      cards: [
        { h: 'NO CASH, NO COMMISSION', b: 'Weights sum to 1: nothing left to pay.', chip: 'Cash error on <date>' },
        { h: 'SET A RESERVE', b: 'A fraction. The example needed 0.02.', chip: 'cash_reserve_percentage' },
        { h: 'READ THE UNIT', b: 'Named cents, charged in dollars a share.', chip: 'commission_cents' },
        { h: 'CHECK IT ONCE', b: 'Commissions over shares traded.', chip: 'orders_df' },
      ],
      calloutLabel: 'THE CURE', callout: 'Price one run, divide `Total_commissions` by shares traded, journal the rate.',
      notes: "Session 04 promised this: every book you wrote sums to exactly 1, and commission comes out of cash, so with no reserve the engine prints one Cash error line and stops valuing. It still reports success. The worked example needed 0.02; its long window still truncated at 0.5% and at 1%. The commission field is rejected outside 0 to 0.10, and the worked example's blueprint froze 0.1 as a tenth of a cent when the engine charged ten cents a share; its realistic variant is 0.005. A gap in a held name's prices is refused on the first rebalance inside the gap: the cure is in the rule, selling at t−1, not in the engine.",
    },

    // ───────────── 02 READ IT BEFORE YOU BELIEVE IT
    {
      kind: 'divider', kicker: 'SECTION 02', title: 'READ IT BEFORE YOU BELIEVE IT',
      deck: 'a short run looks better · one window is an anecdote · the control decides',
      notes: "A simulation is only as credible as the process behind it, and every shortcut in construction becomes an error in evaluation. Before reading a single metric, check that the run is whole; then check that it survives a different window; then read it against the control, not the index.",
    },
    {
      kind: 'table', kicker: 'BACKTEST · THE TRUNCATED RUN', title: 'THE SHORTER RUN LOOKED BETTER.', label: 'The shorter run looked better',
      deck: 'One book, run twice. Reserve 0, then a reserve. Engine 0.66.0.',
      table: {
        head: ['', 'Truncated', 'Complete'],
        rows: [
          ['`success` / `error`', 'True / None', 'True / None'],
          ['Days valued', '522', '1,305'],
          ['CAGR', '23.6%', '14.2%'],
          ['A field naming the stub', 'none', '—'],
          ['Excel report written', 'yes', 'yes'],
        ],
        strong: [2],
      },
      calloutLabel: 'THE CHECK', callout: '`end_date` and `years` against the window you asked for. Before any metric.',
      notes: "Both runs succeeded, both wrote a report, and the short one annualised over its stub, so its CAGR is the higher of the two. Nothing in the result says it stopped; in the Lab no banner says so either. data['end_date'] and data['years'] describe what the engine valued, not what you configured. That is why section 8, Verify, raises rather than prints: it counts each run's valued days against the window's trading days, never against a fixed floor. A truncated variant is excluded by name, with its reason, never quietly dropped.",
    },
    {
      kind: 'cards', kicker: 'BACKTEST · THE RUNS', title: 'EVERY ROW, PRICED TODAY.', label: 'Every row, priced today',
      deck: 'One window is one anecdote. Price what the blueprint declared.',
      cards: [
        { h: 'RULE AND CONTROL', b: 'Same dates, one ingredient apart.', chip: 'Experiment_1' },
        { h: 'TWO COST ROWS', b: 'The blueprint’s commission, and a realistic one.', chip: 'headline · realistic' },
        { h: 'SUB-PERIODS', b: 'The windows the blueprint fixed.', chip: '2006–11 · 2012–19 · 2020–24' },
        { h: 'THE BUDGET', b: 'At most 10 of the demo’s 20 backtests.', chip: '≤ 10 runs' },
      ],
      calloutLabel: 'COUNT AS YOU GO', callout: 'Every variant you rank is a trial. Session 06 reads the count.',
      notes: "Your run list: the rule; the control, which for claim A is also the Brinson-Fachler benchmark; the alternative; a named benchmark when the control is not one, 60/40 for claim B; two cost rows; three sub-periods; one spare. At most 10 of the demo's 20 backtests, each a trial, and none past 2024-12-31: the holdout is homework, opened once. The worked example priced 45 runs on its own licence; the demo budget is 10. The control must sit on the rule's rebalance dates; a control that chose its own dates differs in two things, and the gap is two effects read as one. Sub-periods are priced today and judged in session 06; everything after the blueprint's window end stays held out, untouched. A run you exclude keeps its name and its reason in a JOURNAL_1.md entry. Overfitting and data snooping are the two lies no check catches; only the count does, so keep it from the first run.",
    },
    {
      kind: 'table', kicker: 'WORKED EXAMPLE · LIQUID-GOLDEN-CROSS', title: 'IT BEAT THE INDEX. AND FAILED.', label: 'It beat the index and failed',
      deck: 'Net, 2017-01-03 to 2026-06-01, Backtest Engine 0.66.0. KN600 is the example’s index.',
      table: {
        head: ['Arm', 'CAGR', 'Vol', 'Sharpe', 'Max DD'],
        rows: [
          ['The rule', '17.87%', '22.18%', '0.8057', '−32.20%'],
          ['The control', '18.73%', '24.17%', '0.7748', '−41.83%'],
          ['Diagnostic arm', '19.52%', '22.25%', '0.8773', '−32.36%'],
          ['The rule, realistic costs', '18.36%', '22.17%', '0.8280', '−32.15%'],
          ['KN600', '14.63%', '19.01%', '0.7699', '−33.75%'],
        ],
        strong: [0],
      },
      calloutLabel: 'KILL SWITCH', callout: 'Ahead of its control on both measures in one sub-period of three. It trips.',
      notes: "Read the rule against the control, the row that differs from it in one ingredient. The blueprint asked for at least 0.03 of Sharpe and half a point of CAGR; it got +0.031 of Sharpe and −0.86 points of CAGR, both derived from the table, and a drawdown nine points shallower. The diagnostic arm is the example's first design, with its slower exit, priced to test whether exit speed explained the loss: a trial, never a candidate. Against KN600 it wins on both: the book worked, the ingredient did not clearly earn its place. The kill switch wanted both measures ahead in two of three sub-periods; only 2020–22 delivered. A failed prediction, written up, is a result: this is the example's FINDINGS_1.md, not a disaster.",
    },

    // ───────────── 03 ATTRIBUTION, THREE CUTS
    {
      kind: 'divider', kicker: 'SECTION 03', title: 'ATTRIBUTION, THREE CUTS',
      deck: 'Every return has a reason. Where is yours coming from?',
      notes: "Performance without decomposition is incomplete. Even a strong result leaves the questions open: is it market beta, a sector tilt, a known factor, an exposure you never meant, or the idea? Without attribution conviction is misplaced, risk is misunderstood, and capital allocation becomes fragile.",
    },
    {
      kind: 'cards', kicker: 'ATTRIBUTION · THE FRAME', title: 'THREE CUTS, ONE BOOK.', label: 'Three cuts, one book',
      deck: 'Each cut asks a different question of the same daily weights.',
      cards: [
        { h: 'FIRST CUT', b: 'Brinson-Fachler: allocation, selection, interaction.', chip: 'BrinstonFachlerArrowAttribution' },
        { h: 'SECOND LAYER', b: 'Factor model: which premia paid, and what is left.', chip: 'KNFMArrowAttribution' },
        { h: 'THIRD PASS', b: 'Brinson-Fachler on the residual.', chip: 'built in the notebook' },
      ],
      calloutLabel: 'THE LIBRARY’S WAY', callout: 'Per asset, per date: allocation is a sector bet only if you grouped first.',
      notes: "The first cut asks which lever moved: the groups you lean into, or the names inside them. The second asks how much is a factor fund wearing your strategy's name. The third asks whether the selection story survives once the factor exposure is stripped. The library computes the effects per asset and per date: the library's alpha column is the active return, w_p·r minus w_b·r; allocation is (w_p − w_b)·r_b, selection is that active term times w_p, interaction the remainder. The class names are the library's, Brinston included: do not fix them. The Lab's Attribution page runs the first cut only. On the public path the factor layer reads not assessed: its files come from the Analytics Factory, not from the free data.",
    },
    {
      kind: 'cards', kicker: 'THE KN US FACTOR MODEL', title: 'EVERY RETURN HAS A REASON.', label: 'Every return has a reason',
      deck: 'Exposures per stock, per date: a cross-sectional, Fama-MacBeth model.',
      cards: [
        { h: 'MARKET', b: 'The index’s own move.', chip: 'f_market' },
        { h: 'STYLE · 5', b: 'Beta, size, value, residual volatility, momentum.', chip: 'f_beta … f_value' },
        { h: 'INDUSTRY · 11', b: 'The GICS sectors.', chip: 'f_<GICS sector>' },
        { h: 'IDIOSYNCRATIC', b: 'What no factor explains.', chip: 'idio_returns' },
      ],
      calloutLabel: 'SESSION 03, AGAIN', callout: 'The same features, now explaining returns instead of predicting them.',
      notes: "Built on the benchmark's universe; instead of Fama-French long-short portfolios it estimates each stock's exposure to each factor on each date, and a book's exposure is its holdings' exposures, weighted. Its momentum is relative, CAPM alpha and relative strength, which matters in section 4. The files come from the Analytics Factory, through KN_ANALYTICS_PATH or dropped unchanged in Data/Curator/Factors/; the Lab ships none. The file name is the factor name, every file in the folder is read as one, and a held name missing from a file lowers coverage instead of raising. Record how many files, which names, and the coverage line: numbers are comparable only on an identical factor set.",
    },
    {
      kind: 'table', kicker: 'ATTRIBUTION · THE TRAP', title: 'WIDEN THE BOOK, OR THE FIRST CUT LIES.', label: 'Widen the book',
      deck: 'A book of 8 names inside a 788-name index. Attribution Analysis 0.2.0.',
      table: {
        head: ['First cut', 'Book only', 'Widened'],
        rows: [
          ['Benchmark return, as a share of the index’s', '6.0%', '98.9%'],
          ['Active return (alpha column)', '+0.8845', '+0.1735'],
          ['Interaction', '+0.7415', '+0.0399'],
          ['Portfolio return', '+0.9305', '+0.9305'],
        ],
        strong: [1],
      },
      calloutLabel: 'THE RULE', callout: 'Every constituent in the weight file: zero where not held, each with a price series.',
      notes: "The first cut computes the benchmark's return only from the names in your portfolio file, so a benchmark weight on a name you never held has no return and silently drops out. Unwidened, the benchmark was only the slice of the index the book owned, its return 6% of the index's; the active return came out five times too large, and nearly all of it was filed under interaction, the effect least likely to be questioned. The book's own return did not move. Check before reading any row: the first cut's benchmark_returns against the index's own return over the same window.",
    },
    {
      kind: 'cards', dark: true, kicker: 'LIVE · WITH THE RESEARCHER', title: 'TAKE IT APART, IN CODE.', label: 'Take it apart, in code',
      deck: 'Section 5 of `experiment_1.ipynb`: two layers, every arm.', deckWidth: 620,
      paste: [
        '1 · Using attribution-analysis-runs, in section 5 of experiment_1.ipynb, read each run’s Daily_Weights, widen it to every benchmark constituent at zero, then run Brinson-Fachler and the factor model.',
        '2 · Beside every number: the coverage line, the factor files, the common window.',
      ],
      pasteSize: 24,
      behind: 'Behind the line: `Experiments/attribution_analysis.py` shapes the four inputs. `main()` writes no files: the tables come from the objects.',
      cards: [
        { h: 'DAILY, NOT REBALANCE', b: 'The library rejects the weight file.' },
        { h: 'SAME PRICE BASIS', b: 'The adjusted close the engine marked on.' },
        { h: 'COVERAGE, ALWAYS', b: 'No factor split without it.' },
      ],
      notes: "The library wants 240 to 260 rows a year, so the rebalance-only file is refused; that is it being right. The first header must be date_column, not date, whatever the docs say. Read .df and .brinston_fach_indexes from the first cut, .portfolio_attribution_ts and cummulative_pct_decomp() from the factor model; the residual has three spellings, so say which one a number came from. Call matplotlib.use('Agg') first, or the run blocks on a window, and never launch the dashboard from a notebook. The common date range is an output: state it beside the backtest window. Nothing in Attribution/ is committed.",
    },
    {
      kind: 'table', kicker: 'WORKED EXAMPLE · THE TWO LAYERS', title: 'MOSTLY MARKET. THEN MOMENTUM.', label: 'Mostly market',
      deck: 'The rule, from its first trade on 2017-01-04 to 2026-06-01: 160.02 points of excess. Attribution Analysis 0.2.0.',
      table: {
        head: ['Factor model', 'Points'],
        rows: [
          ['Market', '87.39'],
          ['Momentum', '15.44'],
          ['Beta · Size · Residual volatility', '7.60 · 6.86 · 5.82'],
          ['Value', '0.71'],
          ['Eleven sectors', '0.00 each'],
          ['Idiosyncratic', '36.19'],
        ],
        strong: [5],
      },
      calloutLabel: 'FIRST CUT', callout: 'Active return +52.14 = allocation +0.11, selection +12.26, interaction +39.78.',
      notes: "About three quarters of the excess is factors, 123.82 of 160.02 points (derived), most of it market, and 36 points are left for the idea. Two caveats travel with these numbers. Coverage: 686 of 1,399 identifiers priced. And the sector rows read zero because the sector files were empty, a gap in the inputs, not a finding. Interaction carries most of the first-cut active return, which is why the widening check comes first. The third pass has not been run; the findings say so, and an arm not run is reported as not run.",
    },

    // ───────────── 04 WHO EARNED IT — THEN JUDGE
    {
      kind: 'divider', kicker: 'SECTION 04', title: 'WHO EARNED IT — THEN WRITE IT',
      deck: 'one thing removed, each time · the model’s blind spot · the findings · then stop',
      notes: "The factor split says how much is idiosyncratic; it does not say what the idiosyncratic part is made of. That takes counterfactual books, never a formula: Paleologo's method, in Advanced Portfolio Management (2021), chapter 8, 'Understand Your Performance'. In this edition the arms are homework, inside the demo window. Then every number goes into FINDINGS_1.md, and we stop: the judging is session 06.",
    },
    {
      kind: 'cards', dark: true, kicker: 'HOMEWORK · INSIDE THE DEMO WINDOW', title: 'ONE THING REMOVED, EACH TIME.', label: 'One thing removed',
      deck: 'Each is a weight file the engine prices: same window, same costs.', deckWidth: 620,
      paste: [
        'Using alpha-decomposition, in section 6 of experiment_1.ipynb, price the arms BLUEPRINT_1.md names: equal weight within each date, up to 3 random draws from the eligible pool at the same sizes, and entries shifted one day. Publish K.',
      ],
      pasteSize: 24,
      size: 'sm', hl: 3, headSize: 28, bodySize: 25,
      cards: [
        { h: 'SIZING', b: 'Same names, equal weight.' },
        { h: 'SELECTION', b: 'Up to 3 random books, same sizes.' },
        { h: 'TIMING', b: 'Entries shifted one day.' },
        { h: 'THE FILTER', b: 'Signal off: your control.' },
      ],
      notes: "Homework, inside the demo window: at most 5 more books, a one-day timing shift and up to 3 random-draw books, then the single holdout run, after you push your holdout prediction and commit the record that opens it. Record them in FINDINGS_1.md before session 06. The Sharpe gap between the real book and each arm is that one thing's contribution. Drop economically insignificant positions from every book first, or slivers nobody bet on dominate. K is a trial count: publish it and the percentile, never the best draw. If your book is already equal weight, sizing skill is zero by construction: report it as zero. The arms overlap, so they are three questions, not a partition. And never tune the rule against them: a rule changed to beat its counterfactual is a new experiment.",
    },
    {
      kind: 'cards', kicker: 'WHEN THE MODEL IS BLIND', title: 'THE MODEL CANNOT SEE A TREND.', label: 'The model cannot see a trend',
      deck: 'Factor momentum ranks names against each other. A trend rule compares a name with its own past.',
      cards: [
        { h: 'RELATIVE', b: 'Momentum: this name against its peers.' },
        { h: 'ABSOLUTE', b: 'Trend, breakout, regime: against itself.' },
        { h: 'THE TEST', b: 'Same book, signal off. Price both.' },
      ],
      calloutLabel: 'A FINDING, NOT A FAILURE', callout: 'If the claim says momentum and means trend, rename it in `OBJECTIVE.md`.',
      notes: "A threshold signal, a moving-average cross, a breakout, a drawdown gate, can beat every benchmark while the model credits almost nothing to the factor its thesis is named after. Do not conclude the signal is weak; conclude the model cannot see it, and run the exclusion-filter test. Same ranking, same count, same weights, same trigger, only the signal's condition dropped: that is your control. If the two books are close, the honest name for the strategy is top-N by the sizing column, and the claim goes into OBJECTIVE.md as falsified.",
    },
    {
      kind: 'table', kicker: 'WORKED EXAMPLE · THE ARMS', title: 'THE CROSS COSTS IDIOSYNCRATIC RETURN.', label: 'The cross costs',
      deck: 'Idiosyncratic points, factor model, same window. Attribution Analysis 0.2.0.', deckWidth: 460,
      table: {
        head: ['Arm', 'Idiosyncratic points'],
        rows: [
          ['The rule', '36.19'],
          ['The control · golden cross off', '40.99'],
          ['Diagnostic arm', '50.02'],
          ['Random books · 5 draws, same sizes', '−11.78 to 35.31'],
          ['Random books · mean', '22.4'],
        ],
        strong: [0],
      },
      calloutLabel: 'READING', callout: 'The liquidity ranking beats random names. The cross in the name subtracts.',
      notes: "Read the arms before crediting the signal in the strategy's name. The diagnostic arm is the example's first design, with its slower exit. The rule keeps less idiosyncratic return than its own control, so the golden cross costs some; the random draws land well below the rule, so the ranking earns most of it. The findings read the cross as trading beta for momentum, and its small Sharpe edge as timing, which no shifted-entry arm has priced yet. Five draws is a small K: say so beside the percentile. An arm you did not run is reported as not run, never inferred.",
    },
    {
      kind: 'cards', dark: true, kicker: 'LIVE · WITH THE RESEARCHER', title: 'WRITE IT SO IT CAN BE CHALLENGED.', label: 'Write the findings',
      deck: '`FINDINGS_1.md`, from the notebook’s outputs. Session 06 reads nothing else.', deckWidth: 620,
      paste: [
        'Using experiment-lifecycle, fill FINDINGS_1.md from experiment_1.ipynb’s outputs: the book and its control, net, both cost rows, both attribution layers with coverage and window, the arms, every excluded run by name, the trial count. Quote every number from engine_summary.csv or run_manifest.csv; compute none.',
      ],
      pasteSize: 24,
      behind: 'Behind the line: the findings follow the template’s sections, and `RESULTS.md` is compiled from them, never written by hand.',
      cards: [
        { h: 'THE BOOK, PRICED', b: 'Every row on one window, net.' },
        { h: 'BOTH LAYERS', b: 'Each number with its coverage.' },
        { h: 'THE COUNT', b: 'Every variant you ranked.' },
      ],
      calloutLabel: 'THE BLUEPRINT', callout: 'Untouched. Session 06 sets the findings against it.',
      notes: "The template's FINDINGS_1.md has its sections already: status, the predictions evaluated, the book priced by the engine, what the benchmark is structurally, the trial count, attribution, what is open, caveats. Fill the numbers today, and on the public path the factor layer reads not assessed; the verdict on each prediction can wait for the challenge in session 06, but the evidence cannot. It is rewritten when a result changes, never appended to; the journal is the append-only file. If a number is not in FINDINGS_1.md it does not exist next week: session 06's rule is that a number not in the file is not in the room.",
    },
    {
      kind: 'stop', kicker: 'YOUR TURN · THE STOP', title: 'STOP HERE, ON PURPOSE.', label: 'Stop here',
      deck: 'Left: on disk before you leave. Right: not done, on purpose.',
      leftLabel: 'ON DISK WHEN YOU LEAVE',
      left: [
        '`Backtest/` — every row priced net, one window',
        'Section 8, Verify — every run valued to the end',
        '`Attribution/` — two layers, coverage logged',
        '`run_manifest.csv` — every run, with its window and costs',
        '`FINDINGS_1.md` — every number, quoted from a run',
        '`RESULTS.md` — compiled from the findings',
        'A `JOURNAL_1.md` entry — each excluded run, by name',
      ],
      rightLabel: 'NOT TODAY',
      right: [
        'The arms and the holdout — homework, in the window',
        'The third pass — homework, if you can',
        'The challenge and the gate — session 06',
        'Experiment 2 — a new blueprint first',
      ],
      calloutLabel: 'WHY WE STOP', callout: 'A rule changed after the result is a new experiment, with a new blueprint.',
      notes: "Before you leave, everything on the left exists. Backtest/ and Attribution/ are gitignored: the numbers reach FINDINGS_1.md, and the notebook, outputs stripped, is the method. Commit the notebook and the documents. The temptation now is to fix the rule; resist it. Session 06 challenges this run against the blueprint you committed in session 04, and a rule that moved in between has nothing left to be challenged against.",
    },

    // ───────────── Close
    {
      kind: 'cards', kicker: 'BEFORE SESSION 06 · FINAL STRATEGY PREP & PRESENTATION', title: 'TO DO.', label: 'To do',
      deck: 'Commit the method and the documents, never `Backtest/`.',
      cards: [
        { h: 'YOUR BOOK, NET', b: 'Priced by the engine, costs on.', chip: 'FINDINGS_1.md' },
        { h: 'YOUR CONTROL', b: 'One ingredient out, same dates.', chip: 'Portfolio/' },
        { h: 'THE HOMEWORK RUNS', b: 'A one-day shift, up to 3 random books, the holdout once.', chip: 'TRIALS.csv' },
        { h: 'YOUR COUNT', b: 'Every variant you ranked.', chip: 'RESULTS.md' },
      ],
      calloutLabel: 'IF YOU CAN', callout: 'The third pass: Brinson-Fachler on the residual. Almost nobody does; the gate asks.',
      notes: "These four cards are session 06's opening slide, word for word: it starts with hands up and the file open. The homework runs stay inside the demo window and the budget: at most 5 more books, the holdout opened once, after its prediction is pushed. The third pass: build the residual series from the factor model's output and run the first cut on it in the notebook, saying in FINDINGS_1.md that it was done that way. If your trend rule was blind to the model, the exclusion-filter result goes in the findings in those terms. Read two of the leads, and say your trial count without looking.",
    },
    { kind: 'pillars', session: 'S05' },
    {
      kind: 'refs', kicker: 'REFERENCES · SESSION 05', title: 'THE READING LIST.', label: 'Reading list',
      deck: 'Six leads. Read two; start with Brinson & Fachler: the first cut, from its source.',
      groups: [
        {
          label: 'THE ATTRIBUTION · WHERE IT CAME FROM',
          items: [
            { a: 'Fama & MacBeth', y: '1973', t: 'Risk, Return, and Equilibrium: Empirical Tests', tag: 'the factor model' },
            { a: 'Brinson & Fachler', y: '1985', t: 'Measuring Non-U.S. Equity Portfolio Performance', tag: 'the first cut' },
            { a: 'Brinson, Hood & Beebower', y: '1986', t: 'Determinants of Portfolio Performance' },
          ],
        },
        {
          label: 'THE FACTORS AND THE COSTS · WHAT ELSE IT COULD BE',
          items: [
            { a: 'Fama & French', y: '1993', t: 'Common Risk Factors in the Returns on Stocks and Bonds' },
            { a: 'Carhart', y: '1997', t: 'On Persistence in Mutual Fund Performance', tag: 'f_momentum' },
            { a: 'Novy-Marx & Velikov', y: '2016', t: 'A Taxonomy of Anomalies and Their Trading Costs', tag: 'net, or nothing' },
          ],
        },
      ],
      calloutLabel: 'ALSO READ', callout: 'The Backtest Engine and Attribution Analysis methodology docs; Paleologo (2025), ‘Ex-Post Performance Attribution’.',
      notes: "Same rule as every week: read two, compile them, cite them. The first group is where today's tools come from: Fama-MacBeth's cross-sectional regressions behind the factor model, and Brinson's allocation-and-selection split behind the first cut. The second asks what else your return could be: the factors a referee will name first, momentum among them, and what trading costs do to an anomaly on paper. The overfitting papers, the deflated Sharpe among them, are session 06's list. Paleologo's Advanced Portfolio Management (2021), chapter 8, 'Understand Your Performance', is the method the alpha-decomposition skill follows; write its note before citing it in FINDINGS_1.md.",
    },
    {
      kind: 'closing', line1: 'NOW TAKE IT', line2: 'APART.',
      deck: 'A curve says what happened. Attribution says why. The arms say who.',
      boxes: [
        { h: 'THE ENGINE', chip: 'Backtest/', b: 'Net, verified, one window.' },
        { h: 'THE LIBRARY', chip: 'Attribution/', b: 'Three cuts, coverage stated.' },
        { h: 'BRING', b: 'FINDINGS_1.md, your trial count.' },
      ],
      next: [['Next', 'SESSION 06'], ['Topic', 'FINAL STRATEGY PREP & PRESENTATION', 32], ['You leave with', 'THE CHALLENGE, N, A DEFLATED SHARPE, THE GATE VERDICT, A REHEARSED TALK.', 28]],
      notes: "A book that beats its benchmark has been observed, not understood. Today you priced it net, proved the run was whole, read it against its control, took it apart three ways and asked who earned the residual. Most first experiments do not graduate, the worked example among them, and the ones that fail honestly are the ones that teach. Bring FINDINGS_1.md and your trial count: session 06 challenges the run, tries to break it, puts it to the gate, and has you defend it in ten minutes.",
    },
    {
      kind: 'disclaimer', footer: 'Session 05 · Backtest and Attribution',
      text: 'The content of this document is strictly informative and does not constitute an offer or recommendation of KaxaNuk S.C. to buy, sell or subscribe any kind of securities, or to perform specific transactions. KaxaNuk S.C. is not responsible for the interpretation given to the information and/or content of this document. KaxaNuk S.C. does not accept and will not accept any liability for losses or damages resulting from investment decisions that would have been based on this document. The persons responsible for the preparation of this content certify that the opinions stated reflect their own point of view and do not represent the view of KaxaNuk S.C. nor of its officials. This document is based on publicly available information which is considered reliable, however KaxaNuk S.C. makes no warranty regarding its accuracy or completeness.',
      notes: 'The same disclaimer as every session. Every performance number shown today came from the engine, and none of it is a recommendation.',
    },
  ],
};
