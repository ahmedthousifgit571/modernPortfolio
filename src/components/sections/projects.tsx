"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { gsap, Flip, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { getLenis } from "@/components/providers/smooth-scroll";
import { initScrollAnimations } from "@/components/motion/scroll-animations";
import { Folder } from "@/components/ui/folder";
import { Eyebrow, PillLink, splitTitle } from "@/components/ui/primitives";
import { portfolioData, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const expoInOut = (t: number) =>
    t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2;

const FLIGHT = 1.35;

function ProjectRow({ project, index, total }: { project: Project; index: number; total: number }) {
    const { name, subtitle } = splitTitle(project.title);
    const flipped = index % 2 === 1;
    const isStore = project.liveUrl?.includes("play.google.com");

    return (
        <article className="relative grid gap-8 py-14 md:py-20 lg:grid-cols-12 lg:gap-14">
            <span data-anim="line" className="absolute inset-x-0 top-0 h-px bg-line" />

            {/* Image */}
            <Link
                href={`/projects/${project.slug}`}
                data-flip-id={project.slug}
                data-anim="clip"
                data-cursor="View"
                aria-label={`${name} — case study`}
                className={cn(
                    "group relative block aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-surface ring-1 ring-white/[0.06] md:rounded-[1.75rem] lg:col-span-7",
                    flipped && "lg:order-last"
                )}
            >
                <div data-anim="parallax" data-speed="0.06" className="absolute inset-x-0 -top-[7%] h-[114%]">
                    <div className="absolute inset-0 transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.045]">
                        <Image
                            data-anim-inner
                            src={project.image}
                            alt={project.title}
                            fill
                            placeholder="blur"
                            sizes="(min-width: 1024px) 56vw, 100vw"
                            className="object-cover object-top"
                        />
                    </div>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-100" />
            </Link>

            {/* Copy */}
            <div className="flex flex-col lg:col-span-5">
                <div data-anim="fade" className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    <span>
                        <span className="text-lime">{String(index + 1).padStart(2, "0")}</span> / {String(total).padStart(2, "0")}
                    </span>
                    <span>{project.category}</span>
                </div>

                <h3 className="mt-6 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
                    <Link href={`/projects/${project.slug}`} className="transition-colors duration-300 hover:text-lime">
                        <span data-anim="lines" className="block">
                            {name}
                        </span>
                    </Link>
                </h3>
                {subtitle && (
                    <p data-anim="fade" className="mt-3 font-serif text-xl italic text-fg/60 md:text-2xl">
                        {subtitle}
                    </p>
                )}

                <p data-anim="fade" data-delay="0.05" className="mt-6 line-clamp-5 text-[15px] leading-relaxed text-muted">
                    {project.description}
                </p>

                <ul data-anim="stagger" className="mt-7 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <li key={t} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-fg/70">
                            {t}
                        </li>
                    ))}
                </ul>

                <div data-anim="fade" data-delay="0.1" className="mt-auto flex flex-wrap items-center gap-3 pt-9">
                    {project.liveUrl && (
                        <PillLink href={project.liveUrl} external>
                            {isStore ? "Play Store" : "Live site"}
                        </PillLink>
                    )}
                    {project.githubUrl && (
                        <PillLink
                            href={project.githubUrl}
                            external
                            variant="ghost"
                            icon={<Github className="h-4 w-4" strokeWidth={1.5} />}
                        >
                            Code
                        </PillLink>
                    )}
                    <Link
                        href={`/projects/${project.slug}`}
                        className="group/cs ml-1 inline-flex items-center gap-1.5 text-sm text-fg/70 transition-colors hover:text-lime"
                    >
                        Case study
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover/cs:-translate-y-0.5 group-hover/cs:translate-x-0.5" strokeWidth={1.5} />
                    </Link>
                </div>
            </div>
        </article>
    );
}

export function Projects() {
    const listRef = useRef<HTMLDivElement>(null);
    const flipState = useRef<Flip.FlipState | null>(null);
    const [active, setActive] = useState<string>(portfolioData.projectCategories[0]);

    const activeProjects = portfolioData.projects.filter((p) => p.category === active);

    const openCategory = (category: string) => {
        if (category === active) {
            setActive("");
            return;
        }
        // Record where this folder's thumbnails are right now, so they can fly out
        const papers = document.querySelectorAll<HTMLElement>(`[data-folder="${category}"] [data-flip-id]`);
        flipState.current = papers.length && !prefersReducedMotion() ? Flip.getState(papers) : null;
        setActive(category);
    };

    // Runs on mount (no flight) and after every folder change
    useGSAP(
        () => {
            const list = listRef.current;
            const state = flipState.current;
            flipState.current = null;
            if (!list) return;

            const lookup = (state?.idLookup ?? {}) as Record<string, unknown>;
            const flying = state
                ? gsap.utils.toArray<HTMLElement>("[data-flip-id]", list).filter((el) => lookup[el.dataset.flipId!])
                : [];
            // Flying images skip their own wipe-in reveal
            flying.forEach((el) => (el.dataset.anim = "none"));

            initScrollAnimations(list);

            if (state) {
                if (flying.length) {
                    Flip.from(state, {
                        targets: flying,
                        duration: FLIGHT,
                        ease: "expo.inOut",
                        scale: true,
                        zIndex: 30,
                        stagger: 0.06,
                    });
                }
                const lenis = getLenis();
                if (lenis) lenis.scrollTo(list, { offset: -96, duration: FLIGHT, easing: expoInOut });
                else list.scrollIntoView({ block: "start" });
            }

            ScrollTrigger.refresh();
        },
        { dependencies: [active], scope: listRef, revertOnUpdate: true }
    );

    return (
        <section id="projects" className="relative py-28 md:py-40">
            <div className="container-x">
                {/* Header */}
                <div className="grid gap-8 md:grid-cols-12 md:items-end">
                    <div className="md:col-span-8">
                        <div data-anim="fade">
                            <Eyebrow>Selected work</Eyebrow>
                        </div>
                        <h2
                            data-anim="chars"
                            className="mt-6 font-display text-[clamp(3.5rem,11vw,11rem)] font-semibold leading-[0.85] tracking-[-0.05em]"
                        >
                            Projects
                        </h2>
                    </div>
                    <p data-anim="fade" data-delay="0.15" className="max-w-xs text-muted md:col-span-4 md:justify-self-end">
                        Open a folder to explore. Real-world builds — designed, engineered and shipped to production.
                    </p>
                </div>

                {/* Folders */}
                <div
                    data-anim="stagger"
                    className="grid grid-cols-2 justify-items-center gap-x-6 gap-y-16 pb-16 pt-24 sm:grid-cols-3 md:pb-24 md:pt-32 lg:grid-cols-6"
                >
                    {portfolioData.projectCategories.map((category) => {
                        const items = portfolioData.projects.filter((p) => p.category === category);
                        const isActive = active === category;
                        return (
                            <div
                                key={category}
                                data-folder={category}
                                className={cn("relative flex flex-col items-center", isActive ? "z-20" : "z-0 hover:z-30")}
                            >
                                <div className="flex h-[130px] items-end justify-center">
                                    <Folder
                                        size={1.3}
                                        label={`${category} folder`}
                                        open={isActive}
                                        emptied={isActive}
                                        onClick={() => openCategory(category)}
                                        items={items.slice(0, 3).map((p) => ({ id: p.slug, image: p.image, alt: p.title }))}
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={() => openCategory(category)}
                                    className="group/label mt-7 flex flex-col items-center gap-1.5"
                                >
                                    <span
                                        className={cn(
                                            "text-sm font-medium tracking-wide transition-colors duration-300",
                                            isActive ? "text-lime" : "text-fg group-hover/label:text-lime/80"
                                        )}
                                    >
                                        {category}
                                    </span>
                                    <span className="font-mono text-[11px] tracking-widest text-muted">
                                        {String(items.length).padStart(2, "0")} {items.length === 1 ? "project" : "projects"}
                                    </span>
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Showcase for the open folder (animated manually, not by the page scanner) */}
                <div ref={listRef} data-anim-manual className="scroll-mt-24">
                    {active && (
                        <div key={active}>
                            <div className="flex items-baseline gap-4 pb-6">
                                <h3
                                    data-anim="lines"
                                    className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-semibold tracking-[-0.035em]"
                                >
                                    {active}
                                </h3>
                                <span className="font-mono text-sm text-lime">({String(activeProjects.length).padStart(2, "0")})</span>
                            </div>

                            {activeProjects.map((project, i) => (
                                <ProjectRow key={project.slug} project={project} index={i} total={activeProjects.length} />
                            ))}
                            <span data-anim="line" className="block h-px bg-line" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
