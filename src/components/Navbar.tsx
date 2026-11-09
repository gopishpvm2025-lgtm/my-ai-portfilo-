"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const links = [{href:"/#about",label:"About"},{href:"/#skills",label:"Skills"},{href:"/#projects",label:"Projects"},{href:"/#journey",label:"Journey"},{href:"/#contact",label:"Contact"}];

export default function Navbar() {
  const [open,setOpen]=useState(false);
  return <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#080B16]/80 backdrop-blur-xl">
    <nav className="container-shell flex h-[72px] items-center justify-between" aria-label="Main navigation">
      <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight" onClick={()=>setOpen(false)}>
        <span className="grid h-8 w-8 place-items-center rounded-xl bg-violet-500/15 text-violet-300"><Sparkles size={17}/></span>
        My<span className="text-violet-300">Portfolio</span><span className="text-xs text-slate-500">.dev</span>
      </Link>
      <div className="hidden items-center gap-7 md:flex">
        {links.map(l=><Link key={l.href} href={l.href} className="text-sm text-slate-400 transition hover:text-white">{l.label}</Link>)}
        <a href="/resume.pdf" className="rounded-full border border-violet-400/40 px-4 py-2 text-sm text-violet-200 transition hover:bg-violet-400/10">Resume ↗</a>
      </div>
      <button className="rounded-lg border border-white/10 p-2 text-slate-200 md:hidden" onClick={()=>setOpen(!open)} aria-label={open?"Close menu":"Open menu"} aria-expanded={open}>
        {open?<X size={20}/>:<Menu size={20}/>}
      </button>
    </nav>
    {open&&<div className="border-t border-white/10 bg-[#0B1020] px-5 py-4 md:hidden">
      <div className="container-shell flex flex-col gap-4">{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)} className="text-sm text-slate-300">{l.label}</Link>)}
      <a href="/resume.pdf" className="text-sm text-violet-300">Download resume ↗</a></div>
    </div>}
  </header>;
}
