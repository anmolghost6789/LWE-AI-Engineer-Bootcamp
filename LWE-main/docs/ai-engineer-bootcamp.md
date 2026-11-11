# LWE AI Engineer Bootcamp — Programme Blueprint

**Status:** Proposed launch programme; confirm cohort dates, instructor capacity, tax treatment and final commercial terms before public launch.

## Positioning

**Promise:** Engineer AI systems, not just prompts.

A six-week, live and project-led engineering sprint for intermediate developers who can already write basic Python and work with APIs. Learners build, evaluate and deploy an AI application using modern LLM engineering patterns. This is not a beginner programming course and does not promise employment, placement or a particular salary.

### Ideal learner
- CS/IT students in later semesters, fresh graduates, backend developers and software engineers.
- Comfortable with Python fundamentals, JSON/HTTP APIs, Git and terminal workflows.
- Able to commit approximately 6–8 hours weekly, including live classes and independent implementation.

### Prerequisite check
Use a short screening exercise: implement a Python function, call a JSON API, parse a response, use Git to commit changes, and explain a simple error trace. Offer a preparatory resource pack to applicants who are close but not ready.

## Delivery model

- Duration: 6 weeks.
- Live instruction: 2 instructor-led sessions per week, 2 hours each (12 sessions / 24 live hours).
- Independent build time: 2–4 hours per week; expected total commitment 6–8 hours/week.
- Cohort size recommendation: 18–24 learners per lead instructor; add a teaching assistant above 18.
- Every session: 15-minute recap, 35-minute concept/architecture, 60-minute guided build, 10-minute checkpoint.
- Record sessions for enrolled learners; publish a clear attendance and catch-up policy.
- Run a baseline diagnostic before week 1 and a final capstone review in week 6.

## Curriculum and measurable outcomes

### Week 1 — Python for AI systems
**Topics:** modern Python, typing, OOP, project structure, virtual environments, Git, HTTP/REST, JSON, async basics, configuration, logging, error handling and pytest.

**Outcome:** learner creates a typed, tested FastAPI service with configuration and an external API integration.

**Assignment:** API wrapper with validation, retry strategy, tests and README.

### Week 2 — LLM application engineering
**Topics:** provider APIs, model selection, token/context limits, prompt design, structured outputs, tool/function calling, streaming, conversation state, retries, rate limits, fallbacks, latency and cost trade-offs.

**Outcome:** learner ships an LLM-backed API with validated structured output and at least one tool call.

**Assignment:** add structured logging, provider fallback and a small prompt regression set.

### Week 3 — Retrieval-augmented generation
**Topics:** document parsing, ingestion, chunking, metadata, embeddings, vector search (Qdrant or Chroma), hybrid retrieval, filters, reranking, citations and retrieval debugging.

**Outcome:** learner builds a document Q&A service that cites retrieved sources and can expose retrieval evidence.

**Assignment:** compare chunk sizes or retrieval strategies on a small labelled question set.

### Week 4 — Agents and workflow orchestration
**Topics:** agent vs workflow patterns, tools, LangChain fundamentals, LangGraph state, routing, checkpoints, persistence, human-in-the-loop, bounded multi-step and multi-agent patterns.

**Outcome:** learner creates a stateful workflow with tool execution, checkpoints and an explicit approval boundary.

**Assignment:** add timeout, tool-failure handling and an audit trail.

### Week 5 — Evaluation, safety and observability
**Topics:** golden datasets, task metrics, LLM-as-judge limitations, RAG evaluation concepts, tracing, prompt/version tracking, regression tests, prompt injection, data privacy, PII, guardrails and access control.

**Outcome:** learner can measure core task quality, inspect traces and document security and safety limitations.

**Assignment:** evaluation report with baseline, changed configuration and observed trade-offs.

### Week 6 — Production delivery and capstone
**Topics:** Docker, secrets, deployment fundamentals, PostgreSQL, caching/background jobs, API security, monitoring, cost controls, latency, graceful degradation, architecture review and technical storytelling.

**Outcome:** learner presents a deployed or reproducibly runnable AI application with tests, architecture diagram and documented limitations.

**Capstone choices:** knowledge assistant; research agent; support copilot; document intelligence workflow. Capstone scope must be agreed with mentor by week 2.

## Capstone assessment rubric (100 points)

| Dimension | Points | Evidence |
|---|---:|---|
| Problem framing and scope | 10 | Clear user, task and success criteria |
| Correctness and functionality | 20 | Working end-to-end happy path and error paths |
| AI design and retrieval/tool quality | 20 | Appropriate model, retrieval or agent architecture |
| Evaluation and testing | 15 | Test cases, baseline and measured results |
| Reliability, safety and privacy | 15 | Secrets, validation, guardrails and limitations |
| Deployment and observability | 10 | Reproducible setup, logs/traces and deployment or local run |
| Documentation and demo | 10 | README, architecture diagram and clear walkthrough |

Suggested completion criteria: attend at least 9 of 12 live sessions or complete approved catch-up work; submit weekly builds; score at least 70/100 on capstone. These criteria should be published before enrolment.

## Proposed pricing (India)

- Early cohort / pay in full: **₹14,999**.
- Instalment plan: **2 × ₹7,999 = ₹15,998**; second instalment due at the published midpoint date.
- Recommended launch capacity: 18–24 learners, with TA support for cohorts above 18.
- Do not advertise discounts, limited seats, placement rates or salary outcomes unless those claims are independently substantiated.
- Clarify GST/tax treatment and refund/cancellation terms before collecting payment.

### Included
12 live sessions (24 hours), guided labs, capstone mentoring/reviews, session recordings for enrolled learners, cohort workspace, reusable code/templates, final demo review and 30 days of post-cohort Q&A.

### Cost controls
Learners may need provider API keys or cloud accounts. Publish provider setup instructions, spending caps, low-cost/free-tier options and a policy against sharing secrets. Do not promise unlimited API usage. Prefer local/open-source options for exercises where feasible.

## Instructor and operations checklist

- Confirm instructor and TA names, bios, technical credibility and availability.
- Publish timezone, exact session days/times, cohort start/end dates and holiday policy.
- Prepare a tested starter repository, pinned dependencies and setup guide.
- Test every lab in a clean environment before the cohort begins.
- Provide a fallback provider/model path if a third-party API is unavailable.
- Use synthetic or public datasets; prohibit uploading employer/customer confidential data.
- Create an attendance register, weekly submission tracker and capstone rubric.
- Establish community conduct, support response windows and escalation path.
- Publish refund, deferral, recording, certificate and privacy terms.

## Website implementation notes

- Landing page route: `/ai-engineer`.
- Separate enrolment plan keys: `ai_engineer_full` and `ai_engineer_instalment`.
- Server-side prices are authoritative: ₹14,999 and ₹7,999 per instalment. Client-submitted amounts must never be trusted.
- Enrolment cohort label: `AI Engineer Bootcamp`.
- Existing GenAI Bootcamp plan keys and pricing remain unchanged.
- Before launch, test enrolment end-to-end, including admin review, payment reference, user dashboard and notification flows.
