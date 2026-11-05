"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Globe } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { FloatingLines } from "@/components/ui/floating-paths";
import { portfolioData } from "@/lib/data";
import portrait from "@/assets/profile.webp";

const iconBtn =
    "flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 bg-gray-800 transition-colors hover:bg-gray-700 sm:h-11 sm:w-11";

/**
 * The original iPhone-mockup hero. Entrance fades are CSS (start on first
 * paint, no hydration wait); the details sheet slides up with GSAP once
 * you scroll past 100px and stays revealed.
 */
export function Hero() {
    const root = useRef<HTMLElement>(null);
    const [first, last] = portfolioData.name.split(" ");

    useGSAP(
        () => {
            const q = gsap.utils.selector(root);
            const sheet = q(".hero-sheet")[0];

            if (prefersReducedMotion()) {
                gsap.set(sheet, { autoAlpha: 1, yPercent: 0 });
                return;
            }

            gsap.set(sheet, { autoAlpha: 0, yPercent: 100 });
            ScrollTrigger.create({
                start: 100,
                end: "max",
                once: true,
                onEnter: () => gsap.to(sheet, { autoAlpha: 1, yPercent: 0, duration: 0.9, ease: "expo.out" }),
            });
        },
        { scope: root }
    );

    return (
        <section id="home" ref={root} className="relative">
            <div className="relative flex min-h-screen flex-col items-center pb-16 pt-28 sm:pt-32">
                {/* Flowing lines behind the phone */}
                <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                    <FloatingLines />
                </div>

                {/* Phone */}
                <div className="hero-phone relative z-10 w-full max-w-[340px] px-4 sm:max-w-[420px] md:max-w-[480px] lg:max-w-[520px]">
                    <div className="relative">
                        {/* Side buttons */}
                        <div className="absolute -left-[3px] top-[80px] h-[25px] w-[3px] rounded-l-sm bg-gray-700 sm:top-[100px] sm:h-[30px]" />
                        <div className="absolute -left-[3px] top-[115px] h-[45px] w-[3px] rounded-l-sm bg-gray-700 sm:top-[140px] sm:h-[55px]" />
                        <div className="absolute -left-[3px] top-[168px] h-[45px] w-[3px] rounded-l-sm bg-gray-700 sm:top-[205px] sm:h-[55px]" />
                        <div className="absolute -right-[3px] top-[130px] h-[60px] w-[3px] rounded-r-sm bg-gray-700 sm:top-[160px] sm:h-[75px]" />

                        {/* Frame */}
                        <div className="relative w-full rounded-[45px] border-[3px] border-gray-700 bg-linear-to-b from-gray-800 via-gray-900 to-gray-800 p-[10px] shadow-2xl shadow-black/70 sm:rounded-[50px] sm:p-[12px] md:rounded-[55px]">
                            {/* Dynamic Island */}
                            <div className="absolute left-1/2 top-6 z-30 h-7 w-28 -translate-x-1/2 rounded-full bg-black sm:top-7 sm:h-8 sm:w-32" />

                            {/* Screen */}
                            <div className="relative w-full overflow-hidden rounded-[35px] bg-black sm:rounded-[40px] md:rounded-[45px]">
                                <div className="relative min-h-[580px] sm:min-h-[650px] md:min-h-[720px]">
                                    {/* Photo */}
                                    <div className="hero-photo absolute inset-0">
                                        <Image
                                            src={portrait}
                                            alt={portfolioData.name}
                                            fill
                                            priority
                                            placeholder="blur"
                                            sizes="(min-width: 1024px) 500px, (min-width: 640px) 400px, 320px"
                                            className="object-cover object-[center_15%]"
                                        />
                                    </div>

                                    {/* Hello + name */}
                                    <div className="relative z-20 px-6 pt-16 sm:px-8 sm:pt-18">
                                        <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-linear-to-b from-black via-black/80 to-transparent" />
                                        <div className="hero-rise mb-4 flex items-center gap-2" style={{ "--d": "0.3s" } as React.CSSProperties}>
                                            <span className="text-xl sm:text-2xl">👋</span>
                                            <span className="text-sm font-medium text-white sm:text-base">Hello</span>
                                        </div>
                                        <h1
                                            className="hero-rise text-left font-[family-name:var(--font-poppins)] text-5xl font-semibold text-white sm:text-6xl md:text-7xl"
                                            style={{ "--d": "0.4s" } as React.CSSProperties}
                                        >
                                            {first}
                                        </h1>
                                        <p
                                            className="hero-rise -ml-6 text-center font-[family-name:var(--font-poppins)] text-5xl font-light text-white/90 sm:-ml-8 sm:text-6xl md:text-7xl"
                                            style={{ "--d": "0.45s" } as React.CSSProperties}
                                        >
                                            {last}
                                        </p>
                                    </div>

                                    {/* Details sheet — slides up after you scroll */}
                                    <div className="hero-sheet absolute inset-x-0 bottom-0 z-30 max-h-[55%] overflow-hidden">
                                        <div className="h-full bg-black/95 backdrop-blur-sm">
                                            <div className="mx-auto mb-4 mt-4 h-1 w-24 rounded-full bg-white/50 sm:w-28" />
                                            <div className="px-6 pb-8 sm:px-8">
                                                <div className="mb-5 flex w-full items-center justify-between">
                                                    <p className="text-sm text-white/70 sm:text-base">
                                                        I&apos;m a <span className="font-medium text-white">Full Stack Developer</span>
                                                    </p>
                                                    <div className="flex gap-2 sm:gap-3">
                                                        <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconBtn}>
                                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" /></svg>
                                                        </a>
                                                        <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconBtn}>
                                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                                        </a>
                                                        <a href={`mailto:${portfolioData.email}`} aria-label="Email" className={iconBtn}>
                                                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="mb-4 text-lg font-medium leading-snug text-white sm:text-xl">
                                                    <p>
                                                        I don&apos;t just write <span className="text-lime">code.</span>
                                                    </p>
                                                    <p>
                                                        I craft <span className="text-lime">experiences,</span> optimize systems,
                                                    </p>
                                                    <p>
                                                        and ship things that <span className="text-lime">matter.</span>
                                                    </p>
                                                </div>

                                                <div className="mb-4 flex items-center gap-2">
                                                    <span className="tracking-tight text-lime" aria-hidden="true">
                                                        ★★★★★
                                                    </span>
                                                    <span className="text-sm text-white/70">50+ customers</span>
                                                </div>

                                                <div className="mb-4 flex gap-3">
                                                    <a
                                                        href="#projects"
                                                        className="inline-flex h-9 shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-lime px-4 text-sm font-medium text-black transition-colors duration-300 hover:bg-lime/90 sm:px-5"
                                                    >
                                                        Get Started
                                                        <ArrowUpRight className="h-4 w-4" />
                                                    </a>
                                                    <a
                                                        href="#projects"
                                                        className="inline-flex h-9 shrink-0 items-center whitespace-nowrap rounded-full border border-gray-500 px-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-gray-800 sm:px-5"
                                                    >
                                                        My Works
                                                    </a>
                                                </div>

                                                <div className="flex w-full items-center justify-between">
                                                    <div className="flex items-center gap-2 text-xs text-white/60">
                                                        <Globe className="h-3.5 w-3.5" />
                                                        <span>
                                                            Available <span className="font-medium text-white">Worldwide</span>
                                                        </span>
                                                    </div>
                                                    <a href="#contact" className="flex items-center gap-1 text-xs text-white/60 transition-colors hover:text-white">
                                                        Contact me
                                                        <ArrowUpRight className="h-3 w-3" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
