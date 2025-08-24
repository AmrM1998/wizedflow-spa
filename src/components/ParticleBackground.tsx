import React, { useEffect, useMemo, useRef } from "react";

type Particle = { x: number; y: number; vx: number; vy: number; r: number };

export const ParticleBackground: React.FC<{ className?: string; density?: number; darkMode?: boolean }> = ({
  className = "",
  density = 0.12,
  darkMode = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);

  const palette = useMemo(
    () =>
      darkMode
        ? ["#bbf7d0", "#4ade80", "#22c55e", "#16a34a", "#052e16"]
        : ["#bbf7d0", "#86efac", "#4ade80", "#22c55e", "#16a34a"],
    [darkMode]
  );

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = Math.max(1, Math.floor(window.devicePixelRatio || 1));

    function resize() {
      const { clientWidth, clientHeight } = canvas.parentElement!;
      canvas.width = clientWidth * DPR;
      canvas.height = clientHeight * DPR;
      canvas.style.width = `${clientWidth}px`;
      canvas.style.height = `${clientHeight}px`;

      const area = (canvas.width * canvas.height) / (DPR * DPR);
      const targetCount = Math.floor((area / 10000) * density);
      particlesRef.current = Array.from({ length: targetCount }, () => spawn(canvas.width, canvas.height));
    }

    function spawn(w: number, h: number): Particle {
      const speed = 0.15 + Math.random() * 0.35;
      const angle = Math.random() * Math.PI * 2;
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: 1 + Math.random() * 2.2,
      };
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) * DPR,
        y: (e.clientY - rect.top) * DPR,
      };
    }
    function onMouseLeave() {
      mouseRef.current = null;
    }
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    function step() {
      if (!ctx) return;
      const { width: w, height: h } = canvas;

      ctx.fillStyle = darkMode ? "#111827" : "#ffffff";
      ctx.fillRect(0, 0, w, h);

      const parts = particlesRef.current;
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        else if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        else if (p.y > h) p.y = 0;
      }

      ctx.globalAlpha = 0.3;
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const a = parts[i];
          const b = parts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist2 = dx * dx + dy * dy;
          const maxD = 160 * DPR;
          if (dist2 < maxD * maxD) {
            const t = 1 - Math.sqrt(dist2) / maxD;
            ctx.strokeStyle = palette[(i + j) % palette.length];
            ctx.lineWidth = 1 * DPR;
            ctx.globalAlpha = 0.18 * t + 0.05;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      // Draw lines between mouse and nearby particles
      if (mouseRef.current) {
        for (let i = 0; i < parts.length; i++) {
          const p = parts[i];
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist2 = dx * dx + dy * dy;
          const maxD = 160 * DPR;
          if (dist2 < maxD * maxD) {
            ctx.strokeStyle = palette[i % palette.length];
            ctx.lineWidth = 1 * DPR;
            ctx.globalAlpha = 0.25;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        ctx.beginPath();
        ctx.fillStyle = palette[i % palette.length];
        ctx.arc(p.x, p.y, p.r * DPR, 0, Math.PI * 2);
        ctx.fill();
      }

      frameRef.current = requestAnimationFrame(step);
    }

    resize();
    step();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [density, palette, darkMode]);

  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
};
