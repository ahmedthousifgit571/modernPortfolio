"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { gsap, SplitText, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { scrollToTarget } from "@/components/providers/smooth-scroll";
import { Magnetic } from "@/components/ui/magnetic";
import { portfolioData } from "@/lib/data";

const nav = [
    { label: "About", href: "/#about" },
    { label: "Work", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
];

const socials = [
    { label: "LinkedIn", href: portfolioData.linkedin },
    { label: "GitHub", href: portfolioData.github },
    { label: "Email", href: `mailto:${portfolioData.email}` },
];

export function Footer() {
    const root = useRef<HTMLElement>(null);
    const pathname = usePathname();

    // Giant wordmark rises letter-by-letter as the footer scrolls into view
    useGSAP(
        () => {
            if (prefersReducedMotion()) return;
            const split = SplitText.create(".footer-mark", { type: "chars" });
            gsap.from(split.chars, {
                yPercent: 105,
                ease: "none",
                stagger: 0.04,
                scrollTrigger: { trigger: root.current, start: "top 85%", end: "bottom bottom", scrub: 0.6 },
            });
        },
        { scope: root }
    );

    return (
        <footer ref={root} className="relative overflow-hidden border-t border-line pt-20">
            <div className="container-x">
                <div className="grid gap-12 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <p className="max-w-sm font-display text-3xl font-semibold leading-tight tracking-[-0.02em]">
                            Have an idea? Let&apos;s make it <em className="font-serif font-normal text-lime">real</em>.
                        </p>
                        <a
                            href={`mailto:${portfolioData.email}`}
                            className="mt-5 inline-block text-muted underline decoration-white/20 underline-offset-4 transition-colors hover:text-lime hover:decoration-lime"
                        >
                            {portfolioData.email}
                        </a>
                    </div>

                    <nav aria-label="Footer" className="md:col-span-2 md:col-start-7">
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Menu</p>
                        <ul className="mt-5 space-y-2">
                            {nav.map((l) => (
                                <li key={l.label}>
                                    <Link
                                        href={l.href}
                                        onClick={(e) => {
                                            if (pathname !== "/") return; // cross-page: let Next navigate
                                            e.preventDefault();
                                            scrollToTarget(l.href.slice(1), -24);
                                        }}
                                        className="text-fg/80 transition-colors hover:text-lime"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="md:col-span-2">
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Social</p>
                        <ul className="mt-5 space-y-2">
                            {socials.map((s) => (
                                <li key={s.label}>
                                    <a
                                        href={s.href}
                                        target={s.href.startsWith("http") ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        className="text-fg/80 transition-colors hover:text-lime"
                                    >
                                        {s.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex md:col-span-2 md:justify-end">
                        <Magnetic>
                            <button
                                type="button"
                                onClick={() => scrollToTarget(0)}
                                aria-label="Back to top"
                                className="group flex h-16 w-16 items-center justify-center rounded-full border border-white/15 transition-colors duration-500 hover:border-lime hover:bg-lime hover:text-black"
                            >
                                <ArrowUp className="h-5 w-5 transition-transform duration-500 ease-out-expo group-hover:-translate-y-1" strokeWidth={1.5} />
                            </button>
                        </Magnetic>
                    </div>
                </div>
            </div>

            {/* Wordmark */}
            <div className="mt-20 overflow-hidden md:mt-28" aria-hidden="true">
                <p className="footer-mark select-none whitespace-nowrap text-center font-display text-[12.4vw] font-bold uppercase leading-[0.78] tracking-[-0.05em] text-fg">
                    Ahmed Thousif
                </p>
            </div>

            <div className="container-x flex flex-col justify-between gap-3 border-t border-line py-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:flex-row">
                <p>© {new Date().getFullYear()} {portfolioData.name}</p>
                <p>Built with Next.js · GSAP · Lenis</p>
                <p>{portfolioData.location}</p>
            </div>
        </footer>
    );
}
