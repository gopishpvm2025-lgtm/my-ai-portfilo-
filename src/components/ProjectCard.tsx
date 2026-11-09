import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import type { Project } from "@/data/projects";

const accents = {
  violet: "from-violet-500/20 via-violet-500/5 to-transparent text-violet-200 border-violet-400/20",
  cyan: "from-cyan-500/20 via-cyan-500/5 to-transparent text-cyan-200 border-cyan-400/20",
  pink: "from-pink-500/20 via-pink-500/5 to-transparent text-pink-200 border-pink-400/20"
};
export default function ProjectCard({project}:{project:Project}) {
  return <Link href={`/projects/${project.slug}`} className="card-border group block overflow-hidden rounded-2xl border border-white/10 bg-[#101729]/75 transition duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:shadow-glow">
    <div className={`flex h-44 flex-col justify-between bg-gradient-to-br p-5 ${accents[project.accent]}`}>
      <div className="flex items-center justify-between"><span className="font-mono text-xs opacity-70">PROJECT / {project.number}</span><ArrowUpRight size={19} className="transition group-hover:-translate-y-1 group-hover:translate-x-1"/></div>
      <div className="flex items-end justify-between"><Code2 size={42} strokeWidth={1.1}/><span className="rounded-full border border-current/20 px-3 py-1 text-xs">{project.level}</span></div>
    </div>
    <div className="p-6">
      <p className="section-kicker">{project.category}</p>
      <h3 className="mt-2 font-display text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">{project.stack.slice(0,4).map(s=><span key={s} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-slate-400">{s}</span>)}</div>
      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm"><span className="text-slate-400">{project.status}</span><span className="text-violet-300">Explore case study <span aria-hidden="true">→</span></span></div>
    </div>
  </Link>;
}
