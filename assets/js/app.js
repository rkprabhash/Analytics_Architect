// ─────────────────────────────────────────────────────────────────
// DATA — PHASES
// ─────────────────────────────────────────────────────────────────
const PHASES = [
  {
    num:1, color:'c1', label:'Phase 1', title:'Foundations: SQL, Python & Setup', dur:'Month 1 · Most important month',
    learn:['Advanced SQL: window functions (ROW_NUMBER, LAG/LEAD, SUM OVER PARTITION)','CTEs — replace every subquery with WITH clauses','EXPLAIN plans — understand partition pruning and scan costs','Python: variables, loops, functions, file I/O','Pandas: read_csv, groupby, merge, reshape','Git: branches, commits, pull requests, .gitignore'],
    build:['Create GitHub repo: ott-analytics (public)','Set up BigQuery Sandbox + dbt Cloud free account','Python script: load OTT CSV → BigQuery raw layer','Write 5 SQL queries using window functions on your dataset','Build a quick Power BI dashboard from the raw layer — show your existing strength'],
    resources:[
      {pri:'MUST',label:'Mode SQL Tutorial',url:'https://mode.com/sql-tutorial/',desc:'Best free analytics SQL resource. Window functions chapter is the one to focus on first.'},
      {pri:'MUST',label:'GitHub Skills – Intro to GitHub',url:'https://skills.github.com/',desc:'1-hour browser-based course. Do this on Day 1 before anything else.'},
      {pri:'MUST',label:'Kaggle Python + Pandas Courses',url:'https://www.kaggle.com/learn',desc:'Free, ~5 hrs total for both. Clear and practical — exactly what a BI person needs.'},
      {pri:'SHOULD',label:'StrataScratch – Easy SQL problems',url:'https://www.stratascratch.com/',desc:'Start with Easy tier, window functions category. Build the daily habit now.'},
    ],
    projects:[
      {e:'🎬',t:'OTT Viewership Analysis',d:'Main portfolio project. Download Netflix/TMDB dataset from Kaggle and build a raw ingestion pipeline.',diff:'easy'},
      {e:'🏏',t:'IPL Cricket Stats Pipeline',d:'Public IPL dataset → BigQuery. Fun, well-structured data with natural dims (match, team, player, venue).',diff:'easy'},
      {e:'🎵',t:'Your Own Spotify Data',d:'Export your Spotify listening history and build a personal analytics warehouse. Interviewers love personal projects.',diff:'easy'},
    ]
  },
  {
    num:2, color:'c2', label:'Phase 2', title:'Analytics Engineering with dbt', dur:'Month 2 · The core skill',
    learn:['dbt Fundamentals: sources, ref(), materialisation strategies','Tests: not_null, unique, accepted_values, relationships','Documentation: schema.yml, dbt docs generate, lineage graph','Source freshness — alert when upstream data goes stale','Jinja templating basics inside dbt models'],
    build:['Staging layer: stg_viewership, stg_shows, stg_channels','Intermediate: int_viewership_enriched (join + business rules)','Dims: dim_show, dim_channel, dim_date, dim_region','Fact: fact_viewership — one row per device-show-day','Mart: mart_content_performance — BI-ready aggregate','Screenshot the lineage graph → add to GitHub README'],
    resources:[
      {pri:'MUST',label:'dbt Fundamentals (Official)',url:'https://courses.getdbt.com/courses/fundamentals',desc:'Free, official, ~8 hours. The most important course on this entire list. Do not skip it.'},
      {pri:'MUST',label:'dbt Documentation Site',url:'https://docs.getdbt.com/',desc:'Your primary reference while building. Better than any tutorial once you have the fundamentals.'},
      {pri:'SHOULD',label:'dbt Slack – #getting-started',url:'https://www.getdbt.com/community/join-the-community',desc:'30k+ AEs. Post your questions here — responses are usually fast and high quality.'},
      {pri:'SHOULD',label:'"What is Analytics Engineering?" – dbt Blog',url:'https://www.getdbt.com/blog/what-is-analytics-engineering',desc:'Read this in Week 1 of Month 2. Frames exactly what role you are training for.'},
    ],
    projects:[
      {e:'📺',t:'OTT Star Schema (main)',d:'Extend your Month 1 raw data into a full Kimball star schema using dbt layers.',diff:'med'},
      {e:'🛒',t:'E-Commerce Orders Mart',d:'Use a public e-commerce dataset (Olist on Kaggle). Different domain = shows breadth to interviewers.',diff:'med'},
      {e:'🌦️',t:'Weather + Energy Correlation',d:'Join public weather API data with energy usage CSVs. Practice multi-source dbt models.',diff:'med'},
    ]
  },
  {
    num:3, color:'c3', label:'Phase 3', title:'Data Quality & Workflow Maturity', dur:'Month 3 · Production-quality work',
    learn:['dbt-utils package: recency, expression_is_true, cardinality tests','Custom generic tests via Jinja macros','Test severity: warn vs error (stale data ≠ broken pipeline)','Exposures: register your Power BI dashboard in dbt lineage','SQLFluff linting as a pre-commit Git hook'],
    build:['Install dbt-utils; add 3 custom tests to fact_viewership','Document every column in all fact + dim models in schema.yml','Configure source freshness — alert if raw tables > 24h old','Set up dbt Cloud daily refresh job (06:00) + slim CI on PR','Register Power BI dashboard as a dbt exposure'],
    resources:[
      {pri:'MUST',label:'dbt-utils Package Docs',url:'https://github.com/dbt-labs/dbt-utils',desc:'The standard package for extended testing and utility macros. Read the test section first.'},
      {pri:'MUST',label:'dbt Testing Best Practices',url:'https://docs.getdbt.com/best-practices/writing-custom-generic-tests',desc:'Official guide on writing generic tests. This is what separates a portfolio project from a production one.'},
      {pri:'SHOULD',label:'SQLFluff Docs',url:'https://docs.sqlfluff.com/',desc:'Linting tool for SQL. Takes 30 min to set up as a pre-commit hook. Makes your SQL look professional.'},
      {pri:'OPT',label:'Locally Optimistic – Data Quality articles',url:'https://locallyoptimistic.com/topic/data-quality/',desc:'Practitioner writing on data quality culture and tooling. Good for building mental models.'},
    ],
    projects:[
      {e:'📊',t:'Data Quality Dashboard',d:'Build a Power BI dashboard that shows dbt test results over time. Reuses your existing BI skill in a new context.',diff:'med'},
      {e:'🔔',t:'Slack Alert on Test Failure',d:'Use dbt Cloud webhooks + a Slack app to notify a channel when tests fail. Real production pattern.',diff:'med'},
      {e:'🗺️',t:'Lineage Documentation Site',d:'Run dbt docs generate and deploy the docs site to GitHub Pages. Looks great in a portfolio.',diff:'easy'},
    ]
  },
  {
    num:4, color:'c4', label:'Phase 4', title:'Orchestration + Advanced Modelling', dur:'Months 4 – 5 · Depth and production pipelines',
    learn:['Airflow: DAGs, operators, sensors, XComs, retries','Incremental dbt models — unique_key, merge vs append strategy','Snapshots (SCD Type 2) — track historical dim changes','Macros + dbt_utils.generate_surrogate_key','Kimball: Bus Matrix, fact table types, conformed dimensions'],
    build:['Airflow DAG: extract_raw → validate → dbt_run → notify','Convert fact_viewership to incremental (is_incremental())','SCD Type 2 snapshot on dim_show (genre changes, retirements)','Bus matrix mapping your full OTT domain','Read Kimball Ch. 1–3, 5–6 alongside building'],
    resources:[
      {pri:'MUST',label:'Astronomer Airflow Academy',url:'https://academy.astronomer.io/',desc:'Free, from the company that maintains Airflow. The intro course is the right starting point.'},
      {pri:'MUST',label:'Kimball Group – Free Articles',url:'https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/',desc:'Read the Bus Matrix and Fact Table Fundamentals articles before buying the book.'},
      {pri:'MUST',label:'The Data Warehouse Toolkit (Book)',url:'https://www.amazon.com/Data-Warehouse-Toolkit-Definitive-Dimensional/dp/1118530802',desc:'Ch. 1–3, 5–6 are essential. Read alongside Month 5 building — not before.'},
      {pri:'SHOULD',label:'dbt Incremental Models Docs',url:'https://docs.getdbt.com/docs/build/incremental-models',desc:'Official reference for every incremental strategy option. Read this before writing a single is_incremental() model.'},
    ],
    projects:[
      {e:'📰',t:'News API Sentiment Pipeline',d:'Ingest news headlines via API → score sentiment in Python → warehouse in BigQuery via Airflow DAG.',diff:'hard'},
      {e:'🚌',t:'Public Transport Delays',d:'Government open data for transport delays. Natural accumulating snapshot (trip → departed → arrived → delayed).',diff:'hard'},
      {e:'💹',t:'Stock + Social Sentiment',d:'Join Yahoo Finance data with Reddit sentiment. Good for demonstrating multi-source modelling.',diff:'hard'},
    ]
  },
  {
    num:5, color:'c5', label:'Phase 5', title:'Portfolio Polish & Job Hunt', dur:'Month 6 · Convert building into a job',
    learn:['Architecture diagrams — how to communicate system design visually','Writing a data dictionary (what business users actually need)','SQL interview patterns: complex window functions, recursive CTEs','dbt system design questions common in AE interviews','How to walk through a portfolio project in 5 minutes'],
    build:['README: architecture diagram, tech stack, how-to-run, sample outputs','Data dictionary for all fact + dim + mart models','Add a second project in a different domain for breadth','LinkedIn headline + about section rewrite','2 StrataScratch Hard problems per day'],
    resources:[
      {pri:'MUST',label:'StrataScratch – Medium/Hard SQL',url:'https://www.stratascratch.com/',desc:'Do this daily from Month 6. Focus on window functions + multi-join problems. This is real interview prep.'},
      {pri:'MUST',label:'dbt Slack – #jobs channel',url:'https://www.getdbt.com/community/join-the-community',desc:'Many AE roles are posted here before they hit LinkedIn. Check weekly.'},
      {pri:'MUST',label:'draw.io (Architecture Diagrams)',url:'https://app.diagrams.net/',desc:'Free, browser-based. Use it to create the Raw → Staging → Mart diagram for your README.'},
      {pri:'SHOULD',label:'Locally Optimistic – Career Articles',url:'https://locallyoptimistic.com/category/career/',desc:'Honest writing on data careers. "Metrics for your career" is worth reading before applying.'},
    ],
    projects:[
      {e:'✍️',t:'Write a Technical Blog Post',d:'"How I built a streaming data warehouse with dbt + BigQuery" — publish on Hashnode or Medium. Generates recruiter inbound.',diff:'med'},
      {e:'🎥',t:'5-Minute Architecture Walkthrough',d:'Record a Loom video walking through your OTT project architecture. Use it as a portfolio link in applications.',diff:'easy'},
      {e:'📦',t:'Second Domain Project',d:'E-commerce or finance data with a clean README. Interviewers see breadth — two domains > one deep project.',diff:'med'},
    ]
  },
  {
    num:6, color:'c6', label:'Phase 6', title:'Databricks, Spark & Architecture Thinking', dur:'Months 7 – 9 · Advanced / in-role learning',
    learn:['PySpark DataFrames — map your Pandas knowledge to the Spark API','Delta Tables: ACID, time travel, schema evolution','Medallion Architecture (Bronze → Silver → Gold)','OPTIMIZE, ZORDER, partition strategy and when to use each','Lakehouse architecture: why it exists and when to choose it'],
    build:['Convert OTT project to Databricks Medallion Architecture','Delta Table with time travel (query data as it was last week)','BRD + HLD + LLD + Runbook for your OTT project','Cost optimisation analysis: BigQuery on-demand vs slot reservations','Unity Catalog governance setup on Databricks Community Edition'],
    resources:[
      {pri:'MUST',label:'Databricks Academy – Data Engineering',url:'https://academy.databricks.com/',desc:'Free Community Edition. The official course covers DataFrames, Delta, and Medallion Architecture end-to-end.'},
      {pri:'MUST',label:'Fundamentals of Data Engineering (Book)',url:'https://www.oreilly.com/library/view/fundamentals-of-data/9781098108298/',desc:'Joe Reis & Matt Housley. Read Ch. 1, 3, 5, 8. Best modern overview of the data engineering landscape.'},
      {pri:'SHOULD',label:'Delta Lake Documentation',url:'https://docs.delta.io/latest/index.html',desc:'Primary reference while building Delta Tables. The "Best Practices" section is particularly useful.'},
      {pri:'OPT',label:'benn.substack – Architectural Thinking',url:'https://benn.substack.com/',desc:'dbt Labs co-founder. Opinionated takes on data systems that build architectural intuition.'},
    ],
    projects:[
      {e:'🏅',t:'OTT → Databricks Migration',d:'Migrate your entire OTT project from BigQuery+dbt to Databricks Delta Lake. Same data, new architecture — deep learning.',diff:'hard'},
      {e:'🌊',t:'Simulated Real-Time Streaming',d:'Use Databricks Structured Streaming + a Python fake-data generator to simulate live viewership events.',diff:'hard'},
      {e:'📋',t:'Full Architecture Document',d:'Write a proper BRD, HLD, LLD and Runbook for the OTT project. This is what Analytics Architect interviews test.',diff:'med'},
    ]
  }
];

// ─────────────────────────────────────────────────────────────────
// DATA — WEEKS
// ─────────────────────────────────────────────────────────────────
const WEEKS = {
  'Month 1':{focus:'SQL · Python · Environment',weeks:[
    {label:'Week 1',focus:'Environment Setup + SQL Start',tasks:[
      {t:'Create GitHub repo: ott-analytics (set to public)',d:'This is your portfolio home for the next 6 months'},
      {t:'Enable Google BigQuery Sandbox',d:'cloud.google.com/bigquery/docs/sandbox — no credit card needed'},
      {t:'Create dbt Cloud free Developer account',d:'cloud.getdbt.com — connect it to BigQuery'},
      {t:'Install VS Code + dbt Power User extension + SQLFluff',d:'Your dev environment for the full roadmap'},
      {t:'Complete GitHub Skills: Introduction to GitHub',d:'skills.github.com — takes about 1 hour'},
      {t:'Start Mode SQL Tutorial: Basic SQL section',d:'mode.com/sql-tutorial — do the first 3 chapters'},
    ]},
    {label:'Week 2',focus:'SQL Deep Dive + Kaggle Python',tasks:[
      {t:'Complete Mode SQL Tutorial: Intermediate SQL (window functions)',d:'This is Priority #1 — do not rush it'},
      {t:'Practice 5 window function queries on any dataset you have',d:'ROW_NUMBER, RANK, SUM OVER PARTITION are the most common in interviews'},
      {t:'Start Kaggle Python course — complete modules 1–4',d:'kaggle.com/learn/python'},
      {t:'Download an OTT/streaming dataset from Kaggle',d:'Netflix prize data or TMDB dataset both work well'},
      {t:'Write first SQL query on the downloaded data',d:'Try: top 10 shows by total watch time, partitioned by region'},
    ]},
    {label:'Week 3',focus:'Python + First Pipeline',tasks:[
      {t:'Complete Kaggle Python course (modules 5–7)',d:'Focus on file handling and functions'},
      {t:'Complete Kaggle Pandas course (all 6 modules)',d:'Prioritise groupby, merge, and pivot'},
      {t:'Write Python script to read the OTT CSV and print shape + basic stats',d:'Just get comfortable with the data'},
      {t:'Write Python script to load OTT CSV → BigQuery raw table',d:'Use the google-cloud-bigquery Python client'},
      {t:'Commit everything to GitHub with clear commit messages',d:'First real git workflow practice'},
    ]},
    {label:'Week 4',focus:'Build + Review + StrataScratch',tasks:[
      {t:'Write 5 advanced SQL queries on your BigQuery raw data',d:'Use window functions, CTEs, and date functions'},
      {t:'Build a simple Power BI dashboard from the raw BigQuery table',d:'Show your existing strength — this is fast for you'},
      {t:'Start StrataScratch — attempt 3 Easy SQL problems',d:'stratascratch.com — build the daily habit'},
      {t:'Review Month 1: is SQL feeling more natural? What gaps remain?',d:'Write a short note to yourself'},
      {t:'Update GitHub README with what you have built so far',d:'One paragraph describing the project'},
    ]},
  ]},
  'Month 2':{focus:'dbt · Star Schema · Testing',weeks:[
    {label:'Week 1',focus:'dbt Fundamentals Course',tasks:[
      {t:'Complete dbt Fundamentals modules 1–2: What is AE? + Models',d:'courses.getdbt.com — free, official'},
      {t:'Set up your dbt project in dbt Cloud connected to BigQuery',d:'Follow the quickstart in the dbt docs'},
      {t:'Create your first staging model: stg_viewership',d:'Just rename columns and cast types — no business logic yet'},
      {t:'Run dbt run and verify the table appears in BigQuery',d:'The first successful run is a milestone'},
      {t:'Read: "What is Analytics Engineering?" on the dbt blog',d:'getdbt.com/blog — frames the role clearly'},
    ]},
    {label:'Week 2',focus:'Tests + Docs + Staging Layer',tasks:[
      {t:'Complete dbt Fundamentals modules 3–5: Tests + Docs + Sources',d:''},
      {t:'Build remaining staging models: stg_shows, stg_channels, stg_regions',d:''},
      {t:'Add not_null and unique tests to all staging models',d:'Every primary key should be tested'},
      {t:'Write schema.yml descriptions for all staging model columns',d:''},
      {t:'Configure a source with freshness check on the raw table',d:'Alert if raw data is more than 24h old'},
    ]},
    {label:'Week 3',focus:'Intermediate + Dimensions',tasks:[
      {t:'Build int_viewership_enriched: join staging models + apply business rules',d:''},
      {t:'Build dim_channel, dim_region — these are simple first',d:''},
      {t:'Build dim_date using dbt-utils date_spine macro',d:'Install dbt-utils package first'},
      {t:'Build dim_show — include a basic SCD flag column for later',d:''},
      {t:'Add referential integrity tests between dims',d:''},
    ]},
    {label:'Week 4',focus:'Fact + Mart + Lineage',tasks:[
      {t:'Build fact_viewership: one row per device-show-day, all FK keys',d:''},
      {t:'Build mart_content_performance: pre-aggregated for Power BI',d:''},
      {t:'Run dbt docs generate and dbt docs serve',d:''},
      {t:'Screenshot the lineage graph and add to your GitHub README',d:'This is a portfolio signal interviewers notice'},
      {t:'Update Power BI dashboard to use the mart layer instead of raw',d:'Show the full lifecycle working end-to-end'},
    ]},
  ]},
  'Month 3':{focus:'Quality · Docs · Scheduling',weeks:[
    {label:'Week 1',focus:'Advanced Testing',tasks:[
      {t:'Install dbt-utils and add 3 non-standard tests to fact_viewership',d:'Try recency, expression_is_true, not_empty_string'},
      {t:'Write a custom generic Jinja test: viewership_count must be > 0',d:'Understand the macro pattern'},
      {t:'Set severity: warn on freshness tests (stale ≠ broken)',d:'Production discipline'},
      {t:'Run dbt test and review the output carefully',d:''},
    ]},
    {label:'Week 2',focus:'Full Documentation',tasks:[
      {t:'Write descriptions for every column in fact_viewership',d:'Not just column names — what the value means to the business'},
      {t:'Write descriptions for every dim table column',d:''},
      {t:'Add a model-level description to every model in schema.yml',d:''},
      {t:'Register your Power BI dashboard as a dbt exposure',d:'It will appear in the lineage graph'},
    ]},
    {label:'Week 3',focus:'Git Workflow + Linting',tasks:[
      {t:'Install SQLFluff and run it against all your SQL models',d:'Fix every warning'},
      {t:'Set up SQLFluff as a pre-commit hook',d:'docs.sqlfluff.com — takes about 30 minutes'},
      {t:'Create a feature branch and make a change via PR',d:'Practice the real workflow'},
      {t:'Write a PR description explaining what you changed and why',d:'Hiring managers ask to see this'},
    ]},
    {label:'Week 4',focus:'dbt Cloud Scheduling',tasks:[
      {t:'Create a dbt Cloud daily refresh job at 06:00',d:'Full dbt build — all models'},
      {t:'Create a dbt Cloud slim CI job triggered on PR to main',d:'dbt build --select state:modified+'},
      {t:'Configure email alert on job failure',d:''},
      {t:'Let the daily job run 3 times and verify it works reliably',d:''},
      {t:'Month 3 review: does the project feel production-quality?',d:''},
    ]},
  ]},
  'Month 4–5':{focus:'Airflow · Kimball · Advanced dbt',weeks:[
    {label:'Week 1 (M4)',focus:'Airflow Fundamentals',tasks:[
      {t:'Complete Astronomer Airflow intro course: DAGs and operators',d:'academy.astronomer.io'},
      {t:'Install Airflow locally using the Astro CLI (takes ~10 minutes)',d:'astronomer.io/docs/astro/cli/install-cli'},
      {t:'Write your first DAG: two tasks with a dependency',d:'Just print statements — understand the mechanics'},
      {t:'Read Kimball Group Bus Matrix article',d:'kimballgroup.com — free online'},
    ]},
    {label:'Week 2 (M4)',focus:'OTT Pipeline DAG',tasks:[
      {t:'Build extract_raw task: Python operator that loads CSV to BigQuery',d:''},
      {t:'Build validate_schema task: check column types and row counts',d:''},
      {t:'Build dbt_run task: BashOperator calling dbt build',d:''},
      {t:'Wire them together with dependencies and test locally',d:''},
    ]},
    {label:'Week 3 (M4)',focus:'Error Handling + Retry',tasks:[
      {t:'Add retries=3 and retry_delay to all tasks',d:''},
      {t:'Add email_on_failure to the DAG',d:''},
      {t:'Write structured logs from each task (JSON format)',d:''},
      {t:'Deliberately break a task and verify retry behaviour',d:'Test that your error handling works'},
    ]},
    {label:'Week 4 (M4)',focus:'Incremental dbt Models',tasks:[
      {t:'Convert fact_viewership to an incremental model',d:'Add is_incremental() macro and unique_key'},
      {t:'Test the incremental run: insert new rows and verify merge',d:''},
      {t:'Understand the difference between merge, append, and delete+insert strategies',d:'Read the dbt docs page on this'},
      {t:'Read Kimball Ch. 1–3: Bus Matrix and Fact Table Fundamentals',d:''},
    ]},
    {label:'Week 5 (M5)',focus:'SCD Type 2 + Snapshots',tasks:[
      {t:'Build a dbt snapshot on dim_show to capture historical changes',d:'updated_at strategy'},
      {t:'Test the snapshot: update a show record and verify history is captured',d:''},
      {t:'Write a macro for surrogate key generation using dbt_utils',d:''},
      {t:'Read Kimball Ch. 5–6: SCD and Accumulated Snapshot patterns',d:''},
    ]},
    {label:'Week 6 (M5)',focus:'Full End-to-End + Bus Matrix',tasks:[
      {t:'Run the full Airflow → dbt → BigQuery pipeline end-to-end',d:''},
      {t:'Draw your OTT Bus Matrix: all fact tables × conformed dimensions',d:'Use draw.io'},
      {t:'Design an Accumulating Snapshot for the content release lifecycle',d:'Content ideation → production → release → takedown'},
      {t:'Months 4–5 review: can you explain every architecture decision you made?',d:''},
    ]},
  ]},
  'Month 6':{focus:'Portfolio · Job Hunt · Interviews',weeks:[
    {label:'Week 1',focus:'Portfolio Polish',tasks:[
      {t:'Write a proper GitHub README with architecture diagram',d:'Use draw.io — Raw → Staging → Mart flow'},
      {t:'Write a data dictionary (every column in fact + dims)',d:'What each column means to a business user, not just the data type'},
      {t:'Screenshot: lineage graph, Airflow DAG, Power BI dashboard — all in README',d:''},
      {t:'Deploy dbt docs to GitHub Pages',d:'Free and looks very professional'},
    ]},
    {label:'Week 2',focus:'LinkedIn + Second Project',tasks:[
      {t:'Rewrite LinkedIn headline: "Analytics Engineer | dbt · BigQuery · Airflow"',d:''},
      {t:'Update LinkedIn About section — lead with the transition story',d:''},
      {t:'Write a LinkedIn post about your OTT project',d:'What you built, what you learned. This generates recruiter inbound.'},
      {t:'Start a second small project in a different domain (e-commerce or finance)',d:'Even 2 weeks of clean dbt models shows breadth'},
    ]},
    {label:'Week 3',focus:'Applications + SQL Prep',tasks:[
      {t:'Submit 10 applications: Analytics Engineer, BI Engineer, Data Engineer (AE-focused)',d:''},
      {t:'Join dbt Slack #jobs and check it weekly',d:''},
      {t:'Do 2 StrataScratch Medium/Hard problems every day this week',d:'Window functions and multi-table joins only'},
      {t:'Attend a local or virtual data engineering meetup',d:'Real conversations convert faster than cold applications'},
    ]},
    {label:'Week 4',focus:'Interview Prep + Walkthroughs',tasks:[
      {t:'Prepare a 5-minute portfolio walkthrough: problem → architecture → trade-offs → result',d:''},
      {t:'Practise explaining dbt concepts: ref() vs source(), incremental strategies, SCD Type 2',d:''},
      {t:'Practise a live data modelling exercise: design a star schema from a vague BRD',d:''},
      {t:'Do 2 mock interviews (find a partner in dbt Slack or use Pramp)',d:''},
    ]},
  ]},
  'Months 7–9':{focus:'Databricks · Spark · Architecture',weeks:[
    {label:'Week 1',focus:'Databricks + PySpark Basics',tasks:[
      {t:'Create Databricks Community Edition account',d:'community.cloud.databricks.com — free'},
      {t:'Complete Databricks Academy: Introduction to Databricks',d:'academy.databricks.com'},
      {t:'Write your first PySpark DataFrame operations on the OTT dataset',d:'Select, filter, groupBy, join — map from Pandas'},
    ]},
    {label:'Week 2',focus:'Delta Tables',tasks:[
      {t:'Create a Delta Table from your OTT dataset',d:''},
      {t:'Test time travel: query data as it was 7 days ago',d:'SELECT * FROM table TIMESTAMP AS OF ...'},
      {t:'Test schema evolution: add a column and verify history is preserved',d:''},
      {t:'Read the Delta Lake best practices docs',d:'docs.delta.io'},
    ]},
    {label:'Week 3',focus:'Medallion Architecture Migration',tasks:[
      {t:'Re-architect the OTT project as Bronze → Silver → Gold in Databricks',d:'Bronze = raw, Silver = cleaned, Gold = aggregated'},
      {t:'Run OPTIMIZE and ZORDER on the Gold Delta Table',d:'Understand the performance impact'},
      {t:'Compare query performance before and after optimisation',d:''},
    ]},
    {label:'Week 4+',focus:'Architecture Documents',tasks:[
      {t:'Read Fundamentals of Data Engineering Ch. 1, 3, 5, 8',d:'Joe Reis & Matt Housley'},
      {t:'Write a BRD for the OTT project as if presenting to a stakeholder',d:''},
      {t:'Write an HLD (High Level Design) and LLD (Low Level Design)',d:''},
      {t:'Write a Runbook for the Airflow pipeline',d:'How to triage failures, restart, scale'},
    ]},
  ]},
};

// ─────────────────────────────────────────────────────────────────
// DATA — COURSES
// ─────────────────────────────────────────────────────────────────
const COURSES = [
  {tag:'FREE',title:'dbt Fundamentals (Official)',url:'https://courses.getdbt.com/courses/fundamentals',desc:'The single most important course on this list. Official, free, ~8 hours. Directly maps to every AE job requirement.',phase:'Month 2 — do this first'},
  {tag:'FREE',title:'Mode SQL Tutorial',url:'https://mode.com/sql-tutorial/',desc:'Best free resource for analytics SQL patterns. The window functions and intermediate SQL chapters are essential.',phase:'Month 1 — week 1'},
  {tag:'FREE',title:'Kaggle Python + Pandas',url:'https://www.kaggle.com/learn',desc:'Two short free courses (~5 hrs combined). Practical, no fluff. Exactly what a BI professional needs to get started.',phase:'Month 1 — weeks 1–2'},
  {tag:'FREE',title:'GitHub Skills',url:'https://skills.github.com/',desc:'Browser-based, 1 hour, interactive. Every AE role requires Git. Do this on Day 1 before any other course.',phase:'Month 1 — Day 1'},
  {tag:'FREE',title:'Astronomer Airflow Academy',url:'https://academy.astronomer.io/',desc:'From the company that maintains Airflow. The introduction course is the right entry point — no heavyweight setup needed.',phase:'Month 4'},
  {tag:'FREE',title:'DataTalks.Club DE Zoomcamp',url:'https://github.com/DataTalksClub/data-engineering-zoomcamp',desc:'Full cohort-style course covering Docker, BigQuery, dbt, Spark, Kafka — entirely free on GitHub. Best comprehensive resource available.',phase:'Months 3–5 (as supplement)'},
  {tag:'FREE',title:'Databricks Academy',url:'https://academy.databricks.com/',desc:'Official course for DataFrames, Delta Tables, and Medallion Architecture. Community Edition is free.',phase:'Month 7–9 only'},
  {tag:'FREE TIER',title:'StrataScratch SQL Practice',url:'https://www.stratascratch.com/',desc:'Real SQL interview problems from real companies. Do 2 problems per day from Month 1. Nothing else comes close for interview prep.',phase:'Month 1 onwards — daily habit'},
];

const CUT_COURSES = [
  {tag:'REMOVED',title:'Udemy / Pluralsight Data Engineering Courses',url:'#',desc:'❌ Long videos, slow pacing, outdated tooling. The free courses above cover the same material faster and more practically.'},
  {tag:'REMOVED',title:'Generic "Python for Data Science" courses',url:'#',desc:'❌ Too broad. Kaggle Python + Pandas covers exactly what an AE needs. You don\'t need ML or statistics at this stage.'},
  {tag:'REMOVED',title:'SQL courses on Codecademy / W3Schools',url:'#',desc:'❌ Too basic for interview-level SQL. Mode SQL Tutorial + StrataScratch give you the same foundation with harder problems.'},
];

const SKILLS = ['SQL','Data Modelling','Business Understanding','Python','dbt','Databricks','Airflow','Architecture'];

// ─────────────────────────────────────────────────────────────────
// DATA — INTERVIEW PREP
// ─────────────────────────────────────────────────────────────────
const INTERVIEW = {
  'Power BI': {
    subtitle: 'Your existing foundation — refresh, deepen, and connect concepts to the AE world',
    links: [
      {label:'🎯 Interview Query – Power BI Questions', url:'https://www.interviewquery.com/p/power-bi-interview-questions'},
      {label:'📋 Guru99 – 50 Power BI Questions', url:'https://www.guru99.com/power-bi-interview-questions.html'},
      {label:'▶️ Guy in a Cube (YouTube)', url:'https://www.youtube.com/@GuyInACube'},
      {label:'💬 Power BI Community Forums', url:'https://community.fabric.microsoft.com/t5/Power-BI-forums/ct-p/powerbi'},
    ],
    questions: [
      {cat:'Architecture', q:'What is the difference between Import, DirectQuery, and Live Connection modes?', a:'Import loads data into the model in memory — fastest query performance, but requires scheduled refresh. DirectQuery queries the source live on every interaction — always fresh, but slower and has DAX limitations. Live Connection connects to an external Analysis Services / Power BI dataset — no data stored locally, inherits the remote model. Rule: default to Import unless data volume or real-time requirements dictate otherwise.'},
      {cat:'DAX', q:'What is the difference between a calculated column and a measure?', a:'Calculated columns compute row-by-row at refresh time and are stored in the model (increases file size, can be used in slicers/filters). Measures compute at query time in the filter context of each visual (no storage cost, cannot be used as a slicer). Rule of thumb: use measures for aggregations, calculated columns only when you need to slice or filter by the computed value.'},
      {cat:'DAX', q:'Explain CALCULATE() and why it is the most important DAX function.', a:'CALCULATE() evaluates an expression inside a modified filter context. It is what makes DAX powerful — it lets you override the filters applied by slicers and visuals. Example: CALCULATE(SUM(Sales[Amount]), Region="North") always returns North sales regardless of what region slicer is selected. Almost every non-trivial business measure uses CALCULATE. In interviews, expect to write a CALCULATE expression on a whiteboard.'},
      {cat:'Modelling', q:'What is the difference between a star schema and a snowflake schema in Power BI?', a:'Star schema: fact table surrounded by fully denormalised dimension tables — one join to get any attribute. Snowflake: dimensions are normalised into sub-dimensions (more joins). Star schema is strongly preferred in Power BI — fewer joins means faster DAX evaluation, simpler relationships, and easier model maintenance. Avoid snowflakes unless storage is a hard constraint.'},
      {cat:'Modelling', q:'How do you handle many-to-many relationships in Power BI?', a:'Use a bridge/junction table: place it between the two tables and create single-direction filter relationships from both sides into the bridge. Alternatively, use CROSSFILTER() in DAX to change filter direction for a specific measure. Avoid enabling bidirectional cross-filter on the relationship itself — it creates ambiguity in filter propagation and causes performance issues and unexpected results.'},
      {cat:'Performance', q:'How do you diagnose and fix a slow Power BI report?', a:'Step 1: View > Performance Analyzer — record interactions to see which visual takes the longest. Step 2: separate DAX query time vs visual rendering time. Step 3: common fixes — (1) remove or convert calculated columns to measures, (2) reduce model cardinality by dropping unused columns, (3) disable bidirectional relationships, (4) use aggregations for very large tables, (5) switch to Import mode if you are on DirectQuery. As an AE, you will also fix this at the source — building pre-aggregated mart tables in dbt so Power BI never has to do heavy lifting.'},
      {cat:'Security', q:'What is Row Level Security (RLS) and how do you implement it?', a:'RLS restricts which rows each user can see. Static RLS: define roles with DAX filter expressions (e.g. [Region] = "North"), assign users to roles in the Power BI Service. Dynamic RLS: use USERNAME() or USERPRINCIPALNAME() to join against a user-mapping table — one role definition that automatically filters per user. As an AE, you will often implement access control at the dbt/warehouse layer so RLS is enforced regardless of which BI tool is used.'},
    ]
  },
  'Month 1 – SQL': {
    subtitle: 'Window functions, CTEs, deduplication, and query performance — the most tested AE interview topic',
    links: [
      {label:'🏆 StrataScratch – Real Interview Problems', url:'https://www.stratascratch.com/'},
      {label:'📊 DataLemur – SQL Questions by Company', url:'https://datalemur.com/questions'},
      {label:'🗄️ LeetCode – Database Problems', url:'https://leetcode.com/problemset/database/'},
      {label:'📖 Mode SQL Tutorial – Window Functions', url:'https://mode.com/sql-tutorial/sql-window-functions/'},
    ],
    questions: [
      {cat:'Window Functions', q:'What is the difference between RANK(), DENSE_RANK(), and ROW_NUMBER()?', a:'ROW_NUMBER(): always unique — no ties (1, 2, 3, 4). RANK(): ties get the same number, then skips (1, 1, 3, 4). DENSE_RANK(): ties get the same number, does not skip (1, 1, 2, 3). Interview tip: "Find the Nth highest salary" problems — always use DENSE_RANK to handle ties correctly. Know all three cold.'},
      {cat:'Window Functions', q:'Write a query to return each user\'s most recent order.', a:'SELECT * FROM (SELECT *, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY order_date DESC) AS rn FROM orders) t WHERE rn = 1; — This is the single most common SQL pattern in AE interviews. It de-duplicates to the latest row per group. Memorise the structure: ROW_NUMBER() OVER (PARTITION BY key ORDER BY sort_column DESC) then filter WHERE rn = 1.'},
      {cat:'Window Functions', q:'Write a query to calculate a 7-day rolling average of daily active users.', a:'SELECT date, dau, AVG(dau) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS rolling_7d_avg FROM daily_active_users; — The ROWS BETWEEN frame clause is the part interviewers test. ROWS BETWEEN 6 PRECEDING AND CURRENT ROW means "this row plus the 6 rows before it" — giving a 7-row window.'},
      {cat:'CTEs', q:'When would you use a CTE vs a subquery vs a temp table?', a:'CTE (WITH): preferred for readability, mandatory for recursive queries, and when you reference the same subquery more than once. Subquery: fine for simple one-off lookups. Temp table (CREATE TEMP TABLE): when you need to query the result multiple times with different WHERE clauses, or the intermediate result is very large and benefits from being materialised and indexed. In interviews, default to CTEs — they signal AE-level thinking and are easier to read on a whiteboard.'},
      {cat:'Aggregation', q:'What is the difference between WHERE and HAVING?', a:'WHERE filters individual rows before grouping and aggregation — it cannot reference aggregate functions. HAVING filters the results of GROUP BY after aggregation — it can reference SUM(), COUNT() etc. Example: WHERE event_date >= \'2024-01-01\' (filter rows), GROUP BY region, HAVING SUM(revenue) > 10000 (filter groups). Common mistake: putting an aggregate in WHERE — will always throw an error.'},
      {cat:'Joins', q:'What causes a JOIN to produce more rows than either input table?', a:'A many-to-many join: when the join key has duplicates on both sides, every row on the left matches every row on the right — creating a cartesian product for those key values. Diagnose with: SELECT COUNT(*) vs SELECT COUNT(DISTINCT join_key) on both tables before joining. Fix: deduplicate with ROW_NUMBER() in a CTE first, or use EXISTS instead of JOIN when you only need to check membership (not pull columns from the joined table).'},
      {cat:'Performance', q:'What does EXPLAIN / EXPLAIN ANALYZE tell you and when do you use it?', a:'EXPLAIN shows the query execution plan — how the engine will scan, filter, join, and aggregate. EXPLAIN ANALYZE actually runs the query and shows real vs estimated row counts (BigQuery uses INFORMATION_SCHEMA.JOBS for this). Look for: Sequential Scan on large tables (add an index or check partition pruning), high row estimate vs actual (stale statistics — run ANALYZE), Nested Loop on large sets (should be Hash Join). As an AE, you use EXPLAIN to validate that partition filters are pruning correctly in BigQuery or Snowflake.'},
    ]
  },
  'Month 2 – dbt': {
    subtitle: 'The core Analytics Engineering skill — most asked topic in every AE interview',
    links: [
      {label:'📘 dbt Official Interview Process (GitHub)', url:'https://github.com/dbt-labs/corp/blob/main/interview_process.md'},
      {label:'✍️ Locally Optimistic – AE Interview Guide', url:'https://locallyoptimistic.com/post/analytics-engineer-interview/'},
      {label:'🎙️ dbt Community – #interviews channel', url:'https://www.getdbt.com/community/join-the-community'},
      {label:'📚 dbt Docs – Core Concepts', url:'https://docs.getdbt.com/docs/introduction'},
    ],
    questions: [
      {cat:'Concepts', q:'What problem does dbt solve? Why does it exist?', a:'Before dbt, SQL transformation logic lived scattered across stored procedures, BI tool calculated fields, and one-off scripts — untested, undocumented, and not version-controlled. dbt brings software engineering practices (version control via Git, automated testing, documentation, modular reusable code) to SQL-based transformations in a data warehouse. The elevator pitch: "dbt lets a solo analyst produce production-quality data pipelines using only SQL and Jinja."'},
      {cat:'Core', q:'What is the difference between ref() and source() in dbt?', a:'source(): references raw tables that were loaded by your ingestion tool (Fivetran, Airbyte, etc.) — defined in sources.yml with freshness SLAs. ref(): references other dbt models — this is what builds the DAG dependency graph so dbt knows the correct build order. Critical rule: never use ref() to point at a raw table; always use source(). This distinction is tested in almost every AE interview.'},
      {cat:'Materialisation', q:'What are the four materialisation types in dbt and when do you use each?', a:'View (default): no data stored, always reads from source — good for staging models and simple transforms. Table: full rebuild every run, stored data — good for dims and marts. Incremental: only processes new/changed rows — essential for large fact tables. Ephemeral: compiled as a CTE into the query of dependent models, never stored — good for single-use intermediate logic. Rule: staging=view, dims=table, fact tables=incremental (if large), marts=table, small intermediate models=ephemeral.'},
      {cat:'Testing', q:'What are the four built-in dbt generic tests?', a:'not_null, unique, accepted_values, relationships. Every primary key should have both not_null and unique. relationships tests referential integrity (FK → PK). accepted_values validates that a column only contains expected values (e.g. status can only be active, inactive, pending). Beyond these four: install dbt-utils for recency, expression_is_true, and cardinality_equality. Write custom generic Jinja tests for reusable business-logic checks.'},
      {cat:'Architecture', q:'Explain the staging → intermediate → mart layer pattern.', a:'Staging (stg_): 1:1 with the source table. Only renames columns, casts types, applies no business logic. Materialised as views — cheap and always fresh. Intermediate (int_): joins staging models together and applies business rules. Not exposed directly to BI tools. Mart (mart_): BI-ready, domain-specific aggregate tables. One mart per business domain (mart_content, mart_finance). This layer pattern makes each model independently testable and replaceable without cascading changes.'},
      {cat:'Production', q:'What is a slim CI job in dbt and why does it matter?', a:'Slim CI runs dbt build --select state:modified+ — it only builds models that changed in the PR plus their downstream dependencies. This makes CI run in seconds instead of rebuilding the entire project. It requires a --state artifact (the compiled manifest from the last production run) as a baseline for comparison. Knowing slim CI signals to interviewers that you understand production dbt operations, not just local development.'},
    ]
  },
  'Month 3 – Data Quality': {
    subtitle: 'Testing philosophy, incident response, and production monitoring discipline',
    links: [
      {label:'📋 Great Expectations Docs', url:'https://docs.greatexpectations.io/'},
      {label:'✍️ Locally Optimistic – Data Quality Articles', url:'https://locallyoptimistic.com/topic/data-quality/'},
      {label:'📘 dbt – Writing Custom Generic Tests', url:'https://docs.getdbt.com/best-practices/writing-custom-generic-tests'},
    ],
    questions: [
      {cat:'Philosophy', q:'How do you approach data quality end-to-end in a pipeline?', a:'Three layers: (1) Source contracts — document expected schema, freshness SLAs, and volume baselines for every raw source in sources.yml. (2) Pipeline tests — dbt generic tests (not_null, unique, relationships) on every model, plus custom business-logic tests on facts and dims. (3) Monitoring — alert on failures with appropriate severity; track test pass rates over time. Key insight: data quality is an ongoing cultural practice, not a one-time setup task.'},
      {cat:'dbt Testing', q:'What is the difference between warn and error severity in dbt tests?', a:'error (default): test failure marks the job as failed — downstream models will not run. warn: test failure is logged and visible but the job continues. Use error for data integrity failures (null PKs, broken FK relationships). Use warn for business anomalies that need investigation but should not halt downstream consumers (e.g. viewership count is 30% below yesterday — worth investigating, but the dashboard should still refresh). Getting this distinction right shows production maturity.'},
      {cat:'Incident Response', q:'A critical dbt test fails in production at 6am. Walk me through your response.', a:'(1) Read the alert: which test, which model, which assertion. (2) Check the source — is raw data missing/late, or is there a transformation bug? (3) If upstream is late: downgrade test to warn, notify data consumers, wait for source to arrive. (4) If transformation bug: run dbt build --full-refresh on the affected model, fix the logic, deploy via PR. (5) Post-mortem: what additional test or monitoring would have caught this earlier? This answer structure shows senior-level production thinking.'},
      {cat:'Schema Changes', q:'How do you detect and handle unexpected schema changes from upstream sources?', a:'Short-term: dbt source tests catch missing columns (model will fail to compile if a source column disappears). dbt source freshness alerts if data stops arriving. Medium-term: run dbt parse or dbt compile in CI to catch schema drift before it hits production. Best practice: treat every source schema change as a breaking change — coordinate with upstream owners via a documented source contract. AEs who ignore this end up with silent data quality issues.'},
    ]
  },
  'Month 4–5 – Orchestration & Modelling': {
    subtitle: 'Airflow, Kimball dimensional modelling, and advanced dbt patterns',
    links: [
      {label:'✈️ Astronomer – Airflow Interview Questions', url:'https://www.astronomer.io/blog/airflow-interview-questions/'},
      {label:'📐 Kimball Group – Free Technique Articles', url:'https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/'},
      {label:'🧩 InterviewQuery – Data Engineering Questions', url:'https://www.interviewquery.com/p/data-engineering-interview-questions'},
      {label:'📘 dbt – Incremental Models Reference', url:'https://docs.getdbt.com/docs/build/incremental-models'},
    ],
    questions: [
      {cat:'Airflow', q:'What is a DAG and what makes Airflow an orchestrator rather than an executor?', a:'A DAG (Directed Acyclic Graph) defines a workflow as tasks (nodes) with dependencies (directed edges, no cycles). Airflow is an orchestrator — it schedules and monitors work that happens elsewhere (BigQuery, dbt, S3, Spark clusters). Airflow does not process data itself. This distinction matters in interviews: "Airflow triggered a BashOperator that ran dbt build" is correct; "Airflow transformed the data" is wrong.'},
      {cat:'Airflow', q:'What is XCom and when should you avoid using it?', a:'XCom (cross-communication) lets tasks pass small values between each other — stored in Airflow\'s metadata database. Use it for: task run IDs, file paths, row counts, API response codes. Never use XCom to pass large data (DataFrames, full query results) — the metadata DB is not designed for this and you will hit size limits. The correct pattern: write large results to GCS/S3, pass the file path via XCom.'},
      {cat:'Airflow', q:'What is the difference between a Sensor and an Operator in Airflow?', a:'Operator: executes an action (run Python, call an API, submit a BigQuery job, trigger dbt). Sensor: polls for a condition and waits until it is true — GCSObjectExistenceSensor (file arrived), ExternalTaskSensor (another DAG completed), S3KeySensor. Sensors use a poke_interval and a timeout. Use sensors to decouple pipelines: your DAG should not start until it has confirmed upstream data has arrived.'},
      {cat:'Kimball', q:'What is a Bus Matrix and why do you build it before writing any code?', a:'A Bus Matrix maps fact tables (rows) against conformed dimensions (columns) — it shows which dimensions are shared across business processes. It is the master plan for the entire data warehouse. Building it first: (1) ensures consistent dimensions across all facts (same dim_date, same dim_customer), (2) guides build priority, (3) prevents "silo" models that cannot be joined. Teams that skip the Bus Matrix end up with inconsistent metrics and duplicated dimension logic.'},
      {cat:'Kimball', q:'What is SCD Type 2 and how do you implement it in dbt?', a:'Slowly Changing Dimension Type 2: when a dimension attribute changes, insert a new row with an effective date range instead of updating in place. Keeps full history. Use it when you need to answer "what was the customer\'s plan tier at the time of the transaction?" — not just their current tier. In dbt: use snapshots. dbt adds dbt_valid_from, dbt_valid_to, dbt_scd_id, and dbt_updated_at columns automatically. Reference the snapshot in downstream models to join on the valid date range.'},
      {cat:'dbt Advanced', q:'Explain dbt incremental model strategies: append, merge, delete+insert, insert_overwrite.', a:'append: adds only new rows (no unique_key required, but re-running can create duplicates). merge: upserts on unique_key — safe and idempotent, requires warehouse MERGE support. delete+insert: deletes rows matching unique_key then re-inserts — safe everywhere, slightly slower. insert_overwrite: replaces entire partitions (BigQuery-native, very fast for partitioned tables). Default recommendation: merge for most cases; insert_overwrite for large partitioned BigQuery tables where partition-level replacement is more efficient than row-level merge.'},
    ]
  },
  'Month 6 – System Design': {
    subtitle: 'Architecture trade-offs, portfolio walkthroughs, and live design exercises',
    links: [
      {label:'🏆 StrataScratch – Hard SQL Problems', url:'https://www.stratascratch.com/'},
      {label:'🎤 Pramp – Free Peer Mock Interviews', url:'https://www.pramp.com/'},
      {label:'🧩 DataLemur – System Design for Data', url:'https://datalemur.com/'},
      {label:'🎯 Exponent – Data Interview Practice', url:'https://www.tryexponent.com/practice/data-engineering'},
    ],
    questions: [
      {cat:'System Design', q:'Design a data warehouse for an OTT/streaming platform. Walk through your approach.', a:'Structure every system design answer in 6 steps: (1) Clarify — what questions does the business ask? Who are the consumers (BI, ML, product)? (2) Identify facts: fact_viewership (one row per session), fact_content_events (play, pause, seek events). (3) Identify conformed dimensions: dim_content, dim_user, dim_device, dim_date, dim_region. (4) Define grain — the most atomic level of detail to store. (5) Define update strategy — incremental append on events, SCD2 on content metadata. (6) Define serving layer — mart_content_performance for BI, mart_user_retention for product analytics. This 6-step framework works for any domain.'},
      {cat:'Trade-offs', q:'When would you choose BigQuery over Databricks for a new project?', a:'BigQuery: serverless (no cluster management), excellent for SQL-first analytics teams, pay-per-query model works well for variable workloads, native dbt + Looker integrations. Databricks: better when you need Python/Spark workloads, streaming ingestion, ML model training, or very large-scale batch processing. The right answer is always "it depends on the team and use case" — the interview tests whether you can articulate trade-offs, not whether you prefer one platform.'},
      {cat:'Production', q:'How do you handle late-arriving data in a data warehouse pipeline?', a:'Three patterns: (1) Lookback window — the incremental model\'s WHERE clause looks back N days (e.g. WHERE event_date >= CURRENT_DATE - 7) to capture late arrivals in the reprocessing window. (2) Accumulating snapshot — designed for processes with staged arrival (order placed, then shipped, then delivered). (3) Audit columns — always include _loaded_at and _source_updated_at so you can diagnose exactly how late data was and why. Late-arriving data is a test of your incremental model design, not a production failure.'},
      {cat:'Portfolio', q:'How do you walk through your portfolio project in a 5-minute interview slot?', a:'Follow this structure: (1) Problem — "I built a streaming analytics warehouse to answer content performance questions for an OTT platform." (2) Architecture — "Raw data loads into BigQuery via Python → dbt stages, tests, and transforms → marts power a Power BI dashboard." (3) One key decision with a trade-off — "I chose incremental materialisation for fact_viewership because it processes 1M+ rows per day and a full rebuild would take 45 minutes." (4) What you learned — make it specific. (5) What you would do differently — this shows maturity and self-awareness. The 5-minute constraint forces you to prioritise the decisions, not list every step.'},
    ]
  },
  'Month 7–9 – Databricks & Spark': {
    subtitle: 'Delta Lake, Medallion Architecture, Spark fundamentals, and Lakehouse design',
    links: [
      {label:'🏫 Databricks Academy – Free Courses', url:'https://academy.databricks.com/'},
      {label:'📘 Delta Lake Documentation', url:'https://docs.delta.io/latest/index.html'},
      {label:'🧩 InterviewQuery – Spark Interview Questions', url:'https://www.interviewquery.com/p/apache-spark-interview-questions'},
      {label:'🎯 Databricks Certified Associate Study Guide', url:'https://www.databricks.com/learn/certification/data-engineer-associate'},
    ],
    questions: [
      {cat:'Architecture', q:'What is the Medallion Architecture and what does each layer contain?', a:'Bronze (Raw): ingested data exactly as received from source — no transformation, stored indefinitely for reprocessing. Silver (Cleaned): validated, deduplicated, typed, and enriched data — business rules applied, joined across sources. Gold (Serving): business-level aggregates optimised for BI and ML consumption. Key benefit: each layer is independently queryable and reprocessable — if a Silver transformation has a bug, re-run from Bronze without re-ingesting. Maps directly to: Raw → Staging → Mart in dbt, but on a Lakehouse with PySpark.'},
      {cat:'Delta Lake', q:'What problems does Delta Lake solve over plain Parquet files?', a:'Plain Parquet has no: ACID transactions (partial writes leave corrupt state), UPDATE/DELETE/MERGE support (append-only), schema enforcement, or time travel. Delta Lake solves all of these via a transaction log (_delta_log directory). Key features: (1) ACID transactions on distributed writes, (2) DML: UPDATE, DELETE, MERGE INTO, (3) Time travel (query data as of a timestamp or version), (4) Schema enforcement and evolution (mergeSchema option), (5) OPTIMIZE + ZORDER for query performance. Delta Lake is why Databricks calls this architecture a "Lakehouse."'},
      {cat:'Spark', q:'What is the difference between a narrow and wide transformation in Spark?', a:'Narrow: each input partition maps to exactly one output partition — no data movement between executors. Examples: map, filter, select, withColumn. Fast. Wide (shuffle): output requires data from multiple input partitions — Spark must redistribute data across the network. Examples: groupBy, join on non-partition keys, distinct, sort, repartition. Shuffles are expensive (network I/O + disk spill). Minimise them by: filtering before joins, partitioning data on join keys, caching DataFrames before multiple wide operations.'},
      {cat:'Performance', q:'What do OPTIMIZE and ZORDER do in Delta Lake and when do you run them?', a:'OPTIMIZE compacts small files into larger 1GB files — solves the "small file problem" caused by many small streaming or incremental writes. ZORDER BY (column) co-locates related data within files — similar to a clustered index, dramatically reduces files scanned for queries that filter on that column. Pattern: OPTIMIZE events ZORDER BY (user_id, event_date) makes queries like WHERE user_id = 12345 scan far fewer files. Run OPTIMIZE after large batch loads or on a daily schedule. Do not ZOrder more than 3–4 columns — diminishing returns.'},
      {cat:'Lakehouse', q:'When would you use a Lakehouse vs a traditional data warehouse?', a:'Traditional DW (BigQuery, Snowflake, Redshift): best for SQL-first teams, fully structured data, fast ad-hoc BI queries, minimal infrastructure management. Lakehouse (Databricks + Delta Lake): better when you need (1) Python/ML workloads alongside BI on the same data, (2) streaming ingestion + batch processing on one platform, (3) unstructured or semi-structured data, (4) cost-efficient storage at petabyte scale. Most mature companies run both — DW for BI, Lakehouse for data science and ML. In an AE interview, knowing both and when to use each is more impressive than advocating for one.'},
    ]
  },
};

// ─────────────────────────────────────────────────────────────────
// RENDER — PHASES
// ─────────────────────────────────────────────────────────────────
function renderPhases() {
  const c = document.getElementById('phases-container');
  PHASES.forEach((ph, pi) => {
    const tabs = ['Learn','Build','Resources','Project Ideas'];
    const panels = [
      `<div class="ph-grid"><div class="ph-col"><h4>Key Concepts</h4><ul>${ph.learn.map(l=>`<li>${l}</li>`).join('')}</ul></div></div>`,
      `<div class="ph-grid"><div class="ph-col"><h4>Deliverables</h4><ul>${ph.build.map(b=>`<li>${b}</li>`).join('')}</ul></div></div>`,
      `<div class="res-list">${ph.resources.map(r=>`<a class="res-item" href="${r.url}" target="_blank" rel="noopener"><span class="res-pri ${r.pri==='MUST'?'must':r.pri==='SHOULD'?'should':'opt'}">${r.pri}</span><div class="res-info"><div class="rt">${r.label}</div><div class="rd">${r.desc}</div></div></a>`).join('')}</div>`,
      `<div class="proj-grid">${ph.projects.map(p=>`<div class="proj-card"><div class="pe">${p.e}</div><div class="pt">${p.t}</div><div class="pd">${p.d}</div><div class="pdiff ${p.diff}">${p.diff==='easy'?'⬤ Easy start':p.diff==='med'?'⬤ Medium challenge':'⬤ Hard – push yourself'}</div></div>`).join('')}</div>`,
    ];
    const el = document.createElement('div');
    el.className = 'phase';
    el.innerHTML = `
      <div class="ph-head" onclick="togglePhase(this)">
        <div class="ph-num ${ph.color}">${ph.num}</div>
        <div class="ph-title"><h3>${ph.title}</h3><div class="ph-dur">${ph.dur}</div></div>
        <div class="ph-toggle">▼</div>
      </div>
      <div class="ph-body">
        <div class="ph-tabs">${tabs.map((t,i)=>`<div class="ph-tab${i===0?' active':''}" onclick="switchTab(this,${pi},${i})">${t}</div>`).join('')}</div>
        <div class="ph-panels">${panels.map((p,i)=>`<div class="ph-panel${i===0?' active':''}" id="panel-${pi}-${i}">${p}</div>`).join('')}</div>
      </div>`;
    c.appendChild(el);
  });
}

function togglePhase(head) { head.closest('.phase').classList.toggle('open'); }
function switchTab(tab, pi, idx) {
  tab.closest('.ph-body').querySelectorAll('.ph-tab').forEach(t=>t.classList.remove('active'));
  tab.classList.add('active');
  tab.closest('.ph-body').querySelectorAll('.ph-panel').forEach(p=>p.classList.remove('active'));
  document.getElementById(`panel-${pi}-${idx}`).classList.add('active');
}

// ─────────────────────────────────────────────────────────────────
// RENDER — WEEKLY TRACKER
// ─────────────────────────────────────────────────────────────────
function renderTracker() {
  const months = Object.keys(WEEKS);
  const tabsEl = document.getElementById('month-tabs');
  const panelsEl = document.getElementById('month-panels');
  months.forEach((m, mi) => {
    const btn = document.createElement('div');
    btn.className = `mtab${mi===0?' active':''}`;
    btn.textContent = m;
    btn.onclick = () => {
      document.querySelectorAll('.mtab').forEach(t=>t.classList.remove('active'));
      document.querySelectorAll('.month-panel').forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`mp-${mi}`).classList.add('active');
    };
    tabsEl.appendChild(btn);
    const panel = document.createElement('div');
    panel.className = `month-panel${mi===0?' active':''}`;
    panel.id = `mp-${mi}`;
    const data = WEEKS[m];
    const weeksHtml = data.weeks.map((w, wi) => {
      const wid = `w-${mi}-${wi}`;
      const tasksHtml = w.tasks.map((tk, ti) => {
        const cbid = `cb-${mi}-${wi}-${ti}`;
        const saved = localStorage.getItem(cbid) === '1';
        return `<div class="wci${saved?' checked':''}" id="wci-${cbid}">
          <input type="checkbox" id="${cbid}" ${saved?'checked':''} onchange="checkTask('${cbid}','${mi}-${wi}')"/>
          <div class="wci-label">${tk.t}${tk.d?`<span>${tk.d}</span>`:''}
          </div></div>`;
      }).join('');
      const doneCount = w.tasks.filter((_,ti)=>localStorage.getItem(`cb-${mi}-${wi}-${ti}`)===`1`).length;
      const pct = Math.round(doneCount/w.tasks.length*100);
      return `<div class="week" id="${wid}">
        <div class="week-head" onclick="toggleWeek('${wid}')">
          <div><div class="wt">${w.label}</div><div class="wfocus">${w.focus}</div></div>
          <span style="color:var(--muted);font-size:.85rem">${doneCount}/${w.tasks.length} ▼</span>
        </div>
        <div class="week-prog"><div class="week-prog-fill" id="prog-${mi}-${wi}" style="width:${pct}%"></div></div>
        <div class="week-body"><div class="week-check">${tasksHtml}</div></div>
      </div>`;
    }).join('');
    panel.innerHTML = `<p style="color:var(--muted);font-size:.85rem;margin-bottom:1rem">Focus: <strong style="color:var(--accent)">${data.focus}</strong></p><div class="weeks">${weeksHtml}</div>`;
    panelsEl.appendChild(panel);
  });
}

function toggleWeek(id) { document.getElementById(id).classList.toggle('open'); }
function checkTask(cbid, wkey) {
  const cb = document.getElementById(cbid);
  const wci = document.getElementById(`wci-${cbid}`);
  if (cb.checked) { localStorage.setItem(cbid,'1'); wci.classList.add('checked'); }
  else { localStorage.removeItem(cbid); wci.classList.remove('checked'); }
  updateProgress(wkey);
}
function updateProgress(wkey) {
  const [mi, wi] = wkey.split('-');
  const weeks = WEEKS[Object.keys(WEEKS)[mi]].weeks;
  const w = weeks[wi];
  const doneCount = w.tasks.filter((_,ti)=>localStorage.getItem(`cb-${mi}-${wi}-${ti}`)===`1`).length;
  const pct = Math.round(doneCount/w.tasks.length*100);
  const prog = document.getElementById(`prog-${mi}-${wi}`);
  if (prog) prog.style.width = pct+'%';
  const head = document.getElementById(`w-${mi}-${wi}`);
  if (head) { const cnt = head.querySelector('.week-head span'); if (cnt) cnt.textContent = `${doneCount}/${w.tasks.length} ▼`; }
}

// ─────────────────────────────────────────────────────────────────
// RENDER — COURSES
// ─────────────────────────────────────────────────────────────────
function renderCourses() {
  const g = document.getElementById('course-grid');
  COURSES.forEach(c => {
    const el = document.createElement('a');
    el.className = 'c-card'; el.href = c.url; el.target='_blank'; el.rel='noopener';
    el.innerHTML = `<span class="ctag t-free">${c.tag}</span><div class="c-title">${c.title}</div><div class="c-desc">${c.desc}</div><div class="c-phase">→ ${c.phase}</div>`;
    g.appendChild(el);
  });
  const cg = document.getElementById('cut-grid');
  CUT_COURSES.forEach(c => {
    const el = document.createElement('div');
    el.className = 'c-card'; el.style.opacity='.65';
    el.innerHTML = `<span class="ctag t-warn">${c.tag}</span><div class="c-title" style="text-decoration:line-through;color:var(--muted)">${c.title}</div><div class="c-desc">${c.desc}</div>`;
    cg.appendChild(el);
  });
}

// ─────────────────────────────────────────────────────────────────
// RENDER — SKILLS
// ─────────────────────────────────────────────────────────────────
function renderSkills() {
  const r = document.getElementById('skills-row');
  SKILLS.forEach((s,i) => {
    const el = document.createElement('div');
    el.className='skill-pill';
    el.innerHTML=`<span class="sk-n">${i+1}</span><span class="sk-l">${s}</span>`;
    r.appendChild(el);
  });
}

// ─────────────────────────────────────────────────────────────────
// RENDER — INTERVIEW PREP
// ─────────────────────────────────────────────────────────────────
function renderInterview() {
  const tabsEl = document.getElementById('iq-tabs');
  const panelsEl = document.getElementById('iq-panels');
  Object.entries(INTERVIEW).forEach(([name, data], idx) => {
    const btn = document.createElement('div');
    btn.className = `iqtab${idx===0?' active':''}`;
    btn.textContent = name;
    btn.onclick = () => {
      document.querySelectorAll('.iqtab').forEach(t=>t.classList.remove('active'));
      document.querySelectorAll('.iq-panel').forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`iqp-${idx}`).classList.add('active');
    };
    tabsEl.appendChild(btn);

    const linksHtml = `<div class="iq-links-label">Practice &amp; Reference Links</div><div class="iq-links">${data.links.map(l=>`<a class="iq-link" href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join('')}</div>`;
    const questionsHtml = `<div class="iq-questions">${data.questions.map((q,qi)=>{
      const qid=`iq-${idx}-${qi}`;
      return `<div class="iq-q" id="${qid}">
        <div class="iq-qhead" onclick="toggleIQ('${qid}')">
          <span class="iq-cat">${q.cat}</span>
          <span class="iq-qtext">${q.q}</span>
          <span class="iq-arrow">▼</span>
        </div>
        <div class="iq-ans">${q.a}</div>
      </div>`;
    }).join('')}</div>`;

    const panel = document.createElement('div');
    panel.className = `iq-panel${idx===0?' active':''}`;
    panel.id = `iqp-${idx}`;
    panel.innerHTML = `<p class="iq-subtitle">${data.subtitle}</p>${linksHtml}${questionsHtml}`;
    panelsEl.appendChild(panel);
  });
}

function toggleIQ(id) { document.getElementById(id).classList.toggle('open'); }

// ─────────────────────────────────────────────────────────────────
// THEME TOGGLE
// ─────────────────────────────────────────────────────────────────
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  document.getElementById('theme-btn').textContent = isDark ? '☀️ Light' : '🌙 Dark';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// ─────────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Sync toggle button label with current theme
  if (document.body.classList.contains('dark')) {
    document.getElementById('theme-btn').textContent = '☀️ Light';
  }
  renderPhases();
  renderTracker();
  renderCourses();
  renderSkills();
  renderInterview();
  // Open first phase by default
  document.querySelector('.phase').classList.add('open');
  // Open first week by default
  setTimeout(()=>{ const fw = document.querySelector('.week'); if(fw) fw.classList.add('open'); }, 100);
});
