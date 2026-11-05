"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";

const services = ["Cinematic Websites", "CRMs", "Billing Software", "Mobile Apps", "AI Agents", "Full Stack"];
const stack = ["Next.js", "React", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "AWS", "GSAP", "LangGraph"];

function Track({ items, className, star }: { items: string[]; className: string; star: string }) {
    // Two identical halves → seamless wrap at -50%
    const row = [...items, ...items];
    return (
        <div className="marquee-track flex w-max will-change-transform">
            {[0, 1].map((half) => (
                <div key={half} className="flex shrink-0 items-center" aria-hidden={half === 1}>
                    {row.map((item, i) => (
                        <span key={i} className={`flex shrink-0 items-center ${className}`}>
                            {item}
                            <span className="mx-[0.45em] text-[0.55em]">{star}</span>
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
}

/**
 * Two crossing bands. They drift on their own and surge with scroll
 * velocity, flipping direction when you scroll back up.
 */
export function Marquee() {
    const root = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            if (prefersReducedMotion()) return;
            const [a, b] = gsap.utils.toArray<HTMLElement>(".marquee-track", root.current);
            const setA = gsap.quickSetter(a, "xPercent");
            const setB = gsap.quickSetter(b, "xPercent");
            const wrap = gsap.utils.wrap(-50, 0);

            let x = 0;
            let dir = 1;
            const speed = { boost: 1 };

            const tick = (_t: number, delta: number) => {
                x += (delta / 1000) * 2.2 * speed.boost * dir;
                setA(wrap(-x));
                setB(wrap(x - 50));
            };

            ScrollTrigger.create({
                trigger: root.current,
                start: "top bottom",
                end: "bottom top",
                onToggle: (self) => (self.isActive ? gsap.ticker.add(tick) : gsap.ticker.remove(tick)),
                onUpdate: (self) => {
                    dir = self.direction;
                    const v = Math.min(Math.abs(self.getVelocity()) / 220, 7);
                    gsap.to(speed, { boost: 1 + v, duration: 0.2, overwrite: true, onComplete: () => {
                        gsap.to(speed, { boost: 1, duration: 1.2, ease: "power2.out" });
                    } });
                },
            });

            return () => gsap.ticker.remove(tick);
        },
        { scope: root }
    );

    return (
        <section ref={root} aria-label="Services" className="relative overflow-hidden py-20 md:py-28">
            <div className="relative -rotate-[1.5deg] scale-x-105 border-y border-white/10 bg-surface py-4 md:py-5">
                <Track
                    items={stack}
                    star="●"
                    className="font-display text-[clamp(1.75rem,4.2vw,3.75rem)] font-semibold uppercase tracking-tight text-outline"
                />
            </div>
            <div className="relative z-10 -mt-[clamp(2.75rem,5.5vw,5rem)] rotate-[2.5deg] scale-x-105 bg-lime py-4 text-black md:py-5">
                <Track
                    items={services}
                    star="✦"
                    className="font-display text-[clamp(1.75rem,4.2vw,3.75rem)] font-semibold uppercase tracking-tight"
                />
            </div>
        </section>
    );
}
