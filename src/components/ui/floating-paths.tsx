"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/gsap";

const VB_W = 696;
const VB_H = 316;
const FRAME_MS = 1000 / 30; // the lines drift slowly — 30fps is indistinguishable

type Line = { path: Path2D; len: number; width: number; alpha: number; duration: number };

/** The same 2 × 36 curves as the original SVG background. */
function buildLines(): Line[] {
    const probe = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const lines: Line[] = [];
    for (const position of [1, -1]) {
        for (let i = 0; i < 36; i++) {
            const d = `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${
                312 - i * 5 * position
            } ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
                684 - i * 5 * position
            } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`;
            probe.setAttribute("d", d);
            lines.push({
                path: new Path2D(d),
                len: probe.getTotalLength(),
                width: 0.5 + i * 0.03,
                alpha: 0.03 + i * 0.015,
                duration: 20 + ((i * 37 + (position > 0 ? 11 : 23)) % 100) / 10,
            });
        }
    }
    return lines;
}

/**
 * Flowing line field behind the hero phone — identical look to the original
 * Framer Motion SVG, drawn on a canvas instead: one GPU-friendly draw per
 * frame (capped at 30fps), and fully stopped while off-screen.
 */
export function FloatingLines() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;

        const lines = buildLines();
        let dpr = 1, scale = 1, ox = 0, oy = 0;
        let raf = 0, last = 0, visible = true;
        const start = performance.now();

        const draw = (now: number) => {
            const t = (now - start) / 1000;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // viewBox "meet" fit, like the original <svg>
            ctx.setTransform(dpr * scale, 0, 0, dpr * scale, dpr * ox, dpr * oy);
            ctx.strokeStyle = "#ffffff";
            for (const l of lines) {
                const p = (t / l.duration) % 1;            // pathLength 0.3 → 1
                const tri = p < 0.5 ? p * 2 : (1 - p) * 2; // pathOffset & opacity 0 → 1 → 0
                ctx.setLineDash([(0.3 + 0.7 * p) * l.len, l.len]);
                ctx.lineDashOffset = -tri * l.len;
                ctx.globalAlpha = l.alpha * (0.3 + 0.3 * tri);
                ctx.lineWidth = l.width;
                ctx.stroke(l.path);
            }
        };

        const resize = () => {
            const r = canvas.getBoundingClientRect();
            dpr = Math.min(window.devicePixelRatio || 1, 1.5);
            canvas.width = Math.max(1, Math.round(r.width * dpr));
            canvas.height = Math.max(1, Math.round(r.height * dpr));
            scale = Math.min(r.width / VB_W, r.height / VB_H);
            ox = (r.width - VB_W * scale) / 2;
            oy = (r.height - VB_H * scale) / 2;
            draw(performance.now());
        };

        const loop = (now: number) => {
            raf = requestAnimationFrame(loop);
            if (now - last < FRAME_MS) return;
            last = now;
            draw(now);
        };

        const play = () => {
            if (!raf && visible && !prefersReducedMotion()) raf = requestAnimationFrame(loop);
        };
        const stop = () => {
            cancelAnimationFrame(raf);
            raf = 0;
        };

        const ro = new ResizeObserver(resize);
        ro.observe(canvas);
        const io = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
            if (visible) play();
            else stop();
        });
        io.observe(canvas);

        resize();
        play();

        return () => {
            stop();
            ro.disconnect();
            io.disconnect();
        };
    }, []);

    return <canvas ref={canvasRef} aria-hidden="true" className="block h-full w-full" />;
}
