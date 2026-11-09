import Link from "next/link";
export default function NotFound() {
  return <main className="container-shell grid min-h-screen place-items-center text-center"><div><p className="font-mono text-sm text-violet-300">404 / NOT FOUND</p><h1 className="mt-4 font-display text-4xl font-bold">This page isn&apos;t in the lab.</h1><p className="mt-4 text-slate-400">The page may have moved or the URL may be incorrect.</p><Link href="/" className="mt-7 inline-flex rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold">Return home</Link></div></main>;
}
