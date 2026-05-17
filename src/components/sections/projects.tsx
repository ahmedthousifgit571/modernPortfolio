"use client";

import { useEffect, useRef } from "react";
import { portfolioData } from "@/lib/data";
import { useRouter } from "next/navigation";
import { Github, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header reveal
            gsap.fromTo(
                ".proj-header",
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".proj-header",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Each project row
            gsap.utils.toArray<HTMLElement>(".proj-row").forEach((row) => {
                const line = row.querySelector<HTMLElement>(".proj-line");
                const num = row.querySelector<HTMLElement>(".proj-num");
                const info = row.querySelector<HTMLElement>(".proj-info");
                const img = row.querySelector<HTMLElement>(".proj-img");

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: row,
                        start: "top 78%",
                        toggleActions: "play none none none",
                    },
                });

                if (line) {
                    tl.fromTo(
                        line,
                        { scaleX: 0 },
                        { scaleX: 1, duration: 0.9, ease: "power3.inOut" }
                    );
                }

                if (num) {
                    tl.fromTo(
                        num,
                        { opacity: 0, x: -20 },
                        { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
                        "-=0.5"
                    );
                }

                if (info) {
                    tl.fromTo(
                        info,
                        { opacity: 0, y: 50 },
                        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
                        "-=0.55"
                    );
                }

                if (img) {
                    tl.fromTo(
                        img,
                        { opacity: 0, y: 40, scale: 0.96 },
                        { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" },
                        "-=0.65"
                    );
                }
            });

            // Final line
            gsap.fromTo(
                ".proj-final-line",
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 0.9,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: ".proj-final-line",
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="projects" className="relative py-24 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="proj-header mb-16 md:mb-24">
                    <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-6">
                        Selected Work
                    </p>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.88] tracking-tight">
                            Projects
                        </h2>
                        <p className="text-muted-foreground text-sm max-w-[260px] leading-relaxed md:pb-2">
                            Real-world applications built with modern tech stacks and shipped to production.
                        </p>
                    </div>
                </div>

                {/* Project rows */}
                {portfolioData.projects.map((project, index) => {
                    const isEven = index % 2 !== 0;
                    const num = String(index + 1).padStart(2, "0");

                    return (
                        <div key={project.slug} className="proj-row">
                            {/* Reveal line */}
                            <div className="proj-line h-px bg-border origin-left" />

                            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 py-14 md:py-16">

                                {/* Index number */}
                                <div className="proj-num hidden md:block w-12 shrink-0 pt-1.5">
                                    <span className="font-mono text-xs text-primary/30 tracking-widest select-none">
                                        {num}
                                    </span>
                                </div>

                                {/* Info */}
                                <div
                                    className={`proj-info flex-1 flex flex-col justify-between gap-10 ${
                                        isEven ? "md:order-last" : ""
                                    }`}
                                >
                                    <div>
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-5">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-[11px] font-medium rounded-full border border-primary/25 text-primary/70 tracking-wide"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl md:text-[1.75rem] font-bold leading-snug mb-4 text-white">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tech + Links */}
                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-7">
                                            {project.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2.5 py-1 text-[11px] rounded-md bg-white/[0.04] text-muted-foreground border border-white/[0.07]"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-3">
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-black text-sm font-semibold hover:bg-primary/85 transition-all duration-200 group/btn"
                                                >
                                                    Live Demo
                                                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-150" />
                                                </a>
                                            )}
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-200"
                                                >
                                                    <Github className="w-3.5 h-3.5" />
                                                    Code
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Image */}
                                <div
                                    className={`proj-img flex-1 w-full relative rounded-2xl overflow-hidden cursor-pointer group border border-white/[0.06] ${
                                        isEven ? "md:order-first" : ""
                                    }`}
                                    style={{ aspectRatio: "16/10" }}
                                    onClick={() => router.push(`/projects/${project.slug}`)}
                                >
                                    {project.image ? (
                                        <>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                            />
                                            {/* Hover overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                                <span className="text-white text-sm font-medium flex items-center gap-1.5">
                                                    View Details
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </span>
                                            </div>
                                            {/* Subtle always-on vignette */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                        </>
                                    ) : (
                                        <div className="w-full h-full bg-card flex items-center justify-center">
                                            <span className="text-muted-foreground text-sm">No preview</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* Final divider */}
                <div className="proj-final-line h-px bg-border origin-left" />
            </div>
        </section>
    );
}
