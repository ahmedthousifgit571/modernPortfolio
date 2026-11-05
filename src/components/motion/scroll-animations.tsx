"use client";

import { gsap, ScrollTrigger, SplitText, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { getLenis } from "@/components/providers/smooth-scroll";

/**
 * Declarative scroll animations. Mark up any element with `data-anim` and
 * this wires the matching GSAP effect — so sections can stay server
 * components and ship zero animation code of their own.
 *
 *   data-anim="lines"        split into lines, slide each up from a mask
 *   data-anim="chars"        split into characters, slide up from line masks
 *   data-anim="words-scrub"  words brighten as you scroll through
 *   data-anim="fade"         fade + rise
 *   data-anim="stagger"      direct children fade + rise in sequence
 *   data-anim="clip"         image wipe-in; [data-anim-inner] settles from zoom
 *   data-anim="parallax"     drifts on scroll (data-speed, default 0.12)
 *   data-anim="line"         hairline draws left → right
 *   data-anim="count"        counts up to data-to
 *
 *   data-delay="0.2"         optional start delay (seconds)
 *
 * Must be called inside a gsap.context / useGSAP so everything reverts on unmount.
 */
export function initScrollAnimations(scope: ParentNode, opts: { skipManual?: boolean } = {}) {
    const all = Array.from(scope.querySelectorAll<HTMLElement>("[data-anim]")).filter(
        (el) => !opts.skipManual || !el.closest("[data-anim-manual]")
    );
    const reduce = prefersReducedMotion();

    for (const el of all) {
        const type = el.dataset.anim;
        const delay = parseFloat(el.dataset.delay ?? "0") || 0;
        el.style.visibility = "visible";
        if (reduce || !type || type === "none") continue;

        const once = { trigger: el, start: "top 88%", once: true } as const;

        switch (type) {
            case "lines":
                SplitText.create(el, {
                    type: "lines",
                    mask: "lines",
                    linesClass: "split-line",
                    autoSplit: true,
                    onSplit: (self) =>
                        gsap.from(self.lines, {
                            yPercent: 115,
                            duration: 1.3,
                            stagger: 0.09,
                            delay,
                            scrollTrigger: once,
                        }),
                });
                break;

            case "chars":
                SplitText.create(el, {
                    type: "lines,chars",
                    mask: "lines",
                    linesClass: "split-line",
                    autoSplit: true,
                    onSplit: (self) =>
                        gsap.from(self.chars, {
                            yPercent: 120,
                            rotate: 6,
                            duration: 1.2,
                            stagger: 0.022,
                            delay,
                            scrollTrigger: once,
                        }),
                });
                break;

            case "words-scrub":
                SplitText.create(el, {
                    type: "words",
                    wordsClass: "split-word",
                    autoSplit: true,
                    onSplit: () => {
                        // words + any inline image pills, in reading order
                        const targets = el.querySelectorAll<HTMLElement>(".split-word, [data-pill]");
                        return gsap.fromTo(
                            targets,
                            { opacity: 0.14 },
                            {
                                opacity: 1,
                                ease: "none",
                                stagger: 0.1,
                                scrollTrigger: { trigger: el, start: "top 82%", end: "bottom 50%", scrub: true },
                            }
                        );
                    },
                });
                break;

            case "fade":
                gsap.from(el, { y: 48, autoAlpha: 0, duration: 1.3, delay, scrollTrigger: once });
                break;

            case "stagger":
                gsap.from(el.children, {
                    y: 40,
                    autoAlpha: 0,
                    duration: 1.1,
                    stagger: 0.07,
                    delay,
                    scrollTrigger: once,
                });
                break;

            case "clip": {
                const inner = el.querySelector<HTMLElement>("[data-anim-inner]");
                const tl = gsap.timeline({ delay, scrollTrigger: once });
                tl.fromTo(
                    el,
                    { clipPath: "inset(100% 0% 0% 0%)" },
                    { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut" }
                );
                if (inner) tl.from(inner, { scale: 1.35, duration: 2, ease: "expo.out" }, 0.15);
                break;
            }

            case "parallax": {
                const speed = parseFloat(el.dataset.speed ?? "0.12");
                gsap.fromTo(
                    el,
                    { yPercent: -speed * 100 },
                    {
                        yPercent: speed * 100,
                        ease: "none",
                        scrollTrigger: {
                            trigger: el.parentElement ?? el,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        },
                    }
                );
                break;
            }

            case "line":
                gsap.from(el, {
                    scaleX: 0,
                    transformOrigin: "left center",
                    duration: 1.6,
                    ease: "expo.inOut",
                    delay,
                    scrollTrigger: { trigger: el, start: "top 95%", once: true },
                });
                break;

            case "count": {
                const to = parseFloat(el.dataset.to ?? "0");
                const counter = { v: 0 };
                el.textContent = "0";
                gsap.to(counter, {
                    v: to,
                    duration: 2.2,
                    ease: "power3.out",
                    delay,
                    scrollTrigger: once,
                    onUpdate: () => {
                        el.textContent = String(Math.round(counter.v));
                    },
                });
                break;
            }
        }
    }
}

/** Mount once per page (last in the tree) to activate every `data-anim` on it. */
export function ScrollAnimations() {
    useGSAP(() => {
        initScrollAnimations(document, { skipManual: true });

        // Pins and splits change the page height — measure, then honour any #hash
        ScrollTrigger.refresh();
        const hash = window.location.hash;
        if (hash.length > 1) {
            const target = document.querySelector<HTMLElement>(hash);
            if (target) {
                const lenis = getLenis();
                if (lenis) lenis.scrollTo(target, { immediate: true, force: true, offset: -24 });
                else target.scrollIntoView();
            }
        }
    });

    return null;
}
