import Link from "next/link";
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Sparkles, Terminal, BrainCircuit, Code2, Rocket, MousePointer2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const skills = [
  {name:"Python",group:"Programming",state:"Current focus"},
  {name:"JavaScript",group:"Programming",state:"Current focus"},
  {name:"Git & GitHub",group:"Engineering",state:"Next to learn"},
  {name:"NumPy & Pandas",group:"Data",state:"Learning target"},
  {name:"Scikit-learn",group:"Machine learning",state:"Learning target"},
  {name:"FastAPI",group:"Backend",state:"Learning target"},
  {name:"PyTorch",group:"Deep learning",state:"Future target"},
  {name:"LLMs & RAG",group:"Generative AI",state:"Future target"}
];

export default function Home() {
  return <>
    <Navbar/>
    <main>
      <section className="relative flex min-h-[760px] items-center overflow-hidden pt-24">
        <div className="grid-bg absolute inset-0" aria-hidden="true"/>
        <Particles/>
        <div className="container-shell relative z-10 grid items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <Reveal><div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/10 px-4 py-2 text-xs text-violet-200"><span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300"/> ASPIRING AI/ML SOFTWARE ENGINEER</div></Reveal>
            <Reveal delay={.08}><p className="mb-3 font-mono text-sm text-slate-400">Hello, world! I&apos;m</p><h1 className="font-display text-5xl font-bold leading-[1.06] tracking-tight sm:text-6xl xl:text-7xl">[Your Name]<span className="gradient-text block">building what&apos;s next.</span></h1></Reveal>
            <Reveal delay={.16}><p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">An aspiring AI/ML Software Engineer exploring the intersection of software development, data and intelligent applications. I turn curiosity into code, one project at a time.</p></Reveal>
            <Reveal delay={.24}><div className="mt-9 flex flex-wrap gap-3">
              <Link href="#projects" className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/40 transition hover:bg-violet-400">Explore projects <ArrowRight size={16}/></Link>
              <a href="/resume.pdf" className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/5">Download resume ↓</a>
            </div></Reveal>
            <Reveal delay={.32}><div className="mt-10 flex items-center gap-5 text-slate-500">
              <a aria-label="GitHub profile (edit placeholder URL)" href="https://github.com/" target="_blank" rel="noreferrer" className="transition hover:text-white"><Github size={19}/></a>
              <a aria-label="LinkedIn profile (edit placeholder URL)" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="transition hover:text-white"><Linkedin size={19}/></a>
              <a aria-label="Email (edit placeholder address)" href="mailto:your.email@example.com" className="transition hover:text-white"><Mail size={19}/></a>
              <span className="h-4 w-px bg-white/10"/><span className="text-xs">Python · JavaScript · AI/ML</span>
            </div></Reveal>
          </div>
          <Reveal delay={.2} className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-8 rounded-full bg-violet-500/10 blur-3xl"/>
            <div className="glass relative rounded-3xl p-5 shadow-glow">
              <div className="flex items-center justify-between border-b border-white/10 pb-4"><div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-pink-400"/><i className="h-2.5 w-2.5 rounded-full bg-amber-300"/><i className="h-2.5 w-2.5 rounded-full bg-emerald-300"/></div><span className="font-mono text-[10px] text-slate-500">learning-lab.py</span><Terminal size={15} className="text-violet-300"/></div>
              <div className="space-y-4 py-6 font-mono text-xs sm:text-sm">
                <p className="text-slate-500"># a little about my approach</p>
                <p><span className="text-pink-300">class</span> <span className="text-cyan-200">Engineer</span>:</p>
                <p className="pl-5 text-slate-300">mindset = <span className="text-emerald-300">&quot;curious&quot;</span></p>
                <p className="pl-5 text-slate-300">learn_by = <span className="text-emerald-300">&quot;building&quot;</span></p>
                <p className="pl-5 text-slate-300">focus = [</p>
                <p className="pl-10 text-amber-200">&quot;software&quot;,</p><p className="pl-10 text-amber-200">&quot;machine learning&quot;,</p><p className="pl-10 text-amber-200">&quot;intelligent apps&quot;</p>
                <p className="pl-5 text-slate-300">]</p>
                <p className="pt-2 text-violet-300"># always iterating_</p>
              </div>
              <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
                {[["01","Curiosity"],["02","Projects"],["03","Growth"]].map(([n,t])=><div key={n} className="rounded-xl bg-white/[.03] p-3"><p className="font-mono text-xs text-violet-300">{n}</p><p className="mt-1 text-[11px] text-slate-400">{t}</p></div>)}
              </div>
            </div>
          </Reveal>
        </div>
        <a href="#about" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-slate-500 transition hover:text-white md:flex"><MousePointer2 size={14}/> Scroll to explore <ArrowDown size={14}/></a>
      </section>

      <section id="about" className="container-shell scroll-mt-24 py-24">
        <Reveal><p className="section-kicker">01 / ABOUT ME</p><div className="mt-4 grid gap-8 md:grid-cols-[.7fr_1.3fr]"><h2 className="font-display text-3xl font-semibold sm:text-4xl">Curiosity is my <span className="gradient-text">starting point.</span></h2><div className="space-y-4 text-sm leading-7 text-slate-400 sm:text-base"><p>I&apos;m an aspiring AI/ML Software Engineer building my foundation in Python and JavaScript. I enjoy understanding how software works and finding ways to make applications more useful.</p><p>I&apos;m currently growing my skills through hands-on projects, with a focus on programming fundamentals, data, machine learning and intelligent application development.</p><p className="text-slate-300">My approach: learn the fundamentals, build something real, measure what works, and keep improving.</p></div></div></Reveal>
      </section>

      <section id="skills" className="border-y border-white/5 bg-white/[.015] py-24">
        <div className="container-shell">
          <Reveal><p className="section-kicker">02 / TECH TOOLBOX</p><div className="mt-3 flex flex-wrap items-end justify-between gap-4"><h2 className="font-display text-3xl font-semibold sm:text-4xl">Skills in progress.</h2><p className="max-w-md text-sm text-slate-500">A transparent snapshot of current skills and suggested learning targets.</p></div></Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{skills.map((s,i)=><Reveal key={s.name} delay={i*.035}><div className="card-border h-full rounded-2xl border border-white/10 bg-[#101729]/70 p-5 transition hover:-translate-y-1 hover:bg-[#141e35]"><div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300"><Code2 size={19}/></div><p className="font-semibold text-white">{s.name}</p><p className="mt-1 text-xs text-slate-500">{s.group}</p><p className="mt-4 text-[10px] uppercase tracking-wider text-cyan-300/80">{s.state}</p></div></Reveal>)}</div>
        </div>
      </section>

      <section id="projects" className="container-shell scroll-mt-24 py-24">
        <Reveal><p className="section-kicker">03 / SELECTED WORK</p><div className="mt-3 flex flex-wrap items-end justify-between gap-4"><h2 className="font-display text-3xl font-semibold sm:text-4xl">Ideas becoming projects.</h2><p className="max-w-md text-sm text-slate-500">Suggested case studies — update each status when you have built and tested the project.</p></div></Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">{projects.map((p,i)=><Reveal key={p.slug} delay={i*.08}><ProjectCard project={p}/></Reveal>)}</div>
      </section>

      <section id="journey" className="border-y border-white/5 bg-white/[.015] py-24">
        <div className="container-shell grid gap-12 md:grid-cols-2">
          <Reveal><p className="section-kicker">04 / LEARNING JOURNEY</p><h2 className="mt-3 font-display text-3xl font-semibold">Small steps. <span className="gradient-text">Real progress.</span></h2><p className="mt-5 max-w-md text-sm leading-7 text-slate-400">I&apos;m building a strong foundation before moving into more advanced AI systems. This timeline is an editable learning plan, not a list of completed achievements.</p></Reveal>
          <div className="space-y-5">{[{n:"01",t:"Programming foundations",d:"Python, JavaScript, problem solving and Git.",s:"Current focus"},{n:"02",t:"Data and machine learning",d:"NumPy, Pandas, statistics and Scikit-learn.",s:"Next milestone"},{n:"03",t:"Intelligent applications",d:"APIs, model integration and responsible AI.",s:"Future milestone"}].map((x,i)=><Reveal key={x.n} delay={i*.08}><div className="flex gap-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10 font-mono text-xs text-violet-300">{x.n}</div><div className="flex-1 border-b border-white/10 pb-5"><div className="flex flex-wrap items-center justify-between gap-2"><h3 className="font-semibold text-white">{x.t}</h3><span className="text-[10px] uppercase tracking-wider text-cyan-300">{x.s}</span></div><p className="mt-2 text-sm text-slate-500">{x.d}</p></div></div></Reveal>)}</div>
        </div>
      </section>

      <section className="container-shell py-24">
        <Reveal><div className="glass rounded-3xl p-8 sm:p-12"><div className="flex items-center gap-2 text-violet-300"><BrainCircuit size={19}/><span className="section-kicker">05 / WHAT I VALUE</span></div><h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">Good engineering starts with <span className="gradient-text">good questions.</span></h2><div className="mt-8 grid gap-6 sm:grid-cols-3">{[{icon:<Code2/>,t:"Clear fundamentals",d:"Understand the problem before choosing a tool."},{icon:<BrainCircuit/>,t:"Evidence over hype",d:"Evaluate models and explain their limitations."},{icon:<Rocket/>,t:"Build and iterate",d:"Turn ideas into useful, tested experiences."}].map((v)=><div key={v.t}><div className="text-cyan-300">{v.icon}</div><h3 className="mt-3 font-semibold">{v.t}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{v.d}</p></div>)}</div></div></Reveal>
      </section>

      <section id="contact" className="container-shell scroll-mt-24 pb-24">
        <Reveal><div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/15 via-[#101729] to-cyan-500/10 p-8 text-center sm:p-14"><div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl"/><p className="section-kicker">06 / LET&apos;S CONNECT</p><h2 className="relative mt-4 font-display text-3xl font-semibold sm:text-5xl">Have an idea worth exploring?</h2><p className="relative mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400">I&apos;m always interested in learning, building and connecting with people who enjoy solving meaningful problems with technology.</p><a href="mailto:your.email@example.com" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#080B16] transition hover:bg-cyan-100">Say hello <Mail size={16}/></a></div></Reveal>
      </section>
    </main>
    <footer className="border-t border-white/5 py-7"><div className="container-shell flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500"><span>© {new Date().getFullYear()} My Portfolio. Built with curiosity.</span><span>Next.js · Tailwind CSS · Framer Motion</span></div></footer>
  </>;
}
