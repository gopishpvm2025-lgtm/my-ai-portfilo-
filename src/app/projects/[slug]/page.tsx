import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, GitBranch, Layers3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export default function ProjectPage({params}:{params:{slug:string}}) {
  const project=projects.find(p=>p.slug===params.slug);
  if(!project) notFound();
  return <>
    <Navbar/>
    <main className="container-shell min-h-screen pb-24 pt-32">
      <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"><ArrowLeft size={16}/> Back to all projects</Link>
      <Reveal><div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/15 via-[#101729] to-cyan-500/10 p-7 sm:p-12">
        <p className="section-kicker">PROJECT / {project.number} · {project.category}</p>
        <div className="mt-5 flex flex-wrap items-center gap-3"><span className="rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1 text-xs text-violet-200">{project.level}</span><span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">{project.status}</span></div>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold sm:text-6xl">{project.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">{project.summary}</p>
        <p className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/5 p-3 text-xs leading-6 text-amber-100/80">Portfolio template: this is a suggested project specification. Replace the planned-project status with verified implementation details before presenting it as completed work.</p>
      </div></Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_300px]">
        <div className="space-y-12">
          <Reveal><section><p className="section-kicker">01 / THE PROBLEM</p><h2 className="mt-3 font-display text-2xl font-semibold">Why build this?</h2><p className="mt-4 leading-8 text-slate-400">{project.problem}</p></section></Reveal>
          <Reveal><section><p className="section-kicker">02 / THE APPROACH</p><h2 className="mt-3 font-display text-2xl font-semibold">Proposed solution</h2><p className="mt-4 leading-8 text-slate-400">{project.solution}</p></section></Reveal>
          <Reveal><section><p className="section-kicker">03 / CORE FEATURES</p><h2 className="mt-3 font-display text-2xl font-semibold">What it should do</h2><ul className="mt-5 grid gap-3 sm:grid-cols-2">{project.features.map(f=><li key={f} className="flex gap-3 rounded-xl border border-white/10 bg-white/[.025] p-4 text-sm text-slate-300"><CheckCircle2 size={17} className="shrink-0 text-cyan-300"/>{f}</li>)}</ul></section></Reveal>
          <Reveal><section><p className="section-kicker">04 / SYSTEM DESIGN</p><h2 className="mt-3 font-display text-2xl font-semibold">Architecture outline</h2><div className="mt-5 space-y-2">{project.architecture.map((a,i)=><div key={a} className="flex items-center gap-3"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-400/10 font-mono text-xs text-violet-200">{String(i+1).padStart(2,"0")}</div><div className="flex-1 rounded-xl border border-white/10 bg-[#101729] px-4 py-3 text-sm text-slate-300">{a}</div></div>)}</div></section></Reveal>
          <Reveal><section><p className="section-kicker">05 / EVALUATION</p><h2 className="mt-3 font-display text-2xl font-semibold">How success is measured</h2><p className="mt-4 rounded-xl border border-cyan-300/15 bg-cyan-300/5 p-5 text-sm leading-7 text-slate-300">{project.evaluation}</p></section></Reveal>
          <Reveal><section><p className="section-kicker">06 / NEXT ITERATIONS</p><h2 className="mt-3 font-display text-2xl font-semibold">What I would improve next</h2><ul className="mt-5 space-y-3">{project.nextSteps.map(s=><li key={s} className="flex gap-3 text-sm text-slate-400"><GitBranch size={16} className="shrink-0 text-violet-300"/>{s}</li>)}</ul></section></Reveal>
        </div>
        <aside className="space-y-5">
          <div className="glass rounded-2xl p-5"><div className="flex items-center gap-2 text-violet-300"><Layers3 size={17}/><h2 className="text-sm font-semibold text-white">Technology stack</h2></div><div className="mt-4 flex flex-wrap gap-2">{project.stack.map(s=><span key={s} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300">{s}</span>)}</div></div>
          <div className="glass rounded-2xl p-5"><h2 className="text-sm font-semibold">Project links</h2><p className="mt-2 text-xs leading-5 text-slate-500">EDITABLE PLACEHOLDERS — add your actual repository and demo after publishing.</p><a href="https://github.com/" target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-between rounded-xl border border-white/10 p-3 text-sm text-slate-300 hover:border-violet-300/30">GitHub repository <ArrowUpRight size={15}/></a></div>
        </aside>
      </div>
      <div className="mt-16 border-t border-white/10 pt-8"><Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-violet-300 hover:text-white"><ArrowLeft size={16}/> Explore more projects</Link></div>
    </main>
  </>;
}
