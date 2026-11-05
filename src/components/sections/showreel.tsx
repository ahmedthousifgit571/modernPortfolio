"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { portfolioData } from "@/lib/data";
import { Eyebrow } from "@/components/ui/primitives";

// Centre tile first — it ends up filling the screen.
const tiles = [
    { slug: "senseimage-drone", box: "w-[25vw] h-[25vh]", scale: 4, sizes: "100vw" },
    { slug: "mgm-hospital", box: "w-[35vw] h-[30vh] -top-[30vh] left-[5vw]", scale: 5, sizes: "60vw" },
    { slug: "architecture-firm", box: "w-[20vw] h-[45vh] -top-[10vh] -left-[25vw]", scale: 6, sizes: "45vw" },
    { slug: "thrill-mill", box: "w-[25vw] h-[25vh] left-[27.5vw]", scale: 5, sizes: "45vw" },
    { slug: "faizura-trading", box: "w-[20vw] h-[25vh] top-[27.5vh] left-[5vw]", scale: 6, sizes: "40vw" },
    { slug: "bemap-travel", box: "w-[30vw] h-[25vh] top-[27.5vh] -left-[22.5vw]", scale: 8, sizes: "50vw" },
    { slug: "golden-bricks", box: "w-[15vw] h-[15vh] top-[22.5vh] left-[25vw]", scale: 9, sizes: "35vw" },
];

export function Showreel() {
    const root = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            if (prefersReducedMotion()) return;
            const q = gsap.utils.selector(root);

            const tl = gsap.timeline({
                defaults: { ease: "none" },
                scrollTrigger: {
                    trigger: q(".reel-stage")[0],
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                },
            });

            q<HTMLElement>(".reel-tile").forEach((tile, i) => {
                tl.to(tile, { scale: tiles[i].scale }, 0);
            });
            tl.to(q(".reel-veil"), { opacity: 0.45 }, 0.55).fromTo(
                q(".reel-caption"),
                { autoAlpha: 0, y: 28 },
                { autoAlpha: 1, y: 0 },
                0.7
            );
        },
        { scope: root }
    );

    return (
        <section ref={root} aria-label="Work showreel" className="relative">
            <div className="container-x pb-16 pt-10 text-center md:pb-24">
                <div data-anim="fade" className="flex justify-center">
                    <Eyebrow>Portfolio</Eyebrow>
                </div>
                <h2
                    data-anim="chars"
                    className="mx-auto mt-6 max-w-[14ch] font-display text-[clamp(3rem,9vw,9rem)] font-semibold leading-[0.9] tracking-[-0.045em]"
                >
                    Work I&apos;ve <em className="font-serif font-normal text-lime">shipped</em>
                </h2>
                <p data-anim="fade" data-delay="0.2" className="mx-auto mt-6 max-w-sm text-muted">
                    {portfolioData.projects.length} projects across websites, CRMs, billing software, mobile apps and AI agents.
                </p>
            </div>

            {/* 300vh of scroll drives the zoom while the stage stays pinned (CSS sticky) */}
            <div className="reel-stage relative h-[300vh]">
                <div className="sticky top-0 h-dvh overflow-hidden">
                    {tiles.map((t) => {
                        const project = portfolioData.projects.find((p) => p.slug === t.slug)!;
                        return (
                            <div
                                key={t.slug}
                                className="reel-tile absolute inset-0 flex items-center justify-center will-change-transform"
                            >
                                <div className={`relative overflow-hidden rounded-[0.35rem] ${t.box}`}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes={t.sizes}
                                        placeholder="blur"
                                        className="object-cover object-top"
                                    />
                                </div>
                            </div>
                        );
                    })}
                    <div className="reel-veil pointer-events-none absolute inset-0 bg-black opacity-0" />
                    <div className="reel-caption invisible absolute inset-x-0 bottom-[12vh] text-center">
                        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-lime">Latest launch</p>
                        <p className="mt-3 font-display text-[clamp(2rem,5vw,4.5rem)] font-semibold tracking-[-0.03em]">
                            SenseImage — Drone Tech
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
