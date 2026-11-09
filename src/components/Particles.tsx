"use client";
import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0, height = 0, frame = 0;
    let points: {x:number;y:number;vx:number;vy:number;r:number}[] = [];
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width; height = rect.height;
      canvas.width = width*dpr; canvas.height = height*dpr;
      ctx.setTransform(dpr,0,0,dpr,0,0);
      const count = Math.min(58, Math.floor(width/19));
      points = Array.from({length:count}, () => ({
        x:Math.random()*width, y:Math.random()*height,
        vx:(Math.random()-.5)*.22, vy:(Math.random()-.5)*.22, r:Math.random()*1.5+.5
      }));
    };
    const draw = () => {
      ctx.clearRect(0,0,width,height);
      points.forEach((p,i) => {
        if (!reduced) { p.x += p.vx; p.y += p.vy; }
        if (p.x<0 || p.x>width) p.vx *= -1;
        if (p.y<0 || p.y>height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle = "rgba(196,181,253,.72)"; ctx.fill();
        for (let j=i+1;j<points.length;j++) {
          const q=points[j], dx=p.x-q.x, dy=p.y-q.y, d=Math.hypot(dx,dy);
          if (d<112) {
            ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y);
            ctx.strokeStyle=`rgba(139,92,246,${(1-d/112)*.17})`; ctx.lineWidth=.7; ctx.stroke();
          }
        }
      });
      if (!reduced) frame = requestAnimationFrame(draw);
    };
    resize(); draw();
    window.addEventListener("resize",resize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize",resize); };
  }, []);
  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
}
