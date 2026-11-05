"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { portfolioData } from "@/lib/data";
import { Eyebrow } from "@/components/ui/primitives";

export function Experience() {
    const root = useRef<HTMLElement>(null);
    const job = portfolioData.experience[0];

    useGSAP(
        () => {
            if (prefersReducedMotion()) return;
            const q = gsap.utils.selector(root);

            // Lime progress line fills as you read through the highlights
            gsap.fromTo(
                q(".xp-progress"),
                { scaleY: 0 },
                {
                    scaleY: 1,
                    ease: "none",
                    scrollTrigger: { trigger: q(".xp-list")[0], start: "top 70%", end: "bottom 60%", scrub: true },
                }
            );

            // Each highlight's index lights up when it reaches the reading line
            q<HTMLElement>(".xp-item").forEach((item) => {
                gsap.fromTo(
                    item.querySelector(".xp-dot"),
                    { backgroundColor: "#2a2a28", scale: 0.6 },
                    {
                        backgroundColor: "#ccff00",
                        scale: 1,
                        duration: 0.5,
                        ease: "back.out(3)",
                        scrollTrigger: { trigger: item, start: "top 62%", toggleActions: "play none none reverse" },
                    }
                );
            });
        },
        { scope: root }
    );

    return (
        <section ref={root} id="experience" className="relative py-28 md:py-44">
            <div className="container-x">
                <div data-anim="fade">
                    <Eyebrow>Experience</Eyebrow>
                </div>
                <h2
                    data-anim="chars"
                    className="mt-6 max-w-[12ch] font-display text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.88] tracking-[-0.045em]"
                >
                    Where I&apos;ve <em className="font-serif font-normal text-lime">built</em>
                </h2>

                <div className="mt-20 grid gap-14 lg:mt-28 lg:grid-cols-12">
                    {/* Sticky role card */}
                    <aside className="lg:col-span-5">
                        <div className="lg:sticky lg:top-28">
                            <div data-anim="fade" className="rounded-[2rem] bg-white/[0.03] p-1.5 ring-1 ring-white/10">
                                <div className="rounded-[calc(2rem-0.375rem)] bg-surface p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] md:p-9">
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{job.period}</span>
                                        <span className="inline-flex items-center gap-2 rounded-full bg-lime/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-lime">
                                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
                                            Current
                                        </span>
                                    </div>
                                    <h3 className="mt-8 font-display text-4xl font-semibold tracking-[-0.03em] md:text-5xl">{job.title}</h3>
                                    <p className="mt-2 font-serif text-2xl italic text-fg/60">@ {job.company}</p>

                                    <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-line pt-8 text-sm sm:grid-cols-2">
                                        <div>
                                            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Education</dt>
                                            <dd className="mt-2 text-fg/85">{portfolioData.education.degree}</dd>
                                            <dd className="text-muted">
                                                {portfolioData.education.institution} · {portfolioData.education.period}
                                            </dd>
                                        </div>
                                        <div>
                                            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Certified</dt>
                                            {portfolioData.certifications.map((c) => (
                                                <dd key={c.title} className="mt-2 text-fg/85">
                                                    {c.title}
                                                </dd>
                                            ))}
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Highlights */}
                    <ol className="xp-list relative lg:col-span-7 lg:pl-14">
                        <span aria-hidden="true" className="absolute bottom-0 left-[5px] top-0 hidden w-px bg-line lg:block" />
                        <span
                            aria-hidden="true"
                            className="xp-progress absolute bottom-0 left-[5px] top-0 hidden w-px origin-top bg-lime lg:block"
                        />
                        {job.highlights.map((h, i) => (
                            <li key={h.title} className="xp-item relative border-t border-line py-10 first:border-t-0 first:pt-0 md:py-12">
                                <span
                                    aria-hidden="true"
                                    className={`xp-dot absolute -left-14 hidden h-[11px] w-[11px] rounded-full bg-[#2a2a28] lg:block ${i === 0 ? "top-2" : "top-12"}`}
                                />
                                <div data-anim="fade" className="grid gap-4 md:grid-cols-[80px_1fr]">
                                    <span className="font-mono text-sm text-lime">0{i + 1}</span>
                                    <div>
                                        <h4 className="font-display text-2xl font-semibold tracking-[-0.02em] md:text-[2rem]">{h.title}</h4>
                                        <p className="mt-3 max-w-xl leading-relaxed text-muted">{h.description}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
