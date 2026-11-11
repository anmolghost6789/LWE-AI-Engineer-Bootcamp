import { motion } from 'motion/react'
import { useEffect } from 'react'
import { ArrowRight, Bot, Braces, Boxes, BrainCircuit, Check, Cloud, Code2, Database, GitBranch, Layers3, ShieldCheck, Sparkles, Terminal, Workflow } from 'lucide-react'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { useAuth } from '../context/AuthContext'

const weeks = [
  { week: '01', title: 'Python for AI systems', focus: 'Build reliable Python services, not just notebooks.', topics: ['Modern Python, typing, OOP and project structure', 'Virtual environments, dependency management and Git', 'HTTP, REST, JSON, async basics and API clients', 'Testing, logging, error handling and configuration'], build: 'A tested FastAPI service that calls an external API and exposes clean, typed endpoints.' },
  { week: '02', title: 'LLM application engineering', focus: 'Move from prompts to dependable model-powered features.', topics: ['LLM APIs, model selection, tokens and context windows', 'Prompt design, system instructions and structured outputs', 'Tool/function calling, streaming and conversation state', 'Retries, rate limits, fallbacks and cost/latency trade-offs'], build: 'A structured-output AI assistant with tool calling, streaming responses and failure handling.' },
  { week: '03', title: 'RAG and knowledge systems', focus: 'Ground model responses in private, changing information.', topics: ['Document ingestion, parsing, chunking and metadata', 'Embedding models and vector search with Qdrant or Chroma', 'Hybrid retrieval, filters, reranking and citations', 'RAG failure modes, retrieval debugging and evaluation sets'], build: 'A cited document Q&A application over a curated knowledge base.' },
  { week: '04', title: 'Agents and workflow orchestration', focus: 'Give AI systems tools, state and controlled autonomy.', topics: ['Agent patterns, tools and deterministic workflows', 'LangChain fundamentals and LangGraph state machines', 'Checkpoints, persistence, human-in-the-loop approvals', 'Multi-step research, routing and bounded multi-agent patterns'], build: 'A stateful research / operations agent with tool use, checkpoints and approval gates.' },
  { week: '05', title: 'Evaluation, safety and observability', focus: 'Know whether the system works before real users depend on it.', topics: ['Golden datasets, task metrics and LLM-as-judge caveats', 'RAG evaluation with RAGAS-style metrics', 'Tracing, prompt/version tracking and regression tests', 'Guardrails, prompt injection, data privacy and PII handling'], build: 'An evaluation harness with traces, regression checks and documented safety boundaries.' },
  { week: '06', title: 'Production deployment and capstone', focus: 'Ship a maintainable application and explain the engineering decisions.', topics: ['Docker, environment secrets and deployment fundamentals', 'PostgreSQL, caching, background jobs and API security', 'Monitoring, cost controls, latency and graceful degradation', 'Architecture review, demo, documentation and portfolio walkthrough'], build: 'A deployed AI application with README, architecture diagram, tests and a live demo.' },
]

const outcomes = [
  ['Python + FastAPI', 'Build typed, tested backend services and connect model APIs.'],
  ['LLM engineering', 'Design structured prompts, tool calls, streaming and resilient model flows.'],
  ['RAG systems', 'Ingest documents, retrieve relevant context and return traceable answers.'],
  ['LangGraph agents', 'Orchestrate stateful, multi-step workflows with human approval.'],
  ['Evaluation + safety', 'Measure quality, debug failures and protect real users and data.'],
  ['Production delivery', 'Containerise, deploy, document and monitor a working AI product.'],
]

const stack = [
  ['Language & API', 'Python · FastAPI · Pydantic', Code2],
  ['LLM providers', 'OpenAI · Anthropic · Gemini', BrainCircuit],
  ['Orchestration', 'LangChain · LangGraph', Workflow],
  ['Retrieval', 'Embeddings · Qdrant · Chroma', Database],
  ['Quality', 'Pytest · RAGAS concepts · tracing', ShieldCheck],
  ['Shipping', 'Docker · PostgreSQL · cloud basics', Cloud],
]

export function AIEngineerBootcamp() {
  const { openJoinCohort } = useAuth()
  useEffect(() => {
    document.title = 'AI Engineer Bootcamp | Learn With Expert'
    const description = 'A six-week live AI engineering bootcamp for intermediate developers. Build with Python, LLMs, RAG, LangGraph, evaluation and deployment.'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta) }
    meta.setAttribute('content', description)
  }, [])
  const enrol = (plan: 'ai_engineer_full' | 'ai_engineer_instalment' = 'ai_engineer_full') => openJoinCohort(plan)
  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="relative overflow-hidden border-b border-line pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div aria-hidden className="grid-lines absolute inset-0 opacity-70" />
        <div aria-hidden className="absolute -top-40 left-1/2 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]" />
        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-xs font-medium text-accent-2">
              <Sparkles className="size-3.5" /> LWE · LIVE ENGINEERING COHORT · 6 WEEKS
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }} className="mt-7 text-balance text-5xl font-semibold leading-[1.02] tracking-[-.05em] sm:text-7xl">
              Engineer AI systems.<br /><span className="text-gradient">Not just prompts.</span>
            </motion.h1>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">A six-week, live and project-led programme for developers ready to build production-minded AI applications with Python, LLMs, RAG and agent workflows.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" onClick={() => enrol()} className="cursor-pointer">Apply for the AI Engineer cohort <ArrowRight /></Button>
              <Button size="lg" variant="secondary" href="#curriculum">Explore curriculum</Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-faint"><span>Intermediate level</span><span>•</span><span>12 live classes</span><span>•</span><span>Capstone project</span><span>•</span><span>India-friendly pricing</span></div>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-3 md:grid-cols-3">
            {[['12', 'Live engineering sessions'], ['6 weeks', 'Structured build sprint'], ['1 shipped', 'Portfolio capstone']].map(([v,l]) => <div key={l} className="rounded-2xl border border-line bg-surface/80 p-5 text-center backdrop-blur"><div className="text-3xl font-semibold tracking-tight">{v}</div><div className="mt-1 text-sm text-muted">{l}</div></div>)}
          </div>
        </Container>
      </header>

      <section className="border-b border-line py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
            <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-accent">The positioning</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">For developers who are ready to move beyond demos.</h2><p className="mt-5 leading-relaxed text-muted">This is not a beginner Python course, a prompt-engineering crash course or a library tour. It is a guided engineering sprint for learners who can already code and want to design, build, evaluate and deploy AI-powered software.</p><div className="mt-7 rounded-2xl border border-line bg-surface p-5"><div className="flex items-center gap-2 text-sm font-semibold"><Terminal className="size-4 text-accent"/> Entry requirements</div><ul className="mt-3 space-y-2 text-sm text-muted"><li>• Comfortable writing basic Python functions, loops and classes.</li><li>• Familiar with APIs, JSON and Git fundamentals.</li><li>• Able to use a terminal and debug straightforward errors.</li><li>• Bring a laptop and commit 6–8 hours per week outside class.</li></ul></div></div>
            <div className="grid gap-3 sm:grid-cols-2">{outcomes.map(([title,desc],i) => <div key={title} className="rounded-2xl border border-line bg-surface p-5"><div className="mb-4 flex size-9 items-center justify-center rounded-xl bg-accent/10 text-accent"><Check className="size-4"/></div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p></div>)}</div>
          </div>
        </Container>
      </section>

      <section id="curriculum" className="scroll-mt-24 py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[.2em] text-accent">Six-week curriculum</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">A focused path from code to deployed AI.</h2><p className="mt-5 text-muted">Two instructor-led live classes each week, supported by guided implementation tasks and a continuous capstone. Each week ends with something you can run, test or demonstrate.</p></div>
          <div className="mt-12 space-y-3">{weeks.map((w) => <article key={w.week} className="grid gap-5 rounded-2xl border border-line bg-surface p-5 sm:grid-cols-[76px_1fr_1fr] sm:p-7"><div><span className="text-3xl font-semibold tracking-tight text-accent">{w.week}</span><p className="mt-1 text-[10px] uppercase tracking-widest text-faint">Week</p></div><div><h3 className="text-xl font-semibold">{w.title}</h3><p className="mt-2 text-sm text-muted">{w.focus}</p><div className="mt-4 rounded-xl bg-bg/70 p-4"><p className="text-[10px] font-semibold uppercase tracking-widest text-accent-2">Weekly build</p><p className="mt-1 text-sm leading-relaxed text-fg/85">{w.build}</p></div></div><ul className="space-y-2 text-sm leading-relaxed text-muted">{w.topics.map(t => <li key={t} className="flex gap-2"><span className="mt-1 text-accent">↳</span><span>{t}</span></li>)}</ul></article>)}</div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface/50 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-semibold uppercase tracking-[.2em] text-accent">Engineering toolkit</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">The stack you will work with.</h2><p className="mt-4 text-muted">Tool choices are taught with trade-offs, not as a checklist. Provider access and cloud usage may require free-tier or learner-owned accounts.</p></div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{stack.map(([title,desc,Icon]) => <div key={String(title)} className="rounded-2xl border border-line bg-bg p-5"><Icon className="size-5 text-accent"/><h3 className="mt-4 font-semibold">{String(title)}</h3><p className="mt-2 text-sm text-muted">{String(desc)}</p></div>)}</div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
            <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-accent">Capstone outcomes</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Finish with a system you can explain in an interview.</h2><p className="mt-5 max-w-xl leading-relaxed text-muted">Learners choose one scoped problem and build it through the six weeks. The capstone is reviewed on working behaviour, engineering quality, evaluation, safety and clarity of documentation—not on flashy demos alone.</p><ul className="mt-7 space-y-3 text-sm text-muted">{['Working application with a deployed demo or reproducible local setup','GitHub repository with setup guide, tests and sample data','Architecture diagram and documented design trade-offs','Evaluation results, known limitations and safety considerations','Final technical walkthrough and portfolio presentation'].map(x => <li key={x} className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-accent"/>{x}</li>)}</ul></div>
            <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8"><div className="flex items-center gap-3"><div className="grid size-12 place-items-center rounded-2xl bg-accent/10 text-accent"><Boxes className="size-6"/></div><div><p className="font-semibold">Capstone pathways</p><p className="text-xs text-muted">Choose one with mentor approval</p></div></div><div className="mt-6 space-y-3">{[['Knowledge assistant','RAG + citations + access-aware retrieval'],['Research agent','Tools + LangGraph + human approval'],['Support copilot','Classification + retrieval + escalation'],['Document intelligence','Extraction + validation + workflow API']].map(([a,b])=><div key={a} className="rounded-xl border border-line bg-bg p-4"><p className="text-sm font-semibold">{a}</p><p className="mt-1 text-xs text-muted">{b}</p></div>)}</div></div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface/40 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-semibold uppercase tracking-[.2em] text-accent">Live cohort format</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Learn by building, with an engineer in the room.</h2><p className="mt-4 text-muted">A suggested delivery rhythm for the six-week cohort. Publish exact dates and instructor details once confirmed.</p></div>
          <div className="mt-10 grid gap-3 md:grid-cols-3">{[['Live class A · 2 hours','Concepts, architecture walkthrough and instructor-led implementation.'],['Live class B · 2 hours','Code-along lab, debugging clinic and design review.'],['Between sessions · 2–4 hours','Independent build tasks, peer discussion and capstone progress.']].map(([a,b])=><div key={a} className="rounded-2xl border border-line bg-surface p-6"><p className="font-semibold">{a}</p><p className="mt-3 text-sm leading-relaxed text-muted">{b}</p></div>)}</div>
        </Container>
      </section>

      <section id="pricing" className="scroll-mt-24 py-20 sm:py-28">
        <Container className="max-w-5xl">
          <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-semibold uppercase tracking-[.2em] text-accent">Cohort investment</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Serious engineering. Clear pricing.</h2><p className="mt-4 text-muted">Proposed launch pricing for the first AI Engineer cohort. Confirm mentor capacity, taxes and tool-cost policy before publishing as a final offer.</p></div>
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-accent/40 bg-surface p-7 shadow-[0_30px_90px_-45px_rgba(255,122,69,.45)]"><p className="text-sm font-semibold text-accent-2">Early cohort offer</p><div className="mt-4 text-5xl font-semibold tracking-tight">₹14,999</div><p className="mt-2 text-sm text-muted">One-time payment · proposed launch price</p><p className="mt-6 border-t border-line pt-5 text-sm text-muted">Includes all 12 live sessions, guided labs, capstone reviews, session recordings, cohort workspace and 30 days of post-cohort Q&A.</p><Button className="mt-7 w-full cursor-pointer" onClick={() => enrol('ai_engineer_full')}>Apply · Pay in full <ArrowRight/></Button></div>
            <div className="rounded-3xl border border-line bg-surface p-7"><p className="text-sm font-semibold">Instalment option</p><div className="mt-4 text-5xl font-semibold tracking-tight">₹7,999<span className="text-base font-normal text-muted"> × 2</span></div><p className="mt-2 text-sm text-muted">Two payments · total ₹15,998</p><p className="mt-6 border-t border-line pt-5 text-sm text-muted">Same programme access and learning outcomes. Second instalment due by the agreed mid-programme date.</p><Button variant="secondary" className="mt-7 w-full cursor-pointer" onClick={() => enrol('ai_engineer_instalment')}>Apply · Instalments <ArrowRight/></Button></div>
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-relaxed text-faint">Pricing proposal only, not a live payment quote. No job or salary guarantee. Learners may need their own API keys or cloud accounts; provide low-cost/free-tier alternatives and usage limits in the learner guide.</p>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-accent/25 bg-surface p-8 text-center sm:p-14"><div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,122,69,.16),transparent_60%)]"/><div className="relative"><Bot className="mx-auto size-8 text-accent"/><h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">Ready to build beyond the demo?</h2><p className="mx-auto mt-4 max-w-xl text-muted">Apply for the LWE AI Engineer Bootcamp. Share your background and the kind of AI system you want to build.</p><Button size="lg" className="mt-8 cursor-pointer" onClick={() => enrol()}>Start your application <ArrowRight/></Button></div></div>
        </Container>
      </section>
    </div>
  )
}
