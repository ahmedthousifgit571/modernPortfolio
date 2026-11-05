"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { getLenis, scrollToTarget } from "@/components/providers/smooth-scroll";
import { portfolioData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const links = [
    { id: "about", label: "About" },
    { id: "projects", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
];

export function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const indicatorRef = useRef<HTMLSpanElement>(null);
    const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
    const menuRef = useRef<HTMLDivElement>(null);
    const menuTl = useRef<gsap.core.Timeline | null>(null);
    const [active, setActive] = useState<string | null>(null);
    const [open, setOpen] = useState(false);

    // Intro, hide-on-scroll, active-section tracking
    useGSAP(() => {
        const nav = navRef.current!;
        if (!prefersReducedMotion()) {
            gsap.from(nav, { yPercent: -160, duration: 1.4, delay: 0.9, ease: "expo.out" });
        }

        let hidden = false;
        ScrollTrigger.create({
            start: 0,
            end: "max",
            onUpdate: (self) => {
                const shouldHide = self.direction === 1 && self.scroll() > 400;
                if (shouldHide !== hidden) {
                    hidden = shouldHide;
                    gsap.to(nav, { yPercent: hidden ? -160 : 0, duration: 0.8, ease: "expo.out", overwrite: "auto" });
                }
            },
        });

        for (const { id } of [...links, { id: "home" }, { id: "contact" }]) {
            const section = document.getElementById(id);
            if (!section) continue;
            ScrollTrigger.create({
                trigger: section,
                start: "top 45%",
                end: "bottom 45%",
                onToggle: (self) => self.isActive && setActive(id),
            });
        }
    });

    // Slide the white pill under the active link
    useEffect(() => {
        const ind = indicatorRef.current;
        const link = active ? linkRefs.current[active] : null;
        if (!ind) return;
        if (!link) {
            gsap.to(ind, { autoAlpha: 0, duration: 0.3 });
            return;
        }
        gsap.to(ind, {
            x: link.offsetLeft,
            width: link.offsetWidth,
            autoAlpha: 1,
            duration: 0.7,
            ease: "expo.out",
        });
    }, [active]);

    // Mobile menu timeline
    useGSAP(() => {
        const menu = menuRef.current!;
        menuTl.current = gsap
            .timeline({ paused: true })
            .set(menu, { visibility: "visible" })
            .fromTo(menu, { clipPath: "circle(0% at 92% 4%)" }, { clipPath: "circle(150% at 92% 4%)", duration: 1, ease: "expo.inOut" })
            .from(menu.querySelectorAll("[data-menu-item]"), { yPercent: 110, duration: 0.9, stagger: 0.06, ease: "expo.out" }, 0.35)
            .from(menu.querySelectorAll("[data-menu-fade]"), { autoAlpha: 0, y: 16, duration: 0.6, stagger: 0.05 }, 0.6);
    });

    useEffect(() => {
        const tl = menuTl.current;
        if (!tl) return;
        if (open) {
            getLenis()?.stop();
            tl.timeScale(1).play();
        } else {
            getLenis()?.start();
            tl.timeScale(1.6).reverse();
        }
    }, [open]);

    const go = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        setOpen(false);
        // let the menu start closing before we travel
        setTimeout(() => scrollToTarget(`#${id}`, id === "home" ? 0 : -24), open ? 250 : 0);
    };

    return (
        <>
            <header
                ref={navRef}
                className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-6"
            >
                <nav className="flex w-full max-w-max items-center gap-1 rounded-full border border-white/10 bg-black/55 p-1.5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                    <a
                        href="#home"
                        onClick={(e) => go(e, "home")}
                        className="px-3.5 font-display text-lg font-bold tracking-tight text-lime"
                    >
                        .Ahmed
                    </a>

                    <div className="relative hidden items-center md:flex">
                        <span
                            ref={indicatorRef}
                            aria-hidden="true"
                            className="invisible absolute left-0 top-0 h-full w-0 rounded-full bg-fg"
                        />
                        {links.map((l) => (
                            <a
                                key={l.id}
                                ref={(el) => {
                                    linkRefs.current[l.id] = el;
                                }}
                                href={`#${l.id}`}
                                onClick={(e) => go(e, l.id)}
                                className={cn(
                                    "relative z-10 rounded-full px-4 py-2 text-sm transition-colors duration-300",
                                    active === l.id ? "text-black" : "text-fg/70 hover:text-fg"
                                )}
                            >
                                {l.label}
                            </a>
                        ))}
                    </div>

                    <a
                        href="#contact"
                        onClick={(e) => go(e, "contact")}
                        className="group/c ml-1 hidden items-center gap-1.5 rounded-full bg-lime px-4 py-2 text-sm font-medium text-black transition-transform duration-500 ease-out-expo active:scale-95 md:inline-flex"
                    >
                        Contact
                        <ArrowUpRight
                            className="h-3.5 w-3.5 transition-transform duration-500 ease-out-expo group-hover/c:-translate-y-0.5 group-hover/c:translate-x-0.5"
                            strokeWidth={2}
                        />
                    </a>

                    {/* Hamburger → X */}
                    <button
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        className="relative ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] md:hidden"
                    >
                        <span
                            className={cn(
                                "absolute h-[1.5px] w-4 bg-fg transition-transform duration-500 ease-out-expo",
                                open ? "rotate-45" : "-translate-y-[4px]"
                            )}
                        />
                        <span
                            className={cn(
                                "absolute h-[1.5px] w-4 bg-fg transition-transform duration-500 ease-out-expo",
                                open ? "-rotate-45" : "translate-y-[4px]"
                            )}
                        />
                    </button>
                </nav>
            </header>

            {/* Mobile full-screen menu */}
            <div
                ref={menuRef}
                className="invisible fixed inset-0 z-[45] flex flex-col justify-between bg-[#0a0a0a]/95 px-6 pb-10 pt-32 backdrop-blur-2xl md:hidden"
                aria-hidden={!open}
            >
                <ul className="space-y-1">
                    {[{ id: "home", label: "Home" }, ...links, { id: "contact", label: "Contact" }].map((l, i) => (
                        <li key={l.id} className="overflow-hidden">
                            <a
                                data-menu-item
                                href={`#${l.id}`}
                                onClick={(e) => go(e, l.id)}
                                tabIndex={open ? 0 : -1}
                                className="flex items-baseline gap-4 font-display text-[13vw] font-semibold leading-[1.05] tracking-tight"
                            >
                                <span className="font-mono text-xs text-lime">0{i + 1}</span>
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="space-y-2 text-sm text-muted">
                    <a data-menu-fade href={`mailto:${portfolioData.email}`} className="block text-fg" tabIndex={open ? 0 : -1}>
                        {portfolioData.email}
                    </a>
                    <p data-menu-fade>{portfolioData.location} · Available worldwide</p>
                </div>
            </div>
        </>
    );
}
